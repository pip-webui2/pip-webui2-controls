import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PipPartService } from './shared/part.service';


import { Subscription } from 'rxjs/Subscription';

@Directive({ selector: '[pipPart]' })
export class PipPartDirective {
    private subscription: Subscription;
    private isVisible: boolean = false;
    @Input() public set pipPart(part: any) {
        if (typeof part === 'string') {
            this.subscription = this.service.updatePartByName(part, null, null).visible.subscribe(visible => {
                this.updatevisibility(visible);
            });
        }

        if (typeof part === 'boolean') {
            this.updatevisibility(part);
        }
    }

    private updatevisibility(visible: boolean) {
        if (this.isVisible == true && visible == true) return;
        else {
            this.isVisible = visible;
            visible ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
        }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private service: PipPartService
    ) { }
}