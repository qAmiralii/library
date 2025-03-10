import { Component, inject } from '@angular/core';
import { BooksService } from '../../../pages/public/service/books.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = inject(BooksService)
  kala: any[] = this.products.konkorBooks;

}
