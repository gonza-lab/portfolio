import { Link } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ children, href }) => (
          <Link href={href} target="_blank">
            {children}
          </Link>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
