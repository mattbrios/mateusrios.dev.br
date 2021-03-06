import React from 'react';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Logo from '../../assets/logo.png';

const HeaderBackground = styled.div`
  padding: 16px 0;
  background-color: var(--primary);
  text-align: center;
`;

const ImageContainer = styled.img`
  max-height: 56px;
`;


const Header = () => {
  return (
    <HeaderBackground>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <ImageContainer src={Logo} alt="Mateus Rios" />
          </Grid>
        </Grid>
      </Container>
    </HeaderBackground>
  );
};

export default Header;