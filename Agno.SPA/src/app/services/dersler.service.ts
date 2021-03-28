import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donem } from '../siniflar/Donem';

@Injectable({
  providedIn: 'root'
})
export class DerslerService {

  path1 = "https://localhost:44316/api/dersler/donemleriGetir"

  constructor(private httpServis:HttpClient) { }

  DonemDondur():Observable<Donem[]>{
    return this.httpServis.get<Donem[]>(this.path1)
  }
}
