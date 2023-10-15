import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoDto } from 'src/app/core/interfaces/producto-interface';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css']
})
export class ProductoDialogComponent implements OnInit{

  producto?: ProductoDto;
  header: string = "Creacion de producto";
  formulario!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ProductoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
    this.producto = this.data.producto;
    if(this.producto){
      this.header = `Modificacion de producto: ${this.producto.nombre}`;
    }
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      tipo:   ['', Validators.required],
    })
  }


  crearProducto(){

  }

  modificarProducto(){
    
  }
  



}
