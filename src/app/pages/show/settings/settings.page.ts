import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private modalCtrl: ModalController,private alertController: AlertController) { }
 user: any = {
    name: 'Luis Rojas',
    gender: 'Masculino',
    email: 'luisrojasradi.pet',
    image: 'https://i.pinimg.com/474x/e6/7d/3e/e67d3e2c8a0d4a5b0f4e0d8d3a7b4b6c.jpg',
    date: '10 de marzo del 1999',
    cellphone: '+569 12345678',
    type: 'Cliente',
 };
  
  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

    async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmar Cierre de Sesión',
      message: '¿Estás seguro de que deseas Eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Usuario canceló el cierre de sesión');
          }
        },
        {
          text: 'Eliminar',
          cssClass: 'danger-button',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  logout() {
    localStorage.removeItem('isLoggedin');
   }
}
