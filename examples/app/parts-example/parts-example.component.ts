import { Component, OnInit } from '@angular/core';
import { PipPartService } from '../pip-webui2-controls';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
	selector: 'parts-example',
	templateUrl: 'parts-example.component.html'
})

export class PartsExampleComponent implements OnInit {

    public titlePartName: string = "title";
    private _showTitle$ = new BehaviorSubject<boolean>(true);

    public showButtons: boolean = true;

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
    ) {}
}