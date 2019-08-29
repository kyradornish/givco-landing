import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  emailsList: AngularFireList<any>;
  emailRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.emailsList = this.db.list('emails');
  }

  addEmail(email) {
    console.log('adding email to db', email);
    this.emailsList.push(email)
    .catch(error => this.errorMgmt(error));
  }

  private errorMgmt(error) {
    console.log(error);
  }
}
