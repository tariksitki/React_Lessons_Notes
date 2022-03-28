import React from 'react'
import MyButton from './button/MyButton'
import Header from "./header/Header";
import Link from './link/Link';
import Wrapper from './wrapper/Wrapper';

const StyledComponent = () => {
  return (
      
          <Wrapper bgColor = "darkgreen" >
              <Link href='https://www.google.com/' rel='noopener' target="_blank" secondary> Link </Link>
              <Header baslikRenk = "green">HELLO World </Header>
              <MyButton>Purple Button </MyButton>
              <MyButton color >Blue Button </MyButton>
          </Wrapper>
          

  )
}

export default StyledComponent;