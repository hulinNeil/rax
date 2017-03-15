/* @flow */

import {createElement, Component} from 'rax';

import type {
  NavigationRouter,
  NavigationRoute,
  NavigationNavigator,
  NavigationNavigatorProps,
} from '../TypeDefinition';

/**
 * Creates a navigator based on a router and a view that renders the screens.
 */
const createNavigator = (router: NavigationRouter) =>
  (View: NavigationNavigator<*>) => {
    class Navigator extends Component {
      props: NavigationNavigatorProps;

      static router = router;

      render() {
        return (
          <View
            {...this.props}
            router={router}
          />
        );
      }
    }

    return Navigator;
  };

export default createNavigator;