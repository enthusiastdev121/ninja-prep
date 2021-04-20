import React from 'react'
import { shallow } from 'enzyme'
import { Context as ResponsiveContext } from 'react-responsive'
import { DEVICE_TYPES, routeWrapper } from '../TestHelper'
import MeetTheTeamPage from '../../src/views/MeetTheTeamPage'

test.each(Object.entries(DEVICE_TYPES))('renders successfully on %p', (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider
    const wrappingComponentProps = { value: { width: deviceWidth } }
    const mountProps = { wrappingComponent, wrappingComponentProps }

    const wrapper = shallow(routeWrapper(<MeetTheTeamPage />), mountProps)
    expect(wrapper).toBeDefined
})