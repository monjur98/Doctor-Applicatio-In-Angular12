import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../Services/common.service';
import { LoginModel } from './LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginmodel:LoginModel; 
  person=new LoginModel();

  constructor(private commonService: CommonService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(){
    debugger;
    this.commonService.login(this.person)
    .subscribe(data=>{
      if(data.status=='s')
      {
        if(data.body.role=='HA'){
          this.router.navigate(['/home']);
        }
      }
    });

  }

  persist(key: string, value: any) {
    this.commonService.set(key, value);
  }

}
