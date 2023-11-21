import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [CommonModule, FormsModule, UserDetailComponent, UserListComponent]
})
export class AdminComponent {


  name: any = '';
  gender: any = 'Male';
  subType: any = 'Yearly';
  status: any = 'Active';
}