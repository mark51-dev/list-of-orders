import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {PostsService} from '../shared/services/posts.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nameOfCompany: new FormControl(''),
      contactName: new FormControl(''),
      listOfPotentialWorks: new FormControl(''),
      worksDone: new FormControl(''),
      fullSumOfMoney: new FormControl(''),
      prepaidExpense: new FormControl(''),
      commercialOfferSent: new FormControl(false),
      note: new FormControl(''),
      whereDidTheClientComeFrom: new FormControl(''),
      deadline: new FormControl(''),
      orderDoneDate: new FormControl(''),
      orderBeginDate: new FormControl(''),
      orderDone: new FormControl(false)
    });
  }

  submit() {
    const post = {
      ...this.form.value,
      dateCreate: new Date()
    };
    this.postsService.createPost(post).subscribe(() => console.log('created'));
  }

}
