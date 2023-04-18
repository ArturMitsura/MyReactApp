import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default AppRouter;

//========================================================================================================================================================

/* Для реализации приватных маршрутов, доступных только зарегистрированным пользователям в React JS нужно использовать механизм редиректов, который ориентирован на список маршрутов в зависимости от того, авторизован пользователь или нет.

Пример приватного роута: 

```jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
```
В этом коде мы определяем компонент PrivateRoute, который принимает следующие параметры:

- component - компонент, который нужно отобразить после того, как пользователь будет авторизован
- isAuth - флаг для определения, авторизован пользователь или нет
- rest - оставшиеся параметры

Внутри PrivateRoute мы вызываем компонент Route (из библиотеки react-router-dom), который, в свою очередь, определяет маршрут, на который пользователь должен попасть после авторизации.

Если пользователь не авторизован, мы перенаправляем его на страницу входа. 

Теперь, чтобы использовать PrivateRoute, нужно применить его в действующем маршруте, для которого должна быть настоящая авторизация. Например, мы можем использовать его следующим образом:

```jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import Login from './Login';

const App = () => {
  const isAuth = true; // здесь нужно определить, авторизован пользователь или нет
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute path="/dashboard" component={Dashboard} isAuth={isAuth} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
```

В этом примере мы определяем, что наш дашборд компонент должен быть доступен только зарегистрированным пользователям. Мы передаем isAuth флаг в проверку, который должен быть установлен на true для входа в защищенный PrivateRoute.

Таким образом, вы можете использовать PrivateRoute в любом маршруте или пути, которые требуют авторизации. */