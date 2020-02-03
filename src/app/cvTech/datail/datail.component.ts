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
    private activatedRouter: ActivatedRoute

  ) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      (params)=>{
        this.personne=this.cvService.getPersonneById(params.id);
      }
    )
  }

}
