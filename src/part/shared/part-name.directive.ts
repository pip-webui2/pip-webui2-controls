import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PipPartService } from './part.service';
import { PipPartComponent } from './part.model';

import { Subscription } from 'rxjs/Subscription';

export class PipPartNameDirective extends PipPartComponent {
    protected subscription: Subscription;

    protected subscribeByName(name: string) {
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