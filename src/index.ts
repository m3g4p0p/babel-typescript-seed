export class Greeter {
  constructor (
    private name: string
  ) { }

  public greet (): string {
    return `Hello ${this.name}!`;
  }
}
