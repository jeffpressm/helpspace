import React from 'react';
import { OutboundLink } from 'react-ga';

const ExternalLink = ({ href, children, rest }) => (
  <OutboundLink
    eventLabel={href}
    to={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </OutboundLink>
);

export default ExternalLink;
