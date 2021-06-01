import React, { useEffect, Suspense, lazy } from 'react';
import './Theme1.css';
import TodoList from './components/TodoList';
import { TYPE_OF_THEME } from './enum';

const CustomTheme = React.lazy(() => import('./themes/customTheme'));
const DefaultTheme = React.lazy(() => import('./themes/defaultTheme'));

const ThemeSelector = ({ children }) => {
  const CHOSEN_THEME = localStorage.getItem('TYPE_OF_THEME') || TYPE_OF_THEME.CUSTOM_MODE;
  console.log("THEME", CHOSEN_THEME)
  return (
    <>
      <React.Suspense fallback={<></>}>
        {(CHOSEN_THEME === TYPE_OF_THEME.DEFAULT_MODE) && <DefaultTheme />}
        {(CHOSEN_THEME === TYPE_OF_THEME.CUSTOM_MODE) && <DefaultTheme />}
      </React.Suspense>
      {children}
    </>
  )
}

function App() {

  const changeTheme = () => {
    localStorage.setItem('TYPE_OF_THEME', 2);
  }

  return (
    <div className="bg">
    <div className="pattern">
      <div className="todo-app">
        {/* <button onClick={changeTheme}>Change Theme</button> */}
        <TodoList />
      </div>
    </div>
  </div>
    
  );
}

export default App;
