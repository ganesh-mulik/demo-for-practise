import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-for-practise';
  isActive = true;
  backgroundColor = 'orange';
  fontSize = 30;
  name = "value";
  // variables for structural directives
  first = 10;
  second = 8;
  tableOfTwo = [2,4,6,8,10,12,14,16,18,20];
  dept = 'mca';

  toggleActive(){
    this.isActive=!this.isActive;
  }
}
