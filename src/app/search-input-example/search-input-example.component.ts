import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input-example',
  templateUrl: './search-input-example.component.html',
  styleUrls: ['./search-input-example.component.scss']
})
export class SearchInputExampleComponent implements OnInit {

  options = [
    'One',
    'Two',
    'Three'
  ];

  constructor() { }

  ngOnInit() {
  }

}
