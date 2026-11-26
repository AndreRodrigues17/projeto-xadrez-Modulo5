import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Item from "./Item";

function App() {
  const [pecas, setPecas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/pecas")
      .then((res) => {
        if (!res.ok) throw new Error("Erro " + res.status);
        return res.json();
      })
      .then((dados) => setPecas(dados))
      .catch((err) => setErro(err.message))
      .finally(() => setLoading(false));
  }, []);

  function adicionar(nova) {
    setPecas([...pecas, nova]);
  }

  if (loading) return <p>A carregar...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div>
      <h1>Peças de xadrez</h1>
      <Formulario onAdd={adicionar} />
      <ul>
        {pecas.map((p) => (
          <Item key={p.id} peca={p} />
        ))}
      </ul>
    </div>
  );
}

export default App;