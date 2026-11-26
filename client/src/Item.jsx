function Item({ peca }) {
  return (
    <li>
      {peca.name} ({peca.color}) - valor {peca.value}
    </li>
  );
}

export default Item;