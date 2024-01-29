import React, {useState} from 'react';
import { images } from '../../constants';
import  './Footer.scss';
import { AppWrap } from '../../wrapper';
import { client } from '../../client';


const Footer = () => {
  const [formData, setFormData] = useState({name: '', email:'', message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)


  const { name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);


    const contact = {
        _type: 'contact',
        name: name,
        email: email,
        message: message

      
    }

    client.create(contact) 
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
    

  }

  return (
    <div className='app__footer'>
        
      
      <h2 className='head-text'>Contact me</h2>
      
      <div className='app__footer-cards'>
          <div className='app__footer-card'>
            
            <a href='mailto:shobhit.m@icloud.com' className='p-text'>shobhit.m@icloud.com</a>
          </div>
      </div>
      
      {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
          <div className='app__flex'>
              <input className='p-text' type='text' placeholder='Your awesome name' name = 'name' value={name} onChange={handleChangeInput}/>
          </div>
          
          <div className='app__flex'>
              <input className='p-text' type='email' placeholder='Your email' name = 'email' value={email} onChange={handleChangeInput}/>
          </div>
          
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending your message to Shobhit...' : 'Send'}</button>
        <div className='line-container'><hr className='line'/>
            <p className='p-text'> © 2024 Shobhit Mehrotra </p>
        
        </div>


       
        </div>
        : <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>}

      
        
        
      
        
       
      
        
        
        
      
      

    </div>

    
  )
}

export default AppWrap(Footer, 'contact')