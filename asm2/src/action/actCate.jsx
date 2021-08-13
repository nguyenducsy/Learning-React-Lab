// actions/actSach.js
import { DUA_CATE_VAO_STORE } from "../const/index";
//action đưa sách vào store
export const actDuaDMVaoStore = (arrCate) => {
  return { type: DUA_CATE_VAO_STORE , arrCate };
};
// export const actThemSach = (tensach, gia) => {
//     return { type: THEM_SACH, tensach, gia,};
// };
// export const actXoaSach = (id) => {
//   return { type: XOA_SACH, id};
// };
  