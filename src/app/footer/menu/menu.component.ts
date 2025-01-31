import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [ CommonModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {  

  screenW!: number
  @HostListener('window:resize')
  onResize() {
    this.screenW = window.innerWidth
  }

  ngOnInit(): void {
    this.screenW = window.innerWidth
  }
}
