import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  persona = {
    nombre: 'Jose Armando',
    apellidos: 'Gutierrez Nuñez',
    edad: 34,
    estado: 'soltero'};

  constructor() { }

  ngOnInit() {
  }

}
