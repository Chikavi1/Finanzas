import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PromotionPage } from '../promotion/promotion.page';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {

  promotions = [
    {
      title: 'Promoción 1',
      description: 'ass',
      image: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg'
    },
    {
      title: 'Promoción 2',
      description: 'ass',
      image: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg'
    },
    {
      title: 'Promoción 3',
      description: 'ass',
      image: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg'
    },
    {
      title: 'Promoción 4',
      description: 'ass',
      image: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg'
    },
    {
      title: 'Promoción 5',
      description: 'ass',
      image: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg'
    },
  ]

  constructor(private modalController: ModalController) { }

  openPromotion() {
      this.modalController.create({
        component: PromotionPage,
        cssClass: 'my-custom-class',
        componentProps: {
          'id': '10',
        }
      })
      .then(modal => {
        modal.present();
      });
    
  }
 
  ngOnInit() {
  }

}
