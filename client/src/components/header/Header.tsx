import React, { FunctionComponent } from 'react';
import { StyledHeader } from './Header.styled';

interface IHeaderProps {
  title: string
}

const Header: FunctionComponent<IHeaderProps> = (props) => {

  return(
    <StyledHeader>
      <h1>{ props.title }</h1>
      <a href='https://request-header-parser-microservice.fly.dev/api' target='_blank' rel='noopener noreferrer'>
        <code>[ Base URL: request-header-parser-microservice.fly.dev/api ]</code>
      </a>
      <p>This is a sample Request Header Parser Microservice server</p>
      <a href='https://github.com/OlegAba/request-header-parser-microservice' target='_blank' rel='noopener noreferrer'>
        Source Code
      </a>
    </StyledHeader>
  );
}

export default Header