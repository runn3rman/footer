import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ByuFooterComponent } from "./byu-footer/byu-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ByuFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
