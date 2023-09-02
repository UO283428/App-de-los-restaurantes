import React from 'react';

const parts = window.location.hostname.split('.');
const subdomain = parts.length === 3 ? parts[0] : null;

export const UserContext = React.createContext({
    user: {},
    setUser: () => {},
    subdomain: subdomain,
  });