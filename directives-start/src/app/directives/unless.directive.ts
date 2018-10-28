import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

// This is a Structural Directive
export class UnlessDirective {

  //A setter property
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      this.vcRef.clear();
    }
  }
  
  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef  ) { }

}
