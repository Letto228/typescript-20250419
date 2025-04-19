// Any

// let anyVar: any = 123;

// anyVar = 'sstr';
// anyVar = null;
// anyVar = function() {};

// anyVar.a
// anyVar.get();

// let numberVar: number = anyVar;

// Unknow

// let unknownVar: unknown = {a: ''};

// unknownVar = 123;

// unknownVar = {b: 123};

// unknownVar.a;
// unknownVar.get();

// let numberVar: number = unknownVar;

// Never - пустое множество

// Литеральные типы

// let fontWeight: string = 'bold';
// let fontWeight: string = 'asdf';

// let fontWeight: 'bold' = 'bold';
// let fontWeight: 500 = 500;

// Union type

// let fontWeight: 500 | 600 | 700 | 'bold' = 500;

// let numberOrString: number | string = 123231;

// function getProperty(
//     obj: {a: string, d: string} | {b: boolean, d: string},
// ) {
//     obj.d
// }

// getProperty({a: 'str', d: 'str'});
// getProperty({b: true, d: 'str'});

// Intersection type

// let testVar: number & string;

// let testVar: (100 | 200 | 300 | 400) & (200 | 300 | 500 | 600);
// let testVar: SizeTypes & ScoreTypes;
// type SizeTypes = SizeSmall | SizeBig;

// let testVar: {a: string} & {b: string} = {
//     a: 'str',
//     b: 'srt',
// };

// let testObjVar: {a: string, c: boolean, b: number};
// let testObjVar: {a: string, b: number} & {b: string | number, c: boolean} = {
//     a: 'str',
//     c: true,
//     b: 123,
// };

