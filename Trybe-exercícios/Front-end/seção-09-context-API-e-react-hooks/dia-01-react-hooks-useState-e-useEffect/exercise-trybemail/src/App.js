import './App.css';
import TrybemailButtons from './components/TrybemailButtons';
import Trybemailbody from './components/Trybemailbody';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const initialState = [{
    id: 1,
    title: 'Primeiro Email',
    status: 0,
  }, {
    id: 2,
    title: 'Segundo Email',
    status: 0,
  }, {
    id: 3,
    title: 'Terceiro Email',
    status: 0
  }]
  const [emails, setEmails] = useState(initialState);

  useEffect(() => {
    console.log(emails.filter((email) => email.status === 1));
    if (emails.filter((email) => email.status === 1).length === emails.length) return alert("Parabéns! Você leu todas suas mensagens!")
  }, [emails])

  return (
    <div className="App">
      <header className="App-header">
        TrybeMail
      </header>
      <br />
      <TrybemailButtons emails={emails} setEmails={setEmails}/>
      <Trybemailbody emails={emails} setEmails={setEmails}/>
    </div>
  );
}

export default App;
