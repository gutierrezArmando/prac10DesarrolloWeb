import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vistaSeleccionada = 'home';

  actualizarVista(tipoVista: string) {
    console.log(tipoVista);
    this.vistaSeleccionada = tipoVista;
  }

}
