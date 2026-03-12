import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const params = useParams();

    // params.id
    return (
        <>
            <p>Details of product </p>
            <p>{params.id}</p>
        </>
    );
}
