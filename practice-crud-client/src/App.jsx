
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Root from './layouts/Root'
import Users from './components/Users'
import UpdateUser from './components/UpdateUser'
import RegisterForm from './components/RegisterForm'
import RegisterGet from './components/RegisterGet'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
          <Route path='/register-form' element={<RegisterForm />}></Route>
          <Route path='/register-get' element={<RegisterGet />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
