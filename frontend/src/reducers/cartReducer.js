import { CART_ADD_ITEM } from '../constants/cartConstant'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find(
        (x) => x.productId === item.productId
      )

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productId === existItem.productId ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
      return item
    default:
      return state
  }
}
