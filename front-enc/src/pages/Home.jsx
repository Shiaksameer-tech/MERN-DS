import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import AuthContext from '../context/AuthContext';
import languageContext from '../Context/LanguageContext'

const Home = () => {
  const navigate = useNavigate();
  const {theme,changeTheme} = useContext(ThemeContext);
  const user= useContext(AuthContext); 
  
  const handleClick=() =>{
    navigate("/about");
  }
  const text = message[language];

  return (
    <div>
      <p>Language: {language}</p>
      <p>Greeting: {text.greeting}</p>
      <button onClick={() => changeLanguage('em')}>English</button>
      <button onClick={() => changeLanguage('te')}>telugu</button>
      <button onClick={() => changeLanguage('ta')}>tamil</button>
      <button onClick={handleClick}>About</button>
      <h1>{theme}</h1>
      <button onClick={() => changeTheme('dark')}>Dark</button>
      <button onClick={() => changeTheme('light')}>Light</button>
      <h2>User Details</h2>
      <p>Id : {user.id}</p>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
    </div>
  )
}
export default Home