// type Movie = {
//     title: string;
//     director: string;

//     // Актуально для всех
//     awards?: string[];

//     // name: string;
// }

// type Film = Movie & {
//     // Актуален для фильмов
//     duration: number;

//     // name: number;
// }

// type TvSeries = Movie & {
//     // Актуален для сериалов
//     seasonCount: number;
// }

// type Movie = {
//     city: string;
// }

// const film: Film = {
//     title: '',
//     director: '',
//     duration: 213,
//     // name: '',
// }

// -------------------------------------------------------

// interface Movie {
//     title: string;
//     director: string;

//     // Актуально для всех
//     awards?: string[];

//     // name: string;
// }

// interface Film extends Movie {
//     // Актуален для фильмов
//     duration: number;
//     // name: number;
// }

// interface TvSeries extends Movie {
//     // Актуален для сериалов
//     seasonCount: number;
// }

// interface Movie {
//     city: string;
// }

// const film: Movie = {
//     title: '',
//     director: '',
//     city: '',
// }
