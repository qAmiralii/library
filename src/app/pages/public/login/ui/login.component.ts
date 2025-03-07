import { Component } from '@angular/core';
import { ButtonOverviewExample } from "../../../../components/angular-material-buttons/angular-material-buttons.component";
import { InputClearableExample } from "../../../../components/angular-material-input/angular-material-input.component";

@Component({
  selector: 'app-login',
  imports: [ButtonOverviewExample, InputClearableExample],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
