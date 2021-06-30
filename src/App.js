import TextField from '@atlaskit/textfield'
import Button from '@atlaskit/button'

function App() {
    return (
        <>
        <TextField name="addtodo" placeholder="Thêm mọi thứ ở đây ..." elemAfterInput={
            <Button>Thêm</Button>
        }>
        </TextField>
        </>
    );
}

export default App;