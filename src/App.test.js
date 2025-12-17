// App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('realiza una suma correctamente', () => {
  render(<App />);

  const input1 = screen.getByPlaceholderText('Número 1');
  const input2 = screen.getByPlaceholderText('Número 2');
  const button = screen.getByText('Sumar');

  fireEvent.change(input1, { target: { value: '3' } });
  fireEvent.change(input2, { target: { value: '7' } });
  fireEvent.click(button);

  const resultado = screen.getByText('Resultado: 10');
  expect(resultado).toBeInTheDocument();
});
