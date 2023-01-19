import React from 'react';

function TrybemailButtons({ emails, setEmails }) {
  
  const readedHandleClick = () => {
    const readedEmails = emails.map((email) => {
      email.status = 1;
      document.querySelectorAll('p')[email.id - 1].style.font = "normal normal normal medium normal";
      document.querySelectorAll('p')[email.id - 1].style.color = "grey";
      return email;
    })
    setEmails(readedEmails);
  }

  const unreadedHandleClick = () => {
    const unreadedEmails = emails.map((email) => {
      email.status = 0
      document.querySelectorAll('p')[email.id - 1].style.font = "normal normal bolder large normal"
      document.querySelectorAll('p')[email.id - 1].style.color = "black";
      return email;
    })
    setEmails(unreadedEmails);
  }

  return (

    <div>
      <button type='button' onClick={() => readedHandleClick()}>
        Marcar todas como lida
      </button>
      <button type='button' onClick={() => unreadedHandleClick()}>
        Marcar todas como não lida
      </button>
    </div>
  )
}

export default TrybemailButtons;