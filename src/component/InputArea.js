import React from "react";
import { connect } from "react-redux";

function InputArea(props) {
  const handleInput = (e) => {
    const value = e.target.value;
    props.change(value);
  };
  return (
    <div className="form">
      <input
        type="text"
        name="name"
        value={props.input}
        onChange={handleInput}
      />
      <button
        onClick={() => {
          props.addItem(props.input);
          props.change("");
        }}
      >
        Add
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    input: state.input,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (value) => dispatch({ type: "TYPE", in: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputArea);
