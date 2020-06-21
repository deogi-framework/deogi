export default class Adder {

    protected result:number = 0;
    
    add(a:number,b:number){
        this.result = a + b;
    }

    getResult(){
        return this.result;
    }

}