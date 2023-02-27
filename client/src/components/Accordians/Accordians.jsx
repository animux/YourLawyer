function Accordians(props) {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id={props.heading}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.target} aria-expanded="true" aria-controls={props.target}>{props.title}</button>
                    
                </h2>

                <div id={props.target} className="accordion-collapse collapse" aria-labelledby={props.heading} data-bs-parent="accordionExample">
                    <div className="accordion-body">{props.answer}</div>
                </div>
            </div>
        </div>
    )
}

export default Accordians;