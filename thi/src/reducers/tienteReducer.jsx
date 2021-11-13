import { TIENTE} from '../const/index';
const tienteReducer = (state = [], action) => {
switch (action.type) {
  case "TIEN_TE":
    
      state= {kyhieutien: action.loaitien};
      
        console.log("Da doi tien te:" , state); 

    return state;
    default : return state;
        };
}
    export default tienteReducer;
        
