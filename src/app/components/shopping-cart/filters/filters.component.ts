import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessengerService} from '../../../services/messenger.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private msg: MessengerService) { }

  get f() {
    return this.form.controls;
  }

  categoryList: any = ['All', 'Children', 'Fiction'];

  form = new FormGroup({
    category: new FormControl('')
  });

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value);
    this.msg.sendMsg(this.form.value.category);
  }
}
