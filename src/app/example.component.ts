import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'example',
  template: `
  <div class="container">
      <div class="field cta-field">
      <button type="submit" (click)="create(message)">Create</button>
      </div>
  </div>
  `
})
export class ExampleComponent{
  constructor(
    private _notifications: NotificationsService,
    private _fb: FormBuilder
  ) { }

  message: any = {
      type: 'info',
      title: 'Hola',
      content: 'sdasdasdas'
  }

  types = ['alert', 'error', 'info', 'warn', 'success'];
  animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];

	create(message) {

        const override = {
            timeOut: 5000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: true,
			animate: 'scale'
        }

		this._notifications.create(message.title, message.content, message.type, override)
	}
}
