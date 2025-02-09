import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import AuthContext, { useAuth } from "../context/AuthContext";
import Error from "./Error";
import Logout from "./Logout";
import Front from "./Front";
import Back from "./Back";
import Mypage from "./Mypage";
import TodoList from "./TodoList";

export default function Mussoworld() {


    function AuthenticatedRoute({ children }) {
        const authContext = useAuth();

        if (authContext.authenticated) {
            return children;
        }
        return <Navigate to="/login" />

    }

    return (
        <div>
            <BrowserRouter>
                <AuthContext>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/main" element={<Main />} />
                        <Route path="/login" element={<Login />} />

                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <Logout />
                            </AuthenticatedRoute>}>
                        </Route>

                        <Route path="/todolist" element={
                            <AuthenticatedRoute>
                                <TodoList />
                            </AuthenticatedRoute>}>
                        </Route>

                        <Route path="/front" element={
                            <AuthenticatedRoute>
                                <Front />
                            </AuthenticatedRoute>}>
                        </Route>

                        <Route path="/back" element={
                            <AuthenticatedRoute>
                                <Back />
                            </AuthenticatedRoute>}>
                        </Route>

                        <Route path="/mypage" element={
                            <AuthenticatedRoute>
                                <Mypage />
                            </AuthenticatedRoute>}>
                        </Route>

                        <Route path="/*" element={<Error />} />
                    </Routes>
                </AuthContext>
            </BrowserRouter>

        </div>
    );
}