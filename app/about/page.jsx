import React from 'react'

function About () {
  return (
    <>
    <div className='grid font-Oswald lg:grid-cols-2 gap-5 mt-10'>
    <div className='flex flex-col gap-5 bg-white p-5 rounded-3xl hover:bg-slate-900 hover:text-white cursor-default pr-20'>
      <h1 className='font-semibold'>Welcome to Ash's Patreon Page!</h1>
      <p>Thank you for considering supporting our project. We are excited to share with you our journey and the impact we aim to make with your help.</p>
    </div>
    <div className='flex flex-col gap-5 bg-white p-5 rounded-3xl hover:bg-slate-900 hover:text-white cursor-default pr-20'>
      <h1 className='font-semibold'>About Us:</h1>
      <p>Getashabeer  is a dynamic web application built with cutting-edge technologies including Next.js, MongoDB, Vercel, and Auth.js. We are passionate about mordern web development and adopting new technologies. Our team is dedicated to crafting an exceptional user experience while ensuring data security and accessibility for all.</p>
    </div>
    <div className='flex flex-col gap-5 bg-white p-5 rounded-3xl hover:bg-slate-900 hover:text-white cursor-default pr-20'>
      <h1 className='font-semibold'>What We Do:</h1>
      <p>Getashabeer is a pateron project for showcasing payment gateway and authentication.By supporting you can also get featured on the page.</p>
    </div>
    <div className='flex flex-col gap-5 bg-white p-5 rounded-3xl hover:bg-slate-900 hover:text-white cursor-default pr-20'>
      <h1 className='font-semibold'>Why Getashabeer?</h1>
      <p>As an independent project, we rely on the support of our community to sustain and grow. By becoming a Patreon supporter, you directly contribute to the ongoing development and improvement of Getashabeer. Your support enables us to cover hosting costs, hire developers, and add new features to enhance your experience.</p>
    </div>
    <div className='flex flex-col gap-5 bg-white p-5 rounded-3xl hover:bg-slate-900 hover:text-white cursor-default pr-20'>
      <h1 className='font-semibold'>How You Can Help:</h1>
      <li><h1>Become a Patron:</h1>
      <p>Join our community of supporters by becoming a Patron. Choose a tier that suits you best and unlock exclusive benefits.</p>
      </li>
      <li><h1>Spread the Word</h1>
      <p>Help us reach more people by sharing our Patreon page and Getashabeer with your friends, family, and social networks.</p>
      </li>
      <li><h1>Provide Feedback:</h1><p>Your feedback is invaluable to us. Let us know what you love about Getashabeer and how we can make it even better.</p></li>
    </div>
    <div className='flex flex-col gap-5 bg-white p-5 rounded-3xl hover:bg-slate-900 hover:text-white cursor-default pr-20'>
      <h1 className='font-semibold'>Our Commitment to You:</h1>
      <p>We are committed to transparency, accountability, and delivering value to our supporters. As a Patreon supporter, you will have access to exclusive content, early access to new features, and behind-the-scenes updates.</p>
    </div>
    <div className='flex flex-col gap-5 bg-white p-5 rounded-3xl hover:bg-slate-900 hover:text-white cursor-default pr-20'>
      <h1 className='font-semibold'>Connect With Us:</h1>
      <p>Have questions, suggestions, or just want to say hello? Reach out to us on our social media handles or preferred communication channels.
      Thank you for considering supporting Getashabeer. Together, we can drive change and make a difference!</p>
    </div>
    </div>
    </>
  )
}

export default About;