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

const ProductItem = ({
  id,
  productName,
  stock,
  price,
  quantity,
  total,
  increment,
  decrement
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button disabled={stock === 0 } onClick={() => increment(id)}>+</button>
        <button disabled={quantity === 0 && stock > 0  } onClick={() => decrement(id)}>-</button>
      </td>
    </tr>
  );
};

const ShoppingCart = () => {
  const [products, setProducts] = useState(
    productList.map((item) => {
      return {
        ...item,
        quantity: 0,
        total: 0,
      };
    })
  );

  const increment = (id) => {
    const stateUpdated = products.map((product) => {
      if (id === product.id && product.quantity < product.stock) {
        product.quantity++;
        product.total = product.quantity * product.price;
      }
      if(product.quantity > 0 && product.quantity === product.stock){
        product.stock  = 0
      }
    //   if(product.quantity < 0 && product.quantity !== product.stock){
    //     return product.stock
    //   }

      return product;
    });

    setProducts(stateUpdated);
  };
  const decrement = (id) => {
    const stateUpdated = products.map((product) => {
      if (id === product.id && product.quantity > 0) {
        product.quantity--;
        product.total = product.quantity * product.price;
      }
    //   if(product.quantity > 0 && product.quantity === product.stock){
    //     product.stock  = 0
    //   }

      return product;
    });

    setProducts(stateUpdated);
  };

  console.log(products);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                {...product}
                increment={increment}
                decrement={decrement}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
