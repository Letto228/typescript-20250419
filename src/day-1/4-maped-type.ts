// type Movie = {
//     readonly title: string;
//     director: string;

//     // Актуально для всех
//     awards?: string[];
// }

// type Keys = keyof Movie; // 'title' | 'director' | 'awards'
// type Values = Movie[keyof Movie];

// type MovieCopy = {
//     [Key in keyof Movie]: Movie[Key]
// };

// type MovieCopy = {
//     [Key in keyof Movie]: Movie[keyof Movie]
// };

// const Keys = Object.keys(Movie);

// const MovieCopy = Keys.reduce(
//    (MovieCopy, Key) => ({...MovieCopy, [Key]: Movie[Key]})
//    {}
// )

// type OptionalMovie = {
//     [Key in keyof Movie]?: Movie[Key]
// }

// type ReadonlyMovie = {
//     readonly [Key in keyof Movie]: Movie[Key]
// }

// type RequredMovie = {
//     [Key in keyof Movie]-?: Movie[Key]
// }

// type EditableMovie = {
//     -readonly [Key in keyof Movie]: Movie[Key]
// }

// type MovieSetters = {
//     -readonly [Key in keyof Movie as `set${Capitalize<Key>}`]-?: (value: Movie[Key]) => void;
// }

// type MovieGetters = {
//     -readonly [Key in keyof Movie as `get${Capitalize<Key>}`]-?: () => Movie[Key];
// }

// type CompleteMovie = Movie & MovieGetters & MovieSetters;

// class MovieClass implements CompleteMovie {
//     title: string = '';
//     director: string = '';
//     awards?: string[];

//     getTitle(): string {
//         return this.title;
//     };
//     getDirector: () => string;
//     getAwards: () => string[] | undefined;

//     setTitle(value: string): void {
//         this.title = value;
//     };
//     setDirector: (value: string) => void;
//     setAwards: (value: string[] | undefined) => void;
// }

// // ------------------------------------------------------------

// type Stages = 'paly' | 'pasue' | 'bufering' | 'end';

// type StageSwitchers = {
//     [Stage in Stages as `switchTo${Capitalize<Stage>}`]: () => Stage;
// }


// function createStageMachine(): {currentStage: Stages} & StageSwitchers {
//     return {
//         currentStage: 'bufering',
//         switchToBufering: () => ,
//         switchToEnd: () => ,
//         switchToPaly: () => ,
//         switchToPasue: () => ,
//     }
// }
