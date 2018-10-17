import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user = {
    Nombre: "Jose Luis",
    Apellido: "Leal",
    Direccion: "Calle 68",
    Ciudad:"Bogota"
  }

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.user.Apellido="Lopez";
      this.user.Ciudad="Boyaca";
    }, 5000);
  }

}
