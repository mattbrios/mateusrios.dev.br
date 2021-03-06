import React from 'react';
import { Container, Grid, Hidden, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Step from './Step';

const HowItWorksContainer = styled.div`
  padding: 48px 0;
  background: var(--primary-dark);
`;

const HowItWorks = () => {
  return (
    <HowItWorksContainer>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" className="white--text" align="center" style={{ marginBottom: 40 }}>
              Quer um site? Veja como funciona
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Step
              id="01"
              title="Escolha um template"
              description="Nós disponibilizamos alguns templates pré-prontos para sua escolha. Anote o nome daquele que você mais gostar e já comece a imaginar a sua empresa com um site naquele estilo, mudando algumas imagens, cores, textos e claro, o logo da sua empresa."
              color="#898be2"
             />
          </Grid>
          <Hidden smDown>
            <Grid item sm={6} />
            <Grid item sm={3} />
          </Hidden>
          <Grid item xs={12} sm={6}>
            <Step
              id="02"
              title="Entre em contato"
              description="Você está decidido? É este template mesmo que você quer? Então bora trabalhar! Tire suas dúvidas sobre o template, prazos e valores com a gente."
              color="#ffb102"
             />
          </Grid>
          <Hidden smDown>
            <Grid item sm={3} />
            <Grid item sm={6} />
          </Hidden>
          <Grid item xs={12} sm={6}>
            <Step
              id="03"
              title="Prepare seu conteúdo"
              description="Você está pronto para ter uma presença digital profissional? Pois então, agora precisamos que você elabore todos os textos que deseja escrever no seu site e nos envie as imagens para substituir no template. Com essas informações em mãos, seu site fica pronto em poucos dias!"
              color="#ce3274"
             />
          </Grid>
        </Grid>
      </Container>
    </HowItWorksContainer>
  );
}

export default HowItWorks;