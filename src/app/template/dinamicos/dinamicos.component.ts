import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  persona: Persona = {
    nombre: 'Juan',
    favoritos: [
      { id: 1, nombre: 'Mario' },
      { id: 2, nombre: 'Sonic' },
      { id: 3, nombre: 'Mortal Kombat' },
    ],
  };

  guardar() {
    console.log('guardar');
  }
}
