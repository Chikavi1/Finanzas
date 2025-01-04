import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UqrPage } from '../uqr/uqr.page';
import { BusinessPage } from '../business/business.page';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {



  wallet:any = [];

  constructor(private modalController:ModalController) {

    this.wallet = [
      {
        title: 'Starbucks',
        image: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg',
        background: '#026d4e',
        foreground: 'white'
      },
      {
        title: 'KFC',
        image: 'https://www.shutterstock.com/image-vector/kfc-logo-icon-art-design-260nw-2269871217.jpg',
        background: '#c51f33',
        foreground: 'white'
      },
    ]
   }

  ngOnInit() {
  }

  goToBusiness(){
    this.modalController.create({
      component: BusinessPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

  showQR(){
    this.modalController.create({
      component: UqrPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

}
