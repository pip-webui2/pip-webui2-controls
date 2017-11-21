import { TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { PipPartService } from './part.service';

export class Part {
    public name: string;
    public visible: BehaviorSubject<boolean>;
}

export class PipPartComponent {
    protected isVisible: boolean = false;

    protected updatevisibility(visible: boolean) {
        if (this.isVisible == true && visible == true) return;
        else {
            this.isVisible = visible;
            visible ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
        }
    }

    constructor(
        protected templateRef: TemplateRef<any>,
        protected viewContainer: ViewContainerRef
    ) { }
}