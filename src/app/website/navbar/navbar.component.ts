import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	mobNavToggle:string = '';
	mobNavHeight:number = 30;
	visibility:string='';
  constructor() { }

  ngOnInit() {
  	this.calculateHeight();
  }

  @HostListener('window:resize', ['$event'])
  calculateHeight(){
  	this.mobNavHeight = window.innerHeight;

  }

}
