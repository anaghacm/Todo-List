import { leadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  getid: any = '';
  byid: any = ''
  var: any = ''
  list: any = []
  searchForm = this.fb.group({
    id: ['', [Validators.required, Validators.max(200), Validators.min(1)]]
  })

  constructor(private router: Router, private fb: FormBuilder, private ds: DataService) {
    this.getid = '';
    this.byid = ''
  }


  ngOnInit(): void {
  }

  getbyId() {
    this.getid = '';
    this.byid = this.searchForm.value.id;
    this.var = JSON.parse(localStorage.getItem('todo') || '')
    for (let v of this.var) {
      if (v.id == this.searchForm.value.id) {
        this.list = v
        console.log(this.list);

      }
    }
  }
  getlist() {
    this.getid = 1;
    this.byid = ''
    this.list = JSON.parse(localStorage.getItem('todo') || '')
  }
  filterc() {
    this.list.length=0
    this.var = JSON.parse(localStorage.getItem('todo') || '')
    for (let v of this.var) {
      if (v.completed == true) {
        this.list.push(v)
      }
    }
  }
  filteric() {
    this.list.length=0
    this.var = JSON.parse(localStorage.getItem('todo') || '')
    for (let v of this.var) {
      if (v.completed == false) {
        this.list.push(v)
      }
    }
  }
}
