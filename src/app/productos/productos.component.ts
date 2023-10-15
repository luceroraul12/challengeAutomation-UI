import { ProductoDialogComponent } from './producto-dialog/producto-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoDto } from '../core/interfaces/producto-interface';
import { MatDialog } from '@angular/material/dialog';
import { AutomationApiServiceService } from '../core/services/automation-api-service.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: ProductoDto[] = [
  {id: 1,   nombre: 'Nafta comun',  precio: 1.0079, tipo: {id: 1, descripcion: "combustible"}},
  {id: 2,   nombre: 'Nafta super',  precio: 4.0026, tipo: {id: 1, descripcion: "combustible"}},
  {id: 3,   nombre: 'Taladro',      precio: 6.941,  tipo: {id: 2, descripcion: "Herramientas"}},
  {id: 4,   nombre: 'Torno',        precio: 9.0122, tipo: {id: 2, descripcion: "Herramientas"}},
  {id: 5,   nombre: 'Madera',       precio: 10.811, tipo: {id: 3, descripcion: "Materia Prima"}},
  {id: 6,   nombre: 'Pegamento',    precio: 12.0107,tipo: {id: 3, descripcion: "Materia Prima"}},
];


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  constructor(private dialog: MatDialog,
    private service: AutomationApiServiceService){}
  

  displayedColumns: string[] = [
    'id', 
    'nombre',
    'categoria',
    'precio',
    'acciones'];

  dataSource!: MatTableDataSource<ProductoDto>;

  ngOnInit(): void {
    this.service.getProductos().subscribe(r => {
      this.dataSource = new MatTableDataSource(r);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogCreate(){
    this.dialog.open(ProductoDialogComponent, {
    })
  }

  openDialogUpdate(producto: ProductoDto){
    this.dialog.open(ProductoDialogComponent, {
      data: {
        producto
      }
    })
  }

  delete(){
    
  }
}
