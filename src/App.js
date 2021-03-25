import React from 'react';
import { Container, Grid, TextField } from '@material-ui/core';

import RenderButtons from './components/RenderButtons';
import mainObject from './utils/mainObject';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      campo:'',
      operacion:'',
      resultado:''
    }
  }

  editFieldValue = (operation) => {
    let objectOperation = operation.split(':');
    console.log(objectOperation);
    this.setOperation(objectOperation);
  }

  setOperation = (objectOperation) => {
    switch (objectOperation[0]) {
      case 'addNumber':
        console.log(`addNumber resultado: ${this.state.resultado}`);
        if(this.state.resultado === 'pendiente'){
          this.setState({
            campo:this.state.campo+objectOperation[1]
          });
        } else {
          this.cleanAll();
          this.setState({
            campo:objectOperation[1],
            resultado: 'pendiente'
          });
        }
        break;
      
      case 'addOperation':

        if(this.state.operacion === ''){
          this.setState({
            campo:this.state.campo+this.getOperationSymbol(objectOperation[1]),
            operacion: this.getOperationSymbol(objectOperation[1]),
            resultado: 'pendiente'
          });
        } else {
          alert('Ya ha seleccionado una operación matemática!');
        }

        break;

      case 'clean':
        this.cleanAll();
        break;
    
      case 'getResult':
        let campo = this.state.campo.split(this.state.operacion);
        let numA = parseInt(campo[0]);
        let numB = parseInt(campo[1]);
        let result = this.getResult(numA, numB);
        this.setState({
          campo:this.state.campo+'='+result,
          resultado: 'generado'
        });
        console.log(`getResult resultado: ${this.state.resultado}`);
        break;

      default:
        console.log('Default operation!');
        break;
    }
  }

  cleanAll = () => {
    this.setState({
      campo:'',
      operacion:'',
      resultado:''
    });
  }

  getOperationSymbol = (operation) => {
    let symbol = '';
    switch (operation) {
      case 'suma':
        symbol = '+';
        break;
      
      case 'resta':
        symbol = '-';
        break;
      
      case 'multiplicacion':
        symbol = 'x';
        break;
      
      case 'division':
        symbol = '/';
        break;
    
      default:
        symbol = '.';
        break;
    }
    return symbol;
  }

  getResult = (numA, numB) => {
    let result = 0;
    switch(this.state.operacion){
      case '+':
        result = numA + numB;
        break;
      case '-':
        result = numA - numB;
        break;
      case 'x':
        result = numA * numB;
        break;
      case '/':
        result = (numB > 0) ? (numA/numB) : alert('División por cero');
        break;
      default:
        result = numA;
        break;
    }
    return result;
  }

  render() {
    return (
      <Container maxWidth="sm" style={{paddingTop:100}}>
          <Grid container spacing={1} style={{marginBottom:10}}>
            <TextField id="outlined-basic" label="Calculadora" variant="outlined" fullWidth value={this.state.campo}/>
          </Grid>
          <Grid container spacing={3}>
            <RenderButtons editFieldValue={this.editFieldValue} objectToRender={mainObject}/>
          </Grid>
      </Container>
    );
  }
}

export default App;
