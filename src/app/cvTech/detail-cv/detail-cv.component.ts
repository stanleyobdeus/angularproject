import { Component, OnInit, Input} from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbauchService } from '../embauch.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne;
  constructor(private embaucheService:EmbauchService) { }

  ngOnInit() {
  }
   
  embaucher(){
    this.embaucheService.embaucher(this.personne);
  }
}
