import { useState } from 'react';
import { Accordion, Badge, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import CreatableSelect from 'react-select/creatable';
import { AiOutlinePlus } from 'react-icons/ai'



const Objectifs = (props) => {

    const [options, setOptions] = useState([]);
    const objectifs = props.values.objectifs

    const formatCreateLabel = (inputValue) => {
        return `Ajouter prérequis : "${inputValue}"`;
    }

    const customNoOptionsMessage = () => {
        return 'Aucune prérequis recommandé. Veuillez taper chaque prérequis pour le créer .';
    }
    const handleChange = (newValue, actionMeta) => {
        setOptions(newValue);
        if (props.onChange) {
            props.onChange(newValue);
        }
    }

    // To change input objectif 
    const hadleObjectifsInputChange = (e, index) => {
        props.changeObjectif(e, index)
    }

    return (
        <div className="container w-50 border p-4 my-3">
            <div className='text-center'>
                <h3 bg="" className='text-decoration-underline text-success'>Prérequis et objectifs</h3>
            </div>
            <div className="my-2">
                <label className='fs-5'>Prérequis : </label>
                <CreatableSelect
                    isMulti
                    onChange={handleChange}
                    placeholder="écrire les prérequis"
                    formatCreateLabel={formatCreateLabel}
                    noOptionsMessage={customNoOptionsMessage}
                    options={options}
                    value={props.values.prerequis}
                />
            </div>
            <div>
                <label className='fs-5 my-2'>Les bjectifs : </label> <br />
                <Accordion >
                    <Accordion.Item >
                        <Accordion.Header className='text-center'>
                            L'élève doit etre capable de :
                        </Accordion.Header>
                        <Accordion.Body>
                            {props.values.objectifs.map((inputValue, index) => (
                                <input className='form-control my-2' placeholder='capable de ...'
                                    type="text"
                                    key={index}
                                    value={inputValue}
                                    onChange={(e) => hadleObjectifsInputChange(e, index)}
                                />
                            ))}
                            <div className='d-flex justify-content-between'>
                                <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled" >Nouvel objectif</Tooltip>}>
                                        <span className="d-inline-block">
                                            <FaEdit color="#00264b"
                                                size={20} onClick={() => props.addNewObjectif()} />
                                        </span>
                                    </OverlayTrigger>
                                </div>
                                {props.values.objectifs.length > 0 &&
                                    <div>
                                        <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-disabled" >Supprimer cet objectif</Tooltip>}>
                                            <span className="d-inline-block">
                                                <FaTrashAlt color="red"
                                                    size={20} onClick={() => props.deleteObjectif()} />
                                            </span>
                                        </OverlayTrigger>
                                    </div>}

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <hr />
            <div className="d-flex justify-content-between">

                <button onClick={props.prevStep} className="btn btn-danger">Précédant</button>
                <button onClick={props.nextStep} className="btn btn-primary">Suivant</button>
            </div>
        </div>
    )
}


export default Objectifs