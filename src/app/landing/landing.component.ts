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
  public hasApplied: boolean = false;
  @ViewChild('account') public accountModal;

  private closeResult: string;
  private isUserLoggedIn: boolean = false;
  private shouldDisplayModal: boolean = false;

  constructor(
    private accountService: AccountService,
    private modalService: ModalService,
    private router: Router,
  ) {
    this.subscribeLogin();
  }

  public open(content) {
    this.shouldDisplayModal = true;
    if (this.isUserLoggedIn) {
        this.accountService.getAppliedStatus().subscribe( (result) => {
          if (result.json()) {
            this.hasApplied = true;
            console.log('setting true...');
          }
        }, (error) => {
          this.hasApplied = false;
        }, () => {
          this.modalService.openModal(this.accountModal);
        });
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

  public logoutUser() {
    this.accountService.logout();
  }

  public apply() {
    this.modalService.closeModal();
    this.router.navigate(['/registration']);
  }

  public registerUser(signup: Account) {
    this.accountService.registerUser(signup).then( (result) => {
      this.isUserLoggedIn = true;
      // TODO: Handle Redirect Here.
    }).catch( (err) => {
      // TODO: Handle Error Here.
    });
  }

  private subscribeLogin() {
    this.accountService.subscribeAuthState().subscribe( (result) => {
      this.isUserLoggedIn = !this.accountService.isLoggedIn();
      if (this.isUserLoggedIn && this.shouldDisplayModal) {
        this.modalService.openModal(this.accountModal);
      } else {
        this.modalService.closeModal();
      }
    });
  }

}
