import React from 'react';
import { Text } from 'react-native';
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
    it('Should render name prop correctly', () => {
        expect(tree.root.findByType(Text).props.children).toBe('dummy');
    });
});