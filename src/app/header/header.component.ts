import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  
  @Output() newItemEvent = new EventEmitter<object>();
  addNewItem() {
    let new_record={
    name: this.nameInput.nativeElement.value, 
    email: this.emailInput.nativeElement.value,
    mobile:this.numberInput.nativeElement.value,
    address: this.addressInput.nativeElement.value
    }
    this.newItemEvent.emit(new_record);
    this.closeForm();
  }
  
  @ViewChild('formContainer') formContainer!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('numberInput') numberInput!: ElementRef;
  @ViewChild('addressInput') addressInput!: ElementRef;

  
  
  @Input() editMode: boolean = false;
  @Input() edit_data_pushed:any;
  @Output() close=new EventEmitter<any>();
  currentRow: any = null;

  togglePopupForm() {
    const formContainerElement = this.formContainer.nativeElement;
    if (formContainerElement.hasAttribute('hidden')) {
      formContainerElement.removeAttribute('hidden'); 
    } 
  }

  closeForm() {
    this.clearInputs();
    this.close.emit(false); 
    this.formContainer.nativeElement.setAttribute('hidden', 'true');
  }

  clearInputs() {
    this.nameInput.nativeElement.value = '';
    this.emailInput.nativeElement.value = '';
    this.numberInput.nativeElement.value = '';
    this.addressInput.nativeElement.value = '';
  }
  
  constructor() { 
    
  }

  ngOnChanges() {
    if(this.editMode){
      this.togglePopupForm();
      this.nameInput.nativeElement.value = this.edit_data_pushed.name;
    this.emailInput.nativeElement.value = this.edit_data_pushed.email;
    this.numberInput.nativeElement.value = this.edit_data_pushed.mobile;
    this.addressInput.nativeElement.value = this.edit_data_pushed.address;
    }
  }
  
}
