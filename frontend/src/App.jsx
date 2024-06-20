
import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import RecipesCard from './components/RecipesCard'
import SearchRecipe from './components/SearchRecipe'
import { useNavigate } from 'react-router-dom'
import Signup from './components/RegisterForm'
import { BeakerIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import UnregisterForm from './components/UnregisterForm/UnregisterForm'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate("/register")}>Ir a Recipes</button>
      <LoginForm />
      <SearchRecipe />
      <div>
        <BeakerIcon/>
        <CheckBadgeIcon/>
        <UnregisterForm/>
      </div>
    </>
  );
}

export default App
