import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() {

  }
  search = new FormControl('');
  @Output('search') SearchEvent = new EventEmitter<string>();
  
  ngOnInit(){
    this.search.valueChanges.pipe(
        debounceTime(300)
    ).subscribe(vaule => this.SearchEvent.emit());
      

  }
}
