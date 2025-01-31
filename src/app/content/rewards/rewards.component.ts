import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rewards',
  imports: [ CommonModule ],
  templateUrl: './rewards.component.html',
  styleUrl: './rewards.component.scss'
})
export class RewardsComponent {

  imgPath: string = environment.rewardsImgPath

  cardContent: any[] = [
    { src: `${this.imgPath}delta-skymiles.png`, text: `<a class="step_link" href="https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042" target="_blank">Link your Delta SkyMiles® <span>&#xf08e;</span></a> and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.` },
    { src: `${this.imgPath}bank-of-america.png`, text: `<a class="step_link" href="https://promotions.bankofamerica.com/starbucks?cm_mmc=ESZ-EnterpriseSales-_-Cobrand_Site-_-ES35LT0004_StarbucksRewardsModuleBofA_SRModuleBofA-_-StarbucksPartnerMktg" target="_blank">Link your Bank of America <span>&#xf08e;</span></a> eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.` },
    { src: `${this.imgPath}marriott-bonvoy/marriott-logo.png`, text: `<a class="step_link" href="https://www.starbucks.com/rewards/partnerships/marriottbonvoy" target="_blank">Link your Marriott Bonvoy® <span>&#xf08e;</span></a> and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.3` }
  ]
  
}
