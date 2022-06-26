import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/privateRoute";
import Header from "./HOC/header";
import Auth from "./pages/auth";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import AuthRoute from "./components/authRoute";
import Todo from './pages/todo';
function App() {
  return (
    <div className="App">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router>
       <Header />
        <Routes>
          <Route path="/login" element={<AuthRoute component={Auth} />}></Route>
          <Route path="/" element={<PrivateRoute component={Home} />}></Route>
          <Route path="/todo" element={<PrivateRoute component={Todo} />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
