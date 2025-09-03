import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mythili Vasudevan",
      role: "4 months ago",
      content: "My elder kid Thikshi have completed her earlier child hood education here which resulted in awesome growth in all aspects and now my second kid San is doing KG here where we are witnessing splendid growth through this play way method and brain stimulating activities.",
      avatar: "fas fa-user"
    },
    {
      name: "Tamilselvi R",
      role: "3 months ago",
      content: "When visiting ROBUDZ PLAY SCHOOL,we liked the feeling well received,a very warm feeling from every teacher and a little bit of a home feeling to the school feeling.The children seem very happy and we like all the activities they do with the children.My son like this school and he wants to go on all holiday also.",
      avatar: "fas fa-user"
    },
    {
      name: "Mahalakshmi lachu",
      role: "3 months ago",
      content: "Good School create a community of learners and I m sure that Robuds is doing it well, planned activities,methods of learning etc . Good place to start the education.",
      avatar: "fas fa-user"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating", color: "coral" },
    { value: "50+", label: "Parent Reviews", color: "turquoise" },
    { value: "98%", label: "Satisfaction Rate", color: "sky" },
    { value: "85%", label: "Parent Referrals", color: "mint" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-turquoise/5 to-coral/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-fredoka text-foreground mb-4">Happy Parents Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Don't just take our word for it - hear from the families who have experienced the Robudz Play School Buds difference.</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-lg card-hover relative"
              whileHover={{ y: -8 }}
            >
              <div className="absolute -top-4 left-8">
                <div className={`w-8 h-8 ${index === 0 ? 'bg-coral' : index === 1 ? 'bg-turquoise' : 'bg-sky'} rounded-full flex items-center justify-center`}>
                  <i className="fas fa-quote-left text-white text-sm"></i>
                </div>
              </div>
              <div className="flex items-center mb-6 mt-4">
                <div className={`w-12 h-12 ${index === 0 ? 'bg-gradient-to-br from-coral to-turquoise' : index === 1 ? 'bg-gradient-to-br from-sky to-mint' : 'bg-gradient-to-br from-purple-pink to-sunny'} rounded-full flex items-center justify-center mr-4`}>
                  <i className={`${testimonial.avatar} text-white`}></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">{testimonial.content}</p>
              <div className="flex text-sunny">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 bg-white rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-3xl font-fredoka text-${stat.color} mb-2`}>{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
