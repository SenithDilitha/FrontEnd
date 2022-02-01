import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  @Input() public dep:any;
  DepartmentId:string = "";
  DepartmentName:string = "";

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
  }

  addDepartment(){
    var val={DepartmentId:this.DepartmentId,
    DepartmentName:this.DepartmentName};

    this.service.addDepartment(val).subscribe(result=>
      alert(result.toString()));
  }

  updateDepartment(){
    var val={DepartmentId:this.DepartmentId,
    DepartmentName:this.DepartmentName};

    this.service.updateDepartment(val).subscribe(result=>
      alert(result.toString()));
  }

}
