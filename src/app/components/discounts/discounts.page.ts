import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.page.html',
  styleUrls: ['./discounts.page.scss'],
})
export class DiscountsPage implements OnInit {
  
  title;
  description;
  terms;

  constructor(private modalController: ModalController) { }
    selectedImage;
  ngOnInit() {
  }

 async openGallery() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });

    this.selectedImage = image.webPath;  
  }
  goBack() {
    this.modalController.dismiss();
  }

  create() {
        this.modalController.dismiss();

  }

}
