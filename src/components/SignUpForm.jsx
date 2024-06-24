import React from 'react'

export const SignUpForm = () => {
    const [formData, setFormData] = React.useState(
        { email : "",
          password: "",
          confirmPassword: "",
          joinNewsletter: false
    })

    function handleSubmit(event){
        event.preventDefault()
        if (formData.password === formData.confirmPassword) {
           console.log("Successfully signed up")
    }   else {
        console.log("Passwords do not match")
    
    }}

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

  return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
            <input type="email" 
                   name="email" 
                   placeholder="please enter your email here" 
                   id='email'
                   onChange={handleChange}
                   value={formData.email} />
                   <label htmlFor="email">Email</label>

            <input type="password"
                   name='password' 
                   placeholder="please enter your password" 
                   id='password'
                   onChange={handleChange}
                   value={formData.password}
                   />
            <label htmlFor="password">Password</label>

            <input type="password" 
                   name='confirmPassword' 
                   placeholder="please enter your password" 
                   id='confirmPassword'
                   onChange={handleChange}
                   value={formData.confirmPassword} />
            <label htmlFor="confrmPassword">Confirm Password</label>

            <input type="checkbox" 
                   name='joinNewsletter'
                   id='joinNewsletter'
                   onChange={handleChange}
                   value={formData.joinNewsletter} />
            <label htmlFor="joinNewsletter">I want to join the newsletter</label>
        </form>
    </div>
  )
}
