describe('Match regular expression', () => {
    test('basic usage', () => {
        expect('developer').toMatch(/\w/)
        expect('(47)99614-3732').toMatch(/^\(\d{2}\)\d{5}-\d{4}$/)
    });        
});