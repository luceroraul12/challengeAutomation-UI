export interface ProductoDto {
    id: number;
    nombre: string;
    tipo: TipoProducto;
    precio: number;
}

export interface TipoProducto {
    id: number;
    descripcion: string;
}