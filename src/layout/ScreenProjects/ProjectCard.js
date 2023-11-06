import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';

/**
 * Renders a card component for a project with its name, description, technology used and a link to the project.
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.reLink - The link to the project.
 * @param {string} props.name - The name of the project.
 * @param {string} props.description - The description of the project.
 * @param {string} props.technology - The technology used for the project.
 * @returns {JSX.Element} - The JSX element representing the project card.
 */
export default function ProjectCard({ reLink, name, description, technology }) {
  return (
    <Box sx={{ flexBasis: '30%' }}>
      <Card>
        <Box sx={{ flexBasis: '30%', width: '100%' }}>
          <CardContent>
            <Typography>{name}</Typography>
            <Typography>{description}</Typography>
            <Typography sx={{ color: 'primary.dark' }}>
              Technology used: {technology}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href={reLink} target="_blank">
              Link to the project
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}
