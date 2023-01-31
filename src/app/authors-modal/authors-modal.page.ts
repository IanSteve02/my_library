import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-authors-modal',
  templateUrl: './authors-modal.page.html',
  styleUrls: ['./authors-modal.page.scss'],
})
export class AuthorsModalPage implements OnInit {
   filterAuthors: any;
  constructor(private modalController: ModalController, private libraryService: LibraryService, private navParams: NavParams) { }

  ngOnInit() {
    this.getAuthorData()
  }

  getAuthorData(){
    this.filterAuthors = this.navParams.get("author")
    console.log(this.filterAuthors)

  }
  
  closeModal(){
    this.modalController.dismiss();
  }

}
