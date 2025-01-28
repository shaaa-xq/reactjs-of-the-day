import { useState, useMemo } from "react";

function AddProduct({onAddProduct}){
  const [addProduct, setAddProduct] = useState({name: '', price: ''})

  return(
    <>
      <input 
        type="text" 
        placeholder="Add Product Name"
        value={addProduct.name}
        onChange={(e) => setAddProduct(
          {...addProduct, name: e.target.value}
        )}
      />
      <br />
      <input 
        type="text" 
        placeholder="Add Product Price"
        value={addProduct.price}
        onChange={(e) => setAddProduct(
          {...addProduct, price: e.target.value}
        )}
      />
      <button
        onClick={() => {
          setAddProduct({name: '', price: ''})
          onAddProduct(addProduct)
        }}
      >Add Product</button>
    </>
  )

}

export default function TotalPrice(){
  const [products, setProducts] = useState([
    {id: 0, name: 'Roti', price: 8000},
    {id: 1, name: 'Mie', price: 3500},
    {id: 2, name: 'Susu', price: 5000},
    {id: 3, name: 'Keripik Kentang', price: 7000},
    {id: 4, name: 'Yogurt', price: 10000}
  ])

  let nextId = 5

  function handleInputProduct(addProduct){
    setProducts([
      ...products,
      {id: nextId++, name: addProduct.name, price: parseInt(addProduct.price)}
    ])
  }

  const total = useMemo(() => {
    console.log("Calculating price...")
    return products.reduce((a, b) => a + b.price, 0)
  }, [products])

  return(
    <>
      <AddProduct 
        onAddProduct={handleInputProduct}
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - Rp.{product.price}</li>
        ))}
      </ul>
      <p>Total Price: {total}</p>
    </>
  )
}
