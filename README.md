# r-modal

An unopinionated modal with integrations for react-router and react-redux.

## Demos

To run the demos clone the repo and `npm i && npm start`.

## Installation

`npm install r-modal --save`

## Concept

r-modal provides a relatively simple modal component which can be controlled by any of the integrations provided, or with your own state management solution. Conceptually this is similar to how a controlled input works.

There is a secondary stateless component, Page, which is used to lock the scroll position of the page content. In both cases, the components are left unstyled - full control of styling and UI is delegated to the developer.

## Components

### `<Modal>`

A stateless unstyled component that renders a modal inside an overlay.

```js
import { Modal } from 'r-modal';

<Modal
  open={this.state.open}
  onRequestClose={this.closeModal}>
  Modal contents
  <button onClick={this.closeModal}>Close Modal</button>
</Modal>
```

**API**

prop|type|description
:---|:---|:---
open | bool.isRequired | display the modal and overlay
onRequestClose | func.isRequired | an escape hatch for the modal to access the outer state. Is called when the overlay is clicked or the ESC key is pressed.
onBeforeOpen | func | called before the modal opens
onBeforeClose | func | called before the modal closes
className | string | classes to be applied to the modal element
overlayClassName | string | classes to be applied to the overlay element
style | shape({ overlay, modal }) | an object with inline styles to be applied to overlay and modal elements

---

### `<Page>`

A stateless unstyled component that locks the scroll position of the underlying page.

```js
import { Page } from 'r-modal';

<Page
  locked={true}
  className="my-page">
  {this.prop.children}
</Page>
```

**API**

prop|type|description
:---|:---|:---
locked | bool.isRequired | locks the position of the web page, preventing scrolling beneath the modal

---

### `<WithRoutesInModal>`

A react-router integration that renders child routes inside a modal.

```js
import { Page, Modal } from 'r-modal';
import { WithRoutesInModal } from 'r-modal/lib/react-router';

const App = props => (
  <div>
    <Page>
      {props.children}
    </Page>
    {props.showModal && (
      <Modal
        open
        onRequestClose={props.onModalClose}>
        {props.modalContents}
      </Modal>
    )}
  </div>
);

const AppWithRoutesInModal = props => (
  <WithRoutesInModal
    {...props}
    component={App}
  />
);

<Router>
  <Route path="/" component={AppWithRoutesInModal}>
    <IndexRoute component={Index} />
    <Route path="pictures/:id" component={ModalContent} />
  </Route>
</Router>
```

```js
import { WithRoutesInModal } from 'r-modal/lib/react-router';

const BoardWithRoutesInModal = props => (
  <WithRoutesInModal
    {...props}
    component={App}
    backgroundLocation={`/boards/${props.params.id[0]}`}
  />
)

<Router>
  <Route path="/boards/:id" component={BoardWithRoutesInModal}>
    <Route path="card/:id" component={Card} />
  </Route>
</Router>
```

**API**

prop|type|description
:---|:---|:---
component | func | the route component to decorate
parentLocation* | oneOfType([object, string]) | the location of the modal's parent that is rendered behind the modal
modal | func | an instance of the stateless Modal component
page | func | an instance of the stateless Page component

*When provided, child routes are always rendered in a modal. Closing the modal will resolve to this location, therefore the provided location should be the exact route that is rendered beneath the modal. When not provided, routes will only be rendered in a modal if they have router state of `{ modal: true }`.

### redux integration

See [examples](/examples/components/ReduxStateModal/ReduxStateModal.js)
