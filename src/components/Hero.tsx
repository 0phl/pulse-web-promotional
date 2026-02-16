import { Button } from './ui/Button';
import { PhoneMockup } from './ui/PhoneMockup';
import { motion } from 'framer-motion';
import { Download, ChevronRight, HandHeart, Megaphone } from 'lucide-react';
export function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="flex-1 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Now available for Android
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Connect with your <span className="text-teal-500">Community</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              PULSE brings your neighborhood together. Get updates, join events,
              buy & sell locally, and make your voice heard—all in one app.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="group" onClick={() => window.open('https://app.appsonair.com/install/up9vbH3V', '_blank')}>
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="group"
                onClick={scrollToFeatures}>

                Learn more{' '}
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="flex-1 relative">

            <div className="relative z-10">
              <PhoneMockup
                imageSrc="/056845ea-4bbc-4dbc-a7e3-d818fda96ac3.jpg"
                alt="PULSE App Login Screen"
                className="rotate-[-6deg] hover:rotate-0 transition-transform duration-500" />

            </div>

            {/* Floating Cards/Elements for decoration */}
            <motion.div
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut'
              }}
              className="absolute top-20 -right-4 lg:-right-12 bg-white p-4 rounded-2xl shadow-xl z-20 max-w-[200px] hidden sm:block border border-gray-100">

              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                  <HandHeart className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  New Volunteer
                </div>
              </div>
              <div className="text-xs text-gray-500">
                Clean Up Drive starting in 1 hour!
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute bottom-32 -left-4 lg:-left-12 bg-white p-4 rounded-2xl shadow-xl z-20 max-w-[200px] hidden sm:block border border-gray-100">

              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Announcement
                </div>
              </div>
              <div className="text-xs text-gray-500">
                Water interruption schedule posted.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}