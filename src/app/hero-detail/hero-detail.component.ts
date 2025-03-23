// Displays details of the selected hero and allows name editing using input binding
import { Component, Input } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe]
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
