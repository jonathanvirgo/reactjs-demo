import { useState } from "react";
import "./App.css";
import Header from "/src/components/Header";
import Sidebar from "/src/components/Sidebar";
import Footer from "/src/components/Footer";
import Table from "/src/components/Table";
import Form from "./components/Form/Form";

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  note: string;
}

function App() {
  const [activeView, setActiveView] = useState({
    view: 'table',
    isEdit: false
  });
  const [persons, setPersons] = useState<Person[]>([]);
  const [person, setPerson] = useState<Person | null>(null);
  return (
    <div className="container">
      <Header/>
      <div className="d-flex gap-4">
        <Sidebar/>
        <div className="flex-fill">
        {activeView.view === "table" &&  <Table activeView={activeView} setActiveView={setActiveView} persons={persons} setPersons={setPersons} person={person} setPerson={setPerson} />}
        {activeView.view === "form" && <Form isEdit={activeView.isEdit} persons={persons} setPersons={setPersons} activeView={activeView} setActiveView={setActiveView} person={person} setPerson={setPerson}/>}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
