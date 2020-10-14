import React, { useState } from 'react';
import css from './App.module.css';
import mockData from '../assets/mockData/mockData';
import Search from './Search/Search';
import Emails from './Emails/Emails'
import EmptyView from './Emails/EmptyView/EmptyView';

function App() {

  const originalData = [...mockData];
  const [emails, setEmails] = useState([...originalData]);
  const emailsCount = emails.length;

  return (
    <>
      <div id={css.topSection}>
        {/* Search */}
        <Search data={originalData} click={ searchResult => { setEmails(searchResult) }} />
        {/* Results */}
        <h5 id={css.results}>Results: <span id={css.count}>{emailsCount}</span> mail(s)</h5>
      </div>

      <div id={css.bottomSection}>
        {/* Divider */}
        <hr className={css.divider} />
        {/* E-mails or empty screen */}
        {emailsCount > 0
          ? <Emails data={emails} />
          : <EmptyView />}
      </div>
    </>
  );
}

export default App;