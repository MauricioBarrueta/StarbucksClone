import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-payment',
  imports: [ CommonModule ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {

  screenW!: number
  @HostListener('window:resize')
  onResize() {
    this.screenW = window.innerWidth
  }
    
  ngOnInit(): void {
    this.screenW = window.innerWidth  
  }

  imgPath: string = environment.paymentImgPath

  row1: any[] = [
    { src: `${this.imgPath}1A.png`, title: 'Scan and pay separately', text: 'Use cash or credit/debit card at the register.' },
    { src: `${this.imgPath}1B.png`, title: 'Save payment in the app', text: 'Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.' }  
  ]  
  row2: any[] = [
    { src: `${this.imgPath}2A.png`, title: 'Preload', text: 'To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.' },
    { src: `${this.imgPath}2B.png`, title: 'Register your gift card', text: 'Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.' }
  ]
}