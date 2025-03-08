import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  items = Array.from({ length: 100 });  
  entriesPerPage = 5;
  currentPage = 1;
  totalPages = Math.ceil(this.items.length / this.entriesPerPage);
  pages: number[] = [];

  constructor() {
    this.updatePages();
  }

  updatePages() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onEntriesChange() {
    this.totalPages = Math.ceil(this.items.length / this.entriesPerPage);
    this.currentPage = 1; 
    this.updatePages();
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  get paginatedItems() {
    const start = (this.currentPage - 1) * this.entriesPerPage;
    return this.items.slice(start, start + this.entriesPerPage);
  }
  

  ngOnInit(): void {
  }

}
