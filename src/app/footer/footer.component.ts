import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { BottomComponent } from "./bottom/bottom.component";

@Component({
  selector: 'app-footer',
  imports: [MenuComponent, BottomComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
