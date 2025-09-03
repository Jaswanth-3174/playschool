import { motion } from "framer-motion";
import { useState } from 'react';
import Image1 from '../../assets/rocket.png'
export default function About() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-fredoka text-gray-800 mb-4">About Robudz Play School</h2>
          
          {/* Welcome Message */}
          <motion.div 
            className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-2xl mb-8 border-l-4 border-orange-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We warmly welcome you and your Bud to <span className="font-semibold text-orange-600">ROBUDZ PLAY SCHOOL</span>. 
              Our mission is to provide a safe, joyful, and stimulating environment for Buds aged 2–6 years, 
              in line with the Early Budsd Care & Education (ECCE) Policy, 2013 by the Government of India.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-orange-600 font-medium">📍 Nemilichery</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-orange-600 font-medium">📍 Veppampattu</span>
              </div>
            </div>
          </motion.div>

          {/* World Record Achievement */}
          <motion.div 
            className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl mb-8 border-2 border-yellow-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm">
                🏆 GROUP WORLD RECORD 🏆
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
              With tiny thumbs leaving colorful impressions, Robudz made big history by becoming the 
              <span className="text-yellow-700 font-bold"> first play school to set a Group World Record</span> with 
              Buds under 5, creating a magnificent portrait of <span className="text-orange-600 font-bold">Dr. A.P.J. Abdul Kalam</span>.
            </p>
          </motion.div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We take immense pride in being the first in India to implement the PDHPE (Physical Development, Health and Physical Education) methodology, creating a transformative educational experience that goes beyond the classroom.
            <br /><br />
          What sets us apart is our legacy. Many of our alumni have grown into uniquely ambidextrous individuals, capable of using both hands and both sides of their brain with remarkable ease—a rare skill that symbolizes balance, versatility, and mental agility.
          <br /><br />
          We don't just teach. We cultivate life skills for the real world—mind, body, and spirit in synchrony.</p>
        </motion.div>        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-heart text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">To create a loving, safe environment where buds develop confidence, curiosity, and a lifelong love of learning through play-based education.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-seedling text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">To be the leading playschool that nurtures each bud’s unique potential, fostering creativity, independence, and social skills.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-sky rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">Our Approach</h3>
                  <p className="text-muted-foreground">Our Approach is a thoughtful blend of modern pedagogy and time-tested ancient study techniques, striking a balance that respects heritage while embracing innovation. This harmony allows for holistic development, focusing equally on physical, psychological, health, sociological, and cognitive growth—all essential pillars for a strong foundation in life.
                    <br /><br />
                  Every activity we design serves a deeper purpose—stimulating brain hemispherical connections through play, art, movement, and logic, ensuring balanced engagement of both the left and right brain. This leads to not only improved learning outcomes but also creative problem-solving and emotional resilience.</p>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-3xl font-fredoka text-coral mb-2">5+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-3xl font-fredoka text-turquoise mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Expert Teachers</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-3xl font-fredoka text-sky mb-2">300+</div>
                <p className="text-sm text-muted-foreground">Happy Graduates</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* About Images */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern classroom with children learning" 
              className="rounded-3xl shadow-xl w-full h-auto" 
            />
            
            {/* Overlapping second image */}
            <motion.div 
              className="absolute -bottom-8 -left-8 w-48 h-48 overflow-hidden rounded-2xl shadow-lg border-4 border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src={Image1} 
                alt="Teacher reading to children" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div 
              className="absolute top-4 right-4 bg-sunny text-white p-3 rounded-full"
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <i className="fas fa-smile text-lg"></i>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
