import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers!: number[];
  @Input('myForUsando') texto!: String;

  constructor(
    private containers: ViewContainerRef, 
    private template: TemplateRef<any>
    ) {}

   ngOnInit(): void {
      for(let number of this.numbers) {
        this.containers.createEmbeddedView(this.template, { $implicit: number });
      }
   }
}
