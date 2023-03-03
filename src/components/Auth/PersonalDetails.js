
export const PersonalDetails = ({ values, nextStep, prevStep, handleChange }) => {
    return (
        <div className="container-fluid">
            <h1 className="fs-3"> Personal Details </h1>
            <div className="form-group">
                <label>Firs Name : </label>
                <input type="text" className="form-control w-50" placeholder="your first name"
                    onChange={handleChange('firstName')}
                    value={values.firstName} />
            </div>
            <div className="form-group">
                <label>Last Name : </label>
                <input type="text" className="form-control w-50" placeholder="your familt name"
                    onChange={handleChange('lastName')}
                    value={values.lastName} />
            </div>
            <div className="form-group">
                <label>Country: </label>
                <select type="text" className="form-select w-50"
                    onChange={handleChange('country')}
                    value={values.country} >
                    <option>Maroc</option>
                    <option>Espagne</option>
                    <option>USA</option>
                    <option>Italy</option>
                    <option>Bresil</option>
                </select>
            </div>
            <div className="form-group">
                <label>Level Of Education: </label>
                <select type="text" className="form-select w-50"
                    onChange={handleChange('levelOfEducation')}
                    value={values.levelOfEducation} >
                    <option>BAC</option>
                    <option>DEUG</option>
                    <option>LICENCE</option>
                </select>
            </div>

            <div className="form-group">
                <button onClick={prevStep} className="btn btn-danger w-25 my-2 ">Previous</button>
                <button onClick={nextStep} className="btn btn-primary w-25 my-2 float-right">Next</button>
            </div>

        </div>
    )
}
