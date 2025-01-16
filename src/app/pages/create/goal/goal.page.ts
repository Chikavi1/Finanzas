import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  data;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    if (this.data) {
      this.name = this.data.name;
      this.amount = this.data.amount;
    }
  }

  close(){
    this.modalCtrl.dismiss();
  }
  name = '';
  amount = 0;

  create() {
    let data = {
      id: new Date().getTime().toString(),
      name: this.capitalizeFirstLetter(this.name),
      amount: this.amount
    }
    const goals = localStorage.getItem('goals') || '[]';
    let goal = JSON.parse(goals);
    goal.push(data);
    localStorage.setItem('goals', JSON.stringify(goal));
    this.modalCtrl.dismiss(true);
    }

  showEmojiPicker = false;
  openEmojiPicker() {
    
  }

  selectedEmoji = 'santa';
  addEmoji(event: any) {
    
  }

  capitalizeFirstLetter(str: string): string {
    if (!str) return str;  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

 
  update() {
   const goals = localStorage.getItem('goals') || '[]';
   let goal = JSON.parse(goals);

   const element = goal.find((el: any) => el.id === this.data.id);

   if (element) {
     
      element.name = this.name;
      element.amount = this.amount;

      localStorage.setItem('goals', JSON.stringify(goal));
    }

    this.modalCtrl.dismiss(true);
  }

}
