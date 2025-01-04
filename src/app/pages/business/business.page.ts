import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VisitsbyUsersByBusinessPage } from '../visitsby-users-by-business/visitsby-users-by-business.page';
import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  business:any = {
    name: "KFC",
    category: "Fast food",
    image: "https://www.shutterstock.com/image-vector/kfc-logo-icon-art-design-260nw-2269871217.jpg",
    background: "#c51f33",
    foreground: "white",
    address: "Calle 1 # 2-3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente nesciunt quidem ducimus asperiores, rem similique explicabo fugit doloribus, provident culpa possimus rerum fuga enim! Dolore ipsa eius enim quasi.",
    social_media: [
      {
        name: "Facebook",
         url: "https://www.facebook.com"
      },
      {
        name: "Instagram",
         url: "https://www.instagram.com"
      },
      {
        name: "tiktok",
         url: "https://www.twitter.com"
      }
    ],
    menu_url: "https://www.kfc.com.mx/menu",
    hours: "10:00 - 20:00"

  }
  constructor(private modalController: ModalController) { }
  menu = "info"
  ngOnInit() {
  }

  goToPromotion(){
    this.modalController.create({
      component: VisitsbyUsersByBusinessPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

  async openWeb(url:string) {
    await Browser.open({ url: url });
  }

  goBack() {
    this.modalController.dismiss();
  }


  shareApp(){
    Share.share({
      title: 'Gana Recompensas con Nuestra App de Fidelización',
      text: ' Únete a la app y acumula puntos en tus lugares favoritos',
      url: 'https://ionicframework.com/',
    });
  }

  
 
    
}
