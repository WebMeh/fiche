import { Form, FloatingLabel, OverlayTrigger, Tooltip } from "react-bootstrap"
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { FaEdit, FaTrashAlt } from "react-icons/fa"

const Motivation = ({ values, changeQuestion, addNewQuestion, deleteQuestion, handleCheck, hadleChangeSituationProbleme }) => {
 
    //when the question is changing
    const handleQuestionsChange = (e, index) => {
        changeQuestion(e, index)
    }

    

    return (
        <div >
            <p className="fs-6 ">
                 Le questionnement sur les prérequis nécéssaires :
            </p>
            {values.questions.map((inputValue, index) => (
                <input className='form-control mb-1' placeholder='Enancé de la question ...'
                    key={index}
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleQuestionsChange(e, index)}
                />
            ))}
            {/* nouvelle question */}
            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled" >Nouvelle question</Tooltip>}>
                    <span className="d-inline-block">
                        <FaEdit color="#00264b"
                            size={20} onClick={() => addNewQuestion()} />
                    </span>
                </OverlayTrigger>
            </div>

            <br /><br />
            <div className="d-flex justify-content-between">
                <span className="mx-3 text-primary">Ajouter une situation problème ?</span>
                <Form.Check
                    className="mx-4"
                    type="switch"
                    id="situation-probleme"
                    checked={values.isChecked}
                    value={values.isChecked}
                    onChange={(e) => handleCheck(e)}
                />

            </div>

            {values.isChecked &&
                <FloatingLabel controlId="floatingTextarea2" label="situation problème">
                    <Form.Control
                        as="textarea"
                        placeholder="la situation problème"
                        style={{ height: '100px' }}
                        value={values.situationProbleme}
                        onChange={(e) => hadleChangeSituationProbleme(e)}
                    />
                </FloatingLabel>}


        </div>
    )
}

export default Motivation