import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function ContactForm() {
    const [firstname, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");

    const [allContact, setAllContact] = useState([
        {id: uuidv4(),firstname:"Rabe", lastName:"aaa",number:"0333333"},
        {id: uuidv4(),firstname:"Rakot", lastName:"bbb",number:"034444"}
    ]);

    const handleSubmit = (event) =>{
        event.preventDefault();

        const updatedCopyAllContact = [...allContact, {firstname, lastName, number}];
        setAllContact(updatedCopyAllContact);
        setFirstName("");
        setLastName("");
        setNumber("");
    }

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleChangeNumber = (event) => {
        setNumber(event.target.value);
    }

    const handledDelete = (id) =>{
        const copyAllContact = allContact.slice();
        const filterContact = copyAllContact.filter(contact => contact.id!== id);
        setAllContact(filterContact);
        /**
         * const filteredContacts = allContact.filter(contact => contact.id !== id);
        setAllContact(filteredContacts);
         */
    }
    

    return (
        <div 
          className="d-flex justify-content-center align-items-center vh-100" 
          style={{ background: "#f8f9fa" }} 
        >
          <Form action='submit' onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="FirstName" value={firstname} onChange={handleChangeFirstName}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="LastName" value={lastName} onChange={handleChangeLastName}/> 
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Number Phone" value={number} onChange={handleChangeNumber}/>
            </Form.Group>
          <button type="submit" class="btn btn-primary ">Primary</button>

          </Form>

          <table class="table">
  <thead>
    <tr>
      <th scope="col">FirtName</th>
      <th scope="col">LastName</th>
      <th scope="col">Number</th>
    </tr>
  </thead>
  <tbody>
    {allContact.map((contact) => (
      <tr key={contact.id}> 
        <td >{contact.firstname} </td> 
        <td>{contact.lastName}</td>
        <td>{contact.number} <button onClick={() => handledDelete(contact.id)}>Delete</button></td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
      );
}