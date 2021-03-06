import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const CustomCard = styled.div`
  padding: 24px;
  border-radius: 24px;
  -moz-box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.4);
  background: rgb(255,255,255);
  background: linear-gradient(-130deg, var(--white) 0%, var(--lighttext) 100%);
`;

const StepID = styled.div`
  border-radius: 0 50% 50% 0;
  padding: 16px;
  padding-right: 24px;
  width: fit-content;
  -moz-box-shadow: inset 4px 0px 4px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 4px 0px 4px 0px rgba(0, 0, 0, 0.4);
  box-shadow: inset 4px 0px 4px 0px rgba(0, 0, 0, 0.4);

  & p {
    font-size: 4rem;
    font-weight: lighter;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 768px) {
    padding-right: 16px;
    & p {
      font-size: 2rem;
    }
  }
`;

const Step = ({...props}) => {

  return (
    <CustomCard>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <StepID style={{background: props.color}}>
            <Typography className="white--text" component="p">
              {props.id}
            </Typography>
          </StepID>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" component="p" className="dark--text" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" className="dark--text" gutterBottom>
            {props.description}
          </Typography>
        </Grid>
      </Grid>
    </CustomCard>
  );
}

export default Step;