import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [
        ProductoService
    ]
})
export class ProductoAddComponent{
    public titulo: string;
    public productos: Producto[];

    constructor(){
        this.titulo = 'Crear un nuevo producto';
    }

    ngOnInit(){
        console.log()
    }
}