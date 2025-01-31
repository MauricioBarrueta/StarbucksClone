import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [ CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {  

  screenW!: number
  @HostListener('window:resize')
  onResize() {
    this.screenW = window.innerWidth
  }

  ngOnInit(): void {
    this.screenW = window.innerWidth
  }
}