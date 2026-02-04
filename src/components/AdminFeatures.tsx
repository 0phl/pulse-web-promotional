import React, { useState } from 'react';
import { PhoneMockup } from './ui/PhoneMockup';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Megaphone,
  HandHeart,
  FileWarning,
  CheckCircle2 } from
'lucide-react';
const adminFeatures = [
{
  id: 'dashboard',
  title: 'Real-time Dashboard',
  description:
  "Get a bird's-eye view of your community. Track active reports, pending user approvals, and engagement metrics instantly.",
  icon: LayoutDashboard,
  image: "/eb971281-8673-4188-a994-689645f6fce8.jpg"

},
{
  id: 'users',
  title: 'User Management',
  description:
  'Verify residents, manage roles, and ensure community safety with comprehensive user profiles and moderation tools.',
  icon: Users,
  image: "/5528a6ff-6b49-4dde-a8d5-716df54d6945.jpg"

},
{
  id: 'notices',
  title: 'Broadcast Updates',
  description:
  'Post official announcements, emergency alerts, and event schedules that reach every resident immediately.',
  icon: Megaphone,
  image: "/80ae9774-b270-4b43-b138-a917b6112e3c.jpg"

},
{
  id: 'volunteers',
  title: 'Volunteer Programs',
  description:
  'Organize community drives, track participation, and manage volunteer sign-ups efficiently.',
  icon: HandHeart,
  image: "/5f0cbf7e-33d9-4da1-bb51-57fd6ab6fc8e.jpg"

},
{
  id: 'reports',
  title: 'Issue Resolution',
  description:
  'Receive, track, and resolve community reports. Keep residents updated on the status of their concerns.',
  icon: FileWarning,
  image: "/a6500342-7b43-4745-9348-1ce0fab3c924.jpg"

}];

export function AdminFeatures() {
  const [activeFeature, setActiveFeature] = useState(adminFeatures[0]);
  return (
    <section
      id="admin"
      className="py-16 md:py-24 bg-white relative overflow-hidden">

      {/* Background Gradients - Light Theme */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-4 md:mb-6">

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            For Administrators
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">

            Powerful tools for{' '}
            <span className="text-teal-500">Community Leaders</span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2">

            Manage your barangay efficiently with our comprehensive admin suite.
            From analytics to issue resolution, everything you need is at your
            fingertips.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Phone Display - Shows first on mobile */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              {/* Decorative rings - Hidden on mobile, visible on larger screens */}
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] border border-gray-200 rounded-full" />
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] lg:w-[400px] h-[320px] lg:h-[400px] border border-gray-200 rounded-full" />
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] lg:w-[300px] h-[240px] lg:h-[300px] border border-teal-100 rounded-full" />

              <motion.div
                key={activeFeature.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5
                }}
                className="relative z-10">

                <PhoneMockup
                  imageSrc={activeFeature.image}
                  alt={activeFeature.title}
                  className="shadow-2xl shadow-gray-900/10 border-gray-800" />

              </motion.div>

              {/* Floating Badge - Hidden on mobile */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: 0.5
                }}
                className="hidden md:block absolute top-20 -right-4 lg:-right-12 bg-white/90 backdrop-blur-md p-3 lg:p-4 rounded-xl border border-gray-100 shadow-xl z-20 max-w-[180px] lg:max-w-[200px]">

                <div className="flex items-center gap-2 mb-1 lg:mb-2">
                  <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-teal-500" />
                  <span className="text-xs lg:text-sm font-semibold text-gray-900">
                    Admin Access
                  </span>
                </div>
                <p className="text-[10px] lg:text-xs text-gray-500">
                  Secure, role-based controls for community managers.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Feature List / Navigation - Shows second on mobile */}
          <div className="lg:col-span-5 space-y-3 md:space-y-4 order-2 lg:order-1">
            {adminFeatures.map((feature, index) =>
            <motion.button
              key={feature.id}
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.05
              }}
              onClick={() => setActiveFeature(feature)}
              className={`w-full text-left p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 border group ${activeFeature.id === feature.id ? 'bg-white border-teal-500 shadow-lg md:shadow-xl shadow-teal-900/5 ring-1 ring-teal-500' : 'bg-white border-gray-100 hover:border-teal-200 hover:shadow-md'}`}>

                <div className="flex items-start gap-3 md:gap-4">
                  <div
                  className={`p-2 md:p-3 rounded-lg md:rounded-xl transition-colors duration-300 flex-shrink-0 ${activeFeature.id === feature.id ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-teal-50 group-hover:text-teal-600'}`}>

                    <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3
                    className={`text-base md:text-lg font-semibold mb-1 md:mb-2 transition-colors duration-300 ${activeFeature.id === feature.id ? 'text-teal-900' : 'text-gray-900'}`}>

                      {feature.title}
                    </h3>
                    {/* Description - Hidden on mobile for inactive items, always show for active */}
                    <p
                    className={`text-sm leading-relaxed transition-all duration-300 ${activeFeature.id === feature.id ? 'text-gray-600 block' : 'text-gray-500 hidden md:block'}`}>

                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>);

}