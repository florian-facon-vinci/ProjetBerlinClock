import {Main} from '../src/berlinClock.js';

describe("berlinClock function should return time", function (){


    it("test minute 1 ",function (){
        let main = new Main();

        const date = new Date();
        const result = main.berlinClock(date.getMinutes());
        
         expect(result).toBe(true);
    });
});