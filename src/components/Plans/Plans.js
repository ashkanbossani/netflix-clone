import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { db } from "../../firebase";
import { loadStripe } from "@stripe/stripe-js";
import "./Plans.scss";

function Plans() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const handleLoadCheckout = async (priceId) => {
    const docRef = await db.collection(
      "customers".doc(user.uid).collection("checkout_session").add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      })
    );
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        //Show an error to your customer and
        //   inspect Cloud Function logs in the Firebase console

        //change this to pop up message
        alert(`An error occurred: ${error.message}`);
      }

      if (sessionId){
        //We have a session, let's redirect to Checkout
        //Init Stripe
        const stripe = await loadStripe(
          "pk_test_51Lan96BvGQVk9GwsXqUft50qwct1JJvFgnCL423MLQKf5SLdm2MaNYfqLHrU16cl0ypgue9bgTxrzOeltynWHERd00ONyyxbvz"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plans">
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="plans__plans">
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() => handleLoadCheckout(productData.prices.priceId)}
            >
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
