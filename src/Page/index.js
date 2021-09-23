import React from "react";
import Content from "../Content";
import Navigation from "../Navigation";
import NavigationList from "../NavigationList";
import NavigationItem from "../NavigationItem";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], currentContent: "" };
  }
  nameLocalStorage() {
    return `portal_clase__listContent${this.props.id}_V1`;
  }
  componentDidMount() {
    const listContent = window.localStorage.getItem(this.nameLocalStorage());
    if (listContent) this.setState(JSON.parse(listContent));
  }
  componentDidUpdate() {
    window.localStorage.setItem(
      this.nameLocalStorage(),
      JSON.stringify(this.state)
    );
  }
  addNewContent(state) {
    const title = document.querySelector(`#newTitle-${this.props.id}`).value;
    const urlContent = document.querySelector(
      `#newUrlContent-${this.props.id}`
    ).value;

    return { ...state, list: state.list.concat({ title, urlContent }) };
  }
  deleteContent(state, event) {
    const index = event.target.value;
    state.list.splice(index, 1);
    return { ...state, list: state.list };
  }

  setCurrentContent(state, urlContent) {
    console.log(urlContent);
    return { ...state, currentContent: urlContent };
  }

  render() {
    return (
      <section className="page" id={this.props.id}>
        <Content urlContent={this.state.currentContent} />
        <Navigation pageId={this.props.id}>
          <form>
            <label>
              Título:
              <input type="text" id={`newTitle-${this.props.id}`} />
            </label>
            <br />
            <label>
              Url:
              <input type="text" id={`newUrlContent-${this.props.id}`} />
            </label>
            <br />
            <button
              type="button"
              onClick={() => this.setState(this.addNewContent)}
            >
              añadir
            </button>
          </form>
          <NavigationList pageId={this.props.id}>
            {this.state.list.map(({ title, urlContent }, index) => (
              <NavigationItem
                key={index}
                title={title}
                urlContent={urlContent}
                handlerNavigationItemClick={() =>
                  this.setState(this.setCurrentContent(this.state, urlContent))
                }
              >
                <button
                  type="button"
                  value={index}
                  onClick={(event) =>
                    this.setState(this.deleteContent(this.state, event))
                  }
                >
                  x
                </button>
              </NavigationItem>
            ))}
          </NavigationList>
        </Navigation>
      </section>
    );
  }
}

export default Page;
