import { useState } from "react"
import axios from "axios"

function Product() {

    let [name, setName] = useState(" ");
    let [price, setPrice] = useState(" ");

    const handlesubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:3000/api/products/add",
                {
                    name: name,
                    price: price,
                });

            console.log(response.data);

            alert("Product added successfully");

            setName("");
            setPrice("");

        }
        catch (error) {
            console.log(error);
            alert("error adding name and price of product");
        }

    }

    return (
        <>
            <form onSubmit={handlesubmit}>

                <label>Add product details </label>
                <br />
                <hr />

                <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    placeholder="Enter product name.." />
                <br />
                <input type="number"
                    value={price}
                    onChange={(e) => { setPrice(e.target.value) }}
                    placeholder="Set your price.." />

                <button type="submit" >submit</button>

            </form>
        </>
    )
}

export default Product;