import {fibonacci} from "../fibonacci";

describe("Fibonacci sequence",()=>{
    it("gives the value zero to position zero",()=>{
        expect(fibonacci(0)).toBe(0);
    });
    it("gives the value one to position one",()=>{
        expect(fibonacci(1)).toBe(1);
    });
    it('is a series where he next number is calculates adding the two previous numbers', () => {
        expect(fibonacci(2)).toBe(1);
        expect(fibonacci(3)).toBe(2);
        expect(fibonacci(10)).toBe(55);
    });
})