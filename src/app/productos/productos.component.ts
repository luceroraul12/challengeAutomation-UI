import { ProductoDialogComponent } from './producto-dialog/producto-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoDto } from '../core/interfaces/producto-interface';
import { MatDialog } from '@angular/material/dialog';
import { AutomationApiServiceService } from '../core/services/automation-api-service.service';

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
    let dialogRef = this.dialog.open(ProductoDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(
      (r: ProductoDto) => {
        this.service.crearProducto(r).subscribe(() => {
          this.service.getProductos().subscribe(resultFinal => {
            this.dataSource.data = resultFinal;
            // Debo indicar un cambio para la vista de stock
            this.service.changeTab$.next(true);
          })
        })
      }
    )
  }

  openDialogUpdate(producto: ProductoDto){
    let dialogRef = this.dialog.open(ProductoDialogComponent, {
      data: {
        producto
      }
    })
    dialogRef.afterClosed().subscribe(
      (r: ProductoDto) => {
        this.service.actualizarProducto(r).subscribe(() => {
          this.service.getProductos().subscribe(resultFinal => {
            this.dataSource.data = resultFinal;
            // Debo indicar un cambio para la vista de stock
            this.service.changeTab$.next(true);
          })
        })
      }
    )
  }

  delete(producto: ProductoDto){
    this.service.eliminarProducto(producto).subscribe(() => {
      this.service.getProductos().subscribe(r => {
        this.dataSource.data = r
        // Emito que un producto fue eliminado
        this.service.changeTab$.next(true)
      })
    })
  }
}
