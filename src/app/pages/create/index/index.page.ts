import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardPage } from '../card/card.page';
import { DebtPage } from '../debt/debt.page';
import { GoalPage } from '../goal/goal.page';
import { CategoriesPage } from '../../show/categories/categories.page';
 
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  method = 'cash';
  selectedDateTime 
  type;
  IsSelectedCategories = false;


  cards: any = [];
  debts: any = [];
  goals: any = [];
  textDone;

  constructor(private modalCtrl: ModalController) { 
    this.getCards();
    this.getDebts();
    this.getGoals();

    this.amount = 0

   }

  playAudio() {
  const audio = document.getElementById('myAudio') as HTMLAudioElement;
  audio.play().catch((error) => {
    console.error('Error al reproducir el audio:', error);
  });
}
   
setType(t){
  this.type = t;
}
  

  async playAudioWithWebAPI() {
  const context = new (window.AudioContext || (window as any).webkitAudioContext)();
  const response = await fetch('../../../../assets/sounds/notification.mp3');
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await context.decodeAudioData(arrayBuffer);

  const source = context.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(context.destination);
  source.start(0);
}

  cardSelected: any;
  goalSelected: any;
  debtSelected: any;

  categoriesSelected: any = [];

  name;
  amount;
  
  card: any;
  goal: any;
  debt: any;

  selectCard(card) {
    this.card = card;
    this.cardSelected = card.id
    this.generateTextInfo();
  }

  selectGoal(goal) {
    this.goal = goal;
    this.goalSelected = goal.id
    this.generateTextInfo();
  }

  selectDebt(debt) {
    this.debt = this.debt
    this.debtSelected = debt.id
    this.generateTextInfo();
  }

  ngOnInit() {
    this.textDone = (this.type == 'expense') ? 'Agregar Gasto' : 'Agregar Ingreso'
  }


  setIsSelectedCategories() {
    this.IsSelectedCategories = !this.IsSelectedCategories;
  }

  setMethod(option: string) {
    this.method = option;
    this.generateTextInfo();
  }

  add() {
    let amount = parseFloat((this.type == 'expense' || this.type == 'debt' || this.type == 'goal') ? this.amount * -1 : this.amount);
    
    let newMovement = {
        id: new Date().getTime().toString(),
        name: this.capitalizeFirstLetter(this.name),
        method: this.method,
        amount: amount,
        date: this.selectedDateTime || new Date(),
        type: this.type,
        card: this.cardSelected || null,
        goal: this.goalSelected || null,
        debt: this.debtSelected || null,
        categories: this.categoriesSelected || null
    }


    console.log(newMovement)

    this.playAudioWithWebAPI();

  
    const movements = localStorage.getItem('movements') || '[]';
    let movement = JSON.parse(movements);
    movement.push(newMovement);

    localStorage.setItem('movements', JSON.stringify(movement));

    this.modalCtrl.dismiss(newMovement)
  }

  close() {
     this.modalCtrl.dismiss();
  }

  addCard() {
    this.modalCtrl.create({
      component: CardPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
          if (result.data) {
            this.getCards();
          }
      });        
    });
  }

  addDebt() {
    this.modalCtrl.create({
      component: DebtPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
          if (result.data) {
            this.getDebts();
          }
      });  
    });
  }

  addGoal() {
    this.modalCtrl.create({
      component: GoalPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
          if (result.data) {
            this.getGoals();
          }
      });  
    });
  }

  validateInput(event: any) {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    
    this.generateTextInfo();
  }

  toggleType() {
    // this.type = (this.type == 'expense') ? 'income' : 'expense';
    // this.textDone = (this.type == 'expense') ? 'Agregar Gasto' : 'Agregar Ingreso'
    this.textDone = "Agregar movimiento"
  }


  getCards() {
    let cards = localStorage.getItem('cards') || '[]';
    this.cards =  JSON.parse(cards).reverse()
  }

  getDebts() {
    let debts = localStorage.getItem('debts') || '[]';
    this.debts =  JSON.parse(debts).reverse()
  }

  getGoals() {
    let goals = localStorage.getItem('goals') || '[]';
    this.goals =  JSON.parse(goals).reverse()
  }

    async openCategorySelector() {
    const modal = await this.modalCtrl.create({
      component: CategoriesPage,
      componentProps: {
        categoriesSelected: this.categoriesSelected,
      },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
      if (data) {
        console.log(data);
        this.categoriesSelected = data.selectedCategories;
        console.log(this.categoriesSelected)
    }
    }
  
  textInfo;
  
  generateTextInfo() {
    
    if (this.method == 'expense') {
      this.textInfo = "Gastaste $"+this.amount
    }

    if (this.method == 'income') {
      this.textInfo = "Ganaste $"+this.amount
    }

    if (this.method == 'debt') {
      this.textInfo = "Pagaste $"+this.amount+" a "+ this.debt.name
    }

    if (this.method == 'goal') {
      this.textInfo = "Pagaste $"+this.amount+" a "+ this.goal.name
    }

    if (this.method == 'bank') {
      
      if(this.card.type == 'credit') {
        this.textInfo = "Pagaste $" + this.amount + " de tu tarjeta de credito " + this.card.name+ " **** " + this.card.last4
      } else {
        this.textInfo = "Obtuviste $" + this.amount + " de tu tarjeta de debito " + this.card.name+ " **** " + this.card.last4     
      }
    }

  }

  capitalizeFirstLetter(str: string): string {
    if (!str) return str;  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
