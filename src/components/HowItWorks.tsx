import React from 'react';
import { Download, UserPlus, Users } from 'lucide-react';
const steps = [
{
  icon: Download,
  title: 'Download the App',
  description:
  'Get PULSE for free on your Android device via our direct download link.'
},
{
  icon: UserPlus,
  title: 'Create Account',
  description:
  'Sign up with your email or mobile number to join your specific barangay.'
},
{
  icon: Users,
  title: 'Connect & Engage',
  description:
  'Start browsing updates, joining events, and connecting with neighbors.'
}];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How it Works
          </h2>
          <p className="text-lg text-gray-600">
            Join your community in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10" />

          {steps.map((step, index) =>
          <div
            key={index}
            className="flex flex-col items-center text-center group">

              <div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}