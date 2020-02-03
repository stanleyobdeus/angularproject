import { Component, OnInit, Input} from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbauchService } from '../embauch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private embaucheService:EmbauchService,
    private router: Router
    ) { }

  ngOnInit() {
  }
   
  embaucher(){
    this.embaucheService.embaucher(this.personne);
  }
  moreInfo(){
    const link=['cv',this.personne.id];
    this.router.navigate(link);
  }
}
