import React from 'react';
import { TouchableOpacity } from 'react-native';
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

    it('should call handlePress function passed as a prop', () => {
        const subcategories = ['dummy1', 'dummy2']
        const handlePress = jest.fn()
        const handleAllProducts = jest.fn()
        const tree = renderer.create(<SubCategorySelector subcategories={subcategories} handleAllProducts={handleAllProducts} handlePress={handlePress} />);
        tree.root.findAllByType(TouchableOpacity)[0].props.onPress()
        expect(handleAllProducts).toBeCalledTimes(1);
    });
});