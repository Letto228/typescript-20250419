// enum Size {
//     s = 0,
//     m = 5,
//     l,
// }

// enum Size {
//     s = 'small',
//     m = 'medium',
//     l = 'long',
// }

// const enum Size {
//     s = 'small',
//     m = 'medium',
//     l = 'long',
// }

// const test: Size = Size.l;

// Object.values(Size);

// function getButtonSize(size: Size) {

// }

// getButtonSize(Size.l);
// getButtonSize('long');

// ------------------------------------------------------------

// type Size = 's' | 'm' | 'l';

const sizeMap = {
    s: 'small',
    m: 'medium',
    l: 'long',
} as const;

type Size = typeof sizeMap[keyof (typeof sizeMap)];

const test: Size = sizeMap.l;

Object.values(sizeMap);

function getButtonSize(size: Size) {

}

getButtonSize(sizeMap.l);
getButtonSize('long');
