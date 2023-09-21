import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IContact{
 first_name: string;
 last_name: string;
 email: string | null;
 phone_number:string
}

export interface IListItems{
 active: number;
 setActive:(index:number)=>void
}

export interface IDetail extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
 onClose:()=>void
}