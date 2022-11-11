import React from "react";

const FAQ = () => {
  return (
    <div className="w-3/5 mx-auto bg-slate-100 px-16 py-10 my-16">
      <h1 className="text-3xl font-semibold italic text-cyan-400 mb-7 flex justify-center">
        Frequently asked questions
      </h1>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What type of toothbrush and toothpaste should I use?
        </div>
        <div className="collapse-content">
          <p>
            Buy toothbrushes with soft bristles. Medium and firm ones can damage
            teeth and gums. Use soft pressure, for 2 minutes, two times a day.
            Both powered and manual toothbrushes clean teeth well. Manual
            brushes with mixed bristle heights or angled bristles clean better
            than those with all flat, even bristles. Powered toothbrushes may be
            easier if you have trouble using your hands.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Are dental X-rays safe and needed?
        </div>
        <div className="collapse-content">
          <p>
            Medical and dental experts study the use of X-rays and set limits
            for their safety. Your dentist should take as few as possible.
            Sometimes dentists may recommend X-rays to diagnose a special
            problem. Advancements in technology means today's digital X-rays
            release much less radiation and are safer than in the past.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How do fillings work?
        </div>
        <div className="collapse-content">
          <p>
            Cavities break through the surface enamel of teeth, and they'll
            probably get bigger unless you close them off with fillings. Your
            dentist will numb your mouth before drilling around the cavity to
            prep it. A combination of strong materials or a white mix called a
            composite goes into the cavity soft and then hardens as it dries.
            You may feel pain or pressure when getting the numbing shot and
            during the drilling. Once set, fillings can last a long time but
            need replacing if they break or wear down.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Are sweets and ice really bad for my teeth?
        </div>
        <div className="collapse-content">
          <p>
            Yes, sweets and foods with acid, like candy and soda, could stick to
            teeth and lead to cavities. Smoking and chewing tobacco can cause
            oral cancer and gum disease. While teeth are strong enough to chew
            ice and tear open packages, this can break them and stress your
            jaws. Gritting or grinding down on teeth when you're stressed may
            crack them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
