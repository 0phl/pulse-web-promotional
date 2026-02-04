import { Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';
export function DownloadSection() {
  return (
    <section
      id="community"
      className="py-24 bg-teal-900 relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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
          transition={{
            duration: 0.6
          }}>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to connect with your community?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Join thousands of residents who are already using PULSE to stay
            informed and engaged.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}
              onClick={() => window.open('https://app.appsonair.com/install/9pKgUFaO', '_blank')}
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium rounded-full bg-white text-teal-900 hover:bg-gray-100 shadow-lg shadow-black/10 transition-colors min-w-[200px]">

              <Download className="w-5 h-5 mr-2" />
              Download APK
            </motion.button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-teal-200/80 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              <span>Free to use</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">
                A
              </div>
              <span>Android Only</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-current" />
              <span>Secure & Private</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}