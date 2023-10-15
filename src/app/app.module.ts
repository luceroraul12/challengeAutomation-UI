import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './core/menu/menu.component';
import { MaterialModule } from './material/material.module';
import { ProductosComponent } from './productos/productos.component';
import { StockProductosComponent } from './stock-productos/stock-productos.component';
import { ProductoDialogComponent } from './productos/producto-dialog/producto-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductosComponent,
    StockProductosComponent,
    ProductoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
