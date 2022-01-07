function Plan(props){
    return(
        <>
            <li className="shadow p-2 my-2 col-sm-9">{props.value}</li>
            
            <button className="btn btn-danger my-2 col-sm-1 mx-4"
            onClick={ () => {
                props.delHandler(props.id)
                            }
                    } 
            >X</button>
            
            <button className="btn btn-warning my-2 col-sm-1"
            onClick={ () => {
                props.editHandler(props.id)
            }
        }
            >^</button>
        </>
    )
}
export default Plan;