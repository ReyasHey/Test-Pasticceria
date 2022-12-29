import Product from "./Product/Product"

import "./ProductsBanner.css"

import { useEffect, useState } from "react";

function ProductsBanner() {
  // Counter for total sweets at the end of `sweets.map()`
  let sweetsTotalAmount = 0;

  // Sweets array
  const [sweets, setSweets] = useState([]);

  // Fetch request status
  const [fetchStatus, setFetchStatus] = useState('Loading');

  useEffect(() => {
    //
    setFetchStatus('Loading');

    // Fetch request to my-json-server on the GitHub repository
    fetch('https://my-json-server.typicode.com/reyashey/Test-Pasticceria/dolci')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    }, () => setFetchStatus = ('Error'))
    .then(setSweets)
    .then(() => setFetchStatus=('Success'))
    .catch((error) => {
      console.log(error)
    }, () => setFetchStatus = ('Error'))
  }, [])


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <article className="productsBanner">
      <section>
          <ul className="productsContainer">
            {/* Create Product components if there is >0 for each Product */}
            {sweets.map(sweet => {
              if(sweet.quantita != 0){
                sweetsTotalAmount += sweet.quantita;
                return(
                  <Product  key={sweet.id}
                            name={sweet.nome}
                            img= { `${process.env.PUBLIC_URL}/imgs/products/${ sweet.nome }.webp` }
                            price={ sweet.prezzo }
                            amount={ sweet.quantita }
                            ingredients={ sweet.ingredients }
                  />
                )
              }
            })}

            {/* If there are no products at all, display an alternative message */}
            { sweetsTotalAmount == 0 && fetchStatus === 'Success' ? (
              <div style={{ display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: 'white',
                            borderRadius: "15px",
                            padding: "10vw"
              }}>
                <h3 style={{ textAlign: "center" }}>
                  <b>Oops..</b>
                  <br />
                  We appear to be out of pastries for today
                  <br />
                  Come back another day for a tasty refill!
                </h3>
              </div>
            ) : null}

            { fetchStatus === 'Error' ? (
              <div style={{ display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: 'white',
                            borderRadius: "15px",
                            padding: "10vw"
              }}>
                <h3 style={{ textAlign: "center" }}>
                  <b>Oops..</b>
                  <br />
                  There appears to be a problem with the servers
                  <br />
                  Come back another day for a tasty refill!
                </h3>
              </div>
            ) : null }
          </ul>
      </section>
    </article>
  )
}

export default ProductsBanner
