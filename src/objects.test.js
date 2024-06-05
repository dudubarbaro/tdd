const users = { name: 'Alice', email: 'alice@gmail.com' };

describe('Match objects', () => {
    test('basic usage', () => {
        expect(users.name).toBeDefined()
        expect(users.age).not.toBeDefined()
    });        
});