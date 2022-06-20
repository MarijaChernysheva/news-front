import * as React from 'react';
import { useSelector } from 'react-redux';
import { string, shape } from 'prop-types';
import { useNavigate } from 'react-router';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// import grass from '../../assets/grass.jpg';

function MediaCard({
  file, title, text, author,
}) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const onClickAuthor = () => navigate(`users/${author?.id}`);

  const image = file?.slice(6);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        // image={grass}
        alt="green grass"
        src={`${process.env.REACT_APP_API_URL}/${image}`}
      />
      <CardContent>
        <Typography>
          { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { text }
        </Typography>
        {isLoggedIn ? (
          <button
            type="button"
            onClick={onClickAuthor}
          >
            Author:
            { author?.login }
          </button>
        ) : (
          author?.login
        )}
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  file: string,
  title: string,
  text: string,
  author: shape({}),
};

MediaCard.defaultProps = {
  file: '',
  title: '',
  text: '',
  author: {},
};

export default MediaCard;
