import {DEVICE_TYPES, routeWrapper} from '../TestHelper';
import {mount, shallow} from 'enzyme';

import QuestionListComponent from '../../src/components/QuestionList/QuestionListComponent';
import React from 'react';
import {Context as ResponsiveContext} from 'react-responsive';
import toJson from 'enzyme-to-json';

test.each(Object.entries(DEVICE_TYPES))(
  'renders successfully on %p',
  (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider;
    const wrappingComponentProps = {value: {width: deviceWidth}};
    const mountProps = {wrappingComponent, wrappingComponentProps};

    const wrapper = shallow(
      routeWrapper(<QuestionListComponent />),
      mountProps,
    );
    expect(wrapper).toBeDefined();
  },
);

test.each(Object.entries(DEVICE_TYPES))(
  'matches snapshot on %p',
  (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider;
    const wrappingComponentProps = {value: {width: deviceWidth}};
    const mountProps = {wrappingComponent, wrappingComponentProps};

    const wrapper = mount(routeWrapper(<QuestionListComponent />), mountProps);
    expect(toJson(wrapper)).toMatchSnapshot();
  },
);
