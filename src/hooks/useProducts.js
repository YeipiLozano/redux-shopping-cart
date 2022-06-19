import {useState, useEffect} from 'react';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await fetch('/data/products.json');
      const json = await response.json();

      setProducts(json.data.products.items);
      setCategories(json.data.categories.items);
      setLoading(false);
    };
    getData();
  }, []);

  return {products, categories, loading};
}
