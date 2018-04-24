import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  vistaSeleccionada = 'home';

  actualizarVista(tipoVista: string) {
    console.log(tipoVista);
    this.vistaSeleccionada = tipoVista;
  }
  constructor() { }

  ngOnInit() {
  }

}
