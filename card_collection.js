class CardCollection extends React.Component {
  render() {
      return React.createElement('li',
        {
          children: this.props.cards.map(function (card) { return React.createElement(Card, card); })
        });
  }
}