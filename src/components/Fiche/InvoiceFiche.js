
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const InvoiceFiche = ({ invoiceFichData, prevStep, change, nextStep }) => {
    const {
        step, level, classe, module, sequence, seance, duree, prerequis,
        objectifs, questions, isChecked, situationProbleme, savoirs, numSavoirs, evaluationItems
    } = invoiceFichData;

    const valeurs = {
        step, level, classe, module, sequence, seance, duree, prerequis,
        objectifs, questions, isChecked, situationProbleme, savoirs, numSavoirs
    }

    useEffect(() => {
        console.log(valeurs)
    })

    return (
        <Container >
            <Row className='border'>
                <Col > LYCEE QUALIFIANT OUAOULA </Col>
                <Col >2022 - 2023</Col>
                <Col >Pr. RACHID EL MAHDY</Col>
            </Row>
            <Row className='mt-2'>
                <h2 className='text-center text-decoration-underline'>Fiche pédagogique</h2>
            </Row>
            <Row className='my-3 border'>
                <Col>
                    <h3 className='text-decoration-underline bg-secondary'>I- Identification: </h3>
                    <ul>
                        {module && <li>Module : <strong >{module}</strong> </li>}
                        {sequence && <li>Leçon : <strong >{sequence}</strong> </li>}
                        {seance && <li>Séance : <strong >{seance}</strong> </li>}
                        {duree && <li>Durée : <strong >{duree} h</strong> </li>}
                        {level && <li>Niveau : <strong >{level} </strong> </li>}
                    </ul>
                </Col>
                <Col>
                    <h3 className='text-decoration-underline bg-secondary'>II- Prérequis : </h3>
                    <ul>
                        {prerequis && prerequis.map(pre => (
                            <li key={pre.value} className='mx-1'> {pre.value} </li>
                        ))}
                        {prerequis === null && <p>Aucune prérequis</p>}
                    </ul>
                </Col>
                <Col>
                    <h3 className='text-decoration-underline bg-secondary'>III- Objectifs : </h3>
                    <p>

                        <ul>
                            {objectifs.length>0 &&
                                <>
                                    <span>L'élève doit être capable de :</span>
                                    {objectifs.map((obj, index) => (
                                        <li key={index} >{obj}. </li>
                                    ))}
                                </>

                            }
                        </ul>
                    </p>
                </Col>
            </Row>
            <Row>
                <h3 className='text-decoration-underline'>IV- Déroulement de la séance : </h3>
                <table className='table border'>
                    <thead>
                        <tr className='text-center'>
                            <th className='border'>Phase de Motivation</th>
                            <th className='border'>Phase d'acquisition du savoir</th>
                            <th className='border'>Phase d'valuation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border w-100'>
                            {questions.length > 0 &&
                                <td className='border'>
                                    <strong> Test de prérequis: </strong>
                                    {questions.map((item, index) => (
                                        <p key={index}>
                                            - {item}
                                        </p>
                                    ))}
                                    {situationProbleme &&
                                        <>
                                            <strong>Situation problème :</strong>
                                            <p> {situationProbleme} </p>
                                        </>
                                    }
                                </td>
                            }
                            <td className='border'>
                                {savoirs.length > 0 && savoirs.map((act, index) => (
                                    <p key={index}>- {act}</p>
                                ))}
                            </td>
                            <td className='border'>
                                {evaluationItems && evaluationItems.map((ev, index) =>(
                                    <p key={index}>
                                        {ev}
                                    </p>
                                ))
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Row>

            <Container className='mb-3 d-flex justify-content-between'>
                <Button variant='danger' onClick={prevStep}>Précedant</Button>
                <Button variant='primary' onClick={nextStep} >Imprimer</Button>
            </Container>
        </Container>
    )
}

export default InvoiceFiche;
