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
  constructor(private companyServices: CompanyService) {
    this.company$ = this.companyServices.company$;

  }

  ngOnInit() {
    // this.getdata();

  }
  savedata() {
    this.companyServices.saveCompany('company')
  }
  getdata() {

  }

}