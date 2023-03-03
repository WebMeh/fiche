
export const UserDetails = ({values, nextStep, handleChange}) => {
  return (
    <div className="container-fluid">
        <h1 className="fs-3"> User Deails </h1>
        <div className="form-group">
            <label>User Name : </label>
            <input type="text" className="form-control w-50"
                onChange={handleChange('username')}
                value={values.username}/>
        </div>
        <div className="form-group">
            <label>Adresse mail : </label>
            <input type="text" className="form-control w-50"
                onChange={handleChange('email')}
                value={values.email}/>
        </div>
        <div className="form-group">
            <label>Password : </label>
            <input type="text" className="form-control w-50"
                onChange={handleChange('password')}
                value={values.password}/>
        </div>

        <div className="form-group">
            <button onClick={nextStep} className="btn btn-primary w-25 my-2 float-right">Next</button>
        </div>
       
    </div>
  )
}
