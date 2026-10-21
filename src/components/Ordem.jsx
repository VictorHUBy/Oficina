import "./Ordem.css";

function Ordem(proop) {
  const ordem = proop.ordem;

  return (
    <li className={ordem.ordFinalizad ? "ordem concluida" : "ordem"}>
      <p>
        <strong>{ordem.dsCliente}</strong>
      </p>
      <p>{ordem.dsServico}</p>
      <p>R$ {ordem.nuValor.toFixed(2)}</p>

      {ordem.ordFinalizad && <span className="selo">Concluída</span>}

      <div>
        <button onClick={() => proop.marcar(ordem.idOrdem)}>
          {ordem.ordFinalizad ? "Reabrir" : "Concluir"}
        </button>

        <button onClick={() => proop.remover(ordem.idOrdem)}>
          Remover
        </button>
      </div>
    </li>
  );
}

export default Ordem;