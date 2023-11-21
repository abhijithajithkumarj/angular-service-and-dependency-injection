import { Injectable } from "@angular/core";
import { User } from "../Models/User";




@Injectable()
export class UserService{

     user :User[]=[

          new User('Abhijith ','Male','Montily','Active'),
          new User ('Emil','Male','Montily','Active'),

     ];



     getAllUser(){
          return this.user;
     }

     CreateUser(name:string|undefined,gender:string|undefined,subType:string|undefined,status:string|undefined){
     let user=new User(name,gender,subType,status)
     this.user.push(user);
     }
}