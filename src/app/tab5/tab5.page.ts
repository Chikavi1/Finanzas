import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DebtPage as show } from '../pages/show/debt/debt.page';
import { DebtPage as create } from '../pages/create/debt/debt.page';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  debts:any = [];
  total = 0;
  constructor(
    private router: Router,
    private modalController: ModalController) { }

  ngOnInit() {
    this.getDebts();
  }

  getDebts() {
    let debts = localStorage.getItem('debts') || '[]';
    this.debts =  JSON.parse(debts).reverse()
  
    this.debts.forEach(debt => {
      this.total +=  parseInt( debt.amount );
    })
  }

  goToDebt(debt) {
    this.modalController.create({ component: show, cssClass: 'my-custom-class', componentProps: { debt: debt } }).then( modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
        if(result.data) {
          this.getDebts()
        }
      })
    })
  }

  addDebt() {
    this.modalController.create({ component: create, cssClass: 'my-custom-class' }).then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
        if(result.data) {
          this.getDebts()
        }
      });
    });
  }

}
