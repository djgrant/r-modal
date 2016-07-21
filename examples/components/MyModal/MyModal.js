import { connect } from 'react-redux';
import { Modal } from 'r-modal';
import { lockPage, unlockPage } from 'r-modal/lib/redux';

export default connect(
  () => ({
    style: {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)'
      },
      modal: {
        width: '500px',
        height: '500px',
        background: 'white',
        borderRadius: '5px',
        margin: '20px auto'
      }
    }
  }),
  dispatch => ({
    onBeforeOpen: () => dispatch(lockPage()),
    onBeforeClose: () => dispatch(unlockPage())
  })
)(Modal);
