import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { AppLayout } from './Layout/AppLayout'
import { RouterProvider } from 'react-router'
import { Home } from './Pages/Home/HomePage'
import { JobsPage } from './Pages/Jobs/JobsPage'
import { ResumePage } from './Pages/Resume/ResumePage'
import { JobDetailsPage } from './Pages/JobDetails/JobDetailsPage'
import { BuildResume } from './Pages/Resume/BuildResume'
import { TailorResume } from './Pages/Resume/TailorResume'
import { AboutUsPage } from './Pages/AboutUs/AboutUsPage'

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
        path:'/jobs/:id', // temporary-URL -----> will make it dynamic soon
        element:<JobDetailsPage/>
      },
      {
        path:'/resume',
        element:<ResumePage/>
      },
      {
        path:'/resume/build',
        element:<BuildResume/>
      },
      {
        path:'/resume/tailor',
        element:<TailorResume/>
      },
      {
        path:'/about-us',
        element:<AboutUsPage/>
      },
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
