import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardPage } from '../../create/card/card.page';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.page.html',
  styleUrls: ['./banks.page.scss'],
})
export class BanksPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    this.getCards();
  }

  goBack() {
    this.modalCtrl.dismiss();
  }
  
  setType(type) {
    this.isFiltered = true
    this.cards = JSON.parse(localStorage.getItem('cards')) || '[]';
    this.cards.reverse();
    if (type == 'credit') {
      this.cards = this.cards.filter(movement => movement.type == 'credit');
    } else if (type == 'debit') {
      this.cards = this.cards.filter(movement => movement.type == 'debit');
    }
  }

  isFiltered = false

   clearFilter() {
    this.isFiltered = false;
    this.getCards();
  }


  cards = [];

  getCards() { 
    let cards = localStorage.getItem('cards') || '[]';
    this.cards =  JSON.parse(cards).reverse()
  }

  
   addCard() {
    this.modalCtrl.create({
      component: CardPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
          if (result.data) {
            this.getCards();
          }
      });        
    });
  }

}
