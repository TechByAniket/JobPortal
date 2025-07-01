import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { AppLayout } from './Layout/AppLayout'
import { RouterProvider } from 'react-router'
import { Home } from './Pages/Home/HomePage'
import { JobsPage } from './Pages/Jobs/JobsPage'

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/jobs',
        element:<JobsPage/>
      }
    ]
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
     
  )
}

export default App
