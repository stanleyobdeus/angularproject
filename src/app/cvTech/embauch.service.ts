import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbauchService {
 personnes: Personne[];
  constructor() {
    this.personnes=[];
   }

   getEmbaucher():Personne[]{
     return this.personnes;
   }

   embaucher(personne: Personne): void {
     const index=this.personnes.indexOf(personne);
     if(index<0){
      this.personnes.push(personne);
     }else{
       alert(personne.name+' est deja selectionne')
     }
    
   }

   debaucher(personne): void{
    const index=this.personnes.indexOf(personne);
    if(index>=0){
      this.personnes.splice(index,1);
    }else{

    }

   }
}
