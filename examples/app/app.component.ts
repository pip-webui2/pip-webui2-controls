import { Component, OnInit, AfterViewInit,  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { PipThemesService } from 'pip-webui2-themes';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

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
  public themes: string[];
  public theme: string;
  public activeMediaQuery: boolean;
  public mode: string;
  public app: string = 'Controls';
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private service: PipThemesService,
		public media: ObservableMedia) {

    this.themes = this.service.themes;
    this.theme = this.service.selectedTheme;

    media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change && change.mqAlias == 'xs'? true : false;
      this.mode = change && change.mqAlias == 'xs'? null : 'side';
    })

  }

  public ngAfterViewInit() {

  }

  public changeTheme() {
    this.service.selectedTheme = this.theme;
  }

  public onListItemIndexChanged(index: number) {
    
    console.log(this.listIndex, index);
    this.listIndex = index;
    console.log(this.listIndex);
    this.sidenav.close();
  }
  
}
