import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {
  @Input() arrData;
  eliminarTarea(tarea) {
    const posicion = this.arrData.indexOf(tarea);
    this.arrData.splice(posicion, 1);
    localStorage.setItem('tareas', JSON.stringify(this.arrData));
    console.log(this.arrData);
  }
  constructor() {
  }

  ngOnInit() {
    console.log(this.arrData);
  }

}
