import React from 'react';
import '../../App.css';
import './Occurrence.css';
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import Input from "../Input";

export default function Occurrence() {
  function handleSubmit(data, { reset }) {
    console.log(data);

    reset();
  }

  return (
    <div className="form">
    <Form onSubmit={handleSubmit}>
      <h1> Cadastrar ocorrência </h1>

      <Input name="area" label="Área" />

      <label>Ocorrência</label>
      <textarea name="Caso" cols="30" rows="10"></textarea>

      <Scope path="accuser">
        <Input name="name" label="Nome" />
        <Input name="address" label="Endereço" />
        <Input name="contact" label="Contato" />
        <Input name="email" label="E-mail" type="email" />
      </Scope>

      <Input name="files" label="Arquivos" type="file" />

      <button type="submit">Cadastrar</button>
    </Form>
    </div>
  );
}