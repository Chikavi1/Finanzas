import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.page.html',
  styleUrls: ['./promotion.page.scss'],
})
export class PromotionPage implements OnInit {
  id: any;
  promotion: any = {
    image: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg',
    title: '2X1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, suscipit.',
    terms: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, suscipit.',
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.id);
  }

  async openPromotion() {
    const modal = await this.modalController.create({
      component: PromotionPage,

    });
    return await modal.present();
  } 

  close(){
    this.modalController.dismiss();
  }
}
