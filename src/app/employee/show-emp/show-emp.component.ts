import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];
  ModalTitle:string="";
  ActivateAddEditEmpComp:boolean=false;
  emp:any;


  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.EmployeeList = data;
    })
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      DepartmentName:""
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp = false;
    this.refreshDepList();
  }

  editClick(item: any){
    this.emp=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      this.emp=item;
      this.service.deleteDepartment(this.emp.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }


}
