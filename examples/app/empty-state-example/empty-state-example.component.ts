import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'empty-state-example',
	templateUrl: 'empty-state-example.component.html'
})

export class EmptyStateExampleComponent implements OnInit {

	ngOnInit() { }

	public emptyStateActions: any[] = [
		{ title: 'Add task', action: () => { console.log('on add task clicked'); } },
		{ title: 'Import tasks', action: () => { console.log('on export tasks clicked'); } }
	];
}