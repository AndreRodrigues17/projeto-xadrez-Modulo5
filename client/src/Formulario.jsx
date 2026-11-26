import { useState } from "react";

function Formulario({ onAdd }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [color, setColor] = useState("Branca");
  const [erro, setErro] = useState("");
  const [aEnviar, setAEnviar] = useState(false);

  async function enviar(e) {
    e.preventDefault();
    setErro("");
    setAEnviar(true);
    try {
      const res = await fetch("http://localhost:3001/api/pecas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, value, color }),
      });
      const dados = await res.json();
      if (!res.ok) {
        setErro(dados.error);
        return;
      }
      onAdd(dados);
      setName("");
      setValue("");
      setColor("Branca");
    } catch (err) {
      setErro("Não foi possível falar com o server");
    } finally {
      setAEnviar(false);
    }
  }

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="Branca">Branca</option>
        <option value="Preta">Preta</option>
      </select>
      <button type="submit" disabled={aEnviar}>
        {aEnviar ? "A enviar..." : "Adicionar"}
      </button>
      {erro && <p>{erro}</p>}
    </form>
  );
}

export default Formulario;