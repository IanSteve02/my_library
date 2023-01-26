import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: any;
  

  constructor(private libraryService: LibraryService, private menu: MenuController) { }

  ngOnInit() {
    this.libraryService.getBooks().then(books => {
      this.books = books;
      this.menu.close();
    })
  }

}
