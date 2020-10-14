import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ExpandableRow.module.css';
import mockMessage from '../../../../assets/mockData/mockMessage';
import { ReactComponent as AttatchmentIcon } from '../../../../assets/images/icon_clip.svg';
import CountBadge from '../../../UI/CountBadge/CountBadge';
import DateLabel from '../../../UI/DateLabel/DateLabel';
import MessageDrawer from '../../../UI/MessageDrawer/MessageDrawer';
import { FROM, TO, SUBJECT, DATE } from '../../../../global/constants';

function ExpandableRow(props) {

    const { activeKey, data } = props;
    const { from, to, replies, subject, hasAttachment, date } = data;
    const [expanded, setExpanded] = useState(false);

    // Setting colspan according to the number of properties in the row data object
    const colspan = Object.keys(data).length;

    // Checks if element should use the 'active' style
    function styleIfActive(key) {
        if (key === activeKey) {
            return css.active;
        }
        else {
            return null;
        }
    }

    return (
        <>
            <tr className={css.row} onClick={() => { setExpanded(!expanded) }}>
                <td className={[css.email, styleIfActive(FROM)].join(' ')}>
                    {from}</td>
                <td className={[css.email, styleIfActive(TO)].join(' ')}>
                    {to}</td>
                <td className={css.count}>
                    {replies > 0 ? <CountBadge value={replies} /> : null}</td>
                <td className={styleIfActive(SUBJECT)}>
                    {subject}</td>
                <td className={css.icon}>
                    {hasAttachment ? <AttatchmentIcon id={css.attachmentIcon} title="" /> : null}</td>
                <td className={[css.date, styleIfActive(DATE)].join(' ')}>
                    <DateLabel>{date}</DateLabel></td>
            </tr>
            <tr>
                <td className={css.message} colSpan={colspan}>
                    <MessageDrawer expanded={expanded}>
                        {mockMessage}
                    </MessageDrawer>
                </td>
            </tr>
        </>
    );
}

ExpandableRow.propTypes = {
    data: PropTypes.object,
    activeKey: PropTypes.string
};

export default ExpandableRow;