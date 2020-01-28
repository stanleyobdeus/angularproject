import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { PremierService } from 'src/app/premier.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
personnes: Personne[];
selectedPersonne: Personne;
  constructor(private premierService: PremierService) { }

  ngOnInit() {
    this.personnes=[
      new Personne(1,'Stanley','OBDEUS',49,'rotating_card_profile2.png',98777,'Analyste Developpeur'),
      new Personne(2,'Vladimir','OBDEUS',149,'tome.jpg',987,'Lead Developpeur'),
      new Personne(3,'Norzelus','Myriam',149,'',987,'Nurse')
    ]
    this.premierService.logger(this.personnes);
  }

selectPersonne(personne) {
  console.log(personne);
 this.selectedPersonne=personne;
}
}
