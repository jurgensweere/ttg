import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable()
export class MessageService {

  private _success = new Subject<IMessage>();
  message:IMessage;

  constructor() {
    this._success.subscribe((message) => this.message = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.message = null);
  }

  addInfo(text:string) {
    this._success.next({
      text,
      type: 'info'
    });
  }

  addWarning(text:string) {
    this._success.next({
      text,
      type: 'warning'
    });
  }

  addError(text:string) {
    this._success.next({
      text,
      type: 'danger'
    });
  }

  addDebug(text:string) {
    console.log(text);
  }

  remove() {
    this.message = null;
  }
}

export interface IMessage {
  text:string;
  type:string;
}