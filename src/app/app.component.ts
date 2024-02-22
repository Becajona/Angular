import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Videojuegos_jon';
  carrera="TI";

  producto1={
    nombre:"foto",
    precio:"32",
    foto:"./assets/foto.jpg"
  }

  producto2={
    nombre:"fotos",
    precio:"63",
    foto:"./assets/imagenes/fotos.jpg"
  }

}


