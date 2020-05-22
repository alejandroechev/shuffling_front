class App extends React.Component {
    render() {
        return React.createElement('div', null,
          React.createElement(DeckCollection, { decks: this.props.decks }),
          React.createElement(CardCollection, { cards: this.props.cards })
        );
    }
}