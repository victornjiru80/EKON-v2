import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: '/projects/quality.jpg',
      title: "Quality Assurance",
      description: "We ensure the highest quality standards in every project we undertake."
    },
    {
      icon: '/projects/expert.jpg',
      title: "Expert Team",
      description: "Our certified professionals bring years of experience to your project."
    },
    {
      icon: '/projects/customer.jpg',
      title: "Customer Focus",
      description: "We prioritize client satisfaction and maintain clear communication."
    },
    {
      icon: '/projects/delivery.jpg',
      title: "Timely Delivery",
      description: "We complete projects on time without compromising on quality."
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSwipe = (offsetX: number) => {
    const threshold = 100;
    if (offsetX < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % reasons.length);
    }
    if (offsetX > threshold) {
      setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
    }
  };

  const getCardByOffset = (offset: number) => {
    const idx = (currentIndex + offset + reasons.length) % reasons.length;
    return { ...reasons[idx], idx };
  };

  return (
    <section className="pt-16 pb-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
            Why Choose Tekon Builders?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional construction services with unmatched quality and reliability.
          </p>
        </div>
        {/* Small screens: stacked, swipeable cards */}
        <div className="block md:hidden">
          <div className="relative h-80 max-w-sm mx-auto">
            <AnimatePresence initial={false}>
              {[0, 1, 2].map((offset) => {
                const item = getCardByOffset(offset);
                const isTop = offset === 0;
                const zIndex = 30 - offset;
                const scale = 1 - offset * 0.06;
                const translateY = offset * 12;
                return (
                  <motion.div
                    key={`${item.idx}-${offset}`}
                    className="absolute inset-0 rounded-lg overflow-hidden shadow-xl cursor-grab active:cursor-grabbing"
                    style={{ zIndex }}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: translateY, scale }}
                    exit={{ opacity: 0, y: -40, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    drag={isTop ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => isTop && handleSwipe(info.offset.x)}
                    whileHover="hovered"
                  >
                    <motion.div
                      className="absolute inset-0 w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.icon})` }}
                      variants={{
                        hovered: { scale: 1.12 },
                        initial: { scale: 1 }
                      }}
                      initial="initial"
                      animate="initial"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-70"
                      variants={{
                        hovered: { opacity: 0.1 },
                        initial: { opacity: 0.7 }
                      }}
                      initial="initial"
                      animate="initial"
                    />
                    <motion.div
                      className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
                      variants={{
                        hovered: { opacity: 1 },
                        initial: { opacity: 1 }
                      }}
                      initial="initial"
                      animate="initial"
                    >
                      <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-base opacity-90">{item.description}</p>
                      {isTop && (
                        <span className="mt-6 text-xs uppercase tracking-wide text-white/80 bg-white/10 px-3 py-1 rounded-full">
                          Swipe left or right
                        </span>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {reasons.map((_, i) => {
              const active = i === currentIndex;
              return (
                <span
                  key={i}
                  className={`${active ? 'w-6 bg-gray-900' : 'w-2 bg-gray-300'} h-2 rounded-full transition-all`}
                />
              );
            })}
          </div>
        </div>

        {/* md+ screens: original grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover="hovered"
              className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500"
                style={{ backgroundImage: `url(${reason.icon})` }}
                variants={{
                  hovered: { scale: 1.15 },
                  initial: { scale: 1 }
                }}
                initial="initial"
                animate="initial"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-0 transition-all duration-500"
                variants={{
                  hovered: { opacity: 0 },
                  initial: { opacity: 1 }
                }}
                initial="initial"
                animate="initial"
              />
              <motion.div
                className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
                variants={{
                  hovered: { opacity: 0 },
                  initial: { opacity: 1 }
                }}
                initial="initial"
                animate="initial"
              >
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-base">{reason.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;