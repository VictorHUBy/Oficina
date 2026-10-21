import { useState } from "react";
import "./App.css";
import Ordem from "./components/Ordem.jsx";

function App() {
  const [ordens, setOrdens] = useState([
    {
      idOrdem: crypto.randomUUID(),
      dsCliente: "Angelo Hank",
      dsServico: "Troca de pastilhas de freio",
      nuValor: 85,
      ordFinalizad: false,
    },
    {
      idOrdem: crypto.randomUUID(),
      dsCliente: "Gustavo Slivoskie",
      dsServico: "Regulagem de câmbio",
      nuValor: 60,
      ordFinalizad: true,
    },
    {
      idOrdem: crypto.randomUUID(),
      dsCliente: "Henrique com",
      dsServico: "Troca de pneu traseiro",
      nuValor: 120.5, //valor para testar depois
      ordFinalizad: false,
    },
  ]);
// =========================================================
// "BANCO DE DADOS" ACIMA
// =========================================================

  const [cliente, setCliente] = useState("");
  const [servico, setServico] = useState("");
  const [valor, setValor] = useState("");
  const [erro, alert] = useState("");

  // ADICIONAR (antiga - projeto da parte 1)
  function adicionar() {
    if (cliente.trim() === "") { alert("Preencha o nome do cliente.");
      return;
    }
    if (servico.trim() === "") { alert("Preencha o serviço.");
      return;
    }
    // lembra que o trim pra "   " não virar 0
    if (valor.trim() === "") { alert("Preencha o valor.");
      return;
    }

    const numero = Number(valor);

// ================================================
//    teste de validacao
// ================================================

    if (isNaN(numero)) { alert("O valor precisa ser um número.");
      return;
    }
    if (numero < 0) { alert("O valor não pode ser negativo.");
      return;
    }

// COMANDO basse para gerar o id aleatorios

    const novaOrdem = {
      idOrdem: crypto.randomUUID(),
      dsCliente: cliente,
      dsServico: servico,
      nuValor: numero,
      ordFinalizad: false,
    };

    setOrdens([...ordens, novaOrdem]);

    setCliente("");
    setServico("");
    setValor("");
    alert("");
  }

  // isso é CONCLUIR, apenas mudei o nome(reutilizar ele)
  function marcar(id) {
    setOrdens(
      ordens.map((ordem) =>
        ordem.idOrdem === id
          ? { ...ordem, ordFinalizad: !ordem.ordFinalizad }
          : ordem
      )
    );
  }

  // REMOVER - lmebrar de remover as ordens no lugar das tarefas da para reutilizar
  function remover(id) {
    setOrdens(ordens.filter((ordem) => ordem.idOrdem !== id));
  }

  // sem o useStates
  const todas = ordens.length;
  const Aguardando = ordens.filter((ordem) => ordem.ordFinalizad === false);
  const quantiaAberta = Aguardando.length;

  let valorAberto = 0;
  for (let i = 0; i < Aguardando.length; i++) {
    valorAberto = valorAberto + Aguardando[i].nuValor;
  } //for é o ideal nesse caso

  return (
    <div className="oficina">
      <h1>Oficina de Bicicletas</h1>

      <div className="resumo">
        <p>Total de ordens: {todas}</p>
        <p>Ordens em aberto: {quantiaAberta}</p>
        <p>Valor em aberto: R$ {valorAberto.toFixed(2)}</p>
      </div>

      <form
        onSubmit={(eventos) => {
          eventos.preventDefault();
          adicionar();
        }}
      >
        <input campos dos inputees
            type="text"
            placeholder="Cliente"
            value={cliente}
            onChange={(eventos) => setCliente(eventos.target.value)}
        />
        <input
            type="text"
            placeholder="Serviço"
            value={servico}
            onChange={(eventos) => setServico(eventos.target.value)}
        />
        <input
            type="text"
            placeholder="Valor"
            value={valor}
            onChange={(eventos) => setValor(eventos.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      {erro !== "" && <p className="erro">{erro}</p>}
      {ordens.length === 0 && (
        <p className="vazio">Não sobrou nada.</p>
      )}
      <ul>
        {ordens.map((ordem) => ( //map para varer todas as coisas listadas
          <Ordem
            key={ordem.idOrdem}
            ordem={ordem}
            marcar={marcar}
            remover={remover}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;