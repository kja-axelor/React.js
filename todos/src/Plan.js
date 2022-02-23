function Plan(props) {
  return (
    <>
      <li className="shadow p-2 my-2 col-sm-9">
        {props.num}. {props.value}
      </li>

      <button
        className="btn btn-danger my-2 col-sm-1 mx-4"
        onClick={() => {
          props.delItem(props.id);
        }}
      >
        X
      </button>

      <button
        className="btn btn-warning my-2 col-sm-1"
        onClick={() => {
          props.editItem(props.id);
        }}
      >
        ^
      </button>
    </>
  );
}
export default Plan;
