import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  date: string;
  movements: any[] = [];
  filteredMovements: any[] = [];

  constructor(private datePipe: DatePipe,private modalCtrl: ModalController) {}

  ngOnInit() {
    // Inicializar la fecha con la fecha actual (sin hora)
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd')!;
    
    // Obtener los movimientos almacenados en localStorage
    const storedMovements = localStorage.getItem('movements');
    if (storedMovements) {
      try {
        this.movements = JSON.parse(storedMovements);
      } catch (error) {
        console.error('Error al parsear los movimientos:', error);
      }
    }

    // Filtrar los movimientos del día actual
    this.filterMovements(this.date);
  }

  // Función para filtrar los movimientos según la fecha seleccionada
  filterMovements(date: string) {
    this.filteredMovements = this.movements.filter((movement) => {
      const movementDate = this.datePipe.transform(new Date(movement.date), 'yyyy-MM-dd');
      return movementDate === date;
    });
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

  // Evento para manejar cambios en la selección de fecha
  onDateChange(event: any) {
    this.filterMovements(event.detail.value);
  }
}
