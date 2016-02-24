import React, {PropTypes} from 'react';

import style from './tabs.scss';

const randomUrls = [
  {url: 'google.com', color: 'green'},
  {url: 'facebook.com', color: 'blue'},
  {url: 'youtube.com', color: 'maroon'},
  {url: 'twitter.com', color: 'lightblue'},
  {url: 'wikipedia.org', color: 'lightgrey'},
  {url: 'instagram.com', color: 'tan'},
  {url: 'yahoo.com', color: 'purple'},
  {url: 'espn.com', color: 'red'},
  {url: 'homedepot.com', color: 'orange'}
];

class Tabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.addNewTab = this.addNewTab.bind(this);
    this.updateRandomTab = this.updateRandomTab.bind(this);
  }

  addNewTab() {
    const url = this.getRandomUrl();
    this.props.actions.newTab(url);
  }

  updateRandomTab() {
    const url = this.getRandomUrl();
    const id = Math.floor(Math.random() * this.props.tabs.size);
    this.props.actions.updateTab(id, url);
  }

  getRandomUrl() {
    return randomUrls[Math.floor(Math.random() * randomUrls.length)];
  }

  render() {
    const tabs = this.props.tabs.map((tab, i) => {
      return (
        <li
          className={style.listItem}
          key={i}
          style={{backgroundColor: tab.color}}>
          <span>{tab.url}</span>
        </li>
      );
    });

    return (
      <div>
        <button
          className={style.button}
          onClick={this.addNewTab}>
          Open New Tab
        </button>
        <button
          className={style.button}
          disabled={this.props.tabs.size === 0}
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
  tabs: PropTypes.object.isRequired
};

export default Tabs;
