import { Component, OnInit, AfterViewInit,  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { PipThemesService, ThemeModel } from 'pip-webui2-themes';
import { ExmapleListItem } from "./examples-list/shared/examples-list.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public list:  ExmapleListItem[] = [
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
  public themes: ThemeModel[];
  public theme: ThemeModel;
  public activeMediaQuery: boolean;
  public mode: string;
  public app: string = 'Controls';
  public url: string;
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private router: Router,
    private service: PipThemesService,
		public media: ObservableMedia) {

    this.themes = this.service.themes;
    this.theme = this.service.selectedTheme;

    media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change && change.mqAlias == 'xs'? true : false;
      this.mode = change && change.mqAlias == 'xs'? null : 'side';
    })

    router.events.subscribe((url:any) => {
    
      if (url.url && url.url != this.url) {
        this.url = url.url;
        this.listIndex = this.list.findIndex((item) => {
            return "/" + item.route == this.url;
        })
      }
    });

  }

  public ngOnInit() {}

  public ngAfterViewInit() {}

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
