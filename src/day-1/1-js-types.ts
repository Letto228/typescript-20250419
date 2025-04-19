// Synt...

// let variable: type = ...;
// let variable: type;

// -------------------------------Boolean -------------------------------

// let isTrue: boolean = true;

// let isTrue: boolean;

// isTrue = true;
// isTrue = false;

// isTrue = '';
// isTrue = Boolean(1);
// isTrue = !!1;
// isTrue = !!"";

// -------------------------------number-------------------------------

// let num: number = 1;

// num = 0;
// num = 12312312312;
// num = Number.POSITIVE_INFINITY;
// num = Number.MIN_SAFE_INTEGER;

// let float = 12.56;

// let binary = 0b101;

// -------------------------------bigint-------------------------------

// let bigNumber: bigint = 100n;

// let bigNumber: number = 100n;
// let bigNumber: bigint = 100;

// -------------------------------string-------------------------------

// let str: string = '';

// str = '123';
// str = 123;

// -------------------------------null / undefined-------------------------------

// let nullVar: null = null;

// nullVar = undefined;
// nullVar = null;

// let undefinedVar: undefined = undefined;

// undefinedVar = null;

// -------------------------------Symbol-------------------------------

// let symbol: Symbol = Symbol('');

// -------------------------------object-------------------------------

// let objectVar: object = {};
// let objectVar: {readonly a: string, b?: number, c: {d: boolean}} = {
//     a: 'str',
//     b: 123,
//     c: {d: true}
// };

// objectVar.b = NaN;
// objectVar.a = 'rts';

// -------------------------------array-------------------------------

// let arrayVar: Array = [];
// let arrayVar: string[] = ['str', 'rts'];

// let arrayVar: (string[])[] = [['str', 'rts'], []];

// -------------------------------Кортежи-------------------------------

// let tuple: [string, number, {a: boolean}] = ['str', 123, {a: true}];

// -------------------------------Function-------------------------------

// function calculate(a: number, b: number): number {
//     return Number(a + b);
// }

// const calculate = (a: number, b: number): number => {
//     return a + b;
// }

// let numberVar: number;
// let calculate: (a: number, b: number) => number;

// let numberVar = 123;
// calculate = (a: number, b: string): number => {
//     return a + b;
// }

// calculate = function (a: number, b: number): number {
//     return a + b;
// }

// calculate(123, 321);

// function invoke(callback: (a: number, b: number) => number) {
//     callback(1, 2);
// }

// invoke(calculate);

// function invoke(this: {getData: () => object}, callback: (a: number, b: number) => number) {
//     callback(1, 2);
//     this.getData();
// }

// invoke.apply({getData: () => ({})}, [(a: number, b: number) => a + b]);

// function calculate(a: number, b?: number): number {
//     return Number(a + (b || 0));
// }

// function calculate(a: number, b: number = 0): number {
//     return Number(a + b);
// }

// calculate(123);

// ------------------------------------------------------------------

// let numberVar: number;

// function testUndefine(numberValue: number): number {
//     return numberValue;
// }

// numberVar = 123;

// testUndefine(numberVar);

// ------------------------------------------------------------------

// interface Movie {
//     title: string;
//     director: string;

//     // Актуально для всех
//     awards?: string[];

//     // name: string;
// }
