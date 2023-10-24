import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{

  product?: Product;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route:  ActivatedRoute){ }

    

  updateProduct():void{
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto Atualizado com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }



}
