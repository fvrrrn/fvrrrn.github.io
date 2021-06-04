import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

export const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container">
      <pre className="ascii-element"></pre>
      <p className="text">
        Привет, меня зовут Борис. Мне 21 год.{' '}
        <span
          id="typer-1"
          className="typer"
          data-delay="20"
          data-words="Я junior <b style='color:blue;'>back-end developer.</b>+По совместительству <b style='color:green;'>администратор баз данных.</b>+И немного <b style='color:yellow;'>fron-end developer (нет).</b>"
          data-delim="+"
        ></span>
        <span className="cursor" data-owner="typer-1"></span>
      </p>
    </div>
    <div className="row">
      <div className="personal">
        <h2 className="text mp0">
          <a href="https://github.com/fvrrrn/javascript-algorithms">
            JavaScript algorithms
          </a>

          <p className="text mt0">
            <b>теория алгоритов и формальных языков</b>. Включает в себя
            программную реализацию конечных автоматов с магазинной памятью,
            генерацию контекстно-свободных грамматик, эквивалетные
            преобразования КС-грамматик, преобразования недетерминированных
            конечных автоматов к детерменированных, построение регулярного
            выражения по КА и наоборот.
          </p>
        </h2>
      </div>
    </div>
  </Layout>
)
