import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

//This is an Attribute Directive
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  //Add host binding to the element with the specific property
  @HostBinding('style.backgroundColor') background: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    this.background = this.defaultColor;
  }

  // Add host listener to dynamically change the style to the element
  @HostListener('mouseover') mouseover(eventData: Event) {
    //this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.background = this.highlightColor;
    this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.background = this.defaultColor;
    this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }

}
