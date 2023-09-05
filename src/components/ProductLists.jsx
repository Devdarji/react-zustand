import { Link } from "react-router-dom";
import { useProductStore } from "../stores/useProducts";

export default function ProductList() {
  const products = useProductStore((store) => store.products);
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <Link to={`/store/dp/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}