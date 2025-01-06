import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recurrent',
  templateUrl: './recurrent.page.html',
  styleUrls: ['./recurrent.page.scss'],
})
export class RecurrentPage implements OnInit {

  name = '';
  amount;
  each;
  type;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

  add() {
    
    let data = {
      id: new Date().getTime().toString(),
      name: this.capitalizeFirstLetter(this.name),
      amount: this.amount,
      each: this.each,
      type: this.type
    }


  const recurrents = localStorage.getItem('recurrents') || '[]';
    let recurrent = JSON.parse(recurrents);
    recurrent.push(data);
    localStorage.setItem('recurrents', JSON.stringify(recurrent));
    this.modalCtrl.dismiss(data);
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
