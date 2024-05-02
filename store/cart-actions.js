import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
import { fetchCart } from "../utils/api";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetchCart(1);
        const data = response.flatMap((item) => item.products);

        const itemList = data.reduce((a, c) => {
          const obj = a.find((obj) => obj.productId === c.productId);
          if (!obj) {
            a.push(c);
          } else {
            obj.quantity += c.quantity;
          }

          return a;
        }, []);
        return itemList;
      } catch (error) {
        throw new Error("Could not fetch cart data!");
      }
    };

    try {
      const cartData = await fetchData();

      dispatch(
        cartActions.replaceCart({
          items: cartData || [],
          totalQuantity: cartData.length,
        })
      );
    } catch (error) {
      dispatch(uiActions.showNotification("error"));
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification("pending"));

    const sendRequest = async () => {
      const response = await updateCart(
        (id = 1),
        (date = "ss"),
        (products = cart)
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(uiActions.showNotification("success"));
    } catch (error) {
      dispatch(uiActions.showNotification("error"));
    }
  };
};
