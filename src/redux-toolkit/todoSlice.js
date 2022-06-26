import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id:1,
pendingList:[],
completedList:[],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToList: (state, action) => {
    let task={title:action.payload, id:state.id}
      state.pendingList = [...state.pendingList, task]
      state.id=++state.id;
    
    },
    removeFromPendingList: (state, action) => {
        state.pendingList= state.pendingList.filter(i=>i.id!==action.payload);
    },
    editPendingListTask: (state, action) => {
        let task=state.pendingList.filter(i=>i.id===action.payload.id)[0]
        let newPendingTasks=[...state.pendingList];
        let index=newPendingTasks.indexOf(task);
        task.title=action.payload.title;
        newPendingTasks[index]=task;
        state.pendingList= newPendingTasks;
    },
    markComplete: (state, action) => {
        state.completedList= [...state.completedList,state.pendingList.filter(i=>i.id===action.payload)[0]]
        state.pendingList= state.pendingList.filter(i=>i.id!==action.payload);
    },
    removeFromCompletedList: (state, action) => {
        state.completedList= state.completedList.filter(i=>i.id!==action.payload);
    },
    clearAll: (state, action) => {
        state.completedList= [];
        state.pendingList= [];
        state.id= 1;
    },
  },
});

export const { clearAll,addToList, removeFromPendingList,markComplete,removeFromCompletedList,editPendingListTask } = todoSlice.actions;

export default todoSlice.reducer;
