import Button from "../Shared/Button";
import { Person } from "../../App";

interface TableProps {
    activeView: object;
    setActiveView: (viewData: object) => void;
    persons: Array<Person>;
    setPersons: (persons: Person[]) => void;
    person: Person;
    setPerson: (person: Person) => void;
}

export default function Table({ activeView, setActiveView, persons, setPersons, person, setPerson}: TableProps) {

    function handleDeleteForm(id: number){
        const filteredPersons = persons.filter((ps) => ps.id !== id);
        setPersons(filteredPersons);
    }
    
    function handleEditForm(ps: Person){
        console.log('handleEditForm', ps, person);
        setPerson({...ps});
        setActiveView({...activeView, view: 'form', isEdit: true});
    }
  return (
    <>
      <div className="d-flex justify-content-end gap-3">
        <Button colorName={'btn-primary'} title={'Thêm'} onBam={() => setActiveView({...activeView, view: 'form', isEdit: false})}></Button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {
            persons.map((ps, index) => (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{ps.firstName}</td>
                <td>{ps.lastName}</td>
                <td>{ps.email}</td>
                <td>{ps.note}</td>
                <td>
                    <div className="d-flex gap-3">
                        <Button colorName={'btn-info'} title={'Sửa'} onBam={() => handleEditForm(ps)}></Button>
                        <Button colorName={'btn-danger'} title={'Xóa'} onBam={() => handleDeleteForm(ps.id)}></Button>
                    </div>
                </td>
            </tr>
            ))
        }
          
        </tbody>
      </table>
    </>
  );
}
