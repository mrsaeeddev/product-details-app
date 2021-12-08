import React from 'react';
import renderer from 'react-test-renderer';

import MainCategoryBanner from './';

describe('MainCategoryBanner', () => {
    it('should render correctly using Snapshot', () => {
        const name = "dummy"
        const tree = renderer.create(<MainCategoryBanner name={name} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});