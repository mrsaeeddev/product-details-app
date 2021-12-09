import { fetchProducts } from "./";
import { CUSTOM_ERROR, MOCK_PRODUCTS } from "./mocks";

jest.mock('./mocks.ts')

describe('When the fetchProducts call is called', () => {
    it('it should work with promises', () => {
        let response = fetchProducts();
        response.then(data => expect(data).toEqual(MOCK_PRODUCTS));
    });

    it('works with async/await and resolves', async () => {
        expect(fetchProducts()).resolves.toEqual(MOCK_PRODUCTS);
    });

    it('it should throw error with promises', () => {
        let response = fetchProducts();
        response.catch((e: any) =>
            expect(e).toEqual(CUSTOM_ERROR),
        );
    });
});
