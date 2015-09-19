import React, {PropTypes} from 'react';

const randomUrls = [
  'http://google.com',
  'http://facebook.com',
  'http://youtube.com',
  'http://twitter.com',
  'http://wikipedia.org',
  'http://instagram.com',
  'http://yahoo.com',
  'http://espn.com',
];

class Tabs extends React.Component {
  constructor(...args) {
    super(...args);
    this.addNewTab = this.addNewTab.bind(this);
    this.updateRandomTab = this.updateRandomTab.bind(this);
  }

  getRandomUrl() {
    return randomUrls[Math.floor(Math.random() * randomUrls.length)];
  }

  addNewTab() {
    const url = this.getRandomUrl();
    this.props.newTab(url);
  }

  updateRandomTab() {
    const url = this.getRandomUrl();
    const id = Math.floor(Math.random() * this.props.tabs.length);
    this.props.updateTab(id, url);
  }

  render() {
    const tabs = this.props.tabs.map((tab, i) => {
      return (
        <li key={i}>{tab}</li>
      );
    });

    return (
      <div>
        <button
          onClick={this.addNewTab}>
          New Tab
        </button>
        <button
          disabled={this.props.tabs.length === 0}
          onClick={this.updateRandomTab}>
          Update Tab
        </button>
        <ol>
          {tabs}
        </ol>
      </div>
    );
  }
}

Tabs.propTypes = {
  newTab: PropTypes.func.isRequired,
  updateTab: PropTypes.func.isRequired,
  tabs: PropTypes.array.isRequired,
};

export default Tabs;
