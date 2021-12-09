import { fetchCategories } from "./";
import { CUSTOM_ERROR, MOCK_CATEGORIES } from "./mocks";

jest.mock('./mocks.ts')

describe('When the fetchCategories call is called', () => {
    it('it should work with promises', () => {
        let response = fetchCategories();
        response.then(data => expect(data).toEqual(MOCK_CATEGORIES));
    });

    it('works with async/await and resolves', async () => {
        expect(fetchCategories()).resolves.toEqual(MOCK_CATEGORIES);
    });

    it('it should throw error with promises', () => {
        let response = fetchCategories();
        response.catch((e: any) =>
            expect(e).toEqual(CUSTOM_ERROR),
        );
    });
});
