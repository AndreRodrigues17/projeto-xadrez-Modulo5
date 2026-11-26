import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Item from "./Item";
 
function App() {
  const [pecas, setPecas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");
  const [erroApagar, setErroApagar] = useState("");
 
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
 
  async function apagar(id) {
    setErroApagar("");
    try {
      const res = await fetch("http://localhost:3001/api/pecas/" + id, {
        method: "DELETE",
      });
      if (!res.ok) {
        const dados = await res.json();
        setErroApagar(dados.error);
        return;
      }
      setPecas((atual) => atual.filter((p) => p.id !== id));
    } catch (err) {
      setErroApagar("Não foi possível falar com o server");
    }
  }
 
  if (loading) return <p>A carregar...</p>;
  if (erro) return <p>Erro: {erro}</p>;
 
  return (
<div>
<h1>Peças de xadrez</h1>
<Formulario onAdd={adicionar} />
      {erroApagar && <p>{erroApagar}</p>}
<ul>
        {pecas.map((p) => (
<Item key={p.id} peca={p} onDelete={apagar} />
        ))}
</ul>
</div>
  );
}
 
export default App;