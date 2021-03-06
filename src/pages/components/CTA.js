import React from "react";
import { Button } from "@material-ui/core";
import styled from 'styled-components';

const CustomButton = styled(Button)`
  background: var(--secondary) !important;
  margin: 24px 0 !important;
  color: var(--primary) !important;

  &:hover {
    background: var(--secondary-hover) !important;
  }
`; 

const CTA = (props) => {
  return(
    <CustomButton
      variant="contained"
      {...props}
    >
        {props.children}
    </CustomButton>
  )
}

export default CTA;