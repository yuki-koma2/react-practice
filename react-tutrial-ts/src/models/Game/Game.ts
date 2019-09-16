export interface gameHistory{
    history: Array<{ [key:string]: string; } >;
    stepNumber:number;
}

export enum NextPlayer {
    X = 'X',
    O = 'O'
}
