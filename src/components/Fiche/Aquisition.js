import { Form, FloatingLabel, OverlayTrigger, Tooltip } from "react-bootstrap"

import { FaEdit, FaTrashAlt } from 'react-icons/fa'


const Aquisition = ({ values, changeSavoir, addNewSavoir, deleteSavoir }) => {

    const hadleSavoirsTextareaChange = (e, index) => {
        changeSavoir(e, index)
    }

    return (
        <div >
            {values && values.savoirs.map((value, index) => (
                < Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1" key={index}>
                    <Form.Label>Détails d'activité N° {index + 1}</Form.Label>
                    <Form.Control as="textarea" rows={2}
                        value={value}
                        onChange={(e) => hadleSavoirsTextareaChange(e, index)} />
                </Form.Group>
            ))
            }
            <div className="d-flex justify-content-between">
                <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled" >Nouvelle activité</Tooltip>}>
                        <span className="d-inline-block">
                            <FaEdit color="#00264b"
                                size={20} onClick={addNewSavoir} />
                        </span>
                    </OverlayTrigger>
                </div>
                {values.numSavoirs >= 2 &&

                    <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                        <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-disabled" >Supprimer  l'activité</Tooltip>}>
                            <span className="d-inline-block">
                                <FaTrashAlt color="red"
                                    size={20} onClick={deleteSavoir} />
                            </span>
                        </OverlayTrigger>
                    </div>}
            </div>
        </div >
    )
}

export default Aquisition
