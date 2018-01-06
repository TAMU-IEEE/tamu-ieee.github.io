import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Http,
  Response,
  Headers,
  RequestOptions,
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {
  Router
} from '@angular/router';
import {
  AccountService, ModalService,
} from '../services';

import {
  Registration,
} from '../models';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  @ViewChild('received') public receivedModal;

  public registration: Registration = new Registration();

  constructor(
    private http: Http,
    private accountService: AccountService,
    private modalService: ModalService,
    private router: Router,
  ) {}

  public register(registration: Registration) {
    console.log(registration);
    // let uid = this.accountService.getCurrentUser().uid;
    // let url = 'https://us-central1-tamum-c5fdd.cloudfunctions.net/register';
    // let data = {application: registration, uid};
    // this.http.post(url, data).subscribe( (result) => {
    //   this.modalService.openModal(this.receivedModal).result.then( () => {
    //     this.router.navigate(['']);
    //   }, () => {
    //     this.router.navigate(['']);
    //   })
    // }, (error) => {
    //   console.log(error);
    // });
  }

}