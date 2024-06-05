import {add} from './calc';

describe('calculator', () => {
    test('add two numbers', () => {
        expect(add(1, 2)).toEqual(3)
    });        
});