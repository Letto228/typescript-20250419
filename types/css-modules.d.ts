declare module '*.module.css' {
    // const classes: {readonly [ley: string]: string};
    const classes: Record<string, string>;

    export default classes
}