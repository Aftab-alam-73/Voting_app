import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Votingpage from './pages/votingpage/Votingpage'
import Adminpage from './pages/adminpage/Adminpage'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<h1>Hello world</h1>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/votingpage",
        element:<Votingpage/>
    },
    {
        path:"/adminpage",
        element:<Adminpage/>
    },
  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
