export class Ingredient {
    public name : string;
    public amount : number;

    constructor(name : string, amount : number){
        this.name = name;
        this.amount = amount;
    }

    // Or this TS shortcut does exactly the same as above

    //constructor(public name: string, public amount: number){}
}