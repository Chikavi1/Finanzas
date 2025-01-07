import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecurrentMovementsService {
  private movements: any[] = [];

  constructor() {}

  registerMovement(movement: any) {
    const today = new Date().toISOString();
    delete movement.id_recurrent;
    movement.date = today;   
    movement.id = new Date().getTime().toString();

    this.movements = localStorage.getItem('movements') ? JSON.parse(localStorage.getItem('movements') || '[]') : [];
    this.movements.push(movement);
    localStorage.setItem('movements', JSON.stringify(this.movements))
    console.log('Movement registered:', movement);
  }

  processRecurrences(initialMovements: any[]) {
    const today = new Date();
    const dayOfWeek = today.toLocaleString('en-US', { weekday: 'long' }).toLowerCase();  
    const dayOfMonth = today.getDate();

    initialMovements.forEach(movement => {
      const recurrence = movement.recurrence;

      switch (recurrence.type) {
        case 'weekly':
          if (recurrence.days.includes(dayOfWeek)) {
            this.registerMovement(movement);
          }
          break;

        case 'monthly':
          if (recurrence.dayOfMonth === dayOfMonth) {
            this.registerMovement(movement);
          }
          break;

        case 'biweekly':
          const startDate = new Date(recurrence.startDate);
          const diffInDays = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
          if (diffInDays % 14 === 0) {
            
            this.registerMovement(movement);
            startDate.setDate(startDate.getDate() + 14);
            recurrence.startDate = startDate.toISOString();
          }
          break;

        case 'custom':
          if (recurrence.days.includes(dayOfWeek)) {
            this.registerMovement(movement);
          }
          break;

        default:
          console.warn('Unsupported recurrence type:', recurrence.type);
      }
    });
  }

  getMovements(): any[] {
    return this.movements;
  }
}
