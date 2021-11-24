class uber {
  constructor(kilometer, cost ){
    this.kilometer = kilometer;
    this.cost= cost;
  }
  get price(){
    return this.cost*this.kilometer
  }
}
 var location = new uber(6, 87);
console.log(`Cost of your travel is :${location.price}`);