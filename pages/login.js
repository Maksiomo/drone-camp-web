import Router from 'next/router'

export default function Login() {

    const log = event => {
        event.preventDefault();
        const {pathname} = Router;
        Router.push('/education');
    }

    return (
      <main className='registration'>
      <div>
        <form onSubmit={log} className="points">
            <label htmlFor="login">Введите логин</label>
            <input type="text" id="login" name="login" placeholder="Логин"/>
            <hr></hr>
            <label htmlFor="password">Введите пароль</label>
            <input type="password" id="password" name="password" placeholder=""/>
            <hr></hr>
            <button type="submit">Войти</button>
        </form>
      </div>
      </main>
    )
  }