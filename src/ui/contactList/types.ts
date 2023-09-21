import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface IListItems{
 active: number;
 setActive:(index:number)=>void
}

export interface IDetail extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
 onClose:()=>void
}