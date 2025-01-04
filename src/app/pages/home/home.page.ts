import { Component, OnInit } from '@angular/core';
import { MapPage } from '../map/map.page';
import { ModalController } from '@ionic/angular';
import { BusinessPage } from '../business/business.page';
import { NotificationsPage } from 'src/app/components/notifications/notifications.page';
import { UqrPage } from '../uqr/uqr.page';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  recommends: any = [];

  constructor(private modalController: ModalController) {


    this.recommends = [
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

  openMap(){
    this.modalController.create({
      component: MapPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
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

  goNotifications(){
    this.modalController.create({
      component: NotificationsPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

  openQR(){
    this.modalController.create({
      component: UqrPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

  shareApp(){
    Share.share({
      title: 'Gana Recompensas con Nuestra App de Fidelización',
      text: ' Únete a la app y acumula puntos en tus lugares favoritos',
      url: 'https://ionicframework.com/',
    });
  }

}
