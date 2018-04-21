import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() actualizaVista = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setTipoVista(nombre: string) {
    this.actualizaVista.emit(nombre);
  }

}
