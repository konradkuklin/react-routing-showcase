import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: "p1", title: "product1" },
    { id: "p2", title: "product2" },
    { id: "p3", title: "product3" },
];

export default function ProductPage() {
    return (
        <>
            <h2> Products page</h2>
            <ul>
                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={product.id}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
