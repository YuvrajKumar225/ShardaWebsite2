import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaUsers, FaRocket, FaLaptopCode, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  const jobs = [
    { title: 'Senior Full Stack Developer', department: 'Engineering', location: 'Remote' },
    { title: 'UX/UI Designer', department: 'Design', location: 'Pune, India' },
    { title: 'DevOps Engineer', department: 'Operations', location: 'Remote' },
    { title: 'Product Manager', department: 'Product', location: 'Pune, India' },
  ];

  const openModal = (job = null) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setMessage(null);
  };

  const validateFile = (file) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      return 'Invalid file type. Only PDF, DOC, and DOCX are allowed.';
    }

    if (file.size > maxSize) {
      return 'File size exceeds 5MB limit.';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(form.current);
    const resumeFile = formData.get('resume');
    const fileError = validateFile(resumeFile);

    if (fileError) {
      setMessage({ type: 'error', text: fileError });
      setIsSubmitting(false);
      return;
    }

    formData.append('job', selectedJob ? selectedJob.title : 'General Application');

    try {
      const response = await axios.post("http://localhost:3001/send-application", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setMessage({ type: 'success', text: 'Your application has been submitted successfully!' });
      form.current.reset();
      setTimeout(() => {
        setMessage(null);
        closeModal();
      }, 3000);
    } catch (error) {
      console.error("Error sending application:", error);
      setMessage({ type: 'error', text: error.response?.data?.message || 'Failed to submit application. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="py-20" // Added padding-top and padding-bottom
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 mt-10">Join Our Team</h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          At Sharda Production, we're always looking for talented individuals to help us push the boundaries of technology and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaBriefcase className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Exciting Projects</h3>
            <p>Work on cutting-edge technologies and challenging projects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaUsers className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Great Team</h3>
            <p>Collaborate with passionate and skilled professionals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaRocket className="text-4xl text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
            <p>Continuous learning and career advancement possibilities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaLaptopCode className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
            <p>Remote-friendly environment with work-life balance.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-2">{job.department} | {job.location}</p>
              <button
                onClick={() => openModal(job)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't see a perfect fit?</h2>
          <p className="text-xl mb-8">
            We're always on the lookout for talented individuals. Send us your resume, and we'll keep you in mind for future opportunities.
          </p>
          <button
            onClick={() => openModal()}
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-300"
          >
            Submit Your Resume
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {selectedJob ? `Apply for ${selectedJob.title}` : 'Submit Your Application'}
                </h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <FaTimes />
                </button>
              </div>
              {message && (
                <div className={`mb-4 p-2 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {message.text}
                </div>
              )}
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                  <label htmlFor="resume" className="block mb-1 font-medium">Resume (PDF, DOC, or DOCX, max 5MB)</label>
                  <input type="file" id="resume" name="resume" required className="w-full px-3 py-2 border rounded" accept=".pdf,.doc,.docx" />
                </div>
                <div>
                  <label htmlFor="coverLetter" className="block mb-1 font-medium">Cover Letter</label>
                  <textarea id="coverLetter" name="coverLetter" rows="4" className="w-full px-3 py-2 border rounded"></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Career;
