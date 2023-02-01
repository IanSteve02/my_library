import { Component, OnInit } from '@angular/core';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';
import { LibraryService } from '../services/library.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-topbooks',
  templateUrl: './topbooks.page.html',
  styleUrls: ['./topbooks.page.scss'],
})
export class TopbooksPage implements OnInit {
  topBooks: any;

  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController,

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

  async showBook(book: any){
    const modal = await this.modalController.create({
      component: BookDetailModalPage,
      componentProps: {
        book: book
      }
    });
    return await modal.present();
  }
}
