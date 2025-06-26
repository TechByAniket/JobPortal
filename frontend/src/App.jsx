import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { AppLayout } from './Layout/AppLayout'
import { RouterProvider } from 'react-router'
import { Home } from './Pages/Home/HomePage'
import { Jobs } from './Pages/Jobs/Jobs'

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
        element:<Jobs/>
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
