import { useState } from "react";
import Button from "../Shared/Button";
import { Person } from "../../App";

export default function Form({ isEdit, persons, setPersons, activeView, setActiveView, person, setPerson}) {

console.log('Form', isEdit, persons, setPersons);
const addOrUpdateForm = () => {
    
    if(isEdit){
        const updatePersons = persons.map((ps) =>
            ps.id === person.id ? {
                ...person
            } : ps
        ) 
        setPersons(updatePersons);
    }else{
        const newPerson: Person = { ...person,
            id: Date.now()
        };
        // Thêm mới
        setPersons(s => [...s, newPerson]);
    }   
    // Chuyển sang table
    setActiveView({...activeView, view: 'table', isEdit: false});
    // Reset Input
    setPerson(null);
}

function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
    <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="First Name"
          value={person?.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <label htmlFor="firstName">First Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="lastName"
          value={person?.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={person?.email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={person?.note}
          name="note"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="floatingTextarea">Note</label>
      </div>
      <div className="d-flex d-flex justify-content-end gap-3 mt-3">
        <Button colorName={'btn-primary'} title={'Lưu'} onBam={() => addOrUpdateForm()}></Button>
      </div>
    </>
  );
}
