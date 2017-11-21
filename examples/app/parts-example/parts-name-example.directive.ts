import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PipPartNameDirective, PipPartService } from '../pip-webui2-controls';

@Directive({ selector: '[pipPartName]' })
export class PipPartDirective extends PipPartNameDirective {
    @Input() public set pipPartName(name: string) {
        this.subscribeByName(name);
    }

    constructor(
        templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        service: PipPartService
    ) {
        super(templateRef, viewContainer, service);
    }
}