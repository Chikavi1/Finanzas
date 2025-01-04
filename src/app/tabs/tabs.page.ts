import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  type:any = "business";

  constructor() {
    // this.type = localStorage.getItem('user_type')
  }

}
