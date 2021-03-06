import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import DataTemplates from './DataTemplates';
import ItemTemplate from './ItemTemplate';
import styled from 'styled-components';

const TemplatesContainer = styled.section`
  background-color: #F0F0F0;
  padding: 48px 0;
`;

const Templates = () => {
  return(
    <TemplatesContainer>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" className="dark--text" align="center">
              Templates
            </Typography>
            <Typography variant="body1" className="dark--text" align="center" component="p" style={{paddingBottom: "16px"}}>
              Escolha a cara do seu novo site
            </Typography>
          </Grid>
          {DataTemplates.map((template, key) => {
            return(
              <Grid item xs={12} sm={4} key={key}>
                <ItemTemplate
                  image={template.image}
                  title={template.title}
                  tech={template.tech}
                  url={template.url}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </TemplatesContainer>
  );
}

export default Templates;