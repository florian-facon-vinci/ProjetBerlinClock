import {Main} from '../src/berlinClock.js';

describe("berlinClock function should return time", function (){


    it("test minute 1 ",function (){
        let main = new Main();

        const date = new Date();
        const result = main.berlinClock(1);
        
         expect(result).toBe(1);
    });

    it("test minute 2 ",function (){
        let main = new Main();

        const date = new Date();
        const result = main.berlinClock(2);
        
         expect(result).toBe(1);
    });

    it("test minute 3 ",function (){
        let main = new Main();

        const date = new Date();
        const result = main.berlinClock(3);
        
         expect(result).toBe(1);
    });

    it("test minute 4 ",function (){
        let main = new Main();

        const date = new Date();
        const result = main.berlinClock(4);
        
         expect(result).toBe(1);
    });
});