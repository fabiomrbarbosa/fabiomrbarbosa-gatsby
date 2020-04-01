import React from 'react'
import Subscribe from '../components/subscribe'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

const ContactPage = () => {
  return (
    <Layout template='contact'>
      <SEO
        title='Say hello!'
        description='Here&apos;s how you can contact me'
      />

      <Container containerClass='hero__module hero__module--contact'>
        <h1 className='heroTitle'>Say hello!</h1>
        <p className='heroSubtitle'>Here's how you can contact me.</p>
      </Container>

      <Container containerClass='contact__section'>
        <h2>Write me a letter.</h2>
        <p className='emailAddress'>
          <a href='mailto:hello@fabiobarbosa.net'>hello[at]fabio&#8203;barbosa[dot]net</a>
        </p>
        
        <h2>Or just use this contact form.</h2>
        <p>I promise to reply within 24 hours. Your time is precious. I get that. Required fields are highlighted with an asterisk.</p>

        <form name='contact' method='POST' netlify-honeypot='bot-field' data-netlify='true'>
          <label for='form-name'>Your name</label>
          <input id='form-name' name='name' type='text' required placeholder={`You may use your superhero name, but should you?`} />
          <label for='form-replyto'>Your e-mail address</label>
          <input id='form-replyto' name='_replyto' type='email' required placeholder={`Yes, I'm fine even with Hotmail and AOL.`} />

          <label for='form-phone'>Your phone number</label>
          <input id='form-phone' name='telephone' placeholder={`Don't forget your country's international prefix!`} type='tel' />

          <label for='form-message'>Your message</label>
          <textarea id='form-message' required placeholder={`Type your message here…`} name='message' />

          <label className='visuallyHidden'>Don’t fill this out if you're human: <input name='bot-field' /></label>

          <button type='submit' id='contact-submit' data-submit='…Sending'>Submit</button>
        </form>
      </Container>

      <Subscribe isFeed='true' />
    </Layout>
  )
}

export default ContactPage