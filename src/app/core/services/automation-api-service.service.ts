import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoDto, TipoProducto } from '../interfaces/producto-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomationApiServiceService {

  private BASE_API: string = "http://localhost:8080/automation"

  constructor(private http: HttpClient) { }

  getProductos(): Observable<ProductoDto[]> {
    return this.http.get<ProductoDto[]>(`${this.BASE_API}/producto`);
  }

  getTipoProductos(): Observable<TipoProducto[]>{
    return this.http.get<TipoProducto[]>(`${this.BASE_API}/tipoProductos`)
  }
}
