class Card extends React.Component {
  render() {
    return React.createElement('ul', null,
      React.createElement('h1', null, this.props.name),
      React.createElement('img', { src: this.props.resource, width: 100 })
    );
  }
}