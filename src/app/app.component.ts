import { Component } from '@angular/core';
// imports our component file from angular core

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  [x: string]: any;
  calorieItems: CalorieItem[] = [
    // calorie items is an array of items which are already printed on the body.
    {
      title: 'Regular-Pizza(click on me to remove me)',
      calories: 240,
    },
  ];

  currentTitle: string = ''; // so that our input value gets stored as a string.
  currentCalories: number = 0; // so that our input value gets stored as a number.

  onChangeTitleInput(event: any) {
    // event any means it can be a string, number or a boolean.
    const title = event.target.value; // stores input value as whatever gets printed in the input box of title.
    this.currentTitle = title; // prints input value of title to the ul.
  }
  onChangeCaloriesInput(event: any) {
    const calories = event.target.value; // stores calories value as whatever no. is printed in the calories input.
    this.currentCalories = +calories; // prints calories value to the ul. + sign indicates a number we can use parseInt
  }
  onAddItem() {
    const newItem: CalorieItem = {
      // CalorieItem that is an array take in a new item. which is stores in a variable.
      title: this.currentTitle, // whatever is printed in title value.
      calories: this.currentCalories, // whatever is printed in calories value.
    };
    this.calorieItems = [...this.calorieItems, newItem];
    this.currentCalories = 0;
    this.currentTitle = '';
    /* implies that ...this.calorieItems stays in the ul
     that is an already existing array of items. new Item means new items are appended to the li and added to the ul*/
  }

  onRemoveItem(index: number) {
    const newCalorieItems = this.calorieItems.filter(
      (item, i) => i !== index
    ); /* when we remove an item from the 
    array of items we only remove the item that is specified by the input not by type */
    this.calorieItems = newCalorieItems; // this is called reassigning an array. because like push filter doesnt reassign an array in angular
  }
  getTotalCalories(): number {
    let sum = 0;
    for (let i = 0; i < this.calorieItems.length; i++) {
      sum += this.calorieItems[i].calories; // to create a total sum a calories we simply loop over an array and return the sum
    }
    return sum;
  }
}

type CalorieItem = {
  title: string;
  calories: number;
};
