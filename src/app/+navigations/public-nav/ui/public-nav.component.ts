import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TestComponent } from "../../../components/test/test.component";
import { AddressFormComponent } from "../../../components/address-form/address-form.component";
import { MatTableComponent } from "../../../components/mat-table/mat-table.component";
import { MatTreeComponent } from "../../../components/mat-tree/mat-tree.component";

@Component({
  selector: 'app-public-nav',
  imports: [RouterOutlet, RouterLink, TestComponent, AddressFormComponent, MatTableComponent, MatTreeComponent,],
  templateUrl: './public-nav.component.html',
  styleUrl: './public-nav.component.scss'
})
export class PublicNavComponent {

}
