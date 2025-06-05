import {Car} from "./Car.ts"
export interface CarRepository {
    getAll(): Promise<Car[]>
    getById(id: number): Promise<Car | null>
    // add(car: Omit<Car, 'id'>): Promise<Car>
    // update(id: number, car: Partial<Omit<Car, 'id'>>): Promise<Car | null>
    // delete(id: number): Promise<boolean>
  }
  