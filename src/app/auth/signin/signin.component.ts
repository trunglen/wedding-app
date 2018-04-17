import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'wedding-auth-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[AuthService]
})
export class SigninComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
  }

  onSignin(f:NgForm) {
    console.log(f.value)
    this.authService.signin(f.value).subscribe(res => console.log(res))
    return false
  }
}
