import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfire';
  constructor(private db: AngularFireDatabase) {
    const observabe = this.db.object('connected');
    observabe
     
    .valueChanges().subscribe(
      next => console.log('next', next),
      error => console.log('error', error),
      () => console.log('completed')
    )
  }
}
