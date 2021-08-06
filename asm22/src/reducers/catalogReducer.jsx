import { ADD_CATE, EDIT_CATE, DELE_CATE , DUA_CATE_VAO_STORE } from "../const/index";
const loaisachReducer = (state = [], action) => {
switch (action.type) {
  case DUA_CATE_VAO_STORE:
    //code đưa sách vào store
    action.arrCate.forEach( s => {
      state= [...state, 
        {id: s.id, name: s.name, sort: s.sort , show: s.show }
      ];
      });      
      console.log("Đã đưa danh muc vào store:" , state);
    return state;
  case ADD_CATE:
    //code thêm loại sách vào store
    return state;
  case EDIT_CATE:
            //code chỉnh 1 loại sách vào store
  return state;
  case DELE_CATE:
              //code xóa 1 loại sách vào store
  return state;
            default: return state;
          }
        };
        export default loaisachReducer
        
