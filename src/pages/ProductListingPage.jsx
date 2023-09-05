import { useEffect } from "react";
import { useProductStore } from "../stores/useProducts";
import ProductList from "../components/ProductLists";


export default function ProductListingPage() {
  const { loadProducts, loading } = useProductStore((state) => {
    return { loadProducts: state.loadProducts, loading: state.loading };
  });
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h1>Product Listing page</h1>
      <hr />
      {loading && <h1>Loading...</h1>}
      <ProductList />
    </div>
  );
}
