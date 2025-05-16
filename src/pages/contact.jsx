import React, { useEffect } from 'react'
import '../styles/contact.css'
import { toast, Toaster } from 'sonner';
import { Button } from 'primereact/button';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("manendno");

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message Sent!', {
        duration: 3000, // 3 seconds
        onAutoClose: () => {
          window.location.reload(); // refresh the page
        }
      });

    }
  }, [state.succeeded]);


  return (
    <div className="contact-section">
      <Toaster position="top-right" richColors />
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
            <Button
              type="submit"
              className='cursor-pointer'
              loading={state.submitting}
            >
              {"Send"}
            </Button>
          </form>

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