import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  // get f() {
  //   return this.form.controls;
  // }

  // categoryList: any = ['All', 'Children', 'Fiction'];
  //
  // form = new FormGroup({
  //   category: new FormControl('')
  // });

  ngOnInit() {

  }

  // submit() {
  //   console.log(this.form.value);
  //   this.msg.sendMsg(this.form.value.category);
  // }
}
