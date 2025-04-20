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

// type EntitySetters<Entity extends object> = {
//     -readonly [Key in keyof Entity as `set${Capitalize<Key & string>}`]-?: (value: Entity[Key]) => void;
// }

// type EntityGetters<Entity extends object> = {
//     -readonly [Key in keyof Entity as `get${Capitalize<Key & string>}`]-?: () => Entity[Key];
// }

// type CompleteEntity<Entity extends object> = Entity & EntityGetters<Entity> & EntitySetters<Entity>;

// type CompleteMovie = CompleteEntity<Movie>;

// type OptionalEntity<Entity extends object> = {
//     [Key in keyof Entity]?: Entity[Key]
// }

// type ReadonlyEntity<Entity extends object> = {
//     readonly [Key in keyof Entity]: Entity[Key]
// }

// type RequredEntity<Entity extends object> = {
//     [Key in keyof Entity]-?: Entity[Key]
// }

// type EditableEntity<Entity extends object> = {
//     -readonly [Key in keyof Entity]: Entity[Key]
// }

// type OptionalEntity<Entity extends object> = Partial<Entity>;

// type ReadonlyEntity<Entity extends object> = Readonly<Entity>

// type RequredEntity<Entity extends object> = Required<Entity>;

// type EditableEntity<Entity extends object> = ...

// type TestPick = Pick<Movie, 'awards' | 'director'>;
// type TestOmit = Omit<Movie, 'awards' | 'director'>;

// ------------------------------------------------------------

// type UnionIntersection = (string | number | symbol) & string

// ------------------------------------------------------------

// type TransformedProperty = 'a' | 'b' | 'c';

// type EntityFilter<Entity extends object, TransformedProperty extends keyof Entity> = {
//     [Propery in keyof Entity as Propery & TransformedProperty]-?: Entity[Propery];
// }

// type TestEntityFilter = EntityFilter<{a: string, b: string, d: number, c: boolean}, TransformedProperty>
