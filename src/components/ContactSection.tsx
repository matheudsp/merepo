import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-4 block">
              Contato
            </span>
            <h2 className="text-5xl font-bold mb-6 text-black">
              Vamos Conversar?
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estou pronto para ajudar a transformar sua ideia em realidade.
              Entre em contato e vamos discutir seu próximo projeto.
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                  placeholder="Descreva seu projeto..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white py-4 px-8 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <motion.a
              href="mailto:mdsp.personal@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl"
            >
              <Mail className="w-8 h-8 text-gray-900" />
              <div>
                <h3 className="font-bold text-base md:text-lg">Email</h3>
                <p className="text-gray-600">mdsp.personal@gmail.com</p>
              </div>
            </motion.a>
            <motion.a
              href="https://wa.me/5589994176493"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-6 bg-green-500 rounded-xl"
            >
              <MessageSquare className="w-8 h-8 text-white" />
              <div>
                <h3 className="font-bold text-white text-base md:text-lg">WhatsApp</h3>
                <p className="text-gray-200">+55 (89) 99417-6493</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}