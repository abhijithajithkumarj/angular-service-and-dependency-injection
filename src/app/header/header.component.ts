import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { subscribeService } from '../Services/subscribe.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, AdminComponent, HomeComponent]
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked() {
    this.selectedTab = 'home';
  }

  AdminClicked() {
    this.selectedTab = 'admin';
  }
  OnSubcrib(){
    let subService=new subscribeService();
    subService.OnSubscribeClicked('Mothily')


  }
}
