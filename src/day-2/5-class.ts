// class Movie {
//     protected awards?: string[];
//     // private title: string = '';
//     // public description: string = '';

//     // public description: string;
//     // private title: string;

//     // constructor(title: string, description: string) {
//     //     this.title = title;
//     //     this.description = description;
//     // }

//     constructor(private title: string, public readonly description: string) {}
// }

// class Film extends Movie {
//     public duration: number = 123;
// }

// const film: Film = new Film();

// film.duration

abstract class NodeGraph {
    x: number = 0;
    y: number = 0;

    abstract name: string;

    abstract paint(): void;

    calculate(): number {
        return 100;
    }
}

class StorageNode extends NodeGraph {
    name: string = 'StorageNode';

    paint(): void {
        throw new Error('')
    }
}

class FabricNode extends NodeGraph {
    name: string = 'FabricNode';

    paint(): void {
        throw new Error('')
    }
}

class CarNode extends NodeGraph {
    name: string = 'CarNode';

    paint(): void {
        throw new Error('')
    }
}

// (new FabricNode()).calculate();

function paintNodes(nodes: NodeGraph[]) {
    nodes.forEach(node => {
        node.paint();
    })
}

paintNodes([new StorageNode(), new FabricNode(), new CarNode()]);
