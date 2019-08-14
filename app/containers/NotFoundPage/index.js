/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from 'images/404.gif';
import styled from 'styled-components';

const BG = styled.div`
  height: 100vh;
  width: 100vw;
  background: red url(${bgImg}) no-repeat center center;
  background-size: cover;
`;

export default function NotFound() {
  return (
    <Link to="/">
      <BG />
    </Link>
  );
}
