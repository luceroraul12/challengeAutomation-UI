import { Component, OnInit } from '@angular/core';
import { AutomationApiServiceService } from '../core/services/automation-api-service.service';
import { ProductoStockDto } from '../core/interfaces/producto-stock-interface';

@Component({
  selector: 'app-stock-productos',
  templateUrl: './stock-productos.component.html',
  styleUrls: ['./stock-productos.component.css']
})
export class StockProductosComponent implements OnInit{

  stock: ProductoStockDto[] = []

  constructor(private service: AutomationApiServiceService){}

  ngOnInit(): void {
    // Llamado para precargar
    this.service.getProductoStock().subscribe(r => this.stock = r)
    
    // Cuando se elimine un producto, debo actualizar la vista de stock ya que no va a tener su contraparte en stock
    this.service.changeTab$.subscribe(() => {
      this.service.getProductoStock().subscribe(r => this.stock = r)
    })
  }

}
