const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  overlayColor = "bg-indigo-700",
}) => {
  return (
    <section className="relative h-96 flex items-center justify-start">
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor} opacity-90`} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className={`${overlayColor} p-20 rounded-lg`}>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-white leading-relaxed">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
