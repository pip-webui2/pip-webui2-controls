import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PipPartService } from './shared/part.service';
import { PipPartComponent } from './shared/part.model';

import { Subscription } from 'rxjs/Subscription';

@Directive({ selector: '[pipPartVisibility]' })
export class PipPartVisibilityDirective extends PipPartComponent {
    @Input() public set pipPartVisibility(visibility: boolean) {
        if (typeof visibility === 'boolean') {
            this.updatevisibility(visibility);
        }
    }

    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        private service: PipPartService
    ) {
        super(templateRef, viewContainer);
     }
}