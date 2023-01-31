import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-topbooks',
  templateUrl: './topbooks.page.html',
  styleUrls: ['./topbooks.page.scss'],
})
export class TopbooksPage implements OnInit {
  topBooks: any;

  constructor(
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getTopBooks();
  }

  getTopBooks(){
    this.libraryService.getTopBooks().then((data:any) => {
      this.topBooks = data 
      console.log(data)
    })
  }
}
