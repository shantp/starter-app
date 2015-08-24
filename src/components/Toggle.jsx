import React, {Component, PropTypes} from 'react';

class Toggle extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggle}>
          {this.props.active ? 'Hello' : 'Goodbye'}
        </button>
      </div>
    );
  }
}

Toggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Toggle;
