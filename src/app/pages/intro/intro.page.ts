import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  step = 1;
  constructor(private router:Router ) { }

  ngOnInit() {
  }

  skip() {
    this.step = 3;
  }

  next() {
    this.step++;
  
    if (this.step == 4) {
        localStorage.setItem('intro', 'true');

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      
    }

  }

}
