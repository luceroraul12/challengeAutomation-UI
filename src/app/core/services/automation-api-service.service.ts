import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ProductoDto, TipoProductoDto } from '../interfaces/producto-interface';
import { Observable, Subject } from 'rxjs';
import { ProductoStockDto } from '../interfaces/producto-stock-interface';

@Injectable({
  providedIn: 'root'
})
export class AutomationApiServiceService {
  

  private BASE_API: string = "http://localhost:8080/automation"

  changeTab$: Subject<boolean> = new Subject();

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

  eliminarProducto(producto: ProductoDto): Observable<number> {
    return this.http.delete<number>(`${this.BASE_API}/producto/${producto.id}`)
  }

  getProductoStock(): Observable<ProductoStockDto[]> {
    return this.http.get<ProductoStockDto[]>(`${this.BASE_API}/stock`)
  }
}
