import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'Productos-list',
    templateUrl: '../views/productos-list.component.html',
    providers: [
        ProductoService
    ]
})
export class ProductosListComponent{
    public titulo: string;
    public productos: Producto[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.titulo = 'Listado de productos';
    }

    ngOnInit(){
        console.log('Productos-list.component.ts cargado');

        this._productoService.getProductos().subscribe(
            result => {
                
                if(result.code != 200){
                    console.log(result);
                }else{
                    this.productos = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}