import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const contacts = [
    {
      icon: <MapPin size={18} className="text-gold shrink-0 mt-0.5" />,
      label: "Адрес",
      value: "г. Бишкек, ул. Фрунзе 533, Профессиональный Лицей №99",
    },
    {
      icon: <Phone size={18} className="text-gold shrink-0" />,
      label: "Телефон",
      value: "+996 (312) 12-34-56",
      href: "tel:+996312123456",
    },
    {
      icon: <Mail size={18} className="text-gold shrink-0" />,
      label: "Email",
      value: "plit99@edu.kg",
      href: "mailto:plit99@edu.kg",
    },
    {
      icon: <Clock size={18} className="text-gold shrink-0" />,
      label: "Режим работы",
      value: "Пн–Пт: 08:00–17:00",
    },
  ];

  return (
    <section ref={ref} className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em]">
            ПЛИТ №99
          </span>
          <h2 className="text-bordo text-3xl md:text-4xl font-extrabold mt-2">
            Как нас найти
          </h2>
          <div className="mt-3 h-0.5 w-12 bg-gold rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Левая колонка — контакты */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {contacts.map(({ icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100
                           hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-bordo/5 flex items-center justify-center
                                group-hover:bg-bordo/10 transition-colors duration-300 shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-gray-800 font-medium hover:text-bordo transition-colors duration-200">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Правая колонка — карта */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 min-h-[360px]"
          >
            <iframe
              title="ПЛИТ на карте"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3306.0615195893197!2d74.63149952724218!3d42.85657916150001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb65041bf6f57%3A0x7073e49841f3d4d1!2z0J_RgNC-0YTQtdGB0YHQuNC-0L3QsNC70YzQvdGL0Lkg0LvQuNGG0LXQuSA5OQ!5e1!3m2!1sru!2sus!4v1749016169660!5m2!1sru!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
