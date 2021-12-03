import Router from 'next/router'

export default function Registration() {

    const submit = event => {
        event.preventDefault();
        const {pathname} = Router;
        Router.push('/education');
    }

    const login = () => {
        const {pathname} = Router;
        Router.push('/login');
    }

    return (
      <div>
        <form onSubmit={submit}>
            <label htmlFor="login">Введите логин</label>
            <input type="text" id="login" name="login" placeholder="Логин"/>
            <label htmlFor="password">Введите пароль</label>
            <input type="password" id="password" name="password" placeholder=""/>
            <label htmlFor="passwordAgain">Повторите пароль</label>
            <input type="password" id="passwordAgain" name="passwordAgain" placeholder=""/>
            <button type="submit">Зарегистрироваться</button>
        </form>
        <button onClick={login}>Уже есть аккаунт</button>
      </div>
    )
  }