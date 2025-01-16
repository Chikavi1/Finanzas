import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.page.html',
  styleUrls: ['./debt.page.scss'],
})
export class DebtPage implements OnInit {

  name = '';
  amount = 0;
  description;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    if (this.data) {
      this.name = this.data.name;
      this.amount = this.data.amount;
      this.description = this.data.description;
    }
  }

  close(){
    this.modalCtrl.dismiss();
  }

  create() {
    let data = {
      id: new Date().getTime().toString(),
      name: this.capitalizeFirstLetter(this.name),
      description: this.description,
      amount: this.amount
    }

    const debts = localStorage.getItem('debts') || '[]';
    let debt = JSON.parse(debts);
    debt.push(data);
    localStorage.setItem('debts', JSON.stringify(debt));
    this.modalCtrl.dismiss(true);
  }

  data;
  update() {
    
    const debts = localStorage.getItem('debts');
    let items = JSON.parse(debts);
    items.forEach(element => {
      if (element.id == this.data.id) {
        element.name = this.name;
        element.amount = this.amount;
      }
    });
    localStorage.setItem('debts', JSON.stringify(items));
    this.modalCtrl.dismiss(true);

  }

  capitalizeFirstLetter(str: string): string {
    if (!str) return str;  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
