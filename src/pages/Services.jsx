import React from 'react';
import {
  Home,
  Building2,
  Factory,
  Wrench,
  Paintbrush,
  Zap
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description:
        'Custom homes, apartments, and residential complexes built with attention to detail and modern design principles.',
      features: [
        'Custom Home Design',
        'Apartment Buildings',
        'Home Renovations',
        'Interior Design'
      ],
      image:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description:
        'Office buildings, retail spaces, restaurants, and commercial complexes designed for modern business needs.',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Shopping Centers',
        'Restaurants & Hotels'
      ],
      image:
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description:
        'Warehouses, factories, manufacturing facilities, and industrial complexes built for efficiency and durability.',
      features: [
        'Manufacturing Plants',
        'Warehouses',
        'Distribution Centers',
        'Industrial Facilities'
      ],
      image:
        'https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description:
        'Transform existing spaces with our comprehensive renovation and remodeling services.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovation',
        'Office Renovation',
        'Complete Makeovers'
      ],
      image:
        'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Paintbrush,
      title: 'Interior Design',
      description:
        'Professional interior design services to create beautiful and functional spaces that reflect your style.',
      features: [
        'Space Planning',
        'Color Consultation',
        'Furniture Selection',
        'Lighting Design'
      ],
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'MEP Services',
      description:
        'Mechanical, Electrical, and Plumbing services integrated seamlessly into every construction project.',
      features: [
        'Electrical Systems',
        'Plumbing Installation',
        'HVAC Systems',
        'Fire Safety Systems'
      ],
      image:
        'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Construction Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive construction solutions from residential homes to large-scale commercial and industrial projects.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures quality, efficiency, and client satisfaction at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial meeting to understand your vision and requirements' },
              { step: '02', title: 'Planning', desc: 'Detailed planning, design, and project timeline development' },
              { step: '03', title: 'Construction', desc: 'Professional execution with regular progress updates' },
              { step: '04', title: 'Completion', desc: 'Final inspection, handover, and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and get a free consultation from our expert team.
          </p>
          <button className="btn-secondary">Get Free Quote Today</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
