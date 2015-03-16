import {WebAPI} from 'src/service';

export class User{
  static inject() { return [WebAPI]; }
  constructor(service){
    this.heading = 'New User';
    this.User = {
      firstName:  '',
      lastName:  '',
    };

    this.service = service;
  }

  get fullName(){
    return `${this.User.firstName} ${this.User.lastName}`;
  }

  save(){
    this.service.saveUser(this.User).then(result => {
      if (result.isSuccess)
        alert('Success!');
      else
        alert('Error!');
    });
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
