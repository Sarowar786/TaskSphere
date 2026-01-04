import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom"
import Login from "./pages/Auth/Login"
import Registration from "./pages/Auth/Registration"
import Dashboard from "./pages/Admin/Dashboard"
import PrivateRoute from "./routes/PrivateRoute"
import ManageTask from "./pages/Admin/ManageTask"
import CreateTask from "./pages/Admin/CreateTask"
import ManageUsers from "./pages/Admin/ManageUsers"
import UserDashboard from './pages/User/UserDashboard';
import MyTasks from "./pages/User/MyTasks"
import ViewTaskDetails from "./pages/User/ViewTaskDetails"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />

          {/* Admin routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/tasks" element={<ManageTask/>} />
            <Route path="/admin/create-task" element={<CreateTask/>} />
            <Route path="/admin/users" element={<ManageUsers/>} />
          </Route>

          {/* user routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard/>} />
            <Route path="/user/tasks" element={<MyTasks/>} />
            <Route path="/user/task-details/:id" element={<ViewTaskDetails/>} />
          </Route>


        </Routes>
      </Router>
    </div>
  )
}
