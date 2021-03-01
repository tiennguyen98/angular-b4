import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-angular-b4';
  value;
  result;
  number1: number;
  number2: number;

  getValue(event: any): void {
    this.value = event.target.value;
  }

  calculator(): any {
    if (this.value === '+'){
      this.result = this.number1 + this.number2;
    }
    if (this.value === '-'){
      this.result = this.number1 - this.number2;
    }
    if (this.value === '*'){
      this.result = this.number1 * this.number2;
    }
    if (this.value === '/'){
      this.result = this.number1 / this.number2;
    }
  }
}
