import React, {PropTypes} from 'react';

const randomUrls = [
  {url: 'google.com', color: 'green'},
  {url: 'facebook.com', color: 'blue'},
  {url: 'youtube.com', color: 'maroon'},
  {url: 'twitter.com', color: 'powderblue'},
  {url: 'wikipedia.org', color: 'grey'},
  {url: 'instagram.com', color: 'orange'},
  {url: 'yahoo.com', color: 'purple'},
  {url: 'espn.com', color: 'red'},
];

class Tabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.addNewTab = this.addNewTab.bind(this);
    this.updateRandomTab = this.updateRandomTab.bind(this);
  }

  getRandomUrl() {
    return randomUrls[Math.floor(Math.random() * randomUrls.length)];
  }

  addNewTab() {
    const url = this.getRandomUrl();
    this.props.actions.newTab(url);
  }

  updateRandomTab() {
    const url = this.getRandomUrl();
    const id = Math.floor(Math.random() * this.props.tabs.length);
    this.props.actions.updateTab(id, url);
  }

  render() {
    const tabs = this.props.tabs.map((tab, i) => {
      return (
        <li
          key={i}
          style={{
            backgroundColor: tab.color,
            padding: 33,
            height: 20,
            fontSize: 24,
          }}>
          {tab.url}
        </li>
      );
    });

    const buttonStyle = {
      height: 50,
      fontSize: 16,
      marginRight: 8,
    };

    return (
      <div>
        <button
          style={buttonStyle}
          onClick={this.addNewTab}>
          Open New Tab
        </button>
        <button
          disabled={this.props.tabs.length === 0}
          style={buttonStyle}
          onClick={this.updateRandomTab}>
          Update Random Tab
        </button>
        <ol>
          {tabs}
        </ol>
      </div>
    );
  }
}

Tabs.propTypes = {
  actions: PropTypes.object.isRequired,
  tabs: PropTypes.array.isRequired,
};

export default Tabs;
