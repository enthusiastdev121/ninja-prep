/*
Call to action text component for customer to get involved in NinjaPrep.io
*/
import React from 'react'
import ShowcaseDesktop from './ShowcaseDesktop'
import ShowcaseTablet from './ShowcaseTablet'
import ShowcaseMobile from './ShowcaseMobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const ShowcaseComponent = () => (
    <div>
        <Desktop>
            <ShowcaseDesktop />
        </Desktop>
        <Tablet>
            <ShowcaseTablet />
        </Tablet>
        <Mobile>
            <ShowcaseMobile />
        </Mobile>
    </div>
)

export default ShowcaseComponent