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
    public confirmado;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.titulo = 'Listado de productos';
        this.confirmado = null;
    }

    ngOnInit(){
        console.log('Productos-list.component.ts cargado');
        
        this.getProductos();
    }
    
    getProductos(){
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

    borrarConfirm(id){
        this.confirmado = id;
    }

    cancelaConfirm(){
        this.confirmado = null;
    }

    onDeleteProducto(id){
        this._productoService.deleteProducto(id).subscribe(
            Response => {
                if(Response.code == 200){
                    this.getProductos();
                }else{
                    alert('Error al borrar producto');
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}