import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-topbooks',
  templateUrl: './topbooks.page.html',
  styleUrls: ['./topbooks.page.scss'],
})
export class TopbooksPage implements OnInit {
  TopBooks: any;

  constructor(
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.GetTopBooks();
  }

  GetTopBooks(){
    this.libraryService.GetTopBooks().then((data:any) => {
      this.GetTopBooks =  data 
      console.log(data)
    })
  }
}
