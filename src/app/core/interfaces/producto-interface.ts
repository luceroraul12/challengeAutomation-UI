export class ProductoDto {
    id: number = 0;
    nombre: string = "";
    tipo: TipoProductoDto = new TipoProductoDto();
    precio: number = 0.0;
}

export class TipoProductoDto {
    id: number = 0;
    descripcion: string = "";
}