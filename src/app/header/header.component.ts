import { AuthentificationService } from './../authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService) { }

  ngOnInit() {
  }

  logout() {
  this.authentificationService.logout();
  }

}
