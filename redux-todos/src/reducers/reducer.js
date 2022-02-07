const initialState = {
  dataList: [],
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      const { id, text } = action.payload;
      return {
        ...state,
        dataList: [
          ...state.dataList,
          {
            id: id,
            text: text,
          },
        ],
      };
    case "del":
      const filterList = state.dataList.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        dataList: filterList,
      };
    case "removeAll":
      return {
        ...state,
        dataList: [],
      };
    default:
      return state;
  }
};

export default reducers;
