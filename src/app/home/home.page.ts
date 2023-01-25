import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';
import { BooksModalPage } from '../books-modal/books-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authors: any;
  booksOff: any;

  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  }
 
  constructor(private navCtrl: NavController, private libraryService: LibraryService, private modalController: ModalController) {}
 
  goTointro(){
    this.navCtrl.navigateForward('/intro');
  }

  ionViewDidEnter(){
    this.libraryService.getAuthors().then( res => {
      this.authors = res
      console.log(this.authors)
    })

    this.booksOff = this.libraryService.getBooksOffline();
    console.log(this.booksOff.books)
  }

  async showBooks(author: any){
        const modal = await this.modalController.create({
        component: BooksModalPage,
        componentProps: {
        author: author
        }
     })
     return await modal.present();
  }

}
