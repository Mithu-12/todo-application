import { useState } from 'react';

const productList = [
  {
    id: 'P1',
    productName: 'Keyboard',
    stock: 10,
    price: 2000,
  },
  {
    id: 'P2',
    productName: 'Mouse',
    stock: 5,
    price: 1500,
  },
  {
    id: 'P3',
    productName: 'Headphone',
    stock: 15,
    price: 2500,
  },
];

const ProductDetails = ({
  id,
  name,
  stock,
  price,
  total,
  quantity,
  increment,
  decrement
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{total}</td>
      <td>{quantity}</td>
      <td>
        <button disabled={quantity === stock } onClick={increment}>+</button>
        <button disabled={quantity === 0 } onClick={() => decrement(id)}>-</button>
      </td>
    </tr>
  );
};

const ProductShow = () => {
  const [products, setProducts] = useState(
    productList.map((product) => {
      return {
        ...product,
        quantity: 0,
        total: 0,
      };
    })
  );
  const increment = (id) => {
    setProducts(
      products.map((product) => {
        if (id === product.id && product.stock > product.quantity) {
          product.quantity++;
          product.total = product.price * product.quantity;
        }
        return product;
      })
    );
  };
  const decrement = (id) => {
    setProducts(
      products.map((product) => {
        if (id === product.id && product.quantity > 0) {
          product.quantity--;
          product.total = product.price * product.quantity;
        }
        return product;
      })
    );
  };


  const total = products.reduce((acc, cur) => { return acc + cur.total}, 0)
  //   console.log(products);

  return (
    <div>
      <h1>Porduct List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductDetails
             {...product}
              increment={() => increment(product.id)}
              decrement={decrement}
            />
          ))}
        </tbody>
      </table>
      <h3>total: {total}</h3>
    </div>
  );
};

export default ProductShow;
