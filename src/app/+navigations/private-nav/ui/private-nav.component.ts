import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-nav',
  imports: [RouterOutlet,RouterLink,],
  templateUrl: './private-nav.component.html',
  styleUrl: './private-nav.component.scss'
})
export class PrivateNavComponent {

}
