import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { StepsComponent } from "./steps/steps.component";
import { CommonModule } from '@angular/common';
import { FavsComponent } from "./favs/favs.component";
import { ExtrasComponent } from "./extras/extras.component";
import { PaymentComponent } from "./payment/payment.component";
import { RewardsComponent } from "./rewards/rewards.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-content',
  imports: [CommonModule, HeaderComponent, StepsComponent, FavsComponent, ExtrasComponent, PaymentComponent, RewardsComponent, FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
   
}
