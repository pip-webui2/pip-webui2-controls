import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PipPartNameDirective, PipPartService } from 'pip-webui2-controls';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[pipPartName]'
})
export class PipPartDirective extends PipPartNameDirective {
  @Input() public set pipPartName(name: string) {
    this.subscribeVisibilityByName(name);
  }

  constructor(
    templateRef: TemplateRef<any>,
    viewContainer: ViewContainerRef,
    service: PipPartService
  ) {
    super(templateRef, viewContainer, service);
  }
}
