import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'input-clearable-example',
  templateUrl: './angular-material-input.component.html',
  styleUrl: './angular-material-input.component.css',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
})
export class InputClearableExample {

}
