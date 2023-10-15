import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoDto } from '../core/interfaces/producto-interface';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: ProductoDto[] = [
  {id: 1,   nombre: 'Nafta comun',  precio: 1.0079, },
  {id: 2,   nombre: 'Nafta super',  precio: 4.0026, },
  {id: 3,   nombre: 'Taladro',      precio: 6.941,  },
  {id: 4,   nombre: 'Torno',        precio: 9.0122, },
  {id: 5,   nombre: 'Madera',       precio: 10.811, },
  {id: 6,   nombre: 'Pegamento',    precio: 12.0107,},
];


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  displayedColumns: string[] = [
    'id', 
    'nombre',
    'precio',
    'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
