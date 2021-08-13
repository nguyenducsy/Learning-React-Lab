import { ADD_CART , EDIT_CART, DELE_CART  } from "../const/index";
const cartReducer = (state = [], action) => {
switch (action.type) {
  case ADD_CART:

      state= [...state, action.pro 
        
      ];
      console.log("Đã đưa san pham vào store:" , state);
    return state;

    // case THEM_SACH:
    //     //code thêm sách

    //     state=[...state,
    //       {
    //         id:id_Sach , tensach: action.tensach , gia: action.gia , urlHinh: ''
    //       }]
    //       console.log("Đã thêm sách:" , state);
          
    //     return state;
  case EDIT_CART:
            //code chỉnh 1 loại sách vào store
  return state;
  case DELE_CART:
    const idPro = action.id;
    console.log(idPro);
    state = state.filter(pro => {
      if (pro.id === idPro) return false
      else return true;
    });
    return state;
           
    default: return state;
    }
  };
        export default cartReducer
        
