import React, { useState } from 'react';
import { Building2, Users, Phone, Mail, MapPin, Star, Award, HeadphonesIcon, Clock, FileText, Handshake, Building, Facebook, Home, Shield, Linkedin, MessageCircle } from 'lucide-react';
import logo from '../src/l.png'
import s from '../S.png'
function App() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/sshreyansh041@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact Form Submission from ${formData.name}`,
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 50000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 50000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      {/* Top Contact Bar */}
      <div className="bg-blue-50  py-2 border-b border-blue-100"> {/* Light blue background */}
        <div className=" mx-auto px-6 flex lg:flex-row flex-col space-y-4 justify-between items-center">
          {/* Left Side - Contact Info */}
          <div className="flex items-center space-x-6"> {/* Adjusted for single line */}
            {/* Contact-info Heading with HeadphonesIcon */}
            <div className="flex items-center space-x-2">
              <HeadphonesIcon className="w-5 h-5 text-blue-600" /> {/* Headphones icon */}
              <span className="text-sm font-semibold text-gray-700">Contact-info</span> {/* Heading */}
            </div>

            {/* Contact Details */}
            <div className="flex space-x-6 text-sm text-gray-700"> {/* Adjusted font color */}
              <a href="tel:+91-9870158383" className="flex items-center hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" /> +91-9870158383
              </a>
              <a href="mailto:arvatrealty1@gmail.com" className="flex items-center hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 mr-2" /> arvatrealty1@gmail.com
              </a>
            </div>
          </div>

          {/* Right Side - WhatsApp and Social Media (Placeholders) */}
          <div className="flex space-x-4">
            <a href="https://wa.me/919870158383" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <MessageCircle className="w-4 h-4 mr-2" />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin className="w-4 h-4" /> {/* Placeholder for LinkedIn */}
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Facebook className="w-4 h-4" /> {/* Placeholder for Facebook */}
            </a>
          </div>
        </div>
      </div>
      <header className={`w-full ${isHeaderFixed ? 'fixed top-0 bg-white shadow-lg animate-slideDown' : ''} z-50`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Replace the text with the logo */}
            <a href="#home" className='flex items-center space-x-2'>
              <img
                src={logo} // Path to your logo file in the `public` folder
                alt="Arvat Realty Logo"
                className="h-12" // Adjust height as needed
              />
              <span className="text-xl font-bold text-gray-800">Arvat Realty</span> {/* Text inline with logo */}
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#properties" className="text-gray-600 hover:text-blue-600 transition-colors">Properties</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="container mx-auto px-6 h-full flex items-center justify-center">
            <div className="max-w-3xl text-center">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Your Trusted Partner in Premium Real Estate Solutions
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Premium real estate solutions tailored to your aspirations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section 
<section className="py-20 bg-white"id="about">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Photo on the Left 
      <div className="flex justify-center md:justify-start">
        <img
          src="/S.png" // Path to your image in the `src` folder
          alt="About Us"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

   {/*  Content on the Right 
     <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
        <p className="text-gray-600 mb-6">
          Welcome to Arvat Realty & Consultants, your trusted partner in real estate consultancy and liaison services across Uttar Pradesh, Delhi NCR, Uttarakhand, Haryana, Himachal Pradesh, Maharashtra (Pune), and Punjab.
        </p>
        <p className="text-gray-600 mb-6">
          With over 10 years of industry experience, we specialize in providing strategic real estate solutions tailored to our clients' unique needs. Founded by Ravinder Kumar, our expertise spans Real Estate, Solar, Infrastructure, and Aviation.
        </p>
        <p className="text-gray-600 mb-6">
          Over the years, we have successfully guided clients in property transactions, joint ventures, licensing approvals, and interior development for homes, offices, and commercial spaces.
        </p>
        <p className="text-gray-600">
          At Arvat Realty, we believe in delivering maximum value by aligning real estate strategies with business goals. Our commitment to professionalism, transparency, and client satisfaction makes us the go-to consultancy for all your real estate needs.
        </p>
      </div>
    </div>
  </div>
</section>  */}

      {/* About Us Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo on the Left */}
            <div className="flex justify-center md:justify-start">
              <img
                src={s}// Path to your image in the `src` folder
                alt="About Us"
                className="w-full max-w-md rounded-lg shadow-lg" // Larger size for better fit
              />
            </div>

            {/* Content on the Right */}
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
              <p className="text-gray-600 mb-6">
                Welcome to <strong>Arvat Realty & Consultants</strong>, a trusted name in real estate consultancy and liaison services. With over <strong>10 years of experience</strong>, we specialize in providing comprehensive solutions tailored to meet the unique needs of our clients. Our expertise spans across key sectors such as <strong>Real Estate, Solar, Infrastructure, and Aviation</strong>.
              </p>
              <p className="text-gray-600 mb-6">
                Founded by <strong>Ravinder Kumar</strong>, our company has established a strong reputation for delivering strategic real estate solutions. Over the past <strong>10 years</strong>, we have honed our expertise in the Indian  markets, offering services such as <strong>land acquisition, joint ventures, leasing, construction, and interior development</strong> for residential, commercial, and office spaces.
              </p>
              <p className="text-gray-600 mb-6">
                At Arvat Realty, we pride ourselves on our ability to coordinate with various government authorities, to secure necessary approvals and licenses for projects such as <strong>Townships, Group Housing, Commercial Developments, and Change of Land Use (CLU)</strong>.
              </p>
              <p className="text-gray-600 mb-6">
                Committed to integrity, professionalism, and client satisfaction, Arvat Realty & Consultants is your reliable partner in <strong>navigating the complexities </strong> of real estate, delivering results that align with your vision.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to align real estate strategies with our clients' business goals, delivering <strong>maximum value</strong> through professionalism, transparency, and integrity. Whether you're looking to buy, sell, or develop property, Arvat Realty & Consultants is your trusted partner for all your real estate needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white w-full">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Arvat at a Glance
          </h2>

          {/* Stats Grid - Full Width Single Line */}
          <div className="lg:flex grid grid-cols-2 justify-between items-center w-full">
            <StatCard number="10+" text="Years Experience" icon={<Clock className="w-10 h-10" />} />
            <StatCard number="500+" text="Properties Managed" icon={<Building className="w-10 h-10" />} />
            <StatCard number="1000+" text="Happy Clients" icon={<Users className="w-10 h-10" />} />
            <StatCard number="50+" text="Awards Won" icon={<Award className="w-10 h-10" />} />
            <StatCard number="100+" text="Strategic Partnerships" icon={<Handshake className="w-10 h-10" />} />
          </div>
        </div>
      </section>



      {/* Operating Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Areas in which we Operate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <OperatingAreaCard
              image="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              area="Delhi NCR"
              description="Comprehensive real estate services across the National Capital Region"
            />
            <OperatingAreaCard
              image="https://images.unsplash.com/photo-1623492701902-47dc207df5dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              area="Rajasthan"
              description="Expert property solutions throughout major cities of UP"
            />
            <OperatingAreaCard
              image="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              area="Haryana"
              description="Complete real estate solutions across major districts"
            />
            <OperatingAreaCard
              image="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              area="Punjab"
              description="Comprehensive property services across major cities"
            />
            <OperatingAreaCard
              image="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              area="Himachal Pradesh"
              description="Premium property services in scenic locations"
            />
            <OperatingAreaCard
              image="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              area="Pune & Mumbai"
              description="Strategic real estate solutions in Pune metropolitan area"
            />
          </div>
        </div>
      </section>


      {/* Signature Estates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Signature Estates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PropertyCard
              image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Luxury Villa in South Delhi"
              location="Delhi"
              price="₹4.5 Cr"
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Premium Apartment"
              location="Chandigarh"
              price="₹2.8 Cr"
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Commercial Complex"
              location="Gurgaon"
              price="₹15 Cr"
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Modern Office Space"
              location="Noida Sector 62"
              price="₹8.5 Cr"
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Residential Plot"
              location="Mohali"
              price="₹1.2 Cr"
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Agricultural Land"
              location="Mohali, Punjab"
              price="₹2.8 Cr"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Building2 className="w-8 h-8" />}
              title="Property Management"
              description="Our comprehensive property management services ensure seamless operations for both residential and commercial properties. From tenant screening and lease management to maintenance and financial reporting, we handle every aspect with precision and professionalism. Our goal is to maximize your property's value while minimizing your workload."
            />
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Investment Advisory"
              description="Leverage our expertise in real estate investment to make informed decisions that align with your financial goals. We provide tailored advisory services, including market analysis, risk assessment, and portfolio optimization. Whether you're a first-time investor or a seasoned professional, we help you identify lucrative opportunities and achieve long-term growth."
            />
            <ServiceCard
              icon={<Shield className="w-8 h-8" />}
              title="Legal Consultancy"
              description="Navigating the legal complexities of real estate transactions can be daunting. Our team of experienced legal professionals offers end-to-end assistance, including contract drafting, due diligence, title verification, and dispute resolution. We ensure that every transaction is legally sound, transparent, and in your best interest."
            />
            <ServiceCard
              icon={<Handshake className="w-8 h-8" />}
              title="Joint Ventures & Collaborations"
              description="We specialize in facilitating joint ventures and collaborations in the real estate sector. Whether you're looking to partner with developers or investors, we provide strategic guidance, negotiation support, and legal structuring to ensure successful partnerships that drive mutual growth and profitability."
            />
            {/*  <ServiceCard
        icon={<MapPin className="w-8 h-8" />}
        title="Land Acquisition & Development"
        description="Our expertise in land acquisition and development ensures that you secure the best parcels of land for your projects. We assist in identifying prime locations, negotiating deals, and obtaining necessary approvals from authorities like HUDA, DDA, and Town & Country Planning. From raw land to developed plots, we guide you through every step."
      />  */}
            <ServiceCard
              icon={<Home className="w-8 h-8" />}
              title="Interior Design & Construction"
              description="Transform your raw flats, houses, or commercial spaces into stunning, functional environments with our interior design and construction services. We offer end-to-end solutions, from conceptualization to execution, ensuring that every detail aligns with your vision and requirements."
            />
            <ServiceCard
              icon={<FileText className="w-8 h-8" />}
              title="Liaisoning & Approvals"
              description="Navigating the bureaucratic landscape of real estate approvals can be challenging. Our team specializes in liaising with government authorities like HUDA, DDA, MCD, and Town & Country Planning to secure licenses, LOIs, and other necessary approvals for your projects. We streamline the process, saving you time and effort."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              text="Arvat Realty's expertise in the Delhi NCR market helped us secure an excellent investment property. Their market knowledge and negotiation skills are outstanding."
              author="Rajesh Kumar"
              position="Business Owner"
            />
            <TestimonialCard
              text="The team's professionalism and dedication made our property search seamless. They understood our requirements perfectly and found us our dream home within budget."
              author="Priya Singh"
              position="Homeowner"
            />
            <TestimonialCard
              text="Outstanding property management services. They handle everything professionally and keep our investments secure. Highly recommended!"
              author="Amit Sharma"
              position="Property Investor"
            />
            <TestimonialCard
              text="Their legal team's expertise in real estate matters saved us from potential complications. The entire process was smooth and transparent."
              author="Neha Gupta"
              position="First-time Buyer"
            />
            <TestimonialCard
              text="As an NRI investor, I needed a trustworthy partner in India. Arvat Realty exceeded my expectations with their comprehensive property management services."
              author="Suresh Patel"
              position="NRI Investor"
            />
            <TestimonialCard
              text="The team's understanding of commercial real estate helped us find the perfect office space. Their after-sales service is exceptional."
              author="Vikram Malhotra"
              position="CEO, Tech Startup"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 bg-blue-600">
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-white/90 mb-8">
                  Let us help you find your perfect property or investment opportunity
                </p>
                <div className="space-y-6">
                  <ContactInfo
                    icon={<Phone className="w-6 h-6" />}
                    title="Phone"
                    info="+91-9870158383"
                    light
                  />
                  <ContactInfo
                    icon={<Mail className="w-6 h-6" />}
                    title="Email"
                    info="arvatrealty1@gmail.com"
                    light
                  />
                  <ContactInfo
                    icon={<MapPin className="w-6 h-6" />}
                    title="Office"
                    info="Delhi/NCR"
                    light
                  />
                </div>
              </div>
              <div className="p-12">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full px-6 py-3 rounded-lg text-white transition-colors ${formStatus === 'sending'
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Form Status Messages */}
                  {formStatus === 'success' && (
                    <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                      Sorry, there was an error sending your message. Please try again later.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Arvat Realty</h3>
              <p className="text-gray-400">
                Your trusted partner in real estate excellence since 2014
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Properties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investment Advisory</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Legal Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultancy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Delhi/NCR and Punjab</li>
                <li>+91-9870158383</li>
                <li>arvatrealty1@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Arvat Realty & Consultants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ number, text, icon }: { number: string; text: string; icon: React.ReactNode }) {
  return (
    <div className="text-center p-6">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function PropertyCard({ image, title, location, price }: { image: string; title: string; location: string; price: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </p>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
      <div className="text-blue-600 mb-6 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ text, author, position }: { text: string; author: string; position: string }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <div className="text-blue-600 mb-6 flex justify-center">
        <Star className="w-8 h-8" />
      </div>
      <p className="text-gray-600 mb-6 italic">"{text}"</p>
      <div className="text-center">
        <h4 className="font-semibold">{author}</h4>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, info, light }: { icon: React.ReactNode; title: string; info: string; light?: boolean }) {
  return (
    <div className="flex items-center">
      <div className={`${light ? 'text-white' : 'text-blue-600'} mr-4`}>{icon}</div>
      <div>
        <h3 className={`text-sm font-semibold ${light ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
        <p className={light ? 'text-white/90' : 'text-gray-600'}>{info}</p>
      </div>
    </div>
  );
}

function OperatingAreaCard({ image, area, description }: { image: string; area: string; description: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      <div className="relative h-48">
        <img src={image} alt={area} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{area}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default App;