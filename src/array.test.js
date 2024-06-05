const users = ['Alice', 'Bob'];

describe('Match arrays', () => {
    test('verify array elements', () => {
        expect(users).toContainEqual('Alice')
        expect(users).toContain(users[0])
    });        
});