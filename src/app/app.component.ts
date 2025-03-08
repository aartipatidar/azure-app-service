import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsAssignment';
  pop_up_open=false;
  edit_data:any;
  edit_index:any;
  tableData = [
    {name:'Carmen Vella', email:'Vellacarmen@example.com', mobile:8714865315, address:'Indore'},
    {name:'John Smith', email:'johnsmith06@example.com', mobile:8748615315, address:'Hyderabad'},
    {name:'Carl Roy', email:'carlroy76@example.com', mobile:7489965315, address:'Banglore'},
    {name:'Kelvin Ken', email:'kelvin45@example.com', mobile:9424865315, address:'Delhi'},
    {name:'Raj Sharma', email:'rajsharm@example.com', mobile:9424865315, address:'Mumbai'},
    {name:'James Butt', email:'jbutt@example.com', mobile:6245865315, address:'Orleans'},
    {name:'Art Venere', email:'art@example.com', mobile:8748615315, address:'Gloucester'},
    {name:'Sage Wieser', email:'sage_wieser@example.com', mobile:4988569874, address:'Banglore'},
    {name:'Cammy Albares', email:'calbares@example.com', mobile:9424865315, address:'Delhi'},
    {name:'Dyan Oldroyd', email:'doldroyd@example.com', mobile:9424865315, address:'New York'},
  ]
  open_popup(toOpen:any){
    console.log("To close: ",toOpen);
    this.edit_index=toOpen[0];
    console.log("edit_index: ",this.edit_index);
    
    this.edit_data=this.tableData[toOpen[0]];
    this.pop_up_open=toOpen[1];
  }
  form_closed(action:any){
    this.pop_up_open=action
    this.edit_data=null;
  }
  add_new_data(new_data:any){
    if(this.edit_data){
      this.tableData[this.edit_index]=new_data;
    }
    else{

      this.tableData.push(new_data);
    }

  }
}
