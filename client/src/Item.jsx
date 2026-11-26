function Item({ peca, onDelete }) {
  return (
<li>
      {peca.name} ({peca.color}) - valor {peca.value}{" "}
<button onClick={() => onDelete(peca.id)}>Apagar</button>
</li>
  );
}
 
export default Item;