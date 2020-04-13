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

  constructor(private cvService: CvService, private router: Router) { }

  ngOnInit() {
  }
  addPersonne(formulaire: NgForm){
    const link=['cv'];
    this.cvService.addPersonne(formulaire.value);
    this.router.navigate(link);
  }

}
