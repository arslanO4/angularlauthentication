import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public SignupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.SignupForm = this.formBuilder.group({
      email:[''],
      password:[''],
    })
  }
    signUp(){
    this.http.post<any>('http://localhost:3000/signupUsers', this.SignupForm.value)
      .subscribe(res =>{
        alert("Signup Successful");
        this.SignupForm.reset();
        this.router.navigate(['login']);
      },
        error => {
        alert('Something went wrong');
        })
    }
}
