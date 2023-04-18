import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import '../styles/App.css';

const Login = () => {
   return (
      <div className='login'>
         <h1>Страница для логина</h1>
         <form>
            <MyInput type="text" placeholder="Введите логин" />
            <MyInput type="password" placeholder="Введите пороль" />
            <MyButton>Войти</MyButton>
         </form>
      </div>
   );
};

export default Login;