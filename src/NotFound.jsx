import { Link } from 'react-router-dom';

export function NotFound() {
    return (
    <div className="text-center py-5">
        <h1 className="display-5 fw-bold">404</h1>
        <p className="lead text-muted">La página que buscás no existe.</p>
        <Link className="btn btn-primary mt-2" to="/">Ir al inicio</Link>
    </div>
    );
}

export default NotFound;
