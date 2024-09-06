import React from 'react';

const Services = () => {
  const classes = [
    {
      title: 'Cardio Kickboxing',
      description: 'Cardio Kickboxing combines martial arts techniques with fast-paced cardio. This high-energy workout challenges the beginner and elite athlete alike. Build stamina, improve coordination and flexibility, and burn calories as you build lean muscle with this fun and challenging workout.',
    },
    {
      title: 'Yoga',
      description: 'Our Yoga classes are designed to improve flexibility, balance, and strength, as well as reduce stress. Whether you are new to yoga or an experienced practitioner, our instructors provide a variety of modifications and intensities to meet the needs of all participants.',
    },
    {
      title: 'Strength Training',
      description: 'Our Strength Training classes focus on building muscular strength and endurance using a variety of equipment such as dumbbells, barbells, and resistance bands. Perfect for all fitness levels, these classes help you tone and strengthen your muscles while improving overall fitness.',
    },
    {
      title: 'Zumba',
      description: 'Zumba is a dance fitness program that combines Latin and international music with dance moves. Our instructors create a dynamic, exciting, and effective fitness system! The routines feature aerobic interval training with a combination of fast and slow rhythms that tone and sculpt the body.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Classes We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Check out our variety of classes designed to meet your fitness needs!
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 xl:grid-cols-4">
          {classes.map((cls, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cls.title}</h3>
              <p className="text-gray-700">{cls.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
