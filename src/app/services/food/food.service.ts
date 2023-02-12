import { Injectable } from '@angular/core';
import { Food } from './../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      // '/assets/images/food-1.jpg',
      // '/assets/images/food-2.jpg',
      // '/assets/images/food-3.jpg',
      // '/assets/images/food-5.jpg',
      // '/assets/images/food-6.jpg',
      {
        id: 1,
        name: "Pizza pepperoni",
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 1,
        name: "Pizza pepperoni",
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 1,
        name: "Pizza pepperoni",
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 1,
        name: "Pizza pepperoni",
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 1,
        name: "Pizza pepperoni",
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
}
