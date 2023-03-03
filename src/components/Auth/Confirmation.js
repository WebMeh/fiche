
export const Confirmation = ({ values, nextStep, prevStep }) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header text-center"> Your Informations </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            User Name <br />
                            <span className="text-muted">{values.username}</span>
                        </li>
                        <li className="list-group-item">
                            Email <br />
                            <span className="text-muted">{values.email}</span>
                        </li>
                        <li className="list-group-item">
                            First Name <br />
                            <span className="text-muted">{values.firstName}</span>
                        </li>
                        <li className="list-group-item">
                            Last Name <br />
                            <span className="text-muted">{values.lastName}</span>
                        </li>
                        <li className="list-group-item">
                            Country <br />
                            <span className="text-muted">{values.country}</span>
                        </li>
                        <li className="list-group-item">
                            Level Of education <br />
                            <span className="text-muted">{values.levelOfEducation}</span>
                        </li>
                    </ul>
                </div>
                <div className="card-footer">
                    <button onClick={prevStep} className="btn btn-primary mx-4" >Previuos</button>
                    <button onClick={nextStep} className="btn btn-success mx-4" >Confirm your Informations</button>
                </div>
            </div>
        </div>
    )
}
