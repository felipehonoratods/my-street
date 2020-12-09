import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import '../../App.css';
import './Occurrence.css';


export default function Occurrence() {
  const history = useHistory();

  const [occasion, setOccasion] = useState({
    area: "",
    incident: "",
    name: "",
    address: "",
    phone: "",  
    email: ""
  });

  const { area, name, address, phone, email, incident } = occasion;
  const onInputChange = e => {
    setOccasion({ ...occasion, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/rua", occasion);
    alert(occasion.name + " Caso cadastrado!");
    history.push("/");
  };

  return (
    <div className="form">
      <form onSubmit={e => onSubmit(e)}>
        <h1> Cadastrar ocorrência </h1>

        <label>Área</label>
        <input 
          type="text" 
          name="area"
          value={area}
          onChange={e => onInputChange(e)}
        />

        <label>Ocorrência</label>
        <textarea 
          name="incident" cols="30" rows="10"
          value={incident}
          onChange={e => onInputChange(e)}
        />

        <label>Nome</label>
        <input 
          type="text" 
          name="name"
          value={name}
          onChange={e => onInputChange(e)}
        />
        <label>Endereço</label>
        <input 
          type="text" 
          name="address" 
          value={address}
          onChange={e => onInputChange(e)}
        />
        <label>Contato</label>
        <input 
          type="text" 
          name="phone" 
          value={phone}
          onChange={e => onInputChange(e)}
        />
        <label>E-mail</label>
        <input 
          type="email" 
          name="email"
          value={email}
          onChange={e => onInputChange(e)} 
        />
        <label>Arquivos</label>
        <input type="file" name="files" />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}