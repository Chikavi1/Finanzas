import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recurrent',
  templateUrl: './recurrent.page.html',
  styleUrls: ['./recurrent.page.scss'],
})
export class RecurrentPage implements OnInit {

  name = '';
  selectCategories = [];
  method;
  type = "expense";
  card;
  goal;
  debt;
  amount;
  type_recurrent = "weekly";
  days_recurrent = ["monday"]

  step = 1;
 
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

  back() {
    this.step--;
  }

  next() {
    this.step++;
  }

  add() {
    
    let data = {
      id_recurrent: new Date().getTime().toString(),
      name: this.capitalizeFirstLetter(this.name),
      category: this.selectCategories,
      method: "cash",
      type: this.type,
      card: null,
      goal: null,
      debt: null,
      amount: this.amount,
      recurrence: {
        type: this.type_recurrent,
        days: this.days_recurrent
      }
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
