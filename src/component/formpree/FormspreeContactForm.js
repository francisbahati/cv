import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function FormspreeContactForm() {
  const [state, handleSubmit] = useForm("movkwylv"); // Replace with your actual Formspree form ID

  if (state.succeeded) {
    return (
      <div className="php-email-form">
        <div className="sent-message">
          Your message has been sent. Thank you! I'll get back to you within 24 hours.
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="php-email-form"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="row gy-4">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="col-12">
      <select
    className="form-control bg-primary text-black"
    name="service"
    required
>
    <option value="">Select Service Interested In</option>
    <option value="full-stack-development">Full Stack Development</option>
    <option value="cybersecurity">Cybersecurity Solutions</option>
    <option value="api-development">REST API Development</option>
    <option value="database-management">Database Management</option>
    <option value="python-automation">Python Automation</option>
    <option value="it-support">IT Support & Consulting</option>
    <option value="web-application">Web Application Development</option>
    <option value="security-audit">Security Audit & Testing</option>
    <option value="multiple">Multiple Services</option>
    <option value="consultation">Technical Consultation</option>
</select>
          <ValidationError 
            prefix="Service" 
            field="service"
            errors={state.errors}
          />
        </div>

        <div className="col-12">
          <textarea
            className="form-control"
            name="message"
            rows="6"
            placeholder="Tell me about your business and goals..."
            required
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="col-12 text-center">
          <div className="loading" style={{ display: state.submitting ? 'block' : 'none' }}>
            Loading
          </div>
          <div className="error-message" style={{ display: state.errors > 0 ? 'block' : 'none' }}>
            There was an error sending your message. Please try again.
          </div>

          <button 
            type="submit" 
            className="btn"
            disabled={state.submitting}
          >
            {state.submitting ? 'Sending...' : 'Start Conversation'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormspreeContactForm;