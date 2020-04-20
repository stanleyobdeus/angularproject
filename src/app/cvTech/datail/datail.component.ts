import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-datail',
  templateUrl: './datail.component.html',
  styleUrls: ['./datail.component.css']
})
export class DatailComponent implements OnInit {
  personne: Personne;
  constructor(
    private cvService: CvService,
    private activatedRouter: ActivatedRoute,
    private router: Router

  ) { }

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

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
       console.log(error);
      }
    );
  }

  updatePersonne(id: number) {
   const link = ['cv/updateCv', id];
   this.router.navigate(link);

  }

}
