import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const CustomCardMedia = styled(CardMedia)`
  padding-top: 56.25%; // 16:9
`;

const ItemTemplate = ({...props}) => {

  return (
    <a href={props.url}>
      <Card>
        <CustomCardMedia
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" className="dark--text" >
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" className="dark--text" >
            {props.tech}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}

export default ItemTemplate;