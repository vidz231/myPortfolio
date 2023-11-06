import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function AboutMeCard({ title, subtitle, content, imgSrc }) {
  return (
    <Box sx={{ flexBasis: '50%', height: '100%', width: '100%' }}>
      <Card>
        <Box sx={{ display: 'flex', flexFlow: 'row nowrap' }}>
          <CardMedia
            component="img"
            image={imgSrc}
            alt="about-me-image"
            sx={{ width: '30%', height: '50%' }}
            objectFit="contain"
          />

          <CardContent sx={{ width: '70%', height: '100%' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {subtitle}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {content}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
