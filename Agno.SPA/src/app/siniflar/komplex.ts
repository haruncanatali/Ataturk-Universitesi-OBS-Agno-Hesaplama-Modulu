import { Ders } from "./Ders";

export class Komplex{

    constructor(ders:Ders,deger:number){
        this.dersi = ders
        this.degeri = deger
    }

    dersi!:Ders
    degeri!:number
}