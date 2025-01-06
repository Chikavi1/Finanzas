import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  @Input() selectedCategories: { id: number; name: string; emoji: string }[] = [];
  @Input() mode: 'view' | 'select' = 'select'; // Modo del componente

  showEmojiPicker: boolean = false;
  categories = [
    { id: 1, emoji: 'dollar', name: 'Ingreso' },
    { id: 2, emoji: 'shopping_trolley', name: 'Supermercado' },
    { id: 3, emoji: 'taco', name: 'Comida' },
    { id: 4, emoji: 'house', name: 'Renta' },
    { id: 5, emoji: 'electric_plug', name: 'Servicios' },
    { id: 6, emoji: 'iphone', name: 'Celular' },
    { id: 7, emoji: 'fuelpump', name: 'Combustible' },
    { id: 8, emoji: 'bus', name: 'Transporte' },
    { id: 9, emoji: 'shirt', name: 'Ropa' },
    { id: 10, emoji: 'shower', name: 'Baño' },
    { id: 11, emoji: 'pill', name: 'Salud' },
    { id: 12, emoji: 'car', name: 'Mantenimiento de Auto' },
    { id: 13, emoji: 'mortar_board', name: 'Educación' },
    { id: 14, emoji: 'gift', name: 'Regalos' },
    { id: 15, emoji: 'airplane', name: 'Viajes' },
    { id: 16, emoji: 'dog', name: 'Mascotas' },
    { id: 17, emoji: 'ticket', name: 'Entretenimiento' },
    { id: 18, emoji: 'man-lifting-weights', name: 'Gimnasio' },
    { id: 19, emoji: 'bank', name: 'Ahorros' },
    { id: 20, emoji: 'credit_card', name: 'Deudas' },
  ];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  toggleSelection(category) {
    const index = this.selectedCategories.findIndex((c) => c.id === category.id);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(category);
    }
  }

  isSelected(category) {
    return this.selectedCategories.some((c) => c.id === category.id);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      selectedCategories: this.selectedCategories,
    });
  }

  goBack() {
    this.modalCtrl.dismiss();
  }
}
