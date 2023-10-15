import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoDto, TipoProducto } from 'src/app/core/interfaces/producto-interface';
import { AutomationApiServiceService } from 'src/app/core/services/automation-api-service.service';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css']
})
export class ProductoDialogComponent implements OnInit{

  producto?: ProductoDto;
  header: string = "Creacion de producto";
  botonSubmitMensaje?: string;
  categorias!: TipoProducto[];

  formulario: FormGroup = this.initFormulario();
  nombreControl!:  FormControl;
  precioControl!:  FormControl;
  tipoControl!:    FormControl;

  constructor(
    private dialogRef: MatDialogRef<ProductoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private service: AutomationApiServiceService
  ) {}


  ngOnInit(): void {
    if(this.data){
      this.producto = this.data.producto;
      this.botonSubmitMensaje = "Modificar";
      this.header = `Modificacion de producto: ${this.producto!.nombre}`;
    } else {
      this.botonSubmitMensaje = "Crear";
    }

    this.setProductoForm()
    this.setTipoProductos()
  }

  setTipoProductos() {
    this.service.getTipoProductos().subscribe(r => {
      this.categorias = r;
    })
  }

  initFormulario(){
    this.nombreControl = new FormControl(
      '', [
      Validators.required, Validators.minLength(3), Validators.maxLength(100)
    ]
    );
    this.precioControl = new FormControl(
      '', [
      Validators.required, Validators.min(0), Validators.max(999999),  Validators.pattern("^[0-9.]*$")
    ]
    );
    this.tipoControl = new FormControl('', Validators.required);

    return this.formBuilder.group({
      nombre: this.nombreControl,
      precio: this.precioControl,
      tipo:   this.tipoControl
    })
  }

  setProductoForm() {
    if(this.producto){
      this.nombreControl.setValue(this.producto.nombre);
      this.precioControl.setValue(this.producto.precio);
      this.tipoControl.setValue(this.producto.tipo.id);
    }
  }

  crearProducto(){

  }

  modificarProducto(){

  }
  
  cancelar(){
    this.dialogRef.close()
  }
}


