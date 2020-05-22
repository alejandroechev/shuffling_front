class DeckCollection extends React.Component {
  render() {
      return React.createElement('li',
        {
          children: this.props.decks.map(function (deck) { return React.createElement(Deck, deck); })
        });
  }
}