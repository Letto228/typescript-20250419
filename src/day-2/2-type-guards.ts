// ---------------------typeof---------------------

// function toUperCase(a: number | string | boolean): string {
//     if (typeof a === 'string') {
//         return a.toUpperCase();
//     }

//     return a.toString();
// }

// ---------------------Истинность---------------------

// type Movie = {
//     duration: number;
//     title: string;
// }

// function playMovie(movie?: Movie | null): number | undefined {
//     // if (movie) {
//     //     return movie.duration
//     // }

//     // if (!movie) {
//     //     return;
//     // }

//     // return movie.duration;

//     // return movie?.duration;

//     return movie ? movie.duration : undefined;
// }

// ---------------------in---------------------

// type Wolf = {
//     bark: () => void;
//     run: () => void;
// }

// type Dog = {
//     bark: () => void;
// }

// type Cat = {
//     meow: () => void;
// }

// function makeSomeNoise(pet: Dog | Cat | Wolf) {
//     if ('bark' in pet) {
//         pet.bark();
//     }

//     if ('meow' in pet) {
//         pet.meow();
//     }
// }

// ---------------------instanceof---------------------

// function log(date: Date | string) {
//     if (date instanceof Date) {
//         console.log(date.toUTCString());

//         return;
//     }

//     console.log(date);
// }

// ---------------------type predicate---------------------

// type Film = {
//     title: string;
//     duration: number;
// }

// type Responce = {
//     status: string;
//     result: unknown;
// }

// function isFilm(entity: unknown): entity is Film {
//     const film: Film = entity as Film;

//     return !!film && typeof film.title === 'string' && typeof film.duration === 'number';
// }

// function getFilm(): Film | null {
//     const responce: Responce = {
//         status: '',
//         result: {title: '', duration: 13},
//     }

//     const {result} = responce;

//     return isFilm(result) ? result : null;

//     // if (isFilm(result)) {
//     //     return result;
//     // }

//     // return null;
// }

// ---------------------const/satisfies---------------------

// const test = {
//     a: 123,
//     b: 'str',
//     c: 45,
//     d: true,
// } as const;

// const test: {a: number, b: string, c: number, d: boolean} = {
//     a: 123,
//     b: 'str',
//     c: 45,
//     d: true,
// } as const;

// const test = {
//     a: 123,
//     b: 'str',
//     c: 45,
//     d: true,
// } as const satisfies {a: number, b: string, c: number, d: boolean};
