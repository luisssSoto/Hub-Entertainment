import { Component, Input } from '@angular/core';
import { Title } from '../title';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() searchComponent!: Title
}
