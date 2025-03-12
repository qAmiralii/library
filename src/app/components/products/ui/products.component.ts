import { Component, inject } from '@angular/core';
import { BooksService } from '../../../pages/public/service/books.service';
import { ProductComponent } from "../product/ui/product.component";

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  
  products = inject(BooksService)
  kala: any[] = this.products.konkorBooks;

}
