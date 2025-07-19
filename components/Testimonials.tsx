const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Siscora has completely transformed how we handle our operations. Their platform is intuitive, powerful, and their support team is exceptional.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager at InnovateX',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'The analytics dashboard alone is worth the investment. We\'ve seen a 40% increase in team productivity since we started using Siscora.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'CEO at StartUp Vision',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    content: 'As a growing startup, we needed a solution that could scale with us. Siscora has been the perfect partner in our growth journey.'
  },
];

export default function Testimonials() {
  return (
    <div className="bg-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by businesses worldwide
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Join thousands of satisfied customers who rely on our solutions
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative
                before:absolute before:top-0 before:left-0 before:w-10 before:h-1 before:bg-indigo-600
                after:absolute after:bottom-0 after:right-0 after:w-10 after:h-1 after:bg-indigo-600
              ">
                <div className="pt-1">
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div className="mt-6 flex items-center">
                    <img 
                      className="h-12 w-12 rounded-full object-cover" 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                    />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-indigo-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
