import React from 'react';
import Accordian from '../../Components/Accordian'

import {render, screen} from '@testing-library/react'


describe('testing the Accordian component',()=>{
  it('should test the snapshot',()=>{
    const {asFragment} = render(<Accordian/>)
    expect(asFragment()).toMatchSnapshot();

  })

  it('should render all the important stuff',()=>{
    const {getByTestId,getByText} = render(<Accordian/>)
    let arrow = getByTestId('arrow')
    
  })
})
