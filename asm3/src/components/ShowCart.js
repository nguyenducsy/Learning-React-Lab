import no from './no';

function ShowCarts(idPro, listPro) {
    //push to cart 

    console.log(listPro);

    const Item_local = JSON.parse(localStorage.getItem('listcart'));
    const ListCart = [];
    let sl = 0;
    let ProCart = listPro.find((pro, index) => {
        if (pro.id === idPro) {
            const Item_local_ew = JSON.parse(localStorage.getItem('listcart'));
            Item_local_ew.map((p, idx) => {
                if (p.id === idPro) {
                    console.log("Đã tồn tại");
                    return true;
                } else {
                    console.log("Chua ton tai");
                    return false;
                }
            })

            return true;
        }
    })



    let Item_new = {
        des: ProCart.des,
        hot: ProCart.hot,
        id: ProCart.id,
        idLoai: ProCart.idLoai,
        name: ProCart.name,
        new: ProCart.new,
        price: ProCart.price,
        sale: ProCart.sale,
        star: ProCart.star,
        urlPic: ProCart.urlPic,
        urlPic2: ProCart.urlPic2,
        view: ProCart.view

    }

    if (Item_local == null) {
        ListCart.push(ProCart);
        // alert("Không có sản phẩm này!"); 
        localStorage.setItem('listcart', JSON.stringify(ListCart));

    } else {

        ListCart.push(ProCart);
        if (ListCart !== "") {
            Item_local.push(ProCart);
            localStorage.setItem('listcart', JSON.stringify(Item_local));
        } else {
            Item_local.push(ProCart);
            localStorage.setItem('listcart', JSON.stringify(Item_local));
        }

    }
    no()
    return no();

}
export default ShowCarts;