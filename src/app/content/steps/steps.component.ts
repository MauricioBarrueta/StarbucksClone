import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steps',
  imports: [ CommonModule ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent implements OnInit {
  
   screenW!: number
  @HostListener('window:resize')
  onResize() {
    this.screenW = window.innerWidth
  }
  ngOnInit(): void {
    this.screenW = window.innerWidth
  }

  mainPath: string = environment.mainPath
  imgPath: string = environment.imgPath
  cardContent: any[] = [
    { img: 'getting-started-1@2x.jpg', title: 'Create an account', text: `To get started, <a class="step_link" href="${this.mainPath}account/create" target="_blank">join now</a>. You can also <a class="step_link" href="https://starbucks.app.link/VLa2I3inh9" target="_blank">Join in the app</a> to get access to the full range of Starbucks® Rewards benefits.` },
    { img: 'getting-started-2@2x.jpg', title: "Order and pay how you'd like", text: `Use cash, credit/debit card or save some time and pay right through the app. You'll collect Stars all ways. <a class="step_link" href="${this.mainPath}rewards#waystopay">Learn how</a>` },
    { img: 'getting-started-3@2x.jpg', title: 'Earn Stars, get Rewards', text: 'As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!' }
  ]
}
