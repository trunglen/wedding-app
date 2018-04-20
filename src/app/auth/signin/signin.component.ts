import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionFactory } from '../../../x/storage.utils';

@Component({
  selector: 'wedding-auth-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSignin(f: NgForm) {
    this.authService.signin(f.value).subscribe(res => {
      SessionFactory.setItem('access_token', res);
      this.router.navigate(['/'], { relativeTo: this.activedRoute });
    })
    return false
  }
}
