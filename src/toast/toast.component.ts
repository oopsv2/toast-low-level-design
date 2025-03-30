import { Component, EventEmitter, Input, Output } from '@angular/core';
import { propType } from '../constant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: 'toast.component.html',
  styleUrl: 'toast.component.scss',
  imports: [CommonModule],
})
export class ToastComponent {
  @Input() props: propType;

  @Output() closer = new EventEmitter<number>();

  ngOnInit() {}

  closeToast() {
    this.closer.emit(this.props.type);
  }
}
