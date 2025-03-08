import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  isVisible = false; 
  rowToDelete: HTMLElement | null = null; 
  @Output() edit_enabled=new EventEmitter<any>();
 

  toggleConfirmForm(event: Event) {
    this.isVisible = true; 
    this.rowToDelete = (event.target as HTMLElement).parentNode?.parentNode as HTMLElement; 
  }

  confirmDelete() {
    if (this.rowToDelete) {
      this.rowToDelete.remove(); 
      this.closeConfirmForm(); 
    }
  }

  closeConfirmForm() {
    this.isVisible = false; 
    this.rowToDelete = null; 
  }

  isEditMode = false; // Control edit mode
  currentRow: HTMLTableRowElement | null = null; // Store the current row
  name: string = '';
  email: string = '';
  mobile: string = '';
  address: string = '';
  filterData:any;

  togglePopupForm() {
    this.isEditMode = !this.isEditMode; 
  }

  editData(edit_index:number) {
    this.isEditMode=true;
    this.edit_enabled.emit([edit_index,this.isEditMode]);
  }

  saveData() {
    if (this.currentRow) {
      this.currentRow.cells[0].textContent = this.name;
      this.currentRow.cells[1].textContent = this.email;
      this.currentRow.cells[2].textContent = this.mobile;
      this.currentRow.cells[3].textContent = this.address;
    }
    this.togglePopupForm();
  }

  ngDoCheck(){
    // this.onEntriesChange( );
    this.filterData =this.paginatedItems();
  }
  items = Array.from({ length: 100 });  
  entriesPerPage = 5;
  currentPage = 1;
  totalPages = Math.ceil(this.items.length / this.entriesPerPage);
  pages: number[] = [];

  constructor() {
    // this.updatePages();
  }

  updatePages() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onEntriesChange() {
    this.totalPages = Math.ceil(this.tableData.length / this.entriesPerPage);
    // this.currentPage = this.totalPages; 
    // this.updatePages();
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginatedItems();

    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginatedItems();
    }
  }

  paginatedItems() {
    const start = (this.currentPage - 1) * this.entriesPerPage;
    return this.tableData.slice(start, start + this.entriesPerPage);
  }
  

  

  ngOnInit(): void {
  }

  @Input() tableData:any;

}


