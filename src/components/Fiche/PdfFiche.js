
import { Document, Page, Text, PDFViewer, StyleSheet, Image } from '@react-pdf/renderer';
import { Button } from 'bootstrap';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';

const date = new Date();
const options = { day: 'numeric', month: 'numeric', year: 'numeric' }
const formattedDate = date.toLocaleDateString('fr-FR', options)

const styles = StyleSheet.create({
    table: {
        border: '1px solid #00264b',
        padding: '7px',
        fontSize: 12,
        lineHeight: 1.2
    },
    body: {
        paddingTop: 30,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        margin: 12,
        color: '#00264b'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 10,
        marginBottom: 20,
        color: 'grey',
        display: 'flex',
        justifyContent: 'space-between'
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    gras: {
        fontWeight: 'thin'
    },
    prerequis: {
        fontSize: 11,
        marginLeft: 18
    },
    para: {
        fontSize: 11,
        marginLeft: 18,
        lineHeight: 1.5
    },
    phase: {
        marginLeft: 25,
        fontSize: 12,
        marginTop: 8,
        lineHeight: 1.5,
        textDecoration: 'underline'
    },
    testPrerquis: {
        marginLeft: 40,
        fontSize: 11,
        lineHeight: 1.5
    }, 
    situationProbleme: {
        fontSize: 11,
        marginLeft: 48,
        border: '1px dashed black', 
        padding: 4
    }
});

const arr = ['aaa', 'bbb', 'ccc']
const Invoice = ({ data }) => (
    <Document>
        <Page style={styles.body}>
            <Text style={styles.header} fixed>
                <Text style={{ fontSize: 8 }}>Pr. R. EL MAHDY</Text>
            </Text>
            <Text style={styles.title}>Fiche pédagogique</Text>
            <Text style={styles.author}>{formattedDate}</Text>
            {/* <Image
                    style={styles.image}
                    src="/images/quijote1.jpg"
                /> */}
            <Text style={styles.subtitle}>
                I- Identification
            </Text>
            <Text style={styles.table}>
                Module : {data.module}.{'\n'}
                Sequence : {data.sequence}.{'\n'}
                Niveau : {data.level}.{'\n'}
                Séance : {data.seance}.{'\n'}
                Duree : {data.duree} h.{'\n'}
            </Text>
            <Text style={styles.subtitle}>
                II- Prérequis
            </Text>

            {data.prerequis.map((item) => (
                <Text style={styles.prerequis}>- {item.value}</Text>
            ))
            }

            <Text style={styles.subtitle}>
                III- Les objectifs pédagogiques
            </Text>
            <Text style={styles.para}>
                L'apprenant doit etre capable :
            </Text>

            {data.objectifs.map((item) => (
                <Text style={styles.prerequis}>- {item}</Text>
            ))
            }
            <Text style={styles.subtitle}>
                IV- Déroulement de la séance
            </Text>
            <Text style={styles.phase}>1. Motivation </Text>
            <Text style={styles.testPrerquis}>a. Test de prérequis</Text>
            {data.questions.map(item => (
                <Text style={styles.prerequis}>- {item}</Text>
            ))}

            {data.situationProbleme && <Text style={styles.testPrerquis}>b. Situation Problème</Text>}
            {data.situationProbleme && <Text style={styles.situationProbleme}> {data.situationProbleme} </Text>}


            <Text style={styles.phase}>2. Acquisition du savoir</Text>
            {data.savoirs.map(s => (
                <Text style={styles.prerequis}>- {s} </Text>
            ))}
            <Text style={styles.phase}>2. Evaluation </Text>

            {data.evaluationItems.map(e => (
                <Text style={styles.prerequis}>- {e} </Text>
            ))}

            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />
        </Page>
    </Document>
);


const PdfFiche = (props) => {
    const { level, module, sequence, seance, duree, prerequis, objectifs, questions, savoirs, evaluationItems, situationProbleme } = props.data
    const data = { level, module, sequence, seance, duree, prerequis, objectifs, questions, savoirs, evaluationItems, situationProbleme }

    const downloadInvoice = () => {
        const blob = new Blob([<Invoice />], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'invoice.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        props.change()
    }, [])

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {/* <Button >Retour</Button> */}
            {/* <div className='d-flex justify-content-start'>
                <button className='btn btn-primary m-1' onClick={() => props.prevStep()}>Retour</button>
            </div> */}
            <PDFViewer style={{ width: '100%', height: '100%' }}>
                <Invoice data={data} />
            </PDFViewer>
        </div>
    );
};

export default PdfFiche;
