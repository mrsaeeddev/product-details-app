import React from 'react';
import { Text, TouchableHighlight, TouchableOpacity } from 'react-native';
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

    it('should render with correct value subcategory prop', () => {
        const subcategory = 'dummy1'
        const handlePress = jest.fn()
        const handleAllProducts = jest.fn()
        const tree = renderer.create(<SubCategory subcategory={subcategory} handlePress={handlePress} handleAllProducts={handleAllProducts} />);
        expect(tree.root.findByType(Text).props.children).toBe("dummy1");
    });

    it('should call handlePress function passed as a prop', () => {
        const subcategory = 'dummy1'
        const handlePress = jest.fn()
        const handleAllProducts = jest.fn()
        const tree = renderer.create(<SubCategory subcategory={subcategory} handlePress={handlePress} handleAllProducts={handleAllProducts} />);
        tree.root.findByType(TouchableOpacity).props.onPress()
        expect(handlePress).toBeCalledTimes(1);
    });
});