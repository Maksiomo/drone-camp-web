import Router from 'next/router'

export default function Login() {

    const log = event => {
        event.preventDefault();
        const {pathname} = Router;
        Router.push('/education');
    }

    return (
      <div>
        <form onSubmit={log}>
            <label htmlFor="login">Введите логин</label>
            <input type="text" id="login" name="login" placeholder="Логин"/>
            <label htmlFor="password">Введите пароль</label>
            <input type="password" id="password" name="password" placeholder=""/>
            <button type="submit">Войти</button>
        </form>
      </div>
    )
  }