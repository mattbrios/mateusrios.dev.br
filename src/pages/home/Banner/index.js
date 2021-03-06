import React from 'react';
import { Container, Grid, Hidden, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Developer from '../../../assets/developer2.svg';
import CTA from '../../components/CTA';
import ScrollTo from 'scroll-to-element'

const BannerContainer = styled.div`
  background-color: var(--primary);
`;

const BannerImage = styled.img`
  max-width: 100%;
`;

const StyledContainer = styled(Grid)`
  display: flex;
  width: 100vw;
  min-height: 74vh;
  height: 100%;
  max-height: 300vh;
  align-items: center;
`;

const Banner = () => {
  
  const scrollToContact = () => {
    ScrollTo('#contact', {
      duration: 700
    });
  }
  return (
    <BannerContainer>
      <Container style={{ display: "flex" }}>
        <StyledContainer container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" component="h1" className="white--text">
              Oi, eu sou o Mateus!
            </Typography>
            <Typography variant="h5" component="h5" className="white--text" style={{marginTop: 16, fontWeight: "lighter"}}>
              Estou aqui para te ajudar a ter uma presença digital profissional com desenvolvimento de um site personalizado!
            </Typography>
            <CTA onClick={scrollToContact}>Contratar agora</CTA>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} sm={6}>
              <BannerImage src={Developer} alt="Mateus Rios" />
            </Grid>
          </Hidden>
        </StyledContainer>
      </Container>
    </BannerContainer>
  );
}

export default Banner;