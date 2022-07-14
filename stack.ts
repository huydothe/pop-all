export class Stack {
    array:number[]=[];

    constructor(array: number[]) {
        this.array = array;
    }

    pushInNewArray() {
        let newArr = [];
        let limit=this.array.length;
        for (let i = 0; i < limit; i++) {
            let a = this.getPop();
            newArr.push(a);
        }
        return newArr;
    }

    private getPop() {
        return this.array.pop();
    }
}

let array=new Stack([1,2,3,4,5,6,7]);

console.log(array.pushInNewArray())
