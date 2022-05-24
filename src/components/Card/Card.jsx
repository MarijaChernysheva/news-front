import * as React from 'react';
import { string, shape } from 'prop-types';
import { useNavigate } from 'react-router';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import grass from '../../assets/grass.jpg';

function MediaCard({ title, text, author }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={grass}
        alt="green grass"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { text }
        </Typography>
        Autor:
        { author?.login }
        <button type="button" className="buttonUserPage" onClick={() => navigate(`users/${author?.id}`)}>Author page </button>
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  title: string,
  text: string,
  author: shape({}),
};

MediaCard.defaultProps = {
  title: '',
  text: '',
  author: {},
};

export default MediaCard;
