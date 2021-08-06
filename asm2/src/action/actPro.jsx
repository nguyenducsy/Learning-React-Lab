// actions/actSach.js
import { DUA_PRO_VAO_STORE} from "../const/index";
//action đưa sách vào store
export const actDuaSPVaoStore = (arrPro) => {
  return { type: DUA_PRO_VAO_STORE, arrPro,};
};
// export const actThemSach = (tensach, gia) => {
//     return { type: THEM_SACH, tensach, gia,};
// };
// export const actXoaSach = (id) => {
//   return { type: XOA_SACH, id};
// };
  