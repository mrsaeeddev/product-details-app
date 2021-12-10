import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import ProductCard from './';

describe('ProductCard', () => {
    it('should render correctly using Snapshot', () => {
        const product = {
            name: 'dummy',
            brand: { name: 'dummy' },
            price: 12,
            img: 'dummy_url',
        }
        const tree = renderer.create(<ProductCard product={product} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render the correct count of Text nodes', () => {
        const product = {
            name: 'dummy',
            brand: { name: 'dummy' },
            price: 12,
            img: 'dummy_url',
        }
        const tree = renderer.create(<ProductCard product={product} />);
        expect(tree.root.findAllByType(Text).length).toBe(3);
    });

    it('should render the correct values of product prop', () => {
        const product = {
            name: 'dummy',
            brand: { name: 'dummy' },
            price: 12,
            img: 'dummy_url',
        }
        const tree = renderer.create(<ProductCard product={product} />);
        expect(tree.root.findAllByType(Text)[0].props.children).toBe("dummy");
        expect(tree.root.findAllByType(Text)[1].props.children).toBe("dummy");
        expect(tree.root.findAllByType(Text)[2].props.children).toBe(12);
    });
});