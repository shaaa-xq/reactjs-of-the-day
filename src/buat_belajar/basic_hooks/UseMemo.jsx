import { useState, useMemo } from 'react'

// function AddProduct({onAddProduct}){
//   const [addProduct, setAddProduct] = useState({name: '', price: ''})

//   return(
//     <>
//       <input 
//         type="text" 
//         placeholder="Add Product Name"
//         value={addProduct.name}
//         onChange={(e) => setAddProduct(
//           {...addProduct, name: e.target.value}
//         )}
//       />
//       <br />
//       <input 
//         type="text" 
//         placeholder="Add Product Price"
//         value={addProduct.price}
//         onChange={(e) => setAddProduct(
//           {...addProduct, price: e.target.value}
//         )}
//       />
//       <button
//         onClick={() => {
//           setAddProduct({name: '', price: ''})
//           onAddProduct(addProduct)
//         }}
//       >Add Product</button>
//     </>
//   )

// }

// export default function TotalPrice(){
//   const [products, setProducts] = useState([
//     {id: 0, name: 'Roti', price: 8000},
//     {id: 1, name: 'Mie', price: 3500},
//     {id: 2, name: 'Susu', price: 5000},
//     {id: 3, name: 'Keripik Kentang', price: 7000},
//     {id: 4, name: 'Yogurt', price: 10000}
//   ])

//   let nextId = 5

//   function handleInputProduct(addProduct){
//     setProducts([
//       ...products,
//       {id: nextId++, name: addProduct.name, price: parseInt(addProduct.price)}
//     ])
//   }

//   const total = useMemo(() => {
//     console.log("Calculating price...")
//     return products.reduce((a, b) => a + b.price, 0)
//   }, [products])

//   return(
//     <>
//       <AddProduct 
//         onAddProduct={handleInputProduct}
//       />
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>{product.name} - Rp.{product.price}</li>
//         ))}
//       </ul>
//       <p>Total Price: {total}</p>
//     </>
//   )
// }

export default function FilterName(){
  const [newName, setNewName] = useState('')
  const [names, setNames] = useState(["Kirman", "Ubi", "Narendra", "Ana", "Kaguwir", "Ikkan"])

  function handleAddName(){
    if(newName.trim() !== ""){
      setNames([...names, newName])
      setNewName('')
    } else{
      alert("Name can't be blank")
    }
  }

  const filterLengthName = useMemo(() => {
    return names.filter((x) => x.length > 4)
  }, [names])

  return(
    <>
      <input 
        type="text" 
        placeholder="Add new name"
        value={newName}
        onChange={(e) => 
          setNewName(e.target.value)}
      />
      <button
        onClick={handleAddName}
      >Submit</button>

      <h3>All Names</h3>
      <ul>
        {names.map((allName, index) => (
          <li key={index}>{allName}</li>
        ))}
      </ul>

      <h3>Filtered Name</h3>
      <ul>
        {filterLengthName.map((filteredName, index) => (
          <li key={index}>{filteredName}</li>
        ))}
      </ul>
    </>
  )
}


export default function SortNumber(){
  const [numbers, setNumbers] = useState([5, 3, 8, 1, 9])
  const [newNumber, setNewNumber] = useState('')

  function handleAddNumber(){
    if(newNumber.trim() != ''){
      setNumbers([...numbers, newNumber])
      setNewNumber('')
    }
  }

  return(
    <>
      input
    </>
  )
}