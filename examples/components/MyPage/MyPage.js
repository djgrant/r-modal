import { connect } from 'react-redux';
import { Page } from 'r-modal';
import { selectors } from '../../store';

export default connect(
  state => ({
    locked: selectors.isLocked(state)
  })
)(Page);
