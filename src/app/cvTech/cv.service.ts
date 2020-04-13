import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[]
  constructor() { 
    this.personnes=[
      new Personne(1,'Stanley','OBDEUS',49,'rotating_card_profile2.png',98777,'Analyste Developpeur'),
      new Personne(2,'Vladimir','OBDEUS',149,'tome.jpg',987,'Lead Developpeur'),
      new Personne(3,'Norzelus','Myriam',149,'',987,'Nurse')
    ]
  }

  getPersonnes(): Personne[]{
    return this.personnes;
  }

  getPersonneById(id: number): Personne{
    const personne=this.personnes.find(personne=>{
      return personne.id == id;
    });
    return personne;

  }

  addPersonne(personne: Personne): void{
    personne.id=this.personnes[this.personnes.length-1].id+1
    this.personnes.push(personne);
  }
}
