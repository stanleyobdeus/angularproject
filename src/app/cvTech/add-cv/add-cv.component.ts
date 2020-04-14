import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  errorMessage = '';
  constructor(private cvService: CvService, private router: Router) { }

  ngOnInit() {
  }
  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
          this.errorMessage = 'Probleme de connexion a votre serveur. priere de consulter ladministrateur';
          console.log(error);
      }
    );
    //this.cvService.addPersonne(formulaire.value);
  }

}
