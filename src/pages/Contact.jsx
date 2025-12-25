import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { banniereContact } from '../components/img';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const Contact = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];
  return (
    <>
      <Hero 
        title={t.contact.hero.title} 
        subtitle={t.contact.hero.subtitle}
        image={banniereContact}
        height="min-h-[50vh]"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Info */}
            <div>
              <SectionTitle title={t.contact.coordinates.title} subtitle={t.contact.coordinates.subtitle} />
              <p className="text-gray-500 mb-12 text-lg font-sans">
                {t.contact.coordinates.intro}
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gbc-green/10 text-gbc-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gbc-green group-hover:text-white transition-colors shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gbc-black text-xl mb-2">{t.contact.coordinates.headquarters}</h4>
                    <p className="text-gray-500 leading-relaxed whitespace-pre-line">
                      {t.contact.coordinates.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gbc-blue/10 text-gbc-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gbc-blue group-hover:text-white transition-colors shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gbc-black text-xl mb-2">{t.contact.coordinates.phone}</h4>
                    <p className="text-gray-500">+243 999 000 000</p>
                    <p className="text-gray-500">+243 810 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gbc-yellow/10 text-gbc-yellow rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gbc-yellow group-hover:text-white transition-colors shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gbc-black text-xl mb-2">{t.contact.coordinates.email}</h4>
                    <p className="text-gray-500">info@gbc-sarlu.cd</p>
                    <p className="text-gray-500">sales@gbc-sarlu.cd</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 group-hover:text-white transition-colors shadow-sm">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gbc-black text-xl mb-2">{t.contact.coordinates.hours}</h4>
                    <p className="text-gray-500">{t.contact.coordinates.hoursWeek}</p>
                    <p className="text-gray-500">{t.contact.coordinates.hoursSat}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 rounded-3xl shadow-card border border-gray-100">
              <h3 className="text-2xl font-display font-bold text-gbc-black mb-8">{t.contact.form.title}</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gbc-black mb-2">{t.contact.form.firstName}</label>
                    <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gbc-green focus:border-transparent outline-none transition-all" placeholder={t.contact.form.firstNamePlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gbc-black mb-2">{t.contact.form.lastName}</label>
                    <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gbc-green focus:border-transparent outline-none transition-all" placeholder={t.contact.form.lastNamePlaceholder} />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gbc-black mb-2">{t.contact.form.email}</label>
                  <input type="email" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gbc-green focus:border-transparent outline-none transition-all" placeholder={t.contact.form.emailPlaceholder} />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gbc-black mb-2">{t.contact.form.subject}</label>
                  <select className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gbc-green focus:border-transparent outline-none transition-all">
                    <option>{t.contact.form.subjectOptions.info}</option>
                    <option>{t.contact.form.subjectOptions.partnership}</option>
                    <option>{t.contact.form.subjectOptions.order}</option>
                    <option>{t.contact.form.subjectOptions.other}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gbc-black mb-2">{t.contact.form.message}</label>
                  <textarea rows="5" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gbc-green focus:border-transparent outline-none transition-all resize-none" placeholder={t.contact.form.messagePlaceholder}></textarea>
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-3 px-8 py-4 bg-gbc-green text-white font-bold rounded-xl hover:bg-gbc-black transition-colors shadow-lg">
                  <Send size={20} />
                  {t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;








