import React, { PropTypes } from 'react';
import MyPage from './components/MyPage';
import MyModal from './components/MyModal';

const App = props => (
  <div>
    <MyPage>
      {props.children}
    </MyPage>
    {props.showModal && (
      <MyModal
        open
        onRequestClose={props.onModalClose}>
        {props.modalContent}
      </MyModal>
    )}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
  showModal: PropTypes.bool,
  onModalClose: PropTypes.func,
  modalContent: PropTypes.node
};

export default App;
