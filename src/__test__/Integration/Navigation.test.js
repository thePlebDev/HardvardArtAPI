import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import Navigation from '../../Components/Navigation'

describe('testing the Navigation component',()=>{
  it('renders Navigation component',()=>{
    render(<Navigation />)
    screen.debug();
    expect(screen.getByText('Search')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
  it('should test the custom props we put in',()=>{
    const navLinks =[
      {
        title:"butter",
        path:'/login'
      }
    ]
    render(<Navigation peanut={navLinks}/>)
    expect(screen.getByText('butter')).toBeInTheDocument()

  })
})
