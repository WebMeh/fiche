import { Accordion, Button } from "react-bootstrap"
import Aquisition from "./Aquisition"
import Evaluation from "./Evaluation"
import Motivation from "./Motivation"

const Deroulement = ({ values, prevStep, nextStep, handleCheck,
    hadleChangeSituationProbleme, changeSavoir, addNewSavoir, deleteSavoir, changeEvaluation, 
    addNewEvaluation, deleteEvaluation, changeQuestion, addNewQuestion,  deleteQuestion}) => {
    return (
        <div className=" container w-50 border p-4 my-3">
            <div className="text-center">
                <h3 className='text-decoration-underline text-success'>Déroulement de la séance</h3>
            </div>
            <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                    <Accordion.Header >
                        Phase de motivation
                    </Accordion.Header>
                    <Accordion.Body >
                        <Motivation
                            changeQuestion={changeQuestion}
                            addNewQuestion={addNewQuestion}
                            deleteQuestion={deleteQuestion}
                            handleCheck={handleCheck}
                            hadleChangeSituationProbleme={hadleChangeSituationProbleme}
                            values={values} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item >
                    <Accordion.Header eventKey="1">
                        Phase d'acquisition du savoir
                    </Accordion.Header>
                    <Accordion.Body >
                        <Aquisition
                            values={values}
                            changeSavoir={changeSavoir}
                            addNewSavoir={addNewSavoir}
                            deleteSavoir={deleteSavoir} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header >
                        Phase d'evaluation
                    </Accordion.Header>
                    <Accordion.Body >
                        <Evaluation 
                            values={values}
                            changeEvaluation={changeEvaluation}
                            addNewEvaluation={addNewEvaluation}
                            deleteEvaluation={deleteEvaluation}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="d-flex justify-content-between my-3">
                <Button variant="danger" onClick={prevStep}>Précedant</Button>
                <Button onClick={nextStep}>Suivant</Button>
            </div>
        </div>

    )
}

export default Deroulement
