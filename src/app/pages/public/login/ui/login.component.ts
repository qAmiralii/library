import { Component, inject } from '@angular/core';
import { ButtonOverviewExample } from "../../../../components/angular-material-buttons/ui/angular-material-buttons.component";
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputClearableExample as sibil } from "../../../../components/angular-material-input/ui/angular-material-input.component";
import { AngularMaterialPasswordComponent } from "../../../../components/angular-material-password/ui/angular-material-password.component";

@Component({
  selector: 'app-login',
  imports: [ButtonOverviewExample, MatFormFieldModule, MatInputModule, sibil, AngularMaterialPasswordComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
login() {
  this.rout.navigateByUrl("/admin")
}
  rout=inject(Router);


}
