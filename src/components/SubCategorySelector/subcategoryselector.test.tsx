import React from 'react';
import renderer from 'react-test-renderer';

import SubCategorySelector from './';

describe('SubCategory', () => {
    it('should render correctly using Snapshot', () => {
        const subcategories = ['dummy1', 'dummy2']
        const handlePress = jest.fn()
        const handleAllProducts = jest.fn()
        const tree = renderer.create(<SubCategorySelector subcategories={subcategories} handleAllProducts={handleAllProducts} handlePress={handlePress} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly using Snapshot', () => {
        const subcategories = ['dummy1', 'dummy2']
        const handlePress = jest.fn()
        const handleAllProducts = jest.fn()
        const tree = renderer.create(<SubCategorySelector subcategories={subcategories} handleAllProducts={handleAllProducts} handlePress={handlePress} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly using Snapshot', () => {
        const subcategories = ['dummy1', 'dummy2']
        const handlePress = jest.fn()
        const handleAllProducts = jest.fn()
        const tree = renderer.create(<SubCategorySelector subcategories={subcategories} handleAllProducts={handleAllProducts} handlePress={handlePress} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});