// actions/actSach.js
import { DUA_SACH_VAO_STORE, THEM_SACH , XOA_SACH} from "../const/index";
//action đưa sách vào store
export const actDuaSachVaoStore = (arrSach) => {
  return { type: DUA_SACH_VAO_STORE, arrSach,};
};
export const actThemSach = (tensach, tomtat) => {
    return { type: THEM_SACH, tensach, tomtat,};
};
export const actXoaSach = (id) => {
  return { type: XOA_SACH, id};
};
  