import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pip-empty-state',
	template: '<ng-content></ng-content>',
	styleUrls: ['./empty-state.component.scss']
})
export class PipEmptyStateComponent implements OnInit {
	ngOnInit() { }
}