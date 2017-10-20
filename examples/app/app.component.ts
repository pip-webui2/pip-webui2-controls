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
      route: 'ref_list'
    },
    {
      name: 'Check list',
      id: 'check-list',
      route: 'check_list'
    },
    {
      name: 'Color picker',
      id: 'color-picker',
      route: 'color_picker'
    },
    {
      name: 'Empty state',
      id: 'empty-state',
      route: 'empty_state'
    }
  ];

  public listIndex: number = 0;

  public onListItemIndexChanged(index: number) {
    this.listIndex - index;

  }

}
