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
  connetede:any;
  constructor(private companyServices: CompanyService,private db: AngularFireDatabase) {
    this.company$ = this.companyServices.company$;

  }
  ngOnInit(){
    this.connected();
  }
  connected(){
       const observabe = this.db.object('connected');
    observabe
     
    .valueChanges().subscribe(
      next =>{
        this.connetede=next;
      },
      error =>{
        console.log('error', error)
      } 
    
    )
  }

}
