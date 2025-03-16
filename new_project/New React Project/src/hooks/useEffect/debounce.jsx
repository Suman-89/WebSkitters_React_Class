import { useEffect, useState } from "react";

export default function Debounce() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data.products); 
        setOutput(data.products); 
      });
  }, []);


  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (input) {
        const filteredProducts = allProducts.filter((product) =>
          product.title.toLowerCase().includes(input.toLowerCase())
        );
        setOutput(filteredProducts);
      } else {
        setOutput(allProducts); 
      }
    }, 500); 

    return () => clearTimeout(delayTimer);
  }, [input, allProducts]);

  return (
    <section>
      <p>Search using filtering instead of an API call.</p>
      <input
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search products..."
      />
      <br />
      {output.length > 0 ? (
        output.map((item) => <div key={item.id}>{item.title}</div>)
      ) : (
        <p>No products found</p>
      )}
    </section>
  );
}