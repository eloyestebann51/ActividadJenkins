// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input } from 'reactstrap';
import React from 'react';

// Cambio Auto Prueba
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numero1: '',
      numero2: '',
      resultado: null
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  sumar = () => {
    const { numero1, numero2 } = this.state;
    const suma = parseFloat(numero1) + parseFloat(numero2);
    this.setState({ resultado: suma });
  }

  render() {
    const { numero1, numero2, resultado } = this.state;
    return (
      <div className="App">
        <h3>Calculadora de Suma</h3>
        <Input
          type="number"
          name="numero1"
          value={numero1}
          onChange={this.handleChange}
          placeholder="Número 1"
        />
        <Input
          type="number"
          name="numero2"
          value={numero2}
          onChange={this.handleChange}
          placeholder="Número 2"
        />
        <Button color="success" onClick={this.sumar}>Sumar</Button>
        {resultado !== null && <h4>Resultado: {resultado}</h4>}
      </div>
    );
  }
}

export default App;
