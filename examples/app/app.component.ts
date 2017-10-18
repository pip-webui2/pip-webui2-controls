import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public list: any[] = [
    {
      name: 'Reference list',
      id: 'ref-list', 
      route: 'ref-list'
    }
  ];

  public listIndex: number = 0;

  public onListItemIndexChanged(index: number) {
    this.listIndex - index;

  }

}
