import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { never } from 'rxjs';
import { DerslerService } from '../services/dersler.service';
import { Ders } from '../siniflar/Ders';
import { Donem } from '../siniflar/Donem';
import { Komplex } from '../siniflar/komplex';

@Component({
  selector: 'app-dersler',
  templateUrl: './dersler.component.html',
  styleUrls: ['./dersler.component.css']
})
export class DerslerComponent implements OnInit {

  donemler!:any

  donem1!:any
  donem2!:any
  donem3!:any
  donem4!:any
  donem5!:any
  donem6!:any
  donem7!:any
  donem8!:any

  constructor(private dersServis:DerslerService) {
    
  }

  ngOnInit(): void {
    this.dersServis.DonemDondur().subscribe(data=>{
      for(let item of data){
        if(item.yariyilAdi == "1.Yarıyıl"){
          this.donem1 = item
        }
        else if(item.yariyilAdi == "2.Yarıyıl"){
          this.donem2 = item
        }
        else if(item.yariyilAdi == "3.Yarıyıl"){
          this.donem3 = item
        }
        else if(item.yariyilAdi == "4.Yarıyıl"){
          this.donem4 = item
        }
        else if(item.yariyilAdi == "5.Yarıyıl"){
          this.donem5 = item
        }
        else if(item.yariyilAdi == "6.Yarıyıl"){
          this.donem6 = item
        }
        else if(item.yariyilAdi == "7.Yarıyıl"){
          this.donem7 = item
        }
        else if(item.yariyilAdi == "8.Yarıyıl"){
          this.donem8 = item
        }
      }
    });

    

  }

  agnoDegeri="0.00"
  deger!:number
  hesabaKatilanDersler : Array<Komplex> = []

  onChange(deger?:any,nesne:Ders=new Ders){
    
    if(deger<5){
      let durum = false
      for(let item of this.hesabaKatilanDersler){
        if(item.dersi.id == nesne.id){
          item.degeri = deger
          durum = true
          break
        }
      }
      if(durum == false){
        this.hesabaKatilanDersler.unshift(new Komplex(nesne,deger))
      }  
      this.Hesapla()
    }

    else{
      this.hesabaKatilanDersler = this.DegerSil(this.hesabaKatilanDersler,nesne.id)
      this.Hesapla()
    }
    
  }

  DegerSil(arr:Array<Komplex>,Id:Number){
    return arr.filter(function(element){
      return element.dersi.id!=Id
    });
  }

  Hesapla(){
    let dersDegerleriToplami = 0.0
    let kredilerinToplami = 0

    for(let item of this.hesabaKatilanDersler){
      dersDegerleriToplami += (item.dersi.dersKredisi * item.degeri )
      kredilerinToplami += (item.dersi.dersKredisi)
    }

    let sonuc = (dersDegerleriToplami/kredilerinToplami)

    if(sonuc>0){
      this.agnoDegeri = sonuc.toFixed(2)
    }
    else{
      this.agnoDegeri = '0.00'
    }


  }

}
