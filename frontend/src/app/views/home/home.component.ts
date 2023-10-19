import { Component } from '@angular/core';


@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  isActive = false;


palavras:string[] = ['opa', 'bom', 'ain']

}
