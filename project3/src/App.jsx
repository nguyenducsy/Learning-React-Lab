import './App.css';

function App() {
  return (
    <div className="container">
      <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
        <header>
           <div className="boxlogo">
          <img src="https://tinnongtuyensinh.com/wp-content/uploads/2018/10/cao-dang-nghe-fpt-tuyen-sinh-moi-nhat.png" alt=""/>
          </div> 
        </header>
        <main>
            <article>
                <div id="sachBanChay"></div>
                <div id="doitac"></div>
                <div id="tinmoi"></div>
            </article>
            <hr/>
            <aside>
                <div id="divCart">Giỏ hàng </div><i class="fas fa-clock"></i>
                <hr/>
                <div id="timSach">Tìm sách</div>
            </aside>
        </main>
        <footer>Họ và tên : Nguyễn Đức Sỹ</footer>
    </div>
  );
}

export default App;
