import {Donem} from './Donem'

export class Ders{
    id!:number;
    dersTuru!:string;
    dersAdi!:string;
    dersKodu!:string;
    dersKredisi!:number;
    yariyilId!:number;
    donemi:Donem[] = []
}