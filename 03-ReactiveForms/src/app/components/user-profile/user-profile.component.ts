import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  formUser: FormGroup;
  submitted = false;

  constructor(){
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regDate: string = '/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/';
    let controles: any = {
      fullname: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.pattern(regexCorreo)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      dob: new FormControl(['', [Validators.required, Validators.pattern(regDate)]]),
      recordarCredenciales: new FormControl(true)
    }
    this.formUser = new FormGroup(controles);
  }
    
  onSubmit(){
    console.log(this.formUser);
    this.submitted = true;

  }

  onReset() {
    this.submitted = false;
    this.formUser.reset();
  }
    // convenience getter for easy access to form fields
    get f() { return this.formUser.controls; } 
  

}
