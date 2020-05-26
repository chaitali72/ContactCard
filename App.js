import React, { useState, useEffect } from 'react';
import "./styles.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setContacts(data.results)
      });
  }, []);


  return (
    <>
      {contacts.map(contact => (
        <Contactcard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </>
  );
};



const Contactcard = props => {
  const [ShowAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email:{props.email}</p>
        <button onClick={() => setShowAge(!ShowAge)} > Age</button>
        {ShowAge && <p>Age:{props.age}</p>}
      </div>
    </div>
  );
};
export default App;