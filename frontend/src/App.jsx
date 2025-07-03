import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { AppLayout } from './Layout/AppLayout'
import { RouterProvider } from 'react-router'
import { Home } from './Pages/Home/HomePage'
import { JobsPage } from './Pages/Jobs/JobsPage'
import { ResumePage } from './Pages/Resume/ResumePage'
import { JobDetailsPage } from './Pages/JobDetails/JobDetailsPage'

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
      },
      {
        path:'/build-resume',
        element:<ResumePage/>
      },
      {
        path:'/jobs/:id', // temporary-URL -----> will make it dynamic soon
        element:<JobDetailsPage/>
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
