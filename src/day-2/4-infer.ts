// type User = {a: number, b: string, c: number, d: boolean};

// const testUser = {
//     a: 123,
//     b: 'str',
//     c: 45,
//     d: true,
// } as const satisfies User;
// const testUser: User = {
//     a: 123,
//     b: 'str',
//     c: 45,
//     d: true,
// };

// const user = testUser;

// let test = '';

// test = 123;

// function calculate(a: number) {
//     if (a > 0) {
//         return;
//     }

//     if (a === 3) {
//         return true;
//     }

//     if (a === 4) {
//         return false;
//     }

//     return a;
// }

// function getProperty<Entity extends object, Propery extends keyof Entity>(
//     entity: Entity,
//     property: Propery
// ): Entity[Propery] {
//     return entity[property];
// }

// const test = getProperty({title: 'Film', duration: 123}, 'duration');

// function call(callback: (...args: any[]) => any, ...args: any[]): any {
//     return callback(...args);
// }

// function call<Arguments extends unknown[], ReturnType>(
//     callback: (...args: Arguments) => ReturnType,
//     ...args: Arguments
// ): ReturnType {
//     return callback(...args);
// }

// const callback = (a: boolean, b: string, c: number): {a: number, b: string, c: {d: boolean}} => {
//     return {
//         a: c,
//         b,
//         c: {d: a}
//     };
// };

// // call(callback, 123, true, 'sdf');
// const test = call(callback, true, 'sdf', 123);

// type MyReturnType<Func extends (...args: any[]) => unknown> = 
//     Func extends (...args: any[]) => infer Result ? Result : never

// type MyArguments<Func extends (...args: any[]) => unknown> = 
//     Func extends (...args: infer Arguments) => unknown ? Arguments : never

// type MyReturnType<Func extends (...args: any[]) => unknown> = ReturnType<Func>

// type MyArguments<Func extends (...args: any[]) => unknown> = Parameters<Func>

// type CallbackSignature = typeof callback;
// type TestReturnType = MyReturnType<CallbackSignature>;
// type TestArguments = MyArguments<CallbackSignature>;

// type PromiseValue<Prom extends Promise<unknown>> =
//     Prom extends Promise<infer PromiseValue> ? PromiseValue : never

// const promise = new Promise<boolean>(resolve => {
//     resolve(true);
// });

// type TestPromise = PromiseValue<typeof promise>
