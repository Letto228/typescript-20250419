// type MyString = string;
// type Size = 's' | 'm' | 'l';

// type Film = {
//     title: string;
//     director: string;

//     // Актуально для всех
//     awards?: string[];

//     // Актуален для фильмов
//     duration?: number;

//     // Актуален для сериалов
//     seasonCount?: number;
// }

// type Movie = {
//     title: string;
//     director: string;

//     // Актуально для всех
//     awards?: string[];
// }

// type Film = Movie & {
//     // Актуален для фильмов
//     duration: number;
// }

// type TvSeries = Movie & {
//     // Актуален для сериалов
//     seasonCount: number;
// }

// const film: Film = {title: '1', duration: 2, director: 'Me'};
// const newFilm: Film = {title: '2', duration: 3, director: 'Me'};

