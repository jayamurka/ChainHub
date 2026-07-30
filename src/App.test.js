// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainHub/i);
    expect(titleElement).toBeInTheDocument();
});
