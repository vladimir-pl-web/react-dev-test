import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export enum IBtnVariant{
 A = "violet",
 B = "red",
 C = "white"
}
export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
 variant:IBtnVariant,
 onClick: () => void,
 title:string
}