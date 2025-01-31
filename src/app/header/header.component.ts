import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {  

  joinPath: string = 'https://www.starbucks.com/rewards/mobile-apps'

  screenW!: number
  @HostListener('window:resize')
  onResize() {
    this.screenW = window.innerWidth
  }

  ngOnInit(): void {
    this.screenW = window.innerWidth  
  }

  /* Efecto 'sticky-top' del elemento Banner */
  isSticky: boolean = false
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.isSticky = window.scrollY > 100 ? true : false    
  }
}