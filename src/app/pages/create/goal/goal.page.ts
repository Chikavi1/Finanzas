import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
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


}
