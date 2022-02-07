export const add = (text) => {
  return {
    type: "add",
    payload: {
      id: new Date().getTime().toString(),
      text: text,
    },
  };
};
export const del = (id) => {
  return {
    type: "del",
    id: id,
  };
};
export const removeAll = () => {
  return {
    type: "removeAll",
  };
};
