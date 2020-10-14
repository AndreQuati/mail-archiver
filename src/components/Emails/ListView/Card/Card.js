import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Card.module.css';
import mockMessage from '../../../../assets/mockData/mockMessage';
import { ReactComponent as MailIcon } from '../../../../assets/images/icon_mail_sp.svg'
import { ReactComponent as AttatchmentIcon } from '../../../../assets/images/icon_clip.svg';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/icon_arrow02.svg';
import DateLabel from '../../../UI/DateLabel/DateLabel';
import CountBadge from '../../../UI/CountBadge/CountBadge';
import MessageDrawer from '../../../UI/MessageDrawer/MessageDrawer';
import { FROM, TO, SUBJECT, DATE } from '../../../../global/constants';

function Card(props) {

    const { from, to, subject, replies, hasAttachment, date } = props.data;
    const { activeKey } = props;
    const [expanded, setExpanded] = useState(false);

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
        <div id={css.grid} onClick={() => { setExpanded(!expanded) }}>

            {/* Left Icon column */}
            <MailIcon id={css.mailIcon} />

            {/* From row */}
            <div id={css.from} className={css.flex}>
                <span className={styleIfActive(FROM)}>
                    {from}
                </span>
                <div id={css.iconsContainer} className={css.flex}>
                    {hasAttachment
                        ? <AttatchmentIcon id={css.iconAtt} />
                        : null
                    }
                    <DateLabel id={css.date} className={styleIfActive(DATE)}>
                        {date}
                    </DateLabel>
                    <ArrowIcon id={css.iconArrow} />
                </div>
            </div>

            {/* To row */}
            <div id={css.to} className={css.flex}>
                <span className={styleIfActive(TO)}>
                    {to}
                </span>
                {replies > 0
                    ? <CountBadge value={replies} />
                    : null}
            </div>

            {/* Subject row */}
            <span id={css.subject} className={styleIfActive(SUBJECT)}>
                {subject}
            </span>
        </div>
        {/* Expandable message */}
        <MessageDrawer expanded={expanded}>
            {mockMessage}
        </MessageDrawer>
    </>
    );
}

Card.prototype = {
    data: PropTypes.array,
    activeKey: PropTypes.string
}

export default Card;