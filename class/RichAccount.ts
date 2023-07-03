import { DioAccount } from "./DioAccount";

export class RichAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value + 10);
      console.log(
        `${this.getName()} depositou R$${value}, novo saldo: R$${this.getBalance()}`
      );
    } else {
      throw Error(`Conta inativa, entre em contato com o banco para ativa-la`);
    }
  };
}
