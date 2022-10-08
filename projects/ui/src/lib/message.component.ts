import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ui-message',
  template: ` <p *ngIf="message">{{ message }}</p> `,
  styles: [
    `
      p {
        color: blue;
      }
    `,
  ],
})
export class MessageComponent {
  @Input() message: string = '';
}
