import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { ModalService } from '../services';
@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public signup: any = {};
  private closeResult: string;
  private isUserLoggedIn: boolean = false;
  
  constructor(
    private afAuth: AngularFireAuth,
    private modalService: ModalService,
    private router: Router,
  ) {}

  public ngOnInit() {
    this.afAuth.authState.subscribe((user: any) => {
      this.isUserLoggedIn = true;
      this.modalService.closeModal();
    });
  }

  public open(content) {
    this.logout();
    if (this.isUserLoggedIn) {
      this.router.navigate(['/profile']);
    } else {
      this.modalService.openModal(content);
    }
  }

  public loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public logout() {
    this.isUserLoggedIn = false;
    this.afAuth.auth.signOut();
  }

  // public register() {
  //   this.afAuth
  //     .auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(value => {
  //       console.log('Success!', value);
  //     })
  //     .catch(err => {
  //       console.log('Something went wrong:',err.message);
  //     });    
  // }

  public registerUser(data: any) {
    if (data['email'] && data['password']) {
      this.afAuth.auth.createUserWithEmailAndPassword(data['email'], data['password'])
      .then((value) => {
        console.log(value);
      }).catch((err) => {
        console.log('Something went wrong.', err.message);
      });
    }
  }
}
