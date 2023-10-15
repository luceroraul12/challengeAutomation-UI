import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoDto, TipoProductoDto } from '../interfaces/producto-interface';
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

  crearProducto(producto: ProductoDto): Observable<ProductoDto> {
    return this.http.post<ProductoDto>(`${this.BASE_API}/producto`, producto);
  }

  getTipoProductos(): Observable<TipoProductoDto[]>{
    return this.http.get<TipoProductoDto[]>(`${this.BASE_API}/tipoProducto`)
  }
}
