export enum IBtnVariant{
 A = "violet",
 B = "red",
 C = "white"
}

export interface IButtons{
 variant: IBtnVariant;
 open: boolean,
 title: string,
 to: string
}