import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Search.module.css';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css"; //Required by react-datepicker
import DatePicker from 'react-datepicker';
import { ReactComponent as CalendarIcon } from '../../assets/images/icon_calender.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/icon_search.svg';
import { DATE } from '../../global/constants';

function Search(props) {
    
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const dateFormat = 'yyyy/M/d';

    function clickHandler() {
        const list = searchByDates(props.data, DATE, startDate, endDate);
        props.click(list);
    }

    function searchByDates(list, propKey, startDate, endDate) {
        let filteredList = [];

        // If endDate is null, uses today's date
        if(!endDate) {
            endDate =  new Date();
        }

        filteredList = list.filter(item => {
            const date = item[propKey];

            // If start date is not null checks if date is in range, otherwise checks if before end date only
            if(startDate){
                return moment(date).isBetween(startDate, endDate, 'date', []);
            }
            else {
                return moment(date).isSameOrBefore(endDate, 'date');
            }
        });
        return filteredList;
    }

    return (
        <>
            <div id={css.main}>
                <div id={css.inputArea}>
                    <CalendarIcon className={css.icon} title=""/>
                    <DatePicker
                        dateFormat={dateFormat}
                        placeholderText="Start date"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        startDate={startDate}
                        endDate={endDate}
                        maxDate={!endDate ? new Date() : endDate}
                        showYearDropdown
                        className={css.datePicker}
                    />
                    <span> - </span>
                    <DatePicker
                        dateFormat={dateFormat}
                        placeholderText="End date"
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        maxDate={new Date()}
                        showYearDropdown
                        className={css.datePicker}
                    />
                </div>
                <button id={css.button} onClick={clickHandler}>
                    <SearchIcon className={css.icon} title="" />
                </button>
            </div>
        </>
    );
}

Search.propTypes = {
    data: PropTypes.array,
    click: PropTypes.func
};

export default Search;