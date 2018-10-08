import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { PipPartService } from './part.service';
import { PipPartComponent } from './part.model';

export class PipPartNameDirective extends PipPartComponent {
    protected subscription: Subscription;

    protected subscribeVisibilityByName(name: string) {
        this.subscription = this.service.changeVisibility(name, null).visible.subscribe(visible => {
            this.updatevisibility(visible);
        });
    }

    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        protected service: PipPartService
    ) {
        super(templateRef, viewContainer);
    }
}
