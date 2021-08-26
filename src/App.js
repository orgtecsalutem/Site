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
            <Page title="home">
              <h1>Página inicial</h1>
              <h2>Seja bem-vindo(a) à Organizationem Technologia Salutem (OTS)!</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                expedita odio dignissimos quisquam harum suscipit labore
                explicabo architecto quos.
              </p>
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
                <Page title={topic.slug}>
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
                    <Page title={subtopic.slug}>
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
