import 'reflect-metadata';

class Calculator {
    // @decorator
    @MeasureTime()
    sum(a: number, b: number): number {
        return a + b;
    }
}

// const decorator = (target: object, property: string, desriptor: PropertyDescriptor) => void

// function MeasureTime<T = unknown>(): MethodDecorator {
// function MeasureTime<T extends (...args: any[]) => any>() {
//     return (
//         target: Object,
//         propertyKey: string,
//         descriptor: TypedPropertyDescriptor<T>
//     ): TypedPropertyDescriptor<T> | void => {
//         const originalMethod = descriptor.value;

//         descriptor.value = function(...args: Parameters<T>): ReturnType<T> {
//             console.time(propertyKey);

//             const result = originalMethod?.apply(this, args)

//             console.timeEnd(propertyKey);

//             return result;
//         };
//     }
// }
function MeasureTime() {
    return (
        target: Object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ): void => {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: unknown[]): unknown {
            console.time(propertyKey);

            const result = originalMethod?.apply(this, args)

            console.timeEnd(propertyKey);

            return result;
        };
    }
}

// ------------------------------------------------------------------------

type ServiceMetadata = {
    isSingleton: boolean;
};

type Construnctor = new (...args: any) => any;

@Service({
    isSingleton: true
})
class UserService {}

// function Service(metadata: ServiceMetadata): ClassDecorator {
function Service(metadata: ServiceMetadata) {
    return (ctor: Construnctor) => {
        Reflect.defineMetadata('service', metadata, ctor);
    }
}

const instanceStorage = new Map();

function isServiceMetadata(entity: unknown): entity is ServiceMetadata {
    const serviceMetadata = entity as ServiceMetadata;

    return !!serviceMetadata && typeof serviceMetadata.isSingleton === 'boolean';
}

function getInstance<ServiceConstructor extends Construnctor>(
    Service: ServiceConstructor,
): ServiceConstructor {
    const metadata: unknown = Reflect.getMetadata('service', Service);

    if (!isServiceMetadata(metadata)) {
        return new Service();
    }

    if (!metadata.isSingleton) {
        return new Service();
    }

    if (!instanceStorage.get(Service)) {
        instanceStorage.set(Service, new Service());
    }

    return instanceStorage.get(Service);
}

getInstance(UserService);
getInstance(UserService);
getInstance(UserService);
getInstance(UserService);
getInstance(UserService);
getInstance(UserService);
getInstance(UserService);
