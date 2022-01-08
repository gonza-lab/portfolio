import React, { FunctionComponent } from 'react';
import { Box, Link, Typography } from '@mui/material';
import Project from '../../interfaces/Project';
import dayjs from 'dayjs';
import { Components } from '../../enums/Components';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const App: FunctionComponent<{ app: Project }> = ({ app }) => {
  return (
    <Box>
      <Typography variant="h2" color="secondary.dark" component="h1">
        {app.title}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Typography variant="subtitle1">
          {dayjs(app.date).format('DD/MM/YYYY')}
        </Typography>
        {app.url && (
          <Link target="_blank" href={app.url} sx={{ mt: '3px' }}>
            Link
          </Link>
        )}
      </Box>
      {app.content.map((component) => {
        switch (component.__component) {
          case Components.RichText:
            return (
              <ReactMarkdown
                key={component.id}
                components={{
                  h2: ({ children }) => (
                    <Typography variant="h3" component="h2">
                      {children}
                    </Typography>
                  ),
                }}
              >
                {component.content}
              </ReactMarkdown>
            );
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
