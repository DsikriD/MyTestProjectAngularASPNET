import { ApplicationType } from "./applicationtype.mode";
import { Category } from "./category.mode";

export interface Product {
  id: number,
  name: string,
  shortDes: string,
  description: string,
  price: number,
  image: string,
  categoryId: number,
  applicationTypeId:number,
  tempCount: number


  //"id": 8,
  //"name": "Prod",
  //"shortDes": "Prod",
  //"description": "Prod",
  //"price": 123,
  //"image": "Prod",
  //"categoryId": 32,
  //"category": null,
  //"applicationTypeId": 1,
  //"applicationType": null,
  //"tempCount": 1
}
