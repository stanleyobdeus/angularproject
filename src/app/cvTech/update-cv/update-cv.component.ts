import { CvService } from './../cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {
  personne: Personne = null;
  constructor(private activatedRouter: ActivatedRoute, private cvService: CvService, private router: Router) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      (params) => {
      this.cvService.getPersonneById(params.id).subscribe(
        (response) => {
          this.personne = response;
        },
        (error) => {

        }
      );
      }
    );
  }

  updatePersonne() {
    this.cvService.updatePersonne(this.personne).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {

      }
    );

  }

}
