/**
 * Built by Reabot6 from SFG (seofg.xyz)
 * Open-source — github.com/reabot6/streamline
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Streamline title after loading', async () => {
    render(<App />);
    const title = await screen.findByText(/Streamline/i);
    expect(title).toBeInTheDocument();
});
