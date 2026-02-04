import { PhoneMockup } from './ui/PhoneMockup';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
const features = [
  {
    title: 'Community Notices',
    description:
      'Stay informed with official updates from your barangay. Never miss important announcements, events, or schedules again.',
    benefits: [
      'Real-time push notifications for urgent updates',
      'Official barangay announcements and schedules',
      'Event reminders so you never miss out'],

    image: "/3b9eac7a-a5fb-47b3-b11c-0cbcb59072d8.jpg",

    align: 'right'
  },
  {
    title: 'Local Marketplace',
    description:
      'Buy and sell goods within your neighborhood. A safe, convenient way to trade with people you trust in your community.',
    benefits: [
      'Trade with verified community members',
      'Easy listing with photos and descriptions',
      'Direct messaging with buyers and sellers'],

    image: "/f4d6d6a6-fcd2-4ad8-9274-02038fdebba7.jpg",

    align: 'left'
  },
  {
    title: 'Volunteer Opportunities',
    description:
      'Give back to your community. Discover local initiatives, join activities, and make a real difference where you live.',
    benefits: [
      'Browse causes that match your interests',
      'Track your volunteer hours and impact',
      'Get recognized for your contributions'],

    image: "/973bb7e8-63a0-4d6e-9fa2-b569e525e1b2.jpg",

    align: 'right'
  },
  {
    title: 'Community Reports',
    description:
      'See something? Say something. Easily report issues like uncollected trash or noise disturbances directly to admins.',
    benefits: [
      'Submit reports with photos and location',
      'Track resolution status in real-time',
      'Get feedback about your reports from admins'],

    image: "/7d84e081-4905-4c5b-bdf7-d4894c71c9c7.jpg",

    align: 'left'
  }];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need in one app
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PULSE is designed to make community living easier, safer, and more
            connected.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) =>
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${feature.align === 'left' ? 'lg:flex-row-reverse' : ''}`}>

              <motion.div
                initial={{
                  opacity: 0,
                  x: feature.align === 'left' ? 50 : -50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true,
                  margin: '-100px'
                }}
                transition={{
                  duration: 0.6
                }}
                className="flex-1">

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {feature.description}
                </p>
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, i) =>
                    <li key={i} className="flex items-start text-gray-700">
                      <div className="mt-1 mr-3 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-teal-600" />
                        </div>
                      </div>
                      <span className="text-base">{benefit}</span>
                    </li>
                  )}
                </ul>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  margin: '-100px'
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2
                }}
                className="flex-1 flex justify-center">

                <PhoneMockup imageSrc={feature.image} alt={feature.title} />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>);

}