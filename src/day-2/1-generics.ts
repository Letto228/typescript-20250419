// function sum(): number {
//     return 1 + 1;
// }

// function sum(a: number, b: number = 123): number {
//     return a + b;
// }

// ------------------------------------------------

// type Film = {
//     title: string;
//     duration: number;
// }

// type ResponceStatus = 'success' | 'error' | 'pending';

// type Responce = {
//     status: ResponceStatus;
//     result: unknown;
// }

// type ResponceFilm = Responce & {
//     result: Film,
// }

// type ResponceFilms = Responce & {
//     result: Film[],
// }

// type Responce<Result = unknown, Status extends ResponceStatus = ResponceStatus> = {
//     status: Status;
//     result: Result;
// }

// function getFilm(): Responce<Film, 'success'> {
//     throw new Error('');
// }

// const film = getFilm();

// film.status

// function getFilms(): Responce<Film[]> {
//     throw new Error('');
// }

// type GetPropertyValue<Record extends object, Propery extends keyof Record> = Record[Propery];

// type Test = GetPropertyValue<Film, 'duration'>;

// function getProperty<Record extends object, Propery extends keyof Record>(
//     entity: Record,
//     property: Propery
// ): Record[Propery] {
//     return entity[property];
// }

// function getProperty<Entity extends object, Propery extends keyof Entity>(
//     entity: Entity,
//     property: Propery
// ): Entity[Propery] {
//     return entity[property];
// }

// function getProperty<Egor extends object, Propery extends keyof Egor>(
//     entity: Egor,
//     property: Propery
// ): Egor[Propery] {
//     return entity[property];
// }

// const test = getProperty<Film, 'title'>({title: 'Film', duration: 123}, 'title');

// function invoke<Test extends {[key: string]: unknown}>() {
//     return getProperty<Test, string>({}, 'string')
// }


