"use client";

import React, { useState } from 'react';
import { TypewriterEffectDemo } from '../components/typewriter';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, query }),
      });

      if (res.ok) {
        setStatus('Email sent successfully!');
        setEmail('');
        setQuery('');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-0">
      <TypewriterEffectDemo />
      <div className="py-10 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-200">
          Contact Us
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Transparent Background Cards with Enhanced Borders and Icons */}
          <div className="bg-transparent border-2 border-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-white text-2xl mr-2" />
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-100">
                Email
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300">
            demanual.team@gmail.com
            </p>
            <blockquote className="mt-4 text-neutral-500 dark:text-neutral-400 italic">
              "Our friendly team is here to help."
            </blockquote>
          </div>
          <div className="bg-transparent border-2 border-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-white text-2xl mr-2" />
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-100">
                Location
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300">
            Chennai, Tamil Nadu, India
            </p>
            <blockquote className="mt-4 text-neutral-500 dark:text-neutral-400 italic">
              "Come say hello at our office HQ."
            </blockquote>
          </div>
          <div className="bg-transparent border-2 border-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-2">
              <FaPhone className="text-white text-2xl mr-2" />
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-100">
                Phone
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300">
            +91 9789056970
            </p>
            <blockquote className="mt-4 text-neutral-500 dark:text-neutral-400 italic">
              "Mon-Sat from 8am to 7pm."
            </blockquote>
          </div>
        </div>
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="bg-transparent border-2 border-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-neutral-700 dark:text-neutral-100">
            Send Us a Message
          </h3>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-white rounded-lg bg-transparent placeholder-neutral-400 dark:placeholder-neutral-300 text-neutral-700 dark:text-neutral-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="query"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2"
            >
              Your Query
            </label>
            <textarea
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
              className="w-full p-3 border border-white rounded-lg bg-transparent placeholder-neutral-400 dark:placeholder-neutral-300 text-neutral-700 dark:text-neutral-200 h-32"
              placeholder="Type your message here"
            />
          </div>
          <button
            type="submit"
            className="w-32 h-10 bg-transparent border border-white text-white p-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 text-sm"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
          {status && (
            <p className="mt-4 text-center text-neutral-700 dark:text-neutral-200">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
