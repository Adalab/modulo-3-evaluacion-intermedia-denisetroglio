import { useState } from "react";
import "../styles/App.css";
import datosAdalabers from "../datos/data.json";

function App() {
  const [adalabers, setAdalabers] = useState(
    datosAdalabers.results
  ); /*pintar adalabers*/

  /*Añadir adalabers*/
  const [name, setName] = useState("");
  const [counselor, setCounselor] = useState("");
  const [speciality, setSpeciality] = useState("");

  const handleChangeName = (ev) => {
    setName(ev.currentTarget.value);
  };

  const handleChangeCounselor = (ev) => {
    setCounselor(ev.currentTarget.value);
  };

  const handleChangeSpeciality = (ev) => {
    setSpeciality(ev.currentTarget.value);
  };

  /*Añadir Adalaber*/
  const handleClick = (ev) => {
    ev.preventDefault();
    const newAdalaber = {
      name: name,
      counselor: counselor,
      speciality: speciality,
    };
    setAdalabers([...adalabers, newAdalaber]);
    setName("");
    setCounselor("");
    setSpeciality("");
  };

  const adalabersHtml = adalabers.map((listadalabers) => (
    <tbody>
      <tr>
        <td>{listadalabers.name}</td>
        <td>{listadalabers.counselor}</td>
        <td>{listadalabers.speciality}</td>
      </tr>
    </tbody>
  ));

  return (
    <main>
      <header ClassName='header'>
        <h2 className='search_adalaber'>Buscar una Adalaber:</h2>
        <input
          className='search'
          type='text'
          name='search'
          id='search'
          placeholder='Busque una Adalaber'
          value='search'
        />
      </header>

      <h1 className='title'>Adalabers</h1>
      <table className='list_adalabers'>
        {adalabersHtml}
        <thead>
          <tr>
            <th>Nombre:</th>
            <th>Tutora:</th>
            <th>Especialidad:</th>
          </tr>
        </thead>
      </table>

      <form className='new_adalaber'>
        <h2 className='new_adalaber_title'>Añadir una Adalaber:</h2>
        <input
          className='new_adalaber'
          type='text'
          name='name'
          id='name'
          placeholder='Nombre'
          onChange={handleChangeName}
          value={name}
        />
        <input
          className='new_adalaber'
          type='text'
          name='counselor'
          id='counselor'
          placeholder='Tutor(a)'
          onChange={handleChangeCounselor}
          value={counselor}
        />
        <input
          className='new_adalaber'
          type='text'
          name='speciality'
          id='speciality'
          placeholder='Especialidad'
          onChange={handleChangeSpeciality}
          value={speciality}
        />
        <input
          className='new_adalaber_btn'
          type='submit'
          value='añadir'
          onClick={handleClick}
        />
      </form>
    </main>
  );
}

export default App;
