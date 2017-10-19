import * as _ from 'lodash';
import { Directive, Component, QueryList, OnInit, AfterContentInit, Input, Output, EventEmitter, ContentChildren } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatButton } from '@angular/material';

const DEFAULT_COLORS = ['purple', 'lightgreen', 'green', 'darkred', 'pink', 'yellow', 'cyan'];

@Component({
	selector: 'pip-color-picker',
	templateUrl: 'color-picker.component.html',
	styleUrls: ['./color-picker.component.scss']
})
export class PipColorPickerComponent implements OnInit, AfterContentInit  {
	@ContentChildren('colorButton') items: QueryList<MatButton>;
	@Input() public selected: string;
	@Input() public colors: string[] = DEFAULT_COLORS;
	@Output() public changeColor = new EventEmitter();
	
	private _selectedIndex$: BehaviorSubject<number>;
		
	ngOnInit() { 
		this._selectedIndex$.next(this.colors.indexOf(this.selected));
	}

	ngAfterContentInit() {
		this.focus();
		this.selectedIndex$.subscribe(index => {
			this.selected = this.colors[index];
			this.focus();
			this.changeColor.emit(this.selected);
		});
	}

	private focus() {
		if (this.items.length > this._selectedIndex$.getValue()) this.items[this._selectedIndex$.getValue()].focus();
	}

	public clickColor(index) {
		this._selectedIndex$.next(index);
	}

	public get selectedIndex$(): Observable<number> {
		return this._selectedIndex$;
	}
}