import { Component } from '@angular/core';
import { PipThemesService } from 'pip-webui2-themes';

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
    }
  ];

  public listIndex: number = 0;
  public themes: string[];
  public theme: string;

  public onListItemIndexChanged(index: number) {
    this.listIndex - index;

  }

  public constructor(private service: PipThemesService) {
    this.themes = this.service.themes;

    this.theme = this.service.selectedTheme;

  }

}
