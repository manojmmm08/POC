import { Component, OnInit } from '@angular/core';
import {DevService} from '../dev-service';
import { EmitterService } from '../emitter-service';
import { Employee } from '../employee';

@Component({
  selector: 'app-grid-bind-poc',
  templateUrl: './grid-bind-poc.component.html',
  styleUrls: ['./grid-bind-poc.component.css']
})
export class GridBindPOCComponent implements OnInit {
  empCode='';
  empName='';
  empType="";

  constructor(private service :DevService) { }

  empList: Employee[];

  ngOnInit() {
    this.loadEmployeeDetails();
    
  }

  ngOnChanges(changes:any) {
    // Listen to the 'list'emitted event so as populate the model
    // with the event payload
    //another way to call service using Emitter
    EmitterService.get(this.listId).subscribe((employees:Employee[]) => { this.loadEmployeeDetails()});
  }
  [x: string]: any;
  loadEmployeeDetails() 
  {
    // Get all comments
    this.service.getEmpData()
                      .subscribe(
                        empList => this.empList = empList, //Bind to view
                           err => {
                               // Log errors if any
                               console.log(err);
                           });
                          
  }
  rptEdit(empData:Employee):void{
    this.empCode=empData.Code;
    this.empName=empData.Name;
    this.empType=empData.EmpType;
  }
}
