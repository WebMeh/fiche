import { Form, FloatingLabel, OverlayTrigger, Tooltip } from "react-bootstrap"
import { FaEdit, FaTrashAlt } from 'react-icons/fa'


const Evaluation = ({ values, changeEvaluation, addNewEvaluation, deleteEvaluation }) => {

    const hadleEvaluationTextareaChange = (e, index) => {
        changeEvaluation(e, index)
    }

    return (
        <div >
            <strong>Pour évaluer :  </strong>
            {values && values.evaluationItems.map((value, index) => (
                < Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1" key={index}>
                    <Form.Control as="textarea" rows={1}
                        value={value}
                        onChange={(e) => hadleEvaluationTextareaChange(e, index)} />
                </Form.Group>
            ))
            }
            <div className="d-flex justify-content-between">
                <i className="text-primary">
                    <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled" >Autre </Tooltip>}>
                            <span className="d-inline-block">
                                <FaEdit color="#00264b"
                                    size={20} onClick={addNewEvaluation} />
                            </span>
                        </OverlayTrigger>
                    </div>
                </i>
                {values.numEvaluationItems >= 2 &&
                    <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                        <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-disabled" >Supprimer </Tooltip>}>
                            <span className="d-inline-block">
                                <FaTrashAlt color="red"
                                    size={20} onClick={deleteEvaluation} />
                            </span>
                        </OverlayTrigger>
                    </div>
                }
            </div>
        </div >
    )
}

export default Evaluation
