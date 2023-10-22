
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home'
import Layout from './Layout'
import EmailBody from './components/EmailBody'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
  <Route path='/' element={<Home/>}>
    <Route path=":id" element={<EmailBody/>}/>
  </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
