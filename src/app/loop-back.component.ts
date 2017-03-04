import {Component} from "@angular/core";
@Component({
  // seletor: 'key-up3',
  template: '<input type="text" #box (keyup.enter)="onEnter(box.value)" )>' +
  '<p>{{value}}</p>'
})
export  class KeyUpComponent_v3{
  value  = '';
  onEnter(value: string){
    this.value += value;
  }
}
@Component({
  // seletor: 'key-up4',
  template: '<input type="text" #box (keyup.enter)="update(box.value)"' +
  ' (blur)="update(box.value)">' +
  '<p>{{value}}</p>'

})
export class KeyUpComponent_v4 {
  value = '';

  update(value: string) {
    this.value = value;
  }
}
