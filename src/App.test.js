import { render, screen } from '@testing-library/react';
import  { MainApp } from './App';

// test('renders learn react link', () => {
//   render(<MainApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import { createRoot } from 'react-dom/client';

test('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container); 
    root.render(<MainApp tab="home" />);
    root.unmount();
});
