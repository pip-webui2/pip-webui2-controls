import { TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Part {
    public name: string;
    public visible: BehaviorSubject<boolean>;
}

export class PipPartComponent {
    protected isVisible = false;

    protected updatevisibility(visible: boolean) {
        if (this.isVisible === true && visible === true) { return; } else {
            this.isVisible = visible;
            visible ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
        }
    }

    constructor(
        protected templateRef: TemplateRef<any>,
        protected viewContainer: ViewContainerRef
    ) { }
}
