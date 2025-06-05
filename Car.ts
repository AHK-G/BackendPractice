import { threadId } from "worker_threads";

export class Car {
  id: number = 0;
  private brand: string;
  model: string;
  year: number;

  constructor(id: number, brand: string, model: string, year: number) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.year = year;
  }


//   public test(): string{
//     return "im here"
//   }


public  getBrand(): string{
  return this.brand;
} 

}


