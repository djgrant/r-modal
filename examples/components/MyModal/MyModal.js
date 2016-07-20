import { connect } from 'react-redux';
import { Modal } from 'Modal';
import { lockPage, unlockPage } from 'Page';
import './styles.css';

export default connect(
  null,
  dispatch => ({
    onBeforeOpen: () => dispatch(lockPage()),
    onBeforeClose: () => dispatch(unlockPage())
  })
)(Modal);
