import { Component } from '@angular/core';
import { DashborComponent } from "../../../../components/dashbor/dashbor.component";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardComponent, DashborComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
