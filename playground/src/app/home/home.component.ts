import { Component } from '@angular/core';
import { Title } from '../title'
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https//'
  title: Title = {
    id: 1,
    name: 'Boss',
    resource: '../assets/imSages/bluey.png',
    description: 'blueDog'
  };
}
