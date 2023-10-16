import { ProductoDto } from "./producto-interface"

export class ProductoStockDto {
    id?: number;
    producto: ProductoDto = new ProductoDto();
    cantidad: number = 0;
}