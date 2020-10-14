import React from 'react';
import PropTypes from 'prop-types';
import css from './TableView.module.css';
import SortButton from '../../UI/SortButton/SortButton';
import ExpandableRow from './ExpandableRow/ExpandableRow';
import { FROM, TO, REPLIES, SUBJECT, ATTACH, DATE } from '../../../global/constants';

const headerCells = [
    { id: FROM, label: 'From' },
    { id: TO, label: 'To' },
    { id: REPLIES, label: '' },
    { id: SUBJECT, label: 'Subject' },
    { id: ATTACH, label: '' },
    { id: DATE, label: 'Date' },
];

function TableView(props) {

    const { sortByAsc, activeKey, sortHandler } = props;
    const tableData = [...props.data];

    return (
        <table className={css.table}>
            <thead>
                <tr className={css.header}>
                    {headerCells.map((cell) => (
                        <th key={cell.id}>
                            <SortButton
                                isActive={activeKey === cell.id}
                                isDesc={!sortByAsc}
                                onClick={() => { sortHandler(cell.id) }}>
                                {cell.label}
                            </SortButton>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((rowData) => (
                    <ExpandableRow key={rowData.id} data={rowData} activeKey={activeKey} />
                ))}
            </tbody>
        </table>
    );
}

TableView.propTypes = {
    data: PropTypes.array,
    sortByAsc: PropTypes.bool,
    activeKey: PropTypes.string,
    sortHandler: PropTypes.func
};

export default TableView;