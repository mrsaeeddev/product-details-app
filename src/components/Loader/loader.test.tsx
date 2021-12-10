import React from 'react';
import { ActivityIndicator } from 'react-native';
import renderer from 'react-test-renderer';

import Loader from './';

describe('Loader', () => {
    it('should render correctly using Snapshot', () => {
        const tree = renderer.create(<Loader />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has 1 child', () => {
        const tree: any = renderer.create(<Loader />).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('has size prop with the right value', () => {
        const tree: any = renderer.create(<Loader />);
        expect(tree.root.findByType(ActivityIndicator).props.size).toBe('large');
    });
});