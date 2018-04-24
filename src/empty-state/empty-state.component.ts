import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pip-empty-state',
	template: '<div><ng-content></ng-content></div>',
	styleUrls: ['./empty-state.component.scss']
})
export class PipEmptyStateComponent implements OnInit {
	ngOnInit() { }
}