import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-modal',
  imports: [ CommonModule ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {  
  @Input() index!: number

  imgPath: string = environment.extraImgPath
  carouselContent: any[] = [
    [
      { src: `${this.imgPath}1A.jpg`, title: 'Free food, drinks & more', text: 'Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler.' },
      { src: `${this.imgPath}1B.jpg`, title: 'Complimentary birthday treat', text: 'Every year on your birthday get a free drink or food item of your choice.' },
      { src: `${this.imgPath}1C.jpg`, title: 'Our best offers, all in the app', text: 'Make the most of every visit. You’ll find chances to earn Bonus Stars and more in your Offers tab.' }
    ],
    [
      { src: `${this.imgPath}2A.jpg`, title: 'Tap, go.', text: 'Select your menu items in the app along with your store location. Then tell the barista your name when you swing by the pickup area to grab your order.' },
      { src: `${this.imgPath}2B.jpg`, title: 'Just for you', text: 'Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.' }
    ],
    [
      { src: `${this.imgPath}3A.jpg`, title: 'Bonus Star challenges', text: 'Rack up the Stars6 with regular opportunities to get rewarded for what you love.' },
      { src: `${this.imgPath}3B.jpg`, title: 'Double Star Days', text: 'Watch for those special days where you’ll earn twice the Stars on almost everything.' },
      { src: `${this.imgPath}3C.jpg`, title: 'Member-only games', text: 'Play for a chance to win exclusive prizes, free food and drinks, and more.' }
    ]
  ]
}