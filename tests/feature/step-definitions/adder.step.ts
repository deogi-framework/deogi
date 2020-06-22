import { binding, given, then, when, before, after } from 'cucumber-tsflow';
import assert from 'assert';
import Adder from '../../../src/app/services/Adder';

@binding()
export class AdderSteps {

    private a: number = 0;
    private b: number = 0;
    private r: number = 0;
    private adder: Adder;

    constructor(){
        this.adder = new Adder;
    }

    @given('Two number {float} and {float}.')
    public given(a: number,b: number) {
        this.a = a;
        this.b = b;
    }

    @when('You add these two number.')
    public when() {
        this.r = this.adder.add(this.a,this.b);
    }

    @then('You get {int} for result.')
    public then(expect: number) {
        assert.strictEqual(this.r, expect);
    }
}