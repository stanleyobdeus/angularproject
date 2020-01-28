import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import {EmbauchService} from '../embauch.service'

@Component({
  selector: 'app-embauch',
  templateUrl: './embauch.component.html',
  styleUrls: ['./embauch.component.css']
})
export class EmbauchComponent implements OnInit {
 personnes: Personne[];
  constructor(private embaucheService: EmbauchService) { }

  ngOnInit() {
    this.personnes=this.embaucheService.getEmbaucher();
  }

}
