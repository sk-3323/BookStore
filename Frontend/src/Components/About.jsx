import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

        <p className="text-lg leading-8 text-gray-700 mb-4">
          Welcome to our platform! We are dedicated to providing you with the
          best experience possible. Our team is passionate about delivering
          high-quality products and services to meet your needs. Whether you're
          looking for the latest trends or timeless classics, we have something
          for everyone.
        </p>

        <p className="text-lg leading-8 text-gray-700 mb-4">
          Our mission is to empower our customers by offering a diverse range of
          products that inspire creativity and innovation. We believe in
          creating a community where everyone can explore, share, and grow
          together.
        </p>

        <p className="text-lg leading-8 text-gray-700 mb-4">
          We started this journey with a vision to make a positive impact and
          bring joy to people’s lives through our offerings. With years of
          experience, our team is committed to maintaining excellence in
          everything we do. Thank you for being part of our story.
        </p>

        <div className="text-center mt-6">
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-left text-gray-700 leading-8">
            <li>Customer Satisfaction</li>
            <li>Innovation and Creativity</li>
            <li>Quality and Excellence</li>
            <li>Community and Collaboration</li>
            <li>Sustainability and Responsibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
