import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await emailjs.send(
        "service_5wqzrxg",
        "template_g2o0wph",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "zhS6Yg2W1r94MNsP1"
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative flex justify-center items-center h-screen bg-base-200 overflow-hidden">
      {/* Light Animation Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[300px] h-[300px] bg-primary blur-[150px] rounded-full top-10 left-20 animate-pulse"></div>
        <div className="absolute w-[250px] h-[250px] bg-secondary blur-[100px] rounded-full bottom-20 right-20 animate-pulse"></div>
      </div>

      {/* Contact Form Container */}
      <div className="relative z-10 p-8 bg-gray-900 rounded-2xl shadow-xl max-w-lg w-full">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full bg-gray-800 text-white"
            required
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full bg-gray-800 text-white"
            required
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full bg-gray-800 text-white"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className={`btn btn-primary w-full ${loading ? "opacity-50" : ""}`}
            disabled={loading}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </motion.form>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </section>
  );
};

export default Contact;
