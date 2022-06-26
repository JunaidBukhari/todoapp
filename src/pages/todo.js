import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToList,
  removeFromPendingList,
  markComplete,
  removeFromCompletedList,
  editPendingListTask,
} from "../redux-toolkit/todoSlice";
const Todo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const pList = useSelector((state) => state.todo.pendingList);
  const cList = useSelector((state) => state.todo.completedList);
  const [selected, setSelected] = useState("All");
  const [edit, setEdit] = useState({ id: "", title: "" });

  const [pendingList, setPendingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  useEffect(() => {
    setPendingList(pList);
  }, [pList]);
  useEffect(() => {
    setCompletedList(cList);
  }, [cList]);
  const search = (e) => {
    let newPendingList = pList.filter((i) =>
      i.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    let newCompletedList = cList.filter((i) =>
      i.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCompletedList(newCompletedList);
    setPendingList(newPendingList);
  };
  return (
    <div class="container mt-5" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-md-12">
            <div class="card px-3">
              <div class="card-body">
                <h4 class="card-title">My Todo list</h4>
                <div class="add-items d-flex">
                  <input
                    onChange={(e) => setTask(e.target.value)}
                    type="text"
                    class="form-control todo-list-input"
                    placeholder="What do you need to do today?"
                    value={task}
                  />
                  <button
                    disabled={!task}
                    onClick={() => {
                      dispatch(addToList(task));
                      setTask("");
                    }}
                    class="add btn btn-primary font-weight-bold todo-list-add-btn"
                  >
                    Add
                  </button>
                </div>
                <input
                  onChange={search}
                  type="text"
                  placeholder="search"
                  class="form-control todo-list-input mt-2"
                ></input>
                <div class="list-wrapper">
                  <button
                    onClick={() => setSelected("All")}
                    className={
                      selected === "All"
                        ? "add btn btn-primary font-weight-bold todo-list-add-btn mt-3"
                        : "add btn font-weight-bold todo-list-add-btn mt-3"
                    }
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelected("Pending")}
                    className={
                      selected === "Pending"
                        ? "add btn btn-primary font-weight-bold todo-list-add-btn mt-3"
                        : "add btn font-weight-bold todo-list-add-btn mt-3"
                    }
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => setSelected("Completed")}
                    className={
                      selected === "Completed"
                        ? "add btn btn-primary font-weight-bold todo-list-add-btn mt-3 "
                        : "add btn font-weight-bold todo-list-add-btn mt-3"
                    }
                  >
                    Completed
                  </button>
                  <ul class="d-flex flex-column-reverse todo-list">
                    {(selected === "Pending" || selected === "All") &&
                      pendingList.map((l) => (
                        <div class="p-3 d-flex row">
                          <div key={l.id} className="col-6">
                            {edit.id !== l.id && (
                              <span class="form-check-label">{l.title}</span>
                            )}
                            {edit.id === l.id && (
                              <input
                                type="text"
                                class="form-check-label"
                                value={edit.title}
                                onChange={(e) =>
                                  setEdit({ ...edit, title: e.target.value })
                                }
                              ></input>
                            )}
                          </div>
                          {edit.id !== l.id && (
                            <>
                              <div className="col-6">
                                <i
                                  style={{ cursor: "pointer" }}
                                  onClick={() =>
                                    dispatch(removeFromPendingList(l.id))
                                  }
                                  className="fa fa-trash"
                                ></i>
                                <i
                                  style={{ cursor: "pointer" }}
                                  onClick={() => setEdit(l)}
                                  className="fa fa-pen ml-2"
                                ></i>
                                <i
                                  style={{ cursor: "pointer" }}
                                  onClick={() => dispatch(markComplete(l.id))}
                                  className="fa fa-check ml-2"
                                ></i>
                              </div>
                            </>
                          )}
                          {edit.id === l.id && (
                            <>
                              <div className="col-6">
                                <i
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    dispatch(editPendingListTask(edit));
                                    setEdit({});
                                  }}
                                  className="fa fa-save ml-2"
                                ></i>
                                <i
                                  style={{ cursor: "pointer" }}
                                  onClick={() => setEdit({})}
                                  className="fa-solid fa-ban ml-2"
                                ></i>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    {(selected === "Completed" || selected === "All") &&
                      completedList.map((l) => (
                        <div class="p-3 d-flex row">
                          <div key={l.id} className="col-6">
                            <span class="form-check-label">{l.title}</span>
                          </div>
                          <div className="col-6">
                            <i
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch(removeFromCompletedList(l.id))
                              }
                              className="fa fa-trash"
                            ></i>
                          </div>
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
