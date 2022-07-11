//create class Car with 2 methods and 1 other class extends from Car with 2 methods which use Car methods
export class Car {
  public MASS = 1000;
  private COLOR = 'red';
}
export class Bus extends Car {
  public PASS = 35;
  private NUMBER = '123';
}

