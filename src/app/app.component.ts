// Root component that sets the application title and includes the HeroesComponent.
import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [HeroesComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}
