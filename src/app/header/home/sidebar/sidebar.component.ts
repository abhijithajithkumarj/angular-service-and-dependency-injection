import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';
import { subscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',

  // what to provide
  providers:[subscribeService] 
})
export class SidebarComponent {


  //How to provide
  constructor(private subService: subscribeService){

  }


  OnSubcrib(){
      this.subService.OnSubscribeClicked('Mothily')
  }

}
