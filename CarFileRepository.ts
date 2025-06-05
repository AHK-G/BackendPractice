import { CarRepository } from "./CarRepository";
import { Car } from "./Car";
import { promises } from "dns";

export class CarFileRepository implements CarRepository {

  async getAll(): Promise<Car[]> {
    const cars: Car[] = [];
    try {
      const bmw = new Car(1,"bmw", "3er", 12);
      bmw.getBrand();
      cars.push(bmw);
      return cars;
    } catch (err) {
      console.error("Error in getAll:", err);
      throw err;
    }
  }

  async getById(): Promise<Car>{
    const cars = await this.getAll();
    cars.forEach(car => {
        
    })
  }


  test(): Array {

    let array = [1,2,3];

   

    return [];
   }
 
}
