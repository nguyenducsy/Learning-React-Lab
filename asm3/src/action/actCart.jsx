// actions/actSach.js
import { ADD_CART , EDIT_CART , DELE_CART} from "../const/index";
//action đưa sách vào store
export const actCart = (pro) => {
  return { type: ADD_CART , pro };
};
// export const actThemSach = (tensach, gia) => {
//     return { type: THEM_SACH, tensach, gia,};
// };
export const actXoaCart = (id) => {
  return { type: DELE_CART, id};
};
  