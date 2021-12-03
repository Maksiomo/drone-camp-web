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
      <main className='registration'>
      <div>
        <form onSubmit={submit} className='points'>
            <label htmlFor="login">Введите логин</label>
            <input type="text" id="login" name="login" placeholder="Логин"/>
            <hr></hr>
            <label htmlFor="password">Введите пароль</label>
            <input type="password" id="password" name="password" placeholder=""/>
            <hr></hr>
            <label htmlFor="passwordAgain">Повторите пароль</label>
            <input type="password" id="passwordAgain" name="passwordAgain" placeholder=""/>
            <hr></hr>
            <button type="submit" className="have-account">Зарегистрироваться</button>
        </form>
        <button onClick={login} className="have-account">Уже есть аккаунт</button>
      </div>
      </main>
    )
  }