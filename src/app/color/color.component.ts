import { Component, OnInit } from '@angular/core';
import { PremierService } from '../premier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService]

})
export class ColorComponent implements OnInit {
  color= 'red';
  constructor(private premierService: PremierService,private router: Router) { }

  ngOnInit() {
  }
  //changeColor (input){
   //console.log(input.value);
   //this.color=input.value;
   //input.value='';
  //}
  processReq(message: any){
   alert(message);
  }
  loogerMesData(){
    this.premierService.logger('test');
  }

  goToCv(){
    const link=['cv']
    this.router.navigate(link);
  }
}
