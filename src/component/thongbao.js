const e = React.createElement;
class thongbao extends React.Component {
        constructor() {

        }
        render() {
            const user = { ten: 'Duc Sy', sLC: 0 };
            const tb = <p className = "soLanChoi" > Chao ban { user.ten }!Bạn đã chơi đủ { user.sLC }
            lần rồi
                </p>
            var soLanChoi = localStorage.getItem("solanchoi");
            soLanChoi = user.sLC + 1;
            localStorage.setItem("solanchoi", soLanChoi);
            user.sLC = soLanChoi;
            ReactDOM.render(tb, document.getElementById('thongbao'))

        }
    } //class LoiChuc

const domContainer = document.querySelector('#ketqua');
ReactDOM.render(e(thongbao), domContainer);