import React from 'react';
import renderer from 'react-test-renderer';

import MainCategoryBanner from './';

let tree: any

beforeEach(() => {
    const name = "dummy"
    tree = renderer.create(
        <MainCategoryBanner name={name} />,
    );
});

describe('MainCategoryBanner', () => {
    it('should render correctly using Snapshot', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});

describe('MainCategoryBanner structure', () => {
    it('Should render 2 categories', () => {
        expect(tree.root.findByType('Text')).toBeTruthy;
    });
});