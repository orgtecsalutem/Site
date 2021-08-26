import { FaWhatsapp, FaBook } from "react-icons/fa";

import { Page } from "./components/Page";

import { BrowserRouter as Browser, Route } from "react-router-dom";

import { topics } from "./utils/topics";

function App() {
  return (
    <Browser>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <Page name="home">
              <section>
                <h2>Campanha de fundação</h2>
                <p>Olá, mundo. Esperamos que todos estejam bem.</p>
                <p>
                  Hoje, dia 26, anunciamos o início da campanha para fundação da
                  primeira liga académica de tecnologia da saúde, a
                  Organizationem Technologia Salutem (OTS), do IFSP campi
                  Boituva.
                </p>
                <p>
                  Essa iniciativa se originou aqui no campi e começou a ser
                  deliberada há cerca de um mês pelos alunos do primeiro
                  semestre do curso de analise e desenvolvimento de sistemas.
                </p>
              </section>
              <section>
                <h2>Disposições gerais</h2>
                <p>
                  As ligas acadêmicas são entidades autônomas que se vinculam a
                  instituições de ensino para promover o ensino, a pesquisa e a
                  extensão em uma determinada ciência. Em tal condição, a
                  entidade possuí liberdade administrativa e financeira, cabendo
                  aos campus associados apenas a supervisão pedagógica.
                </p>
                <p>
                  A tecnologia da saúde, como o seu nome sugere, é uma ciência.
                  Esse campo se estende a um complexo econômico-industrial de
                  três bases principais :
                  <ol>
                    <li>Química e Biotecnologica</li>
                    <li>Elétrica, Eletrônica e Materiais</li>
                    <li>Digital e Informacional </li>
                  </ol>
                </p>
                <p>
                  [...] (Para saber mais, leia o e-book disponível na seção
                  'Saber Mais" ou aguarde novos materiais.)
                </p>
              </section>
              <div className="flex-container">
                <section>
                  <h2>Integração</h2>
                  <a
                    href="https://chat.whatsapp.com/G4anRY1gvNF18kuONQQ3Lv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <FaWhatsapp />
                      <span>Participe pelo Whatsapp</span>
                    </button>
                  </a>
                </section>
                <section>
                  <h2>Saiba mais</h2>
                  <a
                    href={process.env.PUBLIC_URL + "manual.pdf"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <FaBook />
                      <span>Acesse o ebook da liga</span>
                    </button>
                  </a>
                </section>
              </div>
            </Page>
          );
        }}
      />
      {topics.map((topic, index) => {
        return (
          <Route
            exact
            path={topic.slug}
            key={index}
            render={() => {
              return (
                <Page name={topic.slug}>
                  <h1>{topic.title}</h1>
                  <p>{topic.description}</p>
                  {topic.subtopics &&
                    topic.subtopics.map((subtopic, index) => {
                      return (
                        <div className="subtopic" key={index}>
                          <h2>{subtopic.title}</h2>
                          <p>{subtopic.description}</p>
                        </div>
                      );
                    })}
                </Page>
              );
            }}
          />
        );
      })}
      {topics.map((topic) => {
        return (
          topic.subtopics &&
          topic.subtopics.map((subtopic, index) => {
            return (
              <Route
                exact
                path={topic.slug + subtopic.slug}
                render={() => {
                  return (
                    <Page name={subtopic.slug}>
                      <h1>{topic.title}</h1>
                      <h2>{subtopic.title}</h2>
                      <p>{subtopic.description}</p>
                    </Page>
                  );
                }}
              />
            );
          })
        );
      })}
    </Browser>
  );
}

export default App;
