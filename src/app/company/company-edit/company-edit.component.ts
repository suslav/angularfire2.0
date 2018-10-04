import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  company$: AngularFireObject<any[]>;
  connetede: any;
  company:any;
  constructor(private companyServices: CompanyService, private db: AngularFireDatabase) {
    this.company$ = this.companyServices.company$;
    console.log(this.company$,'test');

  }
  ngOnInit() {
    //this.connected();
  }
  connected(company) {
    // this.db.object('company').valueChanges().subscribe(items => {
    //   this.company=items;
    //   console.log(this.company);
    //     });
    this.company$.set(company)
  }
  editconnected(newcompany){
 //this.company$.update({newcompany})
  }

}
