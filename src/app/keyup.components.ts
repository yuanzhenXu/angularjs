export class KeyUpComponent_v1{
  values = '';
  onKey(event: KeyboardEvent){
    // without type info
    this.values += (<HTMLInputElement>event.target).value + '|'
  }
}
