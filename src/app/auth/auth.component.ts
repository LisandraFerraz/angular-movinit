import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
    ){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  login(): void{
    // console.log(this.form.getRawValue())
    // this.http.post('http://localhost:8000/api/login', this.form.getRawValue()).subscribe(res =>{
    //   console.log(res)
    // })
    this.authService.login(this.form.getRawValue(), {withCredentials: true})
      .subscribe(res =>{
        this.router.navigate(['/'])
        console.log(res)
      }
    )
  }

}
