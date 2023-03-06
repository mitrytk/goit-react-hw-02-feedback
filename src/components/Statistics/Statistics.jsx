import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from './statistics.module.scss';


class Statistics extends Component {
    
    render() {
        const total = this.props.total;
        const positivePercentage = this.props.positivePercentage;
        const good = this.props.good;
        const neutral = this.props.neutral;
        const bad = this.props.bad;

        return (
            <ul className={style.list}>

                <li className={style.item}>
                    <p className={style.characteristic}>
                        {'Good: '}
                        <span className={style.counter}>{good}</span>
                    </p>
                </li>
                <li className={style.item}>
                    <p className={style.characteristic}>
                        {'Neutral: '}
                        <span className={style.counter}>{neutral}</span>
                    </p>
                </li>
                <li className={style.item}>
                    <p className={style.characteristic}>
                        {'Bad: '}
                        <span className={style.counter}>{bad}</span>
                    </p>
                </li>
                <li className={style.item}>
                    <p className={style.total}>Total: <span>{total()}</span></p>
                </li>
                <li className={style.item}>
                    <p className={style.percentage}>Positive feedback: <span>{`${positivePercentage()}%`}</span></p>
                </li>
            </ul>
        )
    }
}

Statistics.propTypes = {
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
}

export default Statistics;