import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { RichAccount } from "./class/RichAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
const richAccount: RichAccount = new RichAccount("Pedro Richaz", 52);

peopleAccount.deposit(55);
peopleAccount.withdraw(20);

console.log("-----------------");

companyAccount.deposit(2200);
companyAccount.withdraw(1500);
companyAccount.getLoan(5000);

console.log("-----------------");

richAccount.deposit(500);
richAccount.withdraw(250);
