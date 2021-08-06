  // reducers/sachReducers.js
  import {DUA_PRO_VAO_STORE} from "../const/index";
  const productReducer = (state = [], action) => {
  switch (action.type) {    
    case DUA_PRO_VAO_STORE:
      //code đưa sách vào store
      action.arrPro.forEach( s => {
        state= [...state, 
          {id: s.id, name: s.name, price: s.price, urlPic:s.urlPic, urlPic2: s.urlPic2, des:s.des , idLoai: s.idLoai , new :s.new , hot :s.hot , star: s.star , sale: s.sale , view: s.view }
        ];
        });      
        console.log("Đã đưa sách vào store:" , state);
    
      return state;
    // case ADD_PRO:
    //   //code thêm sách
    //   const id_Sach = new Date() .getTime();
    //   state=[...state,
    //     {
    //       id:id_Sach , tensach: action.tensach , gia: action.gia , urlHinh: ''
    //     }]
    //     console.log("Đã thêm sách:" , state);
        
    //   return state;
    // case EDIT_PRO:
    //   //code chỉnh sách
    //   return state;
    // case DELE_PRO:
    //   //code xóa sách
    //   const idSach = action.id;
    //   state = state.filter(sach => {
    //     if (sach.id === idSach) return false
    //     return true
        
    //   })
    //   console.log("da Xoa");
    //   return state;

    default:
      return state;
  }
};
export default productReducer
