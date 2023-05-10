import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/models/Users';
import { UsersService } from 'src/services/users.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(private router: Router, private _userService: UsersService) {}

  user = new Users();
  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  forgotpasswordpage() {
    this.router.navigate(['/forgotpassword']);
  }
  registerpage() {
    this.router.navigate(['/register']);
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Hàm kiểm tra độ dài mật khẩu
  isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

  userModel: string = '';

  login() {
    if (this.user.username === "" || this.user.password === "") {
      alert('Email or password cannot be blank');
    } else {
      this._userService.getUsers().subscribe((data) => {
        data.forEach((element: any) => {
          if (
            element.username == this.user.username &&
            element.password == this.user.password
          ) {
            this.user.username = element.username;
            this.user.password = element.password;
            alert('Login successfully');
            // this.router.navigate(['/home']);
          }
        });
        // if (this.userModel == '') {
        //   alert('Email or password is incorrect');
        // }
      }
      );
    }
  }

}
