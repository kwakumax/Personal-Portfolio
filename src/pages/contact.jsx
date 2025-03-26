import React,{useState, useEffect} from 'react'
import '../styles/contact.css'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [state, handleSubmit] = useForm("manendno");

  useEffect(() => {
    if (state.submitting) {
      setSent(true);
    }else{
      setSent(false);
    }
  }, [state.submitting]);
 console.log('state:', state);
 

  return (
    <div className="contact-section">
      <div id='contact' className="grid mt-6">
        <div className="col-12 md:col-12 lg:col-12">
          <h2 className="contact-title mb-4">CONTACT FORM</h2>
          <form id='contact-form' onSubmit={handleSubmit}>
            <input
              type="text"
              name='name'
              placeholder="Name"
            />
            <input
              type="email"
              name='email'
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              placeholder="Message"
              name='message'
              rows={3}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className='cursor-pointer'
              // loading={state.submitting}
            >
              {state.submitting? 'Loading...' : sent? "Sent" : "Send"}
            </button>
          </form>
          {/* {sent && <p className='sent'>sent</p>} */}

        </div>

        <div className="col-12 md:col-12 lg:col-12">
          <div className="col-12 text-start">
            <h3 className="contact-title mb-3">QUICK CONTACT</h3>
            <p className="my-4 quick-label"><span className="quick-label-2">Phone:</span> +(233) 50 2201 391 / +(233) 54 7818 886</p>
            <p className="my-4 quick-label"><span className="quick-label-2">Email:</span> amankwahamoako2@gmail.com</p>
            <p className="my-4 quick-label"><span className="quick-label-2">Location:</span> West Africa, Ghana, Sunyani</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;