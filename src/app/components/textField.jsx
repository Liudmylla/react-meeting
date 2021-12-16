import React, { useState } from "react";
import PropTypes from "prop-types";
const TextField = ({ label, type, value, name, onChange, error }) => {
    const [showPass, setShowPass] = useState(false);
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    const toggleShowPass = () => {
        setShowPass((prevState) => !prevState);
    };

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type={showPass ? "text" : type}
                    id={name}
                    value={value}
                    name={name}
                    onChange={onChange}
                    className={getInputClasses()}
                />
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPass}
                    >
                        <i
                            className={"bi bi-eye" + (showPass ? "-slash" : "")}
                        ></i>
                    </button>
                )}
                {!!error && <div className="invalid-feedback">{error}</div>}
            </div>
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
    onChange: PropTypes.func,
    error: PropTypes.string
};
export default TextField;
