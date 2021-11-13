  // reducers/sachReducers.js
  import {THEM_SACH,CHINH_SACH,XOA_SACH,DUA_SACH_VAO_STORE} from "../const/index";
  const sachReducer = (state = [], action) => {
  switch (action.type) {    
    case DUA_SACH_VAO_STORE:
      //code đưa sách vào store
      action.arrSach.forEach( s => {
        state= [...state, 
          {id: s.id, tensach: s.TieuDe, Ngay: s.Ngay, view:s.Xem,TomTat: s.TomTat}
        ];
        });      
        console.log("Đã đưa sách vào store:" , state);
    
      return state;
    case THEM_SACH:
      //code thêm sách
      const id_Sach = new Date() .getTime();
  
      state=[...state,
        {
          id:id_Sach , tensach: action.tensach , Ngay: "", view: "",TomTat: action.tomtat
        }]
        console.log("Đã thêm sách:" , state);
        
      return state;
    case CHINH_SACH:
      //code chỉnh sách
      return state;
    case XOA_SACH:
      //code xóa sách
      const idSach = action.id;
      state = state.filter(sach => {
        if (sach.id === idSach) return false
        return true
        
      })
      console.log("da Xoa");
      return state;

    default:
      return state;
  }
};
export default sachReducer
