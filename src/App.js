import Main from './Components/Main';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Userinfo from './Components/UserInfo';
export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>} >
                <Route index element={<Userinfo />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

