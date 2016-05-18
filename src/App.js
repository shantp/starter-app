import React, {PropTypes} from 'react';
import {VictoryArea} from 'victory';
import _ from 'lodash';

export default class App extends React.Component {
  getData() {
    return _.map(_.range(5), (index) => {
      return [
        {x: "apples", y: _.random(1, 1155)},
        {x: "oranges", y: _.random(1, 100)},
        {x: "bananas", y: _.random(1, 10)},
        {x: "peaches", y: _.random(1, 5)},
        {x: "pears", y: _.random(1, 5)}
      ];
    });
  }

  render() {
    const data = this.getData();
    console.log(data);
    return (
      <div>
        <VictoryArea
          stacked
          height={600}
          padding={75}
          data={data} />
      </div>
    );
  }
}
