
const services = [
  {
    icon: "🎨",
    title: "Activités créatives",
    description: "Dessin, peinture et bricolage pour développer l’imagination et la créativité.",
  },
  {
    icon: "📚",
    title: "Éveil et apprentissage",
    description: "Des jeux éducatifs adaptés à l’âge et au rythme de chaque enfant.",
  },
  {
    icon: "⚽",
    title: "Jeux et motricité",
    description: "Des activités ludiques pour bouger, coopérer et apprendre à vivre ensemble.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Nos services</h2>
          <p className="text-secondary">
            Tout pour accompagner le développement de votre enfant.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.title}>
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
                <div className="card-body">
                  <div className="display-4 mb-3">{service.icon}</div>
                  <h3 className="h5 fw-bold">{service.title}</h3>
                  <p className="text-secondary">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
