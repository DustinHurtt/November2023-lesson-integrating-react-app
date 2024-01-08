import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import HomePage from './pages/HomePage'
import ProjectListPage from './pages/ProjectListPage'
import CreateProjectPage from './pages/CreateProjectPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import EditProjectPage from './pages/EditProjectPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectListPage />} />
        <Route path='/projects/create' element={<CreateProjectPage />} />
        <Route path='/projects/:projectId' element={<ProjectDetailsPage />} />
        <Route path='/projects/edit/:projectId' element={<EditProjectPage />} />

        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

      </Routes>

    </div>
  )
}

export default App
