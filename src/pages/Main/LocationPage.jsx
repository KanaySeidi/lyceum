import React from "react";

const LocationPage = () => {
  return (
    <div>
      {/* Карта */}
      <div className="w-full h-96 mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3306.0615195893197!2d74.63149952724218!3d42.85657916150001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb65041bf6f57%3A0x7073e49841f3d4d1!2z0J_RgNC-0YTQtdGB0YHQuNC-0L3QsNC70YzQvdGL0Lkg0LvQuNGG0LXQuSA5OQ!5e1!3m2!1sru!2sus!4v1749016169660!5m2!1sru!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Locatoin Map"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationPage;
