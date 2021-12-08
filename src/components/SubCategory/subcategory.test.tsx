import React from 'react';
import renderer from 'react-test-renderer';

import SubCategory from './';

describe('SubCategory', () => {
    it('should render correctly using Snapshot', () => {
        const subcategory = 'dummy1'
        const handlePress = jest.fn()
        const handleAllProducts = jest.fn()
        const tree = renderer.create(<SubCategory subcategory={subcategory} handlePress={handlePress} handleAllProducts={handleAllProducts} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});