import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  
  name:string = ''
  type = 'credit'
  last4= '';
  balance = 0;
  limit = 0;
  color;
  credit_spent = 0;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  create() {
    let data = {
      id: new Date().getTime().toString(),
      name: this.capitalizeFirstLetter(this.name),
      type: this.type,
      last4: this.last4,
      balance: this.balance,
      limit: this.limit,
      color: this.color,
      credit_spent: this.credit_spent
    }

    const cards = localStorage.getItem('cards') || '[]';
    let card = JSON.parse(cards);
    card.push(data);
    localStorage.setItem('cards', JSON.stringify(card));
    this.modalCtrl.dismiss(true);
  }


  validateInput(event: any) {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
  }

  capitalizeFirstLetter(str: string): string {
    if (!str) return str;  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
