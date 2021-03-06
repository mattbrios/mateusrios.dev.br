import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Logo from '../../assets/logo.png';

const HeaderBackground = styled.div`
  padding: 24px 0;
  background-color: var(--primary);
`;

const ImageContainer = styled.img`
  max-height: 40px;
  margin-bottom: 8px;
`;


const Footer = () => {
  return (
    <HeaderBackground>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <ImageContainer src={Logo} alt="Mateus Rios" />
            <Typography variant="caption" component="p" className="white--text">
              Copyright © 2021.<br />
                Mateus Rios. Todos os direitos reservados.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </HeaderBackground>
  );
};

export default Footer;