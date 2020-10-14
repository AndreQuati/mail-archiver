import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TableView from './TableView/TableView';
import ListView from './ListView/ListView';
import { DATE } from '../../global/constants';

function Emails(props) {
    
    const [sort, setSort] = useState({ key: DATE, byAscending: true });
    // Sorting data to be rendered by child components
    const sortedList = sortList([...props.data], sort.key, sort.byAscending);
    // Checking device's screen size
    const mobileSize = useMediaQuery('(max-width:768px)', { noSsr: true });

    function sortHandler(key) {
        let byAscending = true;

        if (sort.key === key && sort.byAscending === true) {
            byAscending = false;
        }
        setSort({ key, byAscending });
    }

    function sortList(list, key, isAsc) {
        const newList = [...list];
    
        newList.sort((a, b) => {
            a = a[key];
            b = b[key];
    
            // Comparison for sorting dates. Sorting by most recent as "Asc"
            if (Object.prototype.toString.call(a) === '[object Date]') {
                return isAsc ? b - a : a - b;
            }
            // Checking if text and removing all characters that are not letters or numbers to compare correctly
            if (typeof a === 'string') {
                a = a.replace(/[^0-9a-z-A-Z]/g, '');
                b = b.replace(/[^0-9a-z-A-Z]/g, '');
            }
            if (a > b) {
                return isAsc ? 1 : -1;
            }
            if (a < b) {
                return isAsc ? -1 : 1;
            }
            return 0;
        });
    
        return newList;
    }

    return (
        <>
            { mobileSize
                ? <ListView
                    data={sortedList}
                    activeKey={sort.key}
                    sortByAsc={sort.byAscending}
                    sortHandler={sortHandler} />
                : <TableView
                    data={sortedList}
                    activeKey={sort.key}
                    sortByAsc={sort.byAscending}
                    sortHandler={sortHandler} />
            }
        </>
    );
}

Emails.propTypes = {
    data: PropTypes.array
};

export default Emails;