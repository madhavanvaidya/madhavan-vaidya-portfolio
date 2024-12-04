const Contact = () => {
    return (
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded-lg" rows="5"></textarea>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg">Send Message</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  