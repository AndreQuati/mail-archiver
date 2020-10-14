import React from 'react';
import PropTypes from 'prop-types';
import css from './ListView.module.css';
import SortButton from '../../UI/SortButton/SortButton';
import Card from './Card/Card';
import { FROM, TO, SUBJECT, DATE } from '../../../global/constants';

const headerCells = [
    { id: FROM, label: 'From' },
    { id: TO, label: 'To' },
    { id: SUBJECT, label: 'Subject' },
    { id: DATE, label: 'Date' },
];

function ListView(props) {
    const {data, sortByAsc, activeKey, sortHandler} = props;

    return (
        <div>
            {/* Header */}
            <div className={css.header}>
                {headerCells.map(cell => (
                    <SortButton
                        key={cell.id}
                        className={css.sortBtn}
                        isActive={activeKey === cell.id}
                        isDesc={!sortByAsc}
                        onClick={() => { sortHandler(cell.id) }}>
                        {cell.label}
                    </SortButton>
                ))}
            </div>
            {/* List */}
            {data.map(listItem => (
                <Card
                    key={listItem.id}
                    data={listItem}
                    activeKey={activeKey} />
            ))}
        </div>
    );
}

ListView.propTypes = {
    data: PropTypes.array,
    sortByAsc: PropTypes.bool,
    activeKey: PropTypes.string,
    sortHandler: PropTypes.func
}

export default ListView;