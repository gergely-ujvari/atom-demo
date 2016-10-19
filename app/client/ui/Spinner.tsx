import * as React from 'react';
import * as classNames from 'classnames';

export const Spinner = () => {
    const classes:ClassDictionary = {
        "glyphicon-left": true,
        "glyphicon": true,
        "glyphicon-repeat": true,
        "fast-right-spinner": true
    };

    // classes[styles["fast-right-spinner"]] = true;
    return (
        <span className={classNames(classes)}></span>
    );
};
