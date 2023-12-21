import React from 'react';
import Leaderboard from './components/Leaderboard/Leaderboard';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Leaderboard />
    </Container>
  );
};

export default App;