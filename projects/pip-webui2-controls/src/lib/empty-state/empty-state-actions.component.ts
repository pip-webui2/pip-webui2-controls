import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EmptyStateAction } from './shared/empty-state-action.model';

@Component({
    selector: 'pip-empty-state-actions',
    templateUrl: './empty-state-actions.component.html',
    styleUrls: ['./empty-state-actions.component.scss']
})
export class PipEmptyStateActionsComponent implements OnInit {
    @Input() actions: EmptyStateAction[];
    @Output() actionClick = new EventEmitter();

    ngOnInit() { }

    public onActionClick(action: EmptyStateAction, index: number) {
        if (action.action) {
            action.action();
        }

        if (this.actionClick) {
            this.actionClick.emit({ action: action, actionIndex: index });
        }
    }
}
