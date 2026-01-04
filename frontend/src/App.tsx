import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom"
import Login from "./pages/Auth/Login"
import Registration from "./pages/Auth/Registration"
import Dashboard from "./pages/Admin/Dashboard"
import PrivateRoute from "./routes/PrivateRoute"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
