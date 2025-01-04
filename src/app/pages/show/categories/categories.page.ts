import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

   selectedEmoji: string = 'santa';  
  showEmojiPicker: boolean = false;  

  addEmoji(event: any) {
    this.selectedEmoji = event.emoji.id; 
    this.showEmojiPicker = false;
  }

  openEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;    
  }


  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }


  i18nEs = {
    search: 'Buscar',
    emojilist: 'Lista de emojis',
    notfound: 'No se encontraron emojis',
    clear: 'Limpiar',
    categories: {
      search: 'Resultados de búsqueda',
      recent: 'Usados con frecuencia',
      people: 'Caritas y Personas',
      nature: 'Animales y Naturaleza',
      foods: 'Comida y Bebida',
      activity: 'Actividad',
      places: 'Viajes y Lugares',
      objects: 'Objetos',
      symbols: 'Símbolos',
      flags: 'Banderas',
      custom: 'Personalizados',
    },
    skintones: {
      1: 'Tono de piel predeterminado',
      2: 'Tono de piel claro',
      3: 'Tono de piel claro medio',
      4: 'Tono de piel medio',
      5: 'Tono de piel oscuro medio',
      6: 'Tono de piel oscuro',
    },

  }

  goBack() {
    this.modalCtrl.dismiss();
  }

}
