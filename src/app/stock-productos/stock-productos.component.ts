import { Component, OnInit } from '@angular/core';
import { AutomationApiServiceService } from '../core/services/automation-api-service.service';

@Component({
  selector: 'app-stock-productos',
  templateUrl: './stock-productos.component.html',
  styleUrls: ['./stock-productos.component.css']
})
export class StockProductosComponent implements OnInit{

  constructor(private service: AutomationApiServiceService){}

  ngOnInit(): void {
    this.service.changeTab$.subscribe(() => {
      alert("llamado")
    })
  }

}
