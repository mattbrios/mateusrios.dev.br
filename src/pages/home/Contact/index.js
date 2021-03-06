import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Memoji from '../../../assets/memoji.png'

const ContactContainer = styled.div`
  background: var(--primary-dark);
  padding: 80px 0;

  @media screen and (max-width: 768px) {
    padding: 24px 0;
  }
`;

const ImageMemoji = styled.img`
  max-width: 280px;
  
  @media screen and (max-width: 768px) {
    max-width: 140px;
  }
`;

const CallWpp = styled(Button)`
  border-radius: 40px !important;
  background: var(--whatsapp) !important;
  color: var(--white) !important;
  margin-top: 16px !important;
`;

const wppClickHandler = () => {
  let text = "Olá, Mateus. Já escolhi o template para o meu novo site. O template é o "
  let url = "https://wa.me/5515996236179/?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
            <ImageMemoji src={Memoji} alt="Entre em contato" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h3" gutterBottom className="white--text">
              E aí... Já decidiu seu template?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className="white--text">
              É muito importante que você escolha seu template para termos um ponto de partida em nossas comunicações. Esta seleção acelera todo o processo de desenvolvimento e, consequentemente, seu site acaba ficando mais baratao para ser desenvolvido.
            </Typography>
            <CallWpp onClick={wppClickHandler} variant="contained">Me chama no Whatsapp</CallWpp>
          </Grid>
        </Grid>
      </Container>
    </ContactContainer>
  );
}

export default Contact;