import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../states/app.state";
import {selectCount} from "../states/counter/counter.selector";
import {decrement, increment, reset} from "../states/counter/counter.actions";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
counts: Observable<number>;
constructor(private store: Store<AppState>) {
  this.counts = store.select(selectCount);
}
increment() {
  this.store.dispatch(increment());
}
decrement() {
  this.store.dispatch(decrement());
}
reset() {
  this.store.dispatch(reset());
}

}
