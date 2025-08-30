import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById} from "./service/products"

function ItemCount({ stock = 10, onAdd }) {
    const [qty, setQty] = useState(1);
    const dec = () => setQty(q => Math.max(1, q - 1));
    const inc = () => setQty(q => Math.min(stock, q + 1));
    return (
    <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-secondary" onClick={dec} aria-label="disminuir">-</button>
        <span className="px-3">{qty}</span>
        <button className="btn btn-outline-secondary" onClick={inc} aria-label="aumentar">+</button>
        <button className="btn btn-success" onClick={() => onAdd?.(qty)}>Agregar</button>
    </div>
    );
}

export function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(true);
    fetchProductById(itemId)
        .then(setProduct)
        .finally(() => setLoading(false));
    }, [itemId]);

    if (loading) {
    return (
        <div className="d-flex justify-content-center py-5">
        <div className="spinner-border" role="status" aria-label="cargando"></div>
        </div>
    );
    }

    if (!product) {
    return (
        <div className="text-center">
        <h4>Producto no encontrado</h4>
        <Link className="btn btn-outline-primary mt-3" to="/">Volver al catálogo</Link>
        </div>
    );
    }

    const handleAdd = (qty) => {
    alert(`Agregaste ${qty} unidad(es) de "${product.title}" al carrito.`);
    };

    return (
    <div className="row g-4">
        <div className="col-12 col-md-6">
        <img src={product.image} alt={product.title} className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column">
        <h2 className="fw-bold">{product.title}</h2>
        <p className="text-muted">{product.description}</p>
        <p className="h4 fw-semibold mb-4">${product.price.toLocaleString()}</p>
        <ItemCount stock={product.stock} onAdd={handleAdd} />
        <div className="mt-4 d-flex gap-2">
            <Link className="btn btn-outline-secondary" to="/">Volver</Link>
            <Link className="btn btn-primary" to={`/category/${product.category}`}>Ver más de {product.category}</Link>
        </div>
        </div>
    </div>
    );
}

export default ItemDetailContainer;
