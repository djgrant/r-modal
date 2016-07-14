import React from 'react';
import MyPage from '../MyPage';
import Sample from './Sample';
import readme from '../../../README.md';
import './styles.css';

import ReactStateModal from '../ReactStateModal';
import ReactStateModalCode from '!!raw!../ReactStateModal/ReactStateModal';

// import ReduxStateModal from '../ReduxStateModal';

const App = React.createClass({
  render() {
    return (
      <div>
        <MyPage>
          <div dangerouslySetInnerHTML={{ __html: readme }} />
          <h2>Examples</h2>
          <Sample
            title="Using React setState"
            code={ReactStateModalCode}>
            <ReactStateModal />
          </Sample>
        </MyPage>
        {/* <ReduxStateModal /> */}
      </div>
    );
  }
});

export default App;
