import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
 import { map, filter, switchMap } from 'rxjs/operators';


// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  company$: AngularFireObject<any[]>;
  company:any;
  constructor(private db: AngularFireDatabase) {
    this.company$=this.db.object('company');
  }
  saveCompany(company) {
    //this.company$.set(company);
  }
  getCompany(company){
    this.company$.set(company)
  //  return this.db.object('company').valueChanges().subscribe(items => {
  //     return items
  //   });
  }
}
