import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    switch(props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value}
            />;
            break;
        case ('textarea'):
            inputElement = <textarea
                onChange={props.changed}
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    onChange={props.changed}
                    className={classes.InputElement}
                    value={props.value}
                >
                    {props.elementConfig.options.map(option => (
                        <option
                            value={option.value}
                            key={option.value}
                        >
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
    }

    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;