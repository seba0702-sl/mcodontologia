import { useState } from 'react'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'

export default function MCodontoWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)

  const treatments = [
    {
      title: 'Implantes Dentales',
      image:
        '/imagenes/implantes.jpeg',
    },
    {
      title: 'Ortodoncia',
      image:
        '/imagenes/ortodoncia.jpg',
    },
    {
      title: 'Blanqueamiento',
      image:
        '/imagenes/blanqueamiento.jpeg',
    },
    {
      title: 'Carillas',
      image:
        '/imagenes/carillas.jpg',
    },
    {
      title: 'Endodoncia',
      image:
        '/imagenes/endodoncia.jpg',
    },
    {
      title: 'Odontopediatría',
      image:
        '/imagenes/niños.jpeg',
    },
  ]

  const gallery = [
    '/imagenes/servicios.jpeg',
    '/imagenes/chequeos.jpeg',
    '/imagenes/consultorio-nuevo.jpeg',
    '/imagenes/recomendaciones.jpeg',
    '/imagenes/consejos.jpeg',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <div className="bg-white text-gray-800 font-sans scroll-smooth">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-cyan-700">
              MC Odontología
            </h1>
            <p className="text-xs text-gray-500">
              Consultorio Odontológico
            </p>
          </div>

          <nav className="hidden lg:flex gap-8 font-medium">
            <a href="#inicio" className="text-gray-700 hover:text-cyan-600 transition">
              Inicio
            </a>

            <a href="#nosotros" className="text-gray-700 hover:text-cyan-600 transition">
              Nosotros
            </a>

            <a href="#tratamientos" className="text-gray-700 hover:text-cyan-600 transition">
              Tratamientos
            </a>

            <a href="#galeria" className="text-gray-700 hover:text-cyan-600 transition">
              Galería
            </a>

            <a href="#sucursales" className="text-gray-700 hover:text-cyan-600 transition">
              Sucursales
            </a>

            <a href="#contacto" className="text-gray-700 hover:text-cyan-600 transition">
              Contacto
            </a>
          </nav>

          <div className="hidden lg:block relative group">

  <button
    className="
      bg-cyan-600
      hover:bg-cyan-700
      text-white
      px-5
      py-3
      rounded-2xl
      font-semibold
      shadow-lg
    "
  >
    Reservar Turno ▾
  </button>

  <div
    className="
      absolute
      right-0
      top-full
      mt-2
      w-64
      bg-white
      rounded-2xl
      shadow-2xl
      overflow-hidden
      opacity-0
      invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all
      duration-300
      z-50
    "
  >

    <a
      href="https://wa.me/5491154833390"
      target="_blank"
      rel="noopener noreferrer"
      className="block px-5 py-4 hover:bg-gray-100"
    >
      📍 Lugano
    </a>

    <a
      href="https://wa.me/5491138757361"
      target="_blank"
      rel="noopener noreferrer"
      className="block px-5 py-4 hover:bg-gray-100"
    >
      📍 Tapiales
    </a>

    <a
      href="https://wa.me/5491176668074"
      target="_blank"
      rel="noopener noreferrer"
      className="block px-5 py-4 hover:bg-gray-100"
    >
      📍 Ramos Mejía
    </a>

  </div>

</div>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white px-6 pb-6 flex flex-col gap-4 shadow-xl">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#tratamientos">Tratamientos</a>
            <a href="#galeria">Galería</a>
            <a href="#sucursales">Sucursales</a>
            <a href="#contacto">Contacto</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <div className="absolute inset-0 bg-black/50"></div>
      <section
        className="min-h-screen flex items-center bg-center bg-cover"
        style={{
          backgroundImage: "url('/imagenes/hero.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-white pt-24">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[5px] text-cyan-300 mb-4 text-sm">
              Odontología Moderna
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Transformamos
              <span className="text-cyan-400 block">Sonrisas</span>
            </h2>

            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl">
              Atención odontológica premium con tecnología avanzada y un equipo
              especializado.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#contacto"
                className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-2xl text-lg font-bold text-center"
              >
                Solicitar Turno
              </a>

              <a
                href="#tratamientos"
                className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl text-lg font-bold text-center"
              >
                Ver Tratamientos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="py-14 bg-cyan-600 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-center">
          <div>
            <Phone className="mx-auto mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">Turnos Rápidos</h3>
            <p>Atención inmediata por WhatsApp.</p>
          </div>

          <div>
            <MapPin className="mx-auto mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">Ubicación</h3>
            <p>Consultorios modernos y accesibles.</p>
          </div>

          <div>
            <Clock className="mx-auto mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">Horarios Amplios</h3>
            <p>Lunes a sábados con atención extendida.</p>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
            alt="Consultorio"
            className="rounded-[40px] shadow-2xl h-full object-cover"
          />

          <div>
            <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4">
              Nosotros
            </p>

            <h3 className="text-5xl font-black mb-8 leading-tight">
              Experiencia y tecnología al servicio de tu sonrisa
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Somos un equipo de profesionales especializados en odontología
              integral, estética dental y tratamientos avanzados.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Brindamos atención cálida, personalizada y moderna en un ambiente
              cómodo y profesional.
            </p>

            <a
              href="#contacto"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 transition text-white px-8 py-4 rounded-2xl font-bold"
            >
              Contactanos
            </a>
          </div>
        </div>
      </section>

      {/* TRATAMIENTOS */}
      <section id="tratamientos" className="py-28 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4">
            Especialidades
          </p>

          <h3 className="text-5xl font-black mb-16">
            Nuestros Tratamientos
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-contain"
                />

                <div className="p-8">
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4">
            Instalaciones
          </p>

          <h3 className="text-5xl font-black mb-16">Galería</h3>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Galería"
                className="w-full h-[600px] object-cover rounded-[28px] scale-95 hover:scale-100 transition duration-300"

              />
            ))}
          </div>
        </div>
      </section>



      {/* SUCURSALES */}
      <section id="sucursales" className="py-28 bg-white px-6">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4 text-center">
            Ubicación
          </p>

          <h3 className="text-5xl font-black mb-16 text-center">
            Nuestras Sucursales
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Lugano */}
            <div className="bg-gray-100 rounded-[30px] p-8 shadow-lg">
              <p className="text-2xl font-bold mb-3">
                Odontología MC
              </p>

              <p className="text-gray-600 mb-2">
                Guaminí 4982
              </p>

              <p className="text-gray-600 mb-4">
                Lugano · CABA
              </p>

              <div className="flex gap-3">

                <a
                  href="https://wa.me/5491154833390"
                  target="_blank"
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl text-center font-bold"
                >
                  WhatsApp
                </a>

                <a
                  href="https://maps.google.com/?q=Guamini+4982+Lugano"
                  target="_blank"
                  className="flex-1 bg-cyan-600 text-white py-3 rounded-xl text-center font-bold"
                >
                  Ver mapa
                </a>

              </div>
            </div>

            {/* Tapiales */}
            <div className="bg-gray-100 rounded-[30px] p-8 shadow-lg">

              <p className="text-2xl font-bold mb-3">
                Odontología MC
              </p>

              <p className="text-gray-600 mb-2">
                Juncal 28
              </p>

              <p className="text-gray-600 mb-4">
                Tapiales · La Matanza
              </p>

              <div className="flex gap-3">

                <a
                  href="https://wa.me/5491138757361"
                  target="_blank"
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl text-center font-bold"
                >
                  WhatsApp
                </a>

                <a
                  href="https://maps.google.com/?q=Juncal+28+Tapiales"
                  target="_blank"
                  className="flex-1 bg-cyan-600 text-white py-3 rounded-xl text-center font-bold"
                >
                  Ver mapa
                </a>

              </div>

            </div>

            {/* Ramos Mejía */}
            <div className="bg-gray-100 rounded-[30px] p-8 shadow-lg">

              <p className="text-2xl font-bold mb-3">
                Odontología MC
              </p>

              <p className="text-gray-600 mb-2">
                Av. de Mayo 1262
              </p>

              <p className="text-gray-600 mb-4">
                Ramos Mejía · Buenos Aires
              </p>

              <div className="flex gap-3">

                <a
                  href="https://wa.me/5491176668074"
                  target="_blank"
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl text-center font-bold"
                >
                  WhatsApp
                </a>

                <a
                  href="https://maps.google.com/?q=Av+de+Mayo+1262+Ramos+Mejia"
                  target="_blank"
                  className="flex-1 bg-cyan-600 text-white py-3 rounded-xl text-center font-bold"
                >
                  Ver mapa
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACTO */}
      < section id="contacto" className="py-28 bg-gray-100 px-6" >
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl p-10 lg:p-16">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4">
              Contacto
            </p>

            <p className="text-gray-600 text-lg">
              Completá el formulario y nos contactaremos contigo.
            </p>
          </div>

          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre"
                className="border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <input
              type="tel"
              placeholder="Teléfono"
              className="border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <textarea
              rows="6"
              placeholder="Mensaje"
              className="border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

            <a
              href="https://www.instagram.com/odontologiam_c?igsh=MWdtNzNvODUycTU4ag=="
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-cyan-600 hover:bg-cyan-700 transition text-white py-5 rounded-2xl text-lg font-bold"
            >
              Enviar Consulta por Instagram
            </a>
          </form>
        </div>
      </section >
      
      {/* FOOTER */}
      < footer className="bg-gray-950 text-gray-400 py-12 px-6 text-center" >
        <h3 className="text-3xl font-bold text-white mb-4">Odontología MC</h3>

        <p className="mb-2">Clínica odontológica moderna y profesional.</p>

        <p>© 2026 Todos los derechos reservados.</p>
      </footer >


    </div >
  )
}
