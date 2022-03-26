import {render, screen} from '@testing-library/react';
import App from './App';


test('should show text above', () => {
    render(<App />)
    const text = screen.getByText(/React Axios example/i)
  })
