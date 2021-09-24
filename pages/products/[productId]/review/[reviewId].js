import { useRouter } from "next/dist/client/router";

function ProductDetails(){
const router = useRouter()
const {productId,reviewId}= router.query

    return(
        <center>
            <h1>
               Review {reviewId} for Product {productId}
            </h1>
        </center>
    )
}

export default ProductDetails