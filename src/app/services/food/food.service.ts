import { Injectable } from '@angular/core';
import { Food } from './../../shared/models/Food';
import { Tag } from './../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags(): Tag[] {
    return [
      { name: "ALl", count: 14 },
      { name: "FastFood", count: 4 },
      { name: "Lunch", count: 3 },
      { name: "Dinner", count: 2 },
      { name: "Buffet", count: 9 },
      { name: "Tea", count: 5 },
    ]

  }

  getAllFoodsByTag(tag: string): Food[] {
    if (tag == "All")
      return this.getAll();
    else
      return this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: "Pizza pepperoni",
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: "Chicken Burger",
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 3,
        name: "Chicken Salad",
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['Pizza', 'Lunch'],
      },
      {
        id: 4,
        name: "Black Burger",
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        origins: ['italy', 'Mexican'],
        stars: 4.5,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 4,
        name: "Pizza pepperoni",
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Lunch'],
      },
    ]
  }
}
