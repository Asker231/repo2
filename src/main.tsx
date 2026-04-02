import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'


const MainLayouts = lazy(()=>import('./layout/Main/Main'))
const MainDeal = lazy(()=>import('./pages/Deals/index'))
const router = createBrowserRouter([
  {
    path:'/',
    element:<Suspense fallback={<div>Loading...</div>}>
      <MainLayouts/>
    </Suspense>,
    children:[
      {
        path:"/",
        element:<MainDeal/>
      },
      {
        path:"/log",
        element:<div>Log</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
  <RouterProvider router={router}/>
 </Provider>
)
