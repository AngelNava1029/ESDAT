import { destroyer} from '../Destroyer'


describe('removeFromArray', () => {
    it('removes elements from array', () => {
        const array = [1, 2, 3, 4, 5];
        const result = destroyer(array, 2, 4);

        expect(result).toEqual([1, 3, 5]);
    });

    it('removes no elements from array', () => {
        const array = [1, 2, 3, 4, 5];
        const result = destroyer(array, 6, 7);

        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('removes all elements from array', () => {
        const array = [1, 2, 3, 4, 5];
        const result = destroyer(array, 1, 2, 3, 4, 5);

        expect(result).toEqual([]);
    });

    it('removes elements from array with string values', () => {
        const array = ['apple', 'banana', 'cherry', 'date'];
        const result = destroyer(array, 'banana', 'date');

        expect(result).toEqual(['apple', 'cherry']);
    });
});