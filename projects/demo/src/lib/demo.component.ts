import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'lib-demo',
  template: `
    <p>
      demo works!
    </p>
  `,
  styles: [
  ]
})
export class DemoComponent implements OnInit {

  constructor(public renderer: Renderer2, public elementRef: ElementRef) { }

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, "demo-class");
  }

}
