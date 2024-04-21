import {Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges, HostListener} from '@angular/core';
import {Student} from "../student";

@Directive({
  standalone: true,
  selector: '[appStyleContent]'
})
export class StyleContentDirective implements OnChanges {
  @Input('appStyleContent') contentItem!: Student;
  private isHightlighted : boolean = false;

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement): void {
    this.isHightlighted = !this.isHightlighted;  // Toggle the highlight state
    this.toggleHighlight(target);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Only apply styles if contentItem has changed
    if (changes['contentItem']) {
      this.applyStyles();
    }
  }

  private applyStyles(): void {
    let backgroundColor = '';
    let color = '';

    switch (this.contentItem.year) {
      case '1':
        backgroundColor = 'black';
        color = 'green';
        break;
      case '2':
        backgroundColor = 'green';
        color = 'blue';
        break;
      default:
        backgroundColor = 'grey';
        color = 'black';
        break;
    }

    // Correct property names for CSS in JavaScript
    this.renderer.setStyle(this.el.nativeElement, 'background-color', backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', color);




  }


  private toggleHighlight(target: HTMLElement): void {
    if (this.isHightlighted && target.classList.contains('name')) {
      this.renderer.setStyle(target, 'background-color', 'yellow');
    } else if (target.classList.contains('name')) {
      this.renderer.removeStyle(target, 'background-color');
    }
  }

}
