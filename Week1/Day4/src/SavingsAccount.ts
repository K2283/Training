
import { BankAccount } from "./BankAccount.js";

export class SavingsAccount extends BankAccount {
  private interestRate: number;

  constructor(
    accountNumber: string,
    ownerName: string,
    initialBalance: number,
    interestRate: number
  ) {
    super(accountNumber, ownerName, initialBalance);
    this.interestRate = interestRate;
  }

  public getOwnerName(): string {
    return this.ownerName;
  }

  public calculateInterest(): number {
    return this.getBalance() * this.interestRate / 100;
  }
}
