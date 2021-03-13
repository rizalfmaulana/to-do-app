import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

const TodoList = (props) => {
  const [items, setItems] = useState([]);
  const [textEdit, setTextEdit] = useState("Add");

  function addItem(inputText) {
    if (props.edit) {
      setItems(
        items.map((item, index) => {
          if (index === props.editID) {
            return [inputText];
          }
          return item;
        })
      );
      props.editingID(null);
      props.editing(false);
      setTextEdit("Add");
      console.log(props.editID);
      console.log(props.edit);
    } else {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
  }

  function removeItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function editItem(id) {
    const spesificItem = items.find((item, index) => index === id);
    props.change(spesificItem);
    props.editing(true);
    props.editingID(id);
    setTextEdit("Edit");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} textEdit={textEdit} />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                item={item}
                removeItem={removeItem}
                editItem={editItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    edit: state.edit,
    input: state.input,
    editID: state.editID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editing: (value) => dispatch({ type: "EDIT", value: value }),
    change: (value) => dispatch({ type: "TYPE", in: value }),
    editingID: (id) => dispatch({ type: "ID", id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
