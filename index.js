//Code React element here
const meInReact = React.createElement(
  'div', {className: "me"},
  React.createElement('h1', {}, 'An Awesome Person'),
  React.createElement('p', {}, 'Who is learning React'),
  React.createElement('ul', {className: "me_interests"}, [
    React.createElement('li',{},"JavaScript"),
    React.createElement('li',{},"React"),
    React.createElement('li',{},"Movies"),
    React.createElement('li',{},"Ice cream")
  ]
))

ReactDOM.render(
  meInReact,
  document.getElementById('main')
)

// const list =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'My favorite ice cream flavors'),
//     React.createElement('ul', {},
//       [
//         React.createElement('li', {}, 'Chocolate'),
//         React.createElement('li', {}, 'Vanilla'),
//         React.createElement('li', {}, 'Banana')
//       ]
//     ));
