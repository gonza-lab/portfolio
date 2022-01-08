import React, { FunctionComponent } from 'react';

import { Box, Link, Typography } from '@mui/material';

import dayjs from 'dayjs';

import Image from 'next/image';

import Project from '../../interfaces/Project';

import { Components } from '../../enums/Components';

import Markdown from '../markdown/Markdown';

const App: FunctionComponent<{ app: Project }> = ({ app }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        color="secondary.dark"
        component="h1"
        fontWeight="bolder"
      >
        {app.title}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Typography variant="subtitle1">
          {dayjs(app.date).format('DD/MM/YYYY')}
        </Typography>
        <Box sx={{ height: '20px', borderRight: '1px solid black' }}></Box>
        {app.url && (
          <Link target="_blank" href={app.url} sx={{ mt: '3px' }}>
            Link
          </Link>
        )}
      </Box>
      {app.content.map((component) => {
        switch (component.__component) {
          case Components.RichText:
            return <Markdown key={component.id}>{component.content}</Markdown>;
          case Components.Slider:
            return <div key={component.id}>un slider feliz :D</div>;

          case Components.LargeMedia:
            return (
              <Image
                key={component.id}
                alt={component.media.alternativeText}
                height={component.media.height}
                width={component.media.width}
                src={component.media.url}
              />
            );
        }
      })}
    </Box>
  );
};

export default App;
