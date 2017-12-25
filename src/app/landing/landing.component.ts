import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {
  AccountService,
  ModalService,
} from '../services';

import {
  Account,
} from '../models';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  public signup: Account = new Account();
  public signin: Account = new Account();
  private closeResult: string;
  private isUserLoggedIn: boolean = false;

  constructor(
    private accountService: AccountService,
    private modalService: ModalService,
    private router: Router,
  ) {
    this.subscribeLogin();
  }

  public open(content) {
    if (this.isUserLoggedIn) {
      this.router.navigate(['/profile']);
    } else {
      this.modalService.openModal(content);
    }
  }

  public loginWithGoogle() {
    this.accountService.loginWithGoogle();
  }

  public loginUser(signin: Account) {
    this.accountService.loginUser(signin).then( (result) => {
      // TODO: Handle Redirect Here.
    }).catch( (err) => {
      // TODO: Handle Error Here.
    });
  }

  public registerUser(signup: Account) {
    this.accountService.registerUser(signup).then( (result) => {
      // TODO: Handle Redirect Here.
    }).catch( (err) => {
      // TODO: Handle Error Here.
    });
  }

  private subscribeLogin() {
    this.accountService.subscribeAuthState().subscribe( (result) => {
      if (this.accountService.isLoggedIn()) {
        this.isUserLoggedIn = false;
      } else {
        this.isUserLoggedIn = true;
      }
      this.modalService.closeModal();
    });
  }

}
