# r-modal

An unopinionated modal with integrations for react-router and react-redux.

## Demos

To run the demos clone the repo and `npm i && npm start`.

## Installation

`npm install r-modal --save`

## Concept

The modal itself that ships with r-modal is a relatively simple controlled component. Much like a controlled input, state is managed from outside the component, meaning that we can use URLs or a Redux store to control the modal.

There is a secondary controlled component, Page, which is used to lock the scroll position of the page content.

In both cases, the components are left unstyled. Those and any UI controls need to be provided by the developer.

There are currently 2 integrations for r-modal, redux and react-router. Although the integrations are quite different (more details in the examples) the aims of both are the same: to eliminate boilerplate code and handle edges cases.

## Usage

### Basic controlled component

```js
<Modal
  open={this.state.open}
  onRequestClose={this.closeModal}>
  Modal contents
  <button onClick={this.closeModal}>Close Modal</button>
</Modal>
```

### react-router integration

See [examples](/examples/index.js)

### redux integration

See [examples](/examples/ReduxStateModal/ReduxStateModal.js)
