import React from 'react';

function Trybemailbody({ emails, setEmails }) {

  const readedHandleClick = (emailId) => {
    const arrayEmails = [...emails, emails[emailId - 1].status = 1]
    arrayEmails.pop();
    setEmails(arrayEmails);
    document.querySelectorAll('p')[emailId - 1].style.font = "normal normal normal medium normal"
    document.querySelectorAll('p')[emailId - 1].style.color = "grey";
  }

  const unreadedHandleClick = (emailId) => {
    const arrayEmails = [...emails, emails[emailId - 1].status = 0]
    arrayEmails.pop();
    setEmails(arrayEmails);

    document.querySelectorAll('p')[emailId - 1].style.font = "normal normal bolder large normal"
    document.querySelectorAll('p')[emailId - 1].style.color = "black";
  }

  return (
    <div>
        <fieldset>
            {
                emails.map((email) => {
                    return (
                  <div key={email.id} className='emailsList'>
                    <p>
                      {email.title}                    
                    </p>   
                    <div className='emailsButton'>             
                      <button onClick={ () => readedHandleClick(email.id) }>
                        Lido
                      </button>
                      <button onClick={ () => unreadedHandleClick(email.id) }>
                        Não Lido
                      </button>
                    </div>
                  </div>  
                )}
                    
                )
            }
        </fieldset>
    </div>
  )
}

export default Trybemailbody;