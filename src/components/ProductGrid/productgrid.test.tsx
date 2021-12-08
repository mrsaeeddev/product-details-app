import React from 'react';
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
});