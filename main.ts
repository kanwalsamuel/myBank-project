#! /usr/bin/env node

import inquirer from "inquirer";

interface BankAccount{    //bank account interface
    accountNumber: number;
    balance: number;
    withdraw(amount:number):void
    deposit(amount:number):void
    checkBalance():void
}
//class of bank
// implement keyword use for to inform typescript all list present in interface
class BankAccount implements BankAccount{
    accountNumber: number;
    balance: number;
                                                  //construtor ik method ha jo class k object ko intialized krta ha
    constructor(accountNumber:number,balance:number){
        this.accountNumber= accountNumber;
        this.balance=balance ;                   ///this current object ko represent kr raha ha
    }

    //debit money or withdraw
    withdraw(amount: number): void {
        if(this.balance >= amount){
            this.balance -= amount
            console.log(`Withdrawl of $${amount} successful.Remaining balance: $${this.balance}`);

        }else{
            console.log("Insufficient balance");
            
        }
    }
// credit money
deposit(amount: number): void {
    if(amount > 100){
        amount -= 1;// charged1 usd if more then 100 
     } this.balance += amount;
        console.log(`Deposit of $${amount }successful.Remaining balance: $${this.balance}`);
}
// check balance
checkBalance(): void {
    console.log(`Current balance is $${this.balance}`);
    
}
}
// customer class 
class customer{
    firstName:string;
    lastName: String;
    gender:string;
    age:number;
    mobileNumber: number;
    account:BankAccount

    constructor(firstName:string,lastName:string,gender:string,age:number,mobileNumber:number,account:BankAccount){
        this.firstName= firstName
        this.lastName= lastName
        this.age=age
        this.gender=gender
        this.mobileNumber=mobileNumber
        this.account=account
    }
}



// create bank acounts 
const accounts:BankAccount[]=[
new BankAccount (5002,1500),
new BankAccount (5003,2500),
new BankAccount (5003,500)
];

// create customer
const customers: customer[ ] =[
    new customer("Kanwal" , "Samuel", "Female", 30, 92343410000, accounts[0]),
    new customer("Amaya" ,  "Samuel", "Female",  16, 92343410330,  accounts[1]),
    new customer("Kanwal" , "Samuel", "Female", 30, 92343412200,accounts[2])
]  

//function to interact with bank accpount
 async function service(){
    do{const accountNumberInput = await inquirer.prompt({
        name:"accountNumber",
        type: "number",
        message: "Enter your account number:"
    })
     
const Customer = customers.find(customer=> customer.account.accountNumber === accountNumberInput.accountNumber)
if(Customer){
    console.log(`Welcome ,${Customer?.firstName } ${Customer?.lastName}!\n`);
    const anss =  await inquirer.prompt([{
        name: "select",
        type: "list",
        message:"Select an operation",
        choices:["Deposit","Withdraw","Check Balance", "Exit"]
    }]);

    switch ( anss.select) {
      case "Deposit":
            const depositAmount = await inquirer.prompt({
             name: "amount",
             type: "number",
             message:"Enter the amount to deposit."
            });
             Customer.account.deposit(depositAmount .amount);
             break;
        case "Withdraw":
            const withdrawAmount = await inquirer.prompt({
                 name: "amount",
                 type: "number",
                 message:"Enter the amount to deposit."
            });
            Customer.account.withdraw(withdrawAmount .amount);
              break;
        case  "Check Balance":
            Customer.account.checkBalance();
            break;
        case "Exit" :   
        console.log("Exiting bank program......");
        console.log("\n Thank you for using oue services. Have a great day ahead!");
        return;
        
        
    }


}
else {
    console.log("Invalid account number.Please try again.");
}
    }




    while(true)

    }
service()








