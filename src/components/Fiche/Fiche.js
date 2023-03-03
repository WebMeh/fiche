import { useEffect, useState } from "react"
import Identification from "./Identification"
import Aquisition from "./Aquisition"
import Objectifs from "./Objectifs"
import { Alert, ProgressBar } from "react-bootstrap";
import Deroulement from "./Deroulement"
import InvoiceFiche from "./InvoiceFiche";
import PdfFiche from "./PdfFiche";
import { sequences, modules } from "./Data";



const Fiche = ({ change }) => {
    const [step, setStep] = useState(1)
    const [level, setLevel] = useState("")
    const [classe, setClasse] = useState("")
    const [module, setModule] = useState("")
    const [sequence, setSequence] = useState("")
    const [sequeneOptions, setSequenceOptions] = useState([])
    const [seance, setSeance] = useState("")
    const [duree, setDuree] = useState("")
    const [prerequis, setPrerequis] = useState(null)
    const [objectifs, setObjectifs] = useState([])
    const [nuObjectifs, setNumObjectifs] = useState(0)
    const [questions, setQuestions] = useState([])
    const [numQuestions, setNumQuestions] = useState(0)
    const [isChecked, setIsChecked] = useState(false)
    const [situationProbleme, setSituationProbleme] = useState("")
    const [savoirs, setSavoirs] = useState([''])
    const [numSavoirs, setNumSavoirs] = useState(1)
    const [evaluationItems, setEvaluationItems] = useState([""])
    const [numEvaluationItems, setNumEvaluationItems] = useState(1)
    const [alert, setAlert] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        setSequenceOptions(sequences.filter(s => s.moduleId == correspondModuleId(module)))
        console.log(sequeneOptions);
    }, [module])

    const nextStep = () => {
        setShowAlert(false)
        if (step <= 1) {
            if (level === "") {
                setAlert("Veuillez sélectionner le niveau !")
                setShowAlert(true)
            }
            else if (module === "") {
                setAlert("Veuillez insérer le nom du module !")
                setShowAlert(true)
            }
            else if (sequence === "") {
                setAlert("Veuillez insérer le nom de la séquence !")
                setShowAlert(true)
            }
            else {
                setStep(step + 1)
            }
        } else {
            setStep(step + 1)
        }
    }

    const prevStep = () => setStep(step - 1)

    const handleCheck = (e) => {
        setIsChecked(e.target.checked)
        setSituationProbleme("")
    }

    const correspondModuleId = (name) => {
        const m = modules.filter(mdl => mdl.name === name)
        const identifiant = m.length>0 ? m[0].id : 0
        return identifiant
    }

    const handleChange = e => {
        const input = e.target.name
        const value = e.target.value
        switch (input) {
            case 'classe':
                setClasse(value)
                break
            case 'level':
                setLevel(value)
                break
            case 'module':
                setModule(value)
                break
            case 'sequence':
                setSequence(value)
                break
            case 'seance':
                setSeance(value)
                break
            case 'duree':
                setDuree(value)
                break
            default: break
        }
    }

    // To change the prerquis input
    const handleCustomSelectChange = (newValue) => {
        setPrerequis(newValue);
    }

    // To add a new objectif 
    const addNewObjectif = () => {
        setNumObjectifs(nuObjectifs + 1)
        setObjectifs([...objectifs, ''])
    }
    // To delete an objectoif 
    const deleteObjectif = () => {
        setNumObjectifs(nuObjectifs - 1)
        setObjectifs(objectifs.slice(0, -1))
    }
    // to change objectifs liste
    const changeObjectif = (e, index) => {
        setObjectifs([...objectifs.slice(0, index),
        e.target.value,
        ...objectifs.slice(index + 1)])
    }

    // To change the questions input
    const changeQuestion = (e, index) => {
        setQuestions([...questions.slice(0, index),
        e.target.value,
        ...questions.slice(index + 1)])
    }

    // To add a new objectif 
    const addNewQuestion = () => {
        setNumQuestions(numQuestions + 1)
        setQuestions([...questions, ''])
    }
    // To delete an objectoif 
    const deleteQuestion = () => {
        setNumQuestions(numQuestions - 1)
        setQuestions(questions.slice(0, -1))
    }

    // handle value of situation probleme
    const hadleChangeSituationProbleme = (e) => {
        if (isChecked) setSituationProbleme(e.target.value)
        else setSituationProbleme("")
    }

    // to change savoirs liste
    const changeSavoir = (e, index) => {
        setSavoirs([...savoirs.slice(0, index),
        e.target.value,
        ...savoirs.slice(index + 1)])
    }

    // To add a new savoir 
    const addNewSavoir = () => {
        setNumSavoirs(numSavoirs + 1)
        setSavoirs([...savoirs, ''])
    }
    // To delete a  savoir 
    const deleteSavoir = () => {
        setNumSavoirs(numSavoirs - 1)
        setSavoirs(savoirs.slice(0, -1))
    }

    // to change evaluation 
    const changeEvaluation = (e, index) => {
        setEvaluationItems([...evaluationItems.slice(0, index),
        e.target.value,
        ...evaluationItems.slice(index + 1)])
    }

    // To add a new evaluation item textearea 
    const addNewEvaluation = () => {
        setNumEvaluationItems(numEvaluationItems + 1)
        setEvaluationItems([...evaluationItems, ''])
    }
    // To delete a  savoir 
    const deleteEvaluation = () => {
        setNumEvaluationItems(numEvaluationItems - 1)
        setEvaluationItems(evaluationItems.slice(0, -1))
    }

    const values = {
        step, level, classe, module, sequence, sequeneOptions, seance, duree, prerequis,
        objectifs, questions, isChecked, situationProbleme, savoirs, numSavoirs,
        evaluationItems, numEvaluationItems
    }

    return (
        <>
            {step < 5 && <div className="w-50 container my-3">
                <ProgressBar now={((step - 1) / 3) * 100} animated variant="success" />
            </div>}
            {showAlert &&
                <Alert variant="danger" className="w-50 container my-3 text-center"
                    dismissible onClose={() => setShowAlert(false)}>
                    <p>
                        <b>ATTENTION :</b> {alert}
                    </p>
                </Alert>}
            {step === 1 &&
                <Identification
                    values={values}
                    nextStep={nextStep}
                    handleChange={handleChange} />}

            {step === 2 &&
                <Objectifs
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                    onChange={handleCustomSelectChange}
                    changeObjectif={changeObjectif}
                    addNewObjectif={addNewObjectif}
                    deleteObjectif={deleteObjectif} />}

            {step === 3 &&
                <Deroulement
                    nextStep={nextStep}
                    prevStep={prevStep}
                    changeQuestion={changeQuestion}
                    addNewQuestion={addNewQuestion}
                    deleteQuestion={deleteQuestion}
                    handleCheck={handleCheck}
                    hadleChangeSituationProbleme={hadleChangeSituationProbleme}
                    changeSavoir={changeSavoir}
                    addNewSavoir={addNewSavoir}
                    deleteSavoir={deleteSavoir}
                    changeEvaluation={changeEvaluation}
                    addNewEvaluation={addNewEvaluation}
                    deleteEvaluation={deleteEvaluation}
                    values={values} />}
            {step === 4 &&
                <InvoiceFiche
                    prevStep={prevStep}
                    nextStep={nextStep}
                    invoiceFichData={values}
                    change={change} />
            }
            {step === 5 &&
                <PdfFiche
                    data={values}
                    change={change}
                    prevStep={prevStep} />
            }
        </>
    )
}

export default Fiche