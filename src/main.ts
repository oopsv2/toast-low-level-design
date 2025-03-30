import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { propType } from './constant';
import { ToastComponent } from './toast/toast.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [ToastComponent, CommonModule],
})
export class App {
  name = 'Angular';
  toastQueue = [];

  openToast(evt: any) {
    let props: propType = {
      type: 1,
      duration: 5000,
      position: 'top-left', // bottom-top, bottom-right, top-left, top-center, top-right
      animation: 'pop',
      text: 'Success',
    };
    if (evt.target.className === 'btn-success') {
      props.type = 1;
      props.text = 'Data Fetched';
      // props.position = 'bottom-center';
    } else {
      props.type = 2;
      props.text = 'No Data Found';
      // props.position = 'top-center';
    }
    setTimeout(() => {
      this.toastQueue.shift();
    }, props.duration);
    this.toastQueue.push({ show: true, props: props });
  }

  closeToast(evt: number, ind: number) {
    this.toastQueue.splice(ind, 1);
  }
}

bootstrapApplication(App);
