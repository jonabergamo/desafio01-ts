export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  setStatus = (status: boolean): void => {
    this.status = status;
  };

  getStatus = (): boolean => {
    return this.status;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(
        `${this.name} depositou R$${value}, novo saldo: R$${this.balance}`
      );
    } else {
      throw Error(`Conta inativa, entre em contato com o banco para ativa-la`);
    }
  };

  withdraw = (value: number): void => {
    if (this.balance > value && this.validateStatus()) {
      this.balance -= value;
      console.log(
        `${this.name} sacou R$${value}, novo saldo: R$${this.balance}`
      );
    } else if (!this.validateStatus()) {
      throw Error(`Conta inativa, entre em contato com o banco para ativa-la`);
    } else {
      throw Error(
        `Você tentou sacar R$${value}, mas só possui R$${this.balance} na conta`
      );
    }
  };

  getBalance = (): number => {
    return this.balance;
  };
  setBalance = (value: number): void => {
    this.balance = value;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
