import { useState, useEffect } from "react"
import {
  collection,
  addDoc,
  getDocs
} from "firebase/firestore"
import { db } from "./firebase"
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'


export default function MCodontoWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [nombre, setNombre] = useState("")
  const [comentario, setComentario] = useState("")
  const [estrellas, setEstrellas] = useState(5)
  const [comentarios, setComentarios] = useState([])
  const enviarComentario = async () => {

    try {

      if (!nombre || !comentario) {
        alert("Completar campos")
        return
      }

      await addDoc(
        collection(db, "comentarios"),
        {
          nombre,
          comentario,
          estrellas,
          fecha: Date.now()
        }
      )
      await cargarComentarios()
      alert("Gracias por tu opinion")

      setNombre("")
      setComentario("")
      setEstrellas(5)

    }
    catch (error) {

      console.log("ERROR FIREBASE:", error)
      console.log("CODIGO:", error.code)
      console.log("MENSAJE:", error.message)

      alert(
        error.message
      )

    }

  }

  const cargarComentarios = async () => {
    try {
      const snap = await getDocs(
        collection(db, "comentarios")
      )

      const datos = snap.docs.map(d => ({
        id: d.id,
        ...d.data()
      }))

      setComentarios(datos)

    } catch (error) {
      console.error("Error cargando comentarios:", error)
    }
  }
  useEffect(() => {
    cargarComentarios()
  }, [])
  // Lista de datos de tus consultorios con sus respectivas fotos
  const consultorios = [
    {
      id: 'lugano',
      nombre: 'Odontología MC',
      direccion: 'Guaminí 4982',
      localidad: 'Lugano · CABA',
      whatsapp: 'https://wa.me/5491154833390',
      mapa: 'https://maps.google.com/?q=Guamini+4982+Lugano',
      fotos: [
        '/consultorios/frente-lug.jpeg', // Cambia estas rutas por tus fotos reales
        '/consultorios/recepcion-lug.jpeg',
        '/consultorios/sala-lug.jpeg'
      ]
    },
    {
      id: 'tapiales',
      nombre: 'Odontología MC',
      direccion: 'Juncal 28',
      localidad: 'Tapiales · La Matanza',
      whatsapp: 'https://wa.me/5491138757361',
      mapa: 'https://maps.google.com/?q=Juncal+28+Tapiales',
      fotos: [
        '/consultorios/frente-tap.jpeg',
        '/consultorios/recepcion-tap.jpeg',
        '/consultorios/sala-tap.jpeg'
      ]
    },
    {
      id: 'ramos',
      nombre: 'Odontología MC',
      direccion: 'Av. de Mayo 1262',
      localidad: 'Ramos Mejía · Buenos Aires',
      whatsapp: 'https://wa.me/5491176768074',
      mapa: 'https://maps.google.com/?q=Av+de+Mayo+1262+Ramos+Mejia',
      fotos: [
        '/imagenes/proximamente.png',
        '/consultorios/frente-rm.jpeg',
        '/consultorios/recepcion-rm.jpeg',
        '/consultorios/sala-rm.jpeg'
      ]
    }
  ];

  // Estado que maneja de forma independiente el índice de la foto activa por consultorio
  const [activeIndexes, setActiveIndexes] = useState(
    consultorios.reduce((acc, curr) => ({ ...acc, [curr.id]: 0 }), {})
  );

  const prevSlide = (id, totalFotos) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [id]: prev[id] === 0 ? totalFotos - 1 : prev[id] - 1
    }));
  };

  const nextSlide = (id, totalFotos) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [id]: prev[id] === totalFotos - 1 ? 0 : prev[id] + 1
    }));
  };



  const treatments = [
    {
      title: 'Implantes Dentales',
      images: [
        '/tratamientos/imp1.jpeg',
        '/tratamientos/imp2.jpeg',
        '/tratamientos/imp3.jpeg',

      ],
      description: 'Recuperá función y estética dental.'
    },

    {
      title: 'Blanqueamiento',
      images: [
        '/tratamientos/blanq1.jpeg',
        '/tratamientos/blanq2.jpeg'
      ],
      description: 'Dientes más blancos y una sonrisa renovada.'
    },

    {
      title: 'Carillas',
      images: [
        '/tratamientos/cari1.jpeg',
        '/tratamientos/cari2.jpeg',
        '/tratamientos/cari3.jpeg'
      ],
      description: 'Carillas dentales para lograr una sonrisa estética y natural.'
    },

    {
      title: 'Endodoncia',
      images: [
        '/tratamientos/end1.jpeg',
        '/tratamientos/end2.jpeg',
        '/tratamientos/end3.jpeg'
      ],
      description: 'Eliminamos el dolor y preservamos tu diente.'
    },
    {
      title: 'Cirugía general',
      images: [
        '/tratamientos/cir1.jpeg',
        '/tratamientos/cir2.jpeg',
        '/tratamientos/cir3.jpeg'

      ],
      description: 'Tratamientos quirúrgicos con atención segura y personalizada.'
    },

    {
      title: 'Ortodoncia',
      images: [
        '/tratamientos/braquets-esteticos.jpeg',
        '/tratamientos/braquets-zirconio.jpeg',
        '/tratamientos/braquets-autoligado-esteticos.jpeg',
        '/tratamientos/braquets-autoligmetal.jpeg',
        '/tratamientos/braquets-metal.jpeg'

      ],
      description: 'Corrección de la posición dental para una sonrisa armónica.'
    },
    {
      title: 'Limpieza dental',
      images: [
        '/tratamientos/limp1.jpeg',
        '/tratamientos/limp2.jpeg',
        '/tratamientos/limp3.jpeg',
        '/tratamientos/limp4.jpeg'


      ],
      description: 'Higiene dental profesional para una boca más saludable.'
    },
    {
      title: 'Odontopediatria',
      images: [
        '/tratamientos/odoped1.jpeg',
        '/tratamientos/odoped2.jpeg',
        '/tratamientos/odoped3.jpeg'
      ],
      description: 'Cuidado odontológico infantil para una sonrisa sana desde pequeños.'
    },
    {
      title: 'Placas miorelajantes',
      images: [
        '/tratamientos/desc1.jpeg',
        '/tratamientos/desc2.jpeg',
        '/tratamientos/desc3.jpeg'
      ],
      description: 'Placas diseñadas para disminuir tensión y desgaste dental.'
    },
    {
      title: 'Prótesis fija',
      images: [
        '/tratamientos/profija1.jpeg',
        '/tratamientos/profija2.jpeg',
        '/tratamientos/profija3.jpeg'
      ],
      description: 'Rehabilitación dental con resultados naturales y funcionales.'
    },
    {
      title: 'Arañitas Flexible',
      images: [
        '/tratamientos/araflex1.jpeg',
        '/tratamientos/araflex2.jpeg'
      ],

    },
    {
      title: 'Prótesis acrilica',
      images: [
        '/tratamientos/proacri1.jpeg',
        '/tratamientos/proacri2.jpeg'
      ],

    },
    {
      title: 'Prótesis Acrilica Completa',
      images: [
        '/tratamientos/proacricom1.jpeg',
        '/tratamientos/proacricom2.jpeg'
      ],

    },
    {
      title: 'Prótesis Cromo ',
      images: [
        '/tratamientos/procromo1.jpeg',
        '/tratamientos/procromo2.jpeg'
      ],

    },
    {
      title: 'Prótesis flexible',
      images: [
        '/tratamientos/proflex1.jpeg',
        '/tratamientos/proflex2.jpeg'
      ],
      description: 'Soluciones removibles adaptadas a tus necesidades.'
    },
    {
      title: 'Restauración de caries',
      images: [
        '/tratamientos/restcaries1.jpeg',
        '/tratamientos/restcaries2.jpeg',
        '/tratamientos/restcaries3.jpeg'
      ],
      description: 'Recuperamos la forma, función y estética de dientes afectados por caries.'
    },
  ]
  const [selected, setSelected] = useState(treatments[0])
  const [fotoActiva, setFotoActiva] = useState(0)
  const gallery = [
    '/imagenes/servicios.jpeg',
    '/imagenes/chequeos.jpeg',
    '/imagenes/consultorio-nuevo.jpeg',
    '/imagenes/recomendaciones.jpeg',
    '/imagenes/consejos.jpeg',
    '/consultorios/recepcion-lug.jpeg',
  ]

  return (
    <>
      <div className="logo-fondo"></div>

      <div className="bg-white/95 text-gray-800 font-sans scroll-smooth">
        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-cyan-700">Odontología MC</h3>
              <p className="text-xl font-bold text-black-600">Dr. Beker Mateo Barerra Gonzalez<br />ODONTOLOGO<br />M.P. 33543 - M.N. 39933</p>
              <p className="text-xs text-gray-500">Consultorio Odontológico</p>
            </div>

            <nav className="hidden lg:flex gap-8 font-medium">
              <a href="#inicio" className="text-gray-700 hover:text-cyan-600 transition">Inicio</a>
              <a href="#nosotros" className="text-gray-700 hover:text-cyan-600 transition">Nosotros</a>
              <a href="#tratamientos" className="text-gray-700 hover:text-cyan-600 transition">Tratamientos</a>
              <a href="#galeria" className="text-gray-700 hover:text-cyan-600 transition">Galería</a>
              <a href="#sucursales" className="text-gray-700 hover:text-cyan-600 transition">Consultorios</a>
              <a href="#opiniones" className="text-gray-700 hover:text-cyan-600 transition">Opiniones</a>
              <a href="#contacto" className="text-gray-700 hover:text-cyan-600 transition">Contacto</a>
            </nav>

            <div className="hidden lg:block relative group">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg">
                Reservar Turno ▾
              </button>
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a href="https://wa.me/5491154833390" target="_blank" rel="noopener noreferrer" className="block px-5 py-4 hover:bg-gray-100">📍 Lugano</a>
                <a href="https://wa.me/5491138757361" target="_blank" rel="noopener noreferrer" className="block px-5 py-4 hover:bg-gray-100">📍 Tapiales</a>
                <a href="https://wa.me/5491176768074" target="_blank" rel="noopener noreferrer" className="block px-5 py-4 hover:bg-gray-100">📍 Ramos Mejía</a>
              </div>
            </div>

            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden bg-white px-6 pb-6 flex flex-col gap-4 shadow-xl">
              <a href="#inicio">Inicio</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#tratamientos">Tratamientos</a>
              <a href="#galeria">Galería</a>
              <a href="#sucursales">Consultorios</a>
              <a href="#opiniones" onClick={() => setMenuOpen(false)}>Opiniones ⭐
    </a>
              <a href="#contacto">Contacto</a>
            </div>
          )}
        </header>

        {/* HERO */}
        <section

          className="
min-h-screen
flex
items-center
bg-center
bg-no-repeat
bg-[length:50%]
md:bg-[length:30%]
relative
opacity-80
"
          style={{ backgroundImage: "url('/imagenes/logo.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/55"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-white pt-24">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[5px] text-white font-bold mb-4 text-sm">
                Odontología Moderna
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
                Transformamos <span className="text-cyan-400 block">Sonrisas</span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-white mb-8 max-w-xl">
                Atención odontológica premium con tecnología avanzada y un equipo especializado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

                <a
                  href="#contacto"
                  className="
      w-full sm:w-auto
      bg-cyan-500
      hover:bg-cyan-600
      transition
      px-5 md:px-8
      py-3 md:py-4
      rounded-2xl
      text-base md:text-lg
      font-bold
      text-center
      break-words
    "
                >
                  Solicitar Turno
                </a>

                <a
                  href="#tratamientos"
                  className="
      w-full sm:w-auto
      border
      border-white
      hover:bg-white
      hover:text-black
      transition
      px-5 md:px-8
      py-3 md:py-4
      rounded-2xl
      text-base md:text-lg
      font-bold
      text-center
      break-words
    "
                >
                  Ver Tratamientos
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* INFO */}
        <section className="py-16 md:py-28 px-5 md:px-8">
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
              src='/consultorios/sala-lug.jpeg'
              alt="Consultorio"
              className="rounded-[30px] shadow-2xl w-full h-[260px] md:h-[550px] object-cover"
            />
            <div>
              <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4">Nosotros</p>
              <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Experiencia y tecnología al servicio de tu sonrisa</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">Somos un equipo de profesionales especializados en odontología integral, estética dental y tratamientos avanzados.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">Brindamos atención cálida, personalizada y moderna en un ambiente cómodo y profesional.</p>
              <a href="#contacto" className="inline-block bg-cyan-600 hover:bg-cyan-700 transition text-white px-8 py-4 rounded-2xl font-bold">Contactanos</a>
            </div>
          </div>
        </section>

        {/* TRATAMIENTOS */}
        <section id="tratamientos" className="py-28 bg-gray-100 px-6">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4">
                Especialidades
              </p>

              <h3 className="text-3xl md:text-5xl font-black">
                Nuestros Tratamientos
              </h3>
            </div>

            <div className="grid lg:grid-cols-[320px_1fr] gap-8">

              <div className="bg-white rounded-[30px] p-6 shadow-lg h-fit">

                {/* CELULAR */}
                <div className="lg:hidden">
                  <select
                    value={selected.title}
                    onChange={(e) => {
                      const elegido = treatments.find(
                        t => t.title === e.target.value
                      )

                      setSelected(elegido)
                      setFotoActiva(0)
                    }}
                    className="
        w-full
        p-4
        rounded-2xl
        border
        border-gray-300
        text-lg
        bg-white
      "
                  >
                    {treatments.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PC */}
                <div className="hidden lg:block">
                  {treatments.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => {
                        setSelected(item)
                        setFotoActiva(0)
                      }}
                      className={`w-full text-left p-5 rounded-2xl mb-3 transition
          ${selected.title === item.title
                          ? 'bg-cyan-600 text-white'
                          : 'hover:bg-gray-100'
                        }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>

              </div>

              {/* DETALLE */}
              <article
                className="
bg-white
rounded-[30px]
overflow-hidden
shadow-lg
max-w-[850px]
mx-auto
"
              >
                <div className="relative overflow-hidden">

                  <img
                    src={selected.images[fotoActiva]}
                    alt={selected.title}
                    className="
w-full
h-[180px]
sm:h-[220px]
md:h-[280px]
lg:h-[340px]
object-contain
bg-gray-50
"
                  />

                  <button
                    onClick={() =>
                      setFotoActiva(
                        fotoActiva === 0
                          ? selected.images.length - 1
                          : fotoActiva - 1
                      )
                    }
                    className="
absolute
left-3
top-1/2
-translate-y-1/2
bg-white
p-3
rounded-full
"
                  >
                    ‹
                  </button>

                  <button
                    onClick={() =>
                      setFotoActiva(
                        fotoActiva === selected.images.length - 1
                          ? 0
                          : fotoActiva + 1
                      )
                    }
                    className="
absolute
right-3
top-1/2
-translate-y-1/2
bg-white
p-3
rounded-full
"
                  >
                    ›
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selected.images.map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 rounded-full ${i === fotoActiva
                          ? 'w-6 bg-cyan-600'
                          : 'w-2 bg-white'
                          }`}
                      />
                    ))}
                  </div>

                </div>

                <div className="p-4 md:p-5">

                  <h4 className="text-xl sm:text-2xl md:text-4xl font-black">
                    {selected.title}
                  </h4>

                  {selected.description && (
                    <p className="text-gray-600 leading-8 mb-8">
                      {selected.description}
                    </p>
                  )}


                </div>

              </article>

            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="py-28 bg-white px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4">Instalaciones</p>
            <h3 className="text-5xl font-black mb-16">Galería</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gallery.map((img, index) => (
                <img key={index} src={img} alt="Galería" className="className=w-full h-[240px] md:h-[420px] object-cover rounded-[28px]" />
              ))}
            </div>
          </div>
        </section>

        {/* SUCURSALES (CON CARRUSELES INTERACTIVOS INDEPENDIENTES) */}
        <section id="sucursales" className="py-28 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4 text-center">Ubicación</p>
            <h3 className="text-5xl font-black mb-16 text-center">Nuestros Consultorios</h3>

            <div className="grid lg:grid-cols-3 gap-8">
              {consultorios.map((consultorio) => {
                const currentIndex = activeIndexes[consultorio.id];

                return (
                  <div key={consultorio.id} className="bg-gray-100 rounded-[30px] p-6 shadow-lg flex flex-col justify-between">
                    <div>
                      {/* ENVOLTORIO DEL CARRUSEL */}
                      <div className="relative h-56 w-full mb-6 rounded-2xl overflow-hidden group">
                        <img
                          src={consultorio.fotos[currentIndex]}
                          alt={`Foto de ${consultorio.localidad}`}
                          className="w-full h-full object-cover ition-all duration-500 ease-in-out"
                        />

                        {/* Botón Flecha Izquierda */}
                        <button
                          onClick={() => prevSlide(consultorio.id, consultorio.fotos.length)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 font-bold"
                        >
                          &#10094;
                        </button>

                        {/* Botón Flecha Derecha */}
                        <button
                          onClick={() => nextSlide(consultorio.id, consultorio.fotos.length)}


                        >
                          &#10095;
                        </button>

                        {/* Puntos Indicadores */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {consultorio.fotos.map((_, index) => (
                            <span
                              key={index}
                              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-5 bg-cyan-600' : 'w-2 bg-white/60'
                                }`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-2xl font-bold mb-3 px-2">{consultorio.nombre}</p>
                      <p className="text-gray-600 mb-2 px-2">{consultorio.direccion}</p>
                      <p className="text-gray-600 mb-6 px-2">{consultorio.localidad}</p>
                    </div>

                    <div className="flex gap-3 px-2">
                      <a href={consultorio.whatsapp} target="_blank" rel="noreferrer" className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-center font-bold transition-colors">
                        WhatsApp
                      </a>
                      <a href={consultorio.mapa} target="_blank" rel="noreferrer" className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl text-center font-bold transition-colors">
                        Ver mapa
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/***Seccion Opiniones***/}
        <section id="opiniones" className="py-16 px-6">
          

          <h2 className="text-3xl font-bold mb-8">

            Opiniones ⭐

          </h2>

          <input
            className="border p-3 w-full mb-3"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) =>
              setNombre(
                e.target.value
              )}
          />

          <textarea
            className="border p-3 w-full mb-3"
            placeholder="Comentario"
            value={comentario}
            onChange={(e) =>
              setComentario(
                e.target.value
              )}
          />

          <select
            className="border p-3 w-full mb-4"
            value={estrellas}
            onChange={(e) =>
              setEstrellas(
                Number(
                  e.target.value
                ))
            }
          >

            <option value={5}>
              ⭐⭐⭐⭐⭐
            </option>

            <option value={4}>
              ⭐⭐⭐⭐
            </option>

            <option value={3}>
              ⭐⭐⭐
            </option>

          </select>

          <button
            onClick={enviarComentario}
            className="
bg-blue-600
text-white
px-6
py-3
rounded
"
          >

            Enviar opinión

          </button>

        </section>
        <h3 className="text-2xl font-bold mb-6">

          Opiniones destacadas

        </h3>

        {
          comentarios

            .sort(
              (a, b) =>
                b.estrellas - a.estrellas
            )

            .slice(0, 2)

            .map(c => (

              <div
                key={c.id}
                className="
bg-white
shadow
rounded-xl
p-5
mb-4
"
              >

                <div className="mb-2">

                  {"⭐".repeat(
                    c.estrellas
                  )}

                </div>

                <p>

                  {c.comentario}

                </p>

                <div className="mt-3">

                  — {c.nombre}

                </div>

              </div>

            ))
        }
        {/* CONTACTO */}
        <section id="contacto" className="py-28 bg-gray-100 px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl p-10 lg:p-16">
            <div className="text-center mb-12">
              <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4">Contacto</p>
              <p className="text-gray-600 text-lg">Completá el formulario y nos contactaremos contigo.</p>
            </div>

            <form className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="mb-10">



                </div>
                <input type="text" placeholder="Nombre" className="border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                <input type="email" placeholder="Email" className="border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <input type="tel" placeholder="Teléfono" className="border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              <textarea rows="6" placeholder="Mensaje" className="border border-gray-300 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
              <a href="https://www.instagram.com/odontologiam_c?igsh=MWdtNzNvODUycTU4ag==" target="_blank" rel="noopener noreferrer" className="block text-center bg-cyan-600 hover:bg-cyan-700 transition text-white py-5 rounded-2xl text-lg font-bold">
                Enviar Consulta por Instagram
              </a>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-950 text-gray-300 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Odontología MC</h3>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <h4 className="text-white font-bold mb-3">📍 Lugano</h4>
                <p>Guaminí 4982</p>
                <a href="https://wa.me/5491154833390" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">📞 11 5483-3390</a>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">📍 Tapiales</h4>
                <p>Juncal 28</p>
                <a href="https://wa.me/5491138757361" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">📞 11 3875-7361</a>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">📍 Ramos Mejía</h4>
                <p>Av. de Mayo 1262</p>
                <a href="https://wa.me/5491176768074" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">📞 11 7676-8074</a>
              </div>
            </div>

            <div className="m<pt-10 text-center">
              <h1>Seguinos en nuestras redes</h1>
              <a
                href="https://www.instagram.com/odontologiam_c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-pink-400 hover:text-pink-300 font-semibold text-lg"
              >
                <img
                  src="/iconos/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
                @odontologiam_c
              </a>

              <br />

              <a
                href="https://www.tiktok.com/@odontologiam_c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white hover:text-gray-300 font-semibold text-lg"
              >
                <img
                  src="/iconos/tiktok.png"
                  alt="TikTok"
                  className="w-6 h-6"
                />
                @odontologiam_c
              </a>
            </div>
            <div className="mt-10 text-center text-gray-500">
              © 2026 MC Odontología · Todos los derechos reservados
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}