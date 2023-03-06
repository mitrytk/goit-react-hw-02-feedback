import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from './section.module.scss';

class Section extends Component {
    render() {
        const {children, title} = this.props;

        return (
            <section className={style.section}>
                <h2 className={style.title}>{title}</h2>
                { children }
            </section>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string,
}

export default Section;