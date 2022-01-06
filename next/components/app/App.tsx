import React, { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';
import Project from '../../interfaces/Project';
import dayjs from 'dayjs';
import { Components } from '../../enums/Components';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const App: FunctionComponent<{ app: Project }> = ({ app }) => {
  console.log(app);
  return (
    <Box>
      <Box>
        <Typography variant="h2" color="secondary.dark">
          {app.title}
        </Typography>
        <Typography variant="subtitle1">
          {dayjs(app.date).format('DD/MM/YYYY')}
        </Typography>
        {app.content.map((component) => {
          switch (component.__component) {
            case Components.RichText:
              return (
                <ReactMarkdown key={component.id}>
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
    </Box>
  );
};

export default App;
