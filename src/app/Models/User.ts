export class User{
     name: string|undefined
     gender: string |undefined
     subType:string|undefined
     status:string|undefined

      constructor(name : string|undefined, gender: string|undefined, subType:string|undefined,status:string|undefined){
          this.name = name;
          this.gender = gender;
          this.subType = subType;
          this.status = status;
     

      }



}