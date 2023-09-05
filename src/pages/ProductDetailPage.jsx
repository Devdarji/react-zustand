import { useEffect } from "react";
import { useProductStore } from "../stores/useProducts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductDetailPage() {
  const store = useProductStore();
  const product = store.product;

  const { id } = useParams();

  useEffect(() => {
    store.loadProductById(id);
  }, [id]);

  return (
    <div>
      <h1>ID : {id}</h1>
      <Link to="/store">Back to store</Link>
      <hr />
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
