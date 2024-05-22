import { Routes, Route } from "react-router-dom";
import "./App.css";
//import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Notfound from "./components/Notfound";
import Licence from "./components/Licence";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <SearchResult />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Notfound />
              </ProtectedRoute>
            }
          />
          {/*<Route path="/home" element={<SearchResult />} />*/}
          <Route
            path="licence"
            element={
              <ProtectedRoute>
                <Licence />
              </ProtectedRoute>
            }
          />
          <Route
            path="notification"
            element={
              <ProtectedRoute>
                <Notification />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
