import React from 'react'

export const Form = () => {
    const [formData, setFormData] = React.useState(
        { 
          firstName: " ", 
          lastName: " ", 
          email: " ", 
          comments:" ",
          isFriendly: true,
          employment: "",
          favColor: ""
        }
    )

    // console.log(formData.favColor)

    // function handleChange(event) {
    //     setFormData(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [event.target.name]: event.target.value
    //         }
    //     })
    // }

    function handleChange(event) {
        //console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}/>

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}/>

            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}/>

            <textarea
                placeholder = "Add Comments here"
                onChange = {handleChange}
                name = "comments"
                value = {formData.comments}/>

            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"/>
                <label htmlFor="isFriendly">Are you Friendly?</label>

            <fieldset>
                <legend>Current employment status</legend>

                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange} 
                    checked={formData.employment === "unemployed"}/>
                <label htmlFor="unemployed">unemployed</label>
                <br />

                <input 
                     type="radio"
                     id="part-time"
                     name="employment"
                     value="part-time"
                     onChange={handleChange} />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange} 
                    checked={formData.employment === "full-time"}/>
                <label htmlFor="full-time">Full-time</label>
                <br />

                <label htmlFor="favColor">What is your favorite color</label>
                <br />
                <select id = "favColor"
                        value={formData.favColor}
                        onChange = {handleChange}
                        name = "favColor">
                    <option value="">--Choose--</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="indigo">Violet</option>
                </select>
            </fieldset>
            <button>Submit</button>
        </form>
    </div>
  )
}
