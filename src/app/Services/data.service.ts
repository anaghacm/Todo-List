import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    this.getData()
  }

  // list: any
  getData() {
    // if (id == -1) {
    localStorage.removeItem('id')
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(r => r.json())
      .then(j => { localStorage.setItem('todo', JSON.stringify(j)); });
    // }
    // else {
    //   localStorage.removeItem('todo')
    //   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //     .then(r => r.json())
    //     .then(j => { localStorage.setItem('id', JSON.stringify(j)); });
    // }
    // return true
  }

  // getDetails() {
  //   if (localStorage.getItem('id')) {
  //     this.list = JSON.parse(localStorage.getItem('id') || '')
  //   }
  //   if (localStorage.getItem('todo')) {
  //     this.list = JSON.parse(localStorage.getItem('todo') || '')
  //   }
  // }
  // getItems() {
  //   // console.log(this.list);
  //   return this.list;
  // }
}
