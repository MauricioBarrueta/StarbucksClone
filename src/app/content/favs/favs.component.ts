import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-favs',
  imports: [ CommonModule],
  templateUrl: './favs.component.html',
  styleUrl: './favs.component.scss'
})
export class FavsComponent implements OnInit {

  screenW!: number
  @HostListener('window:resize')
  onResize() {
    this.screenW = window.innerWidth
  }
  
  ngOnInit(): void {
    this.screenW = window.innerWidth  
  }

  imgPath: string = environment.favsImgPath
  content: any[] = [
    { no: '25', title: 'Customize your drink', text: 'Make your drink just right with an extra espresso shot or a dash of your favorite syrup.', src: `${this.imgPath}25.png` },
    { no: '100', title: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more', text: 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.', src: `${this.imgPath}100.png` },
    { no: '200', title: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast', text: 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.', src: `${this.imgPath}200.png` },
    { no: '300', title: 'Sandwich, protein box or at-home coffee', text: 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.', src: `${this.imgPath}300.png` },
    { no: '400', title: 'Select Starbucks® merchandise', text: 'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.', src: `${this.imgPath}400.png` },
  ]
}

