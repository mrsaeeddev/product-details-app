import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import ProductGrid from './';

describe('ProductCard', () => {
    it('should render correctly using Snapshot', () => {
        const product = [{
            name: 'dummy',
            brand: { name: 'dummy' },
            price: 12,
            img: 'dummy_url',
        }]
        const tree = renderer.create(<ProductGrid products={product} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly using Snapshot', () => {
        const product = [{
            name: 'dummy',
            brand: { name: 'dummy' },
            price: 12,
            img: 'dummy_url',
        }]
        const tree = renderer.create(<ProductGrid products={product} />);
        expect(tree.root.findAllByType(Text).length).toBe(3);

    });
});