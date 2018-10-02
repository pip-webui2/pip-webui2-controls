import { Component, OnInit } from '@angular/core';
import { PipPartService } from 'pip-webui2-controls';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-parts-example',
  templateUrl: './parts-example.component.html',
  styleUrls: ['./parts-example.component.scss']
})
export class PartsExampleComponent implements OnInit {

  public titlePartName = 'title';
  private _showTitle$ = new BehaviorSubject<boolean>(true);

  public showButtons = true;

  public get showTitle() {
    return this._showTitle$.getValue();
  }

  public set showTitle(showTitle: boolean) {
    this._showTitle$.next(showTitle);
  }

  ngOnInit() {
    this._showTitle$.subscribe((isShown: boolean) => {
      this.partService.changeVisibility(this.titlePartName, isShown);
    });
  }

  constructor(
    private partService: PipPartService
  ) { }

}
