import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "./modal/modal.component";

@Component({
  selector: 'app-extras',
  imports: [CommonModule, ModalComponent],
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.scss'
})
export class ExtrasComponent {

  imgPath: string = environment.extraImgPath

  selectedIndex!: number

  cardContent: any[] = [
    { src: `${this.imgPath}1-fun-freebies.jpg`, title: 'Fun freebies', text: 'Not only can you earn free food, drinks and more, look forward to a birthday treat on us.'},
    { src: `${this.imgPath}2-order-and-pay-ahead.jpg`, title: 'Order & pay ahead', text: 'Master the art of ordering ahead with saved favorites and payment methods.'},
    { src: `${this.imgPath}3-get-to-free-faster.jpg`, title: 'Get to free faster', text: 'Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.'}
  ]
}
