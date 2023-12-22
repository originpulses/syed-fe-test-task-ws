import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render Leaderboard component', () => {
    const { getByText } = render(<App />);
    
    const leaderboardElement = getByText('Leaderboard');
    expect(leaderboardElement).toBeInTheDocument();
  });
});

