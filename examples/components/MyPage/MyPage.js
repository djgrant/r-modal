import { connect } from 'react-redux';
import Page from 'Page';
import { selectors } from '../../store';

export default connect(
  state => ({
    locked: selectors.isLocked(state)
  })
)(Page);
