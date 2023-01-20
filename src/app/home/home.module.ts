import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { BestFoodComponent } from './components/best-food/best-food.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    MenuComponent,
    BestFoodComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
