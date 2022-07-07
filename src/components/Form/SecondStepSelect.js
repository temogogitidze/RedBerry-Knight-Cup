import React from "react";
import Select from "react-select";

import classes from "./SecondStepSelect.module.css";

const SecondStepSelect = ({
  options,
  onChange,
  placeholder,
  value,
  defaultValue,
}) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      verticalAlign: "center",
      lineHeight: "70px",
      height: "70px",
      fontFamily: "Open Sans",
      width: "350px",
      gridTemplateColumns: "1fr",
      fontSize: 20,
      fontWeight: "400",
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      borderColor: state.isFocused ? null : null,
      border: "none",
 
      borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
      boxShadow: state.isFocused ? null : null,
    }),

    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 5,
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: "212529",
      fontWeight: "400",
      fontSize: "20px",
    }),
  };

  return (
    <div className={classes.select_container}>
      <Select
        defaultValue={defaultValue}
        isSearchable={false}
        options={options}
        styles={customStyles}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        formatOptionLabel={(formatOptionLabel) => (
          <div>
            {formatOptionLabel.image && (
              <div className={classes.options}>
                <p>{formatOptionLabel.label}</p>
                {formatOptionLabel.image && (
                  <img
                    className={classes.image}
                    width={55}
                    height={65}
                    src={formatOptionLabel.image}
                    alt="not found"
                  />
                )}
              </div>
            )}
            <div>
              {!formatOptionLabel.image && (
                <div className={classes.options2}>
                  <p>{formatOptionLabel.label}</p>
                </div>
              )}
            </div>
          </div>
        )}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#F7F7F9",
          },
        })}
      />
    </div>
  );
};

export default SecondStepSelect;
