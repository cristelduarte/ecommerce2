
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProducts} from "./service/products"
import '../src/App.css';

export function ItemListContainer({ greeting = 'Bienvenido a la tienda' }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(categoryId)
      .then(setItems)
      .finally(() => setLoading(false));
  }, [categoryId]); 
  
  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border" role="status" aria-label="cargando"></div>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-4">
        <h3 className="fw-bold">{greeting}</h3>
        {categoryId && <p className="text-muted">Filtrado por: <strong>{categoryId}</strong></p>}
      </div>

      <div className="row g-4">
        {items.map((item) => (
          <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
            <div className="card h-100 shadow-sm border-0">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="text-muted mb-2">{item.description}</p>
                <p className="fw-semibold mb-4">${item.price.toLocaleString()}</p>
                <Link className="btn btn-primary mt-auto" to={`/item/${item.id}`}>
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemListContainer;
