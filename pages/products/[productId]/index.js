import { useRouter } from "next/dist/client/router";

function ProductDetails(){
const router = useRouter()
const productId = router.query.productId

    return(
        <center>
            <h1>
                Details of Product :- {productId}
            </h1>
        </center>
    )
}

export default ProductDetails