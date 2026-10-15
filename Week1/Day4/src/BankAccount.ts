
export class BankAccount {
  public readonly accountNumber: string;
  private balance: number;
  protected ownerName: string;

  constructor(
    accountNumber: string,
    ownerName: string,
    initialBalance: number
  ) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit must be positive");
    }

    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}
