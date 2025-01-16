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
   
  setType(t) {
  
    this.categoriesSelected = [];

    this.method = null;
    this.clearAllTypesSelected();
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
  description;
  growth_type = 'saving';

  step = 1;

  next() {
    this.generateTextInfo();
    this.step++;
  }

  selectCard(card) {
    this.card = null
    this.card = card;
    this.cardSelected = card.id
  }

  selectGoal(goal) {
    this.goal = null;
    this.goal = goal;
    this.goalSelected = goal.id
  }

  selectDebt(debt) {
    this.debt = null;
    this.debt = debt
    this.debtSelected = debt.id
  }

  disminuyeDeuda: boolean = true;  

  updateDebtMode() {
    console.log(this.disminuyeDeuda? "Aumentar deuda" : "Disminuir deuda");
  }

  
  setGrowthType(t) {
    this.growth_type = t;
  }

  ngOnInit() {
    this.textDone = (this.type == 'expense') ? 'Agregar Gasto' : 'Agregar Ingreso'
  }

  clearAllTypesSelected() {
    this.cardSelected = null;
    this.goalSelected = null;
    this.debtSelected = null;
  }


  setIsSelectedCategories() {
    this.IsSelectedCategories = !this.IsSelectedCategories;
  }

  setMethod(option: string) {
    this.method = null;
    this.method = option;
  }

  add() {
    let amount = parseFloat((this.type == 'expense' || this.type == 'debt' || this.type == 'goal') ? this.amount * -1 : this.amount);
    
    let newMovement = {
        id: new Date().getTime().toString(),
        name: this.capitalizeFirstLetter(this.name),
        method: this.method,
        description: this.description,
        amount: amount,
        date: this.selectedDateTime || new Date(),
        type: this.type,
        card: this.cardSelected || null,
        goal: this.goalSelected || null,
        debt: this.debtSelected || null,
        categories: this.categoriesSelected || null
    }


    console.log('movimiento creado',newMovement)

    // this.playAudioWithWebAPI();
  
    const movements = localStorage.getItem('movements') || '[]';
    let movement = JSON.parse(movements);
    movement.push(newMovement);

    localStorage.setItem('movements', JSON.stringify(movement));

    this.modalCtrl.dismiss(newMovement)
  }

  close() {
     this.modalCtrl.dismiss();
  }

  showDescription = false;
  addDescription() {
    this.showDescription = !this.showDescription;
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
    }

  toggleType() {
    // this.type = (this.type == 'expense') ? 'income' : 'expense';
    // this.textDone = (this.type == 'expense') ? 'Agregar Gasto' : 'Agregar Ingreso'
    this.textDone = "Agregar movimiento"
  }

  debitCards = [];
  creditCards = [];

  getCards() {
    let cards = localStorage.getItem('cards') || '[]';
    this.cards = JSON.parse(cards).reverse()
    this.cards.forEach(element => {
        if(element.type == 'credit') {
          this.creditCards.push(element)
        } else {
          this.debitCards.push(element)
        }
    });
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

  back() {
    this.step--;
  }
  
 methodTextGenerate(method, data) {
  switch (method) {
    case 'cash':
      return 'Efectivo';

    case 'debit':
      return `tu Tarjeta de débito ${data.name} ****${data.last4}`;

    case 'credit':
      return `tu Tarjeta de crédito ${data.name} ****${data.last4}`;

    case 'paypal':
      return 'PayPal';

    default:
      return 'un método desconocido';
  }
}


  generateTextInfo() {
  if (this.type === 'expense') {
    this.textInfo = `Gastaste $${this.amount} en ${this.capitalizeFirstLetter(this.name)} pagando con ${this.methodTextGenerate(this.method, this.card)}.`;
  }

  if (this.type === 'income') {
    this.textInfo = `Obtuviste $${this.amount} mediante ${this.methodTextGenerate(this.method, this.card)}.`;
  }

  if (this.type === 'debt') {
    console.log(this.disminuyeDeuda, this.debt)
    if (this.disminuyeDeuda) {
      this.textInfo = `Disminuiste tu deuda con ${this.debt.name} pagando $${this.amount} usando ${this.methodTextGenerate(this.method, this.card)}.`;
    } else {
      this.textInfo = `Aumentaste tu deuda con ${this.debt.name} al obtener $${this.amount} mediante ${this.methodTextGenerate(this.method, this.card)}.`;
    }
  }

  if (this.type === 'goal') {
    const action = this.growth_type === 'saving' || this.growth_type === 'investment' 
      ? 'Ahorraste' 
      : 'Destinaste';

    this.textInfo = `${action} $${this.amount} a ${this.goal.name} usando ${this.methodTextGenerate(this.method, this.card)}.`;
  }
}

  capitalizeFirstLetter(str: string): string {
    if (!str) return str;  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
