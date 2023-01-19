import { useState } from 'react';
import React from 'react';

function Form() {
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState('');
  const [ city, setCity ] = useState('');
  const [ module, setModule ] = useState('');

  return (
      <form>
        <fieldset>
          <h1>Formulário do Exercício 1</h1>
          <label htmlFor="fullName">
            Nome Completo:
            <input type="text" name="fullName"  id="fullName" onChange={ ({ target }) => setName(target.value) } value={name}/>
          </label>
          <br />
          <label htmlFor="age">
            Idade:
            <input type="number" name="age"  id="age" onChange={ ({ target }) => setAge(target.value) } value={age}/>
          </label>
          <br />
          <label htmlFor="city">
            Cidade:
            <input type="text" name="city"  id="city" onChange={ ({ target }) => setCity(target.value) } value={city}/>
          </label>
          <br />
          <label htmlFor="currentCourseModule">
            <input type="radio" name="currentCourseModule" id="currentCourseModule" value="Fundamentos" checked={module === 'Fundamentos'} onChange={ ({ target }) => setModule(target.value) }/>Fundamentos
          </label>
          <br />
          <label htmlFor="currentCourseModule">
            <input type="radio" name="currentCourseModule" id="currentCourseModule" value="FrontEnd" checked={module === 'FrontEnd'} onChange={ ({ target }) => setModule(target.value) }/>FrontEnd
          </label>
          <br />
          <label htmlFor="currentCourseModule">
            <input type="radio" name="currentCourseModule" id="currentCourseModule" value="BackEnd" checked={module === 'BackEnd'} onChange={ ({ target }) => setModule(target.value) } />BackEnd
          </label>
          <br />
          <label htmlFor="currentCourseModule">
            <input type="radio" name="currentCourseModule" id="currentCourseModule" value="Ciência da Computação" checked={module === 'Ciência da Computação'} onChange={ ({ target }) => setModule(target.value) }/>Ciência da Computação
          </label>
          <br />
          <button type="submit" onClick={(event) => {
            event.preventDefault();
            console.log('Clickei agora!!!')
          }}>Salvar</button>
        </fieldset>
      </form>
  );
}

export default Form;
