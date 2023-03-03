import { Col, Form, Row } from "react-bootstrap"
import { FaTrademark } from "react-icons/fa"
import { levels, classes, modules } from "./Data"

const Identification = (props) => {

  return (
    <div className="container w-50 border p-4 my-3">
      <div className='text-center'>
        <h3 bg="" className='text-decoration-underline text-success'>Identification</h3>
      </div>
      <div className="">
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Niveau: <span className="text-danger fs-4">**</span></Form.Label>
            <Form.Select value={props.values.level} onChange={props.handleChange} name="level">
              <option value="">-- Sélectionner le niveau --</option>
              {levels.map(level => (
                <option key={level.id} value={level.name}> {level.name} </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Classe: </Form.Label>
            <Form.Select value={props.values.classe} onChange={props.handleChange} name="classe">
              <option value="">-- Sélectionner la classe --</option>
              {classes.map(cl => (
                <option value={cl.name} key={cl.id}> {cl.name} </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Module: <span className="text-danger fs-4">**</span></Form.Label>
          <Form.Select value={props.values.module} onChange={props.handleChange} name="module">
            <option value="">-- Sélectionner le module --</option>
            {modules.map(module => (
              <option
                value={module.name}
                key={module.id}
              >
                {module.name} </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Séquence: <span className="text-danger fs-4">**</span></Form.Label>
          <Form.Select value={props.values.sequence} onChange={props.handleChange} name="sequence">
            <option value="" >-- Sélectionner la séquence --</option>
            {props.values.sequeneOptions.map(sequence => (
              <option value={sequence.name} key={sequence.id}> {sequence.name} </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Séance: </Form.Label>
            <Form.Select
              name="seance"
              value={props.values.seance}
              onChange={props.handleChange}>
              <option value="" >-- Sélectionner le type de séance --</option>
              <option value="séance de cours">séance de cours</option>
              <option value="séance d'exercics">séance d'exercics</option>
              <option value="séance de cours et exercices">séance de cours et exercices</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Durée: </Form.Label>
            <Form.Select
              name="duree"
              value={props.values.duree}
              onChange={props.handleChange}>
              <option value=""> -- Durée (heurs) --</option>
              <option value="1">1 h</option>
              <option value="2">2 h</option>
              <option value="3">3 h</option>
              <option value="4">4 h</option>
            </Form.Select>
          </Form.Group>
        </Row>

      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <i>
          <FaTrademark size={20} className='mx-2' /> <span className="text-muted">tous droits réservés !</span>
        </i>
        <button onClick={props.nextStep} className="btn btn-primary">Suivant</button>
      </div>
    </div>
  )
}

export default Identification
