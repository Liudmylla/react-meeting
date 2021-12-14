import React from "react";
import PropTypes from "prop-types";
const TextField = ({ label, type, value, name, onChange }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                value={value}
                name={name}
                onChange={onChange}
            />
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
};
export default TextField;
