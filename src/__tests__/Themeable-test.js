import 'core-js/modules/es6.symbol';

import expect               from 'expect';
import React                from 'react';
import TestUtils            from 'react/lib/ReactTestUtils';
import {makeThemeContext}   from '../ThemeContextTypes';
import Themeable            from '../Themeable';

function shallowRender(element, context) {
  let renderer = TestUtils.createRenderer();
  renderer.render(element, context);
  return renderer.getRenderOutput();
}

describe('<Themeable />', function() {

  @Themeable
  class Component extends React.Component {

    static defaultTheme = {
      className: 'defaultClassName'
    };

    render() {
      return <div className={this.theme.className} />;
    }
  }

  it('allows configuration through context', function() {
    let theme = {
      [Component.theme]: {className: 'className'}
    };
    let themedElem = shallowRender(<Component />, makeThemeContext(theme));
    expect(themedElem.props.className).toBe('className');
  });

  it('allows configuration through props', function() {
    let buttonTheme = {
      className: 'className'
    };
    let themedElem = shallowRender(<Component theme={buttonTheme} />);
    expect(themedElem.props.className).toBe('className');
  });

  it('falls back to default theme', function() {
    let themedElem = shallowRender(<Component />);
    expect(themedElem.props.className).toBe('defaultClassName');
  });

});
