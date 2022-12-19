import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.scss'],
})
export class BodyContentComponent {
  @Input() collapsed = true;
  @Input() screenW = 0;

  getBodyClass(): string {
    let styleClass = '';

    if (this.collapsed && this.screenW > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenW <= 768 && this.screenW > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
