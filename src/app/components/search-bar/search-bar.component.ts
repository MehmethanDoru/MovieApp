import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchWord: string = '';
  searchResults: any[] = [];

  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    if (this.searchWord.trim() !== '') {
      this.searchEvent.emit(this.searchWord);
    }
  }
}
