function Item({ name, stock }) {
  return (
    <li className="item" style={{ border: "solid", padding: "10px", marginBottom: "20px", borderRadius: "10px" }}>
      <b>{name}</b> {stock > 1 ? "Barang tersedia!" : "Stok habis!"}
    </li>
  );
}

export default function Shop() {
  return (
    <section>
      <h1>Toko Serba Ada</h1>
      <ul>
        <Item name="Susu" stock={9} />
        <Item name="Biskuit" stock={30} />
        <Item name="Snack" stock={0} />
      </ul>
    </section>
  );
}
