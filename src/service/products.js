
// Listado de productos
export async function fetchProducts(limit = 12) {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    if (!res.ok) throw new Error("Error al cargar productos");
    return await res.json();
}

// Detalle de producto por ID
export async function fetchProductById(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Producto no encontrado");
    return await res.json();
}
