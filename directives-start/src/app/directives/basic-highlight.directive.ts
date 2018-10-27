import { ElementRef, OnInit, Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHightlightDirective implements OnInit{

    constructor(private elementRef: ElementRef) {

    }
    
    ngOnInit() {
        
    }

    @HostListener('mouseover') mouseover(eventData: Event) {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'white';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.elementRef.nativeElement.style.backgroundColor = 'transparent';
        this.elementRef.nativeElement.style.color = 'black';
    }
}