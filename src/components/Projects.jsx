import { ArrowUpRight, Github, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS_DATA = [
    {
        id: 1,
        title: "Sistema Inmobiliario",
        description: "Gestión integral de propiedades y clientes con panel administrativo.",
        images: ["/inmobiliaria/1.png", "/inmobiliaria/2.png", "/inmobiliaria/Hero.jpeg", "/inmobiliaria/Ventas.jpeg", "/inmobiliaria/PropiedadDetalle.jpeg", "/inmobiliaria/PropiedadDetalle2.jpeg", "/inmobiliaria/Tasacion.jpeg", "/inmobiliaria/Contacto.jpeg"], 
    },
    {
        id: 2,
        title: "Ecommerce Camel Shop",
        description: "Tienda online moderna con carrito dinámico y catálogo autogestionable.",
        images: ["ecommerce/1.png", "ecommerce/2.png", "ecommerce/ecommerce1.jpeg", "ecommerce/ecommerce2.jpeg", "ecommerce/ecommerce5.jpeg", "ecommerce/ecommerce6.jpeg", "ecommerce/ecommerce3.jpeg", "ecommerce/ecommerce4.jpeg",],
    },
    {
        id: 3,
        title: "Plataforma Logística",
        description: "Plataforma de gestión logistica con seguimiento de flotas en tiempo real e integración con ARCA para facturación.",
        images: ["/logistica/1.png", "/logistica/2.png", "/logistica/Dashboard.jpeg", "/logistica/GestionV.jpeg", "/logistica/ViajesModal.jpg", "/logistica/Reportes.jpg", "/logistica/Seguimiento.jpeg", "/logistica/Facturacion.jpeg", "/logistica/Finanzas.jpeg"],
    }
];

function AutoImageSwiper({ images }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000); 
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-muted">
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full object-cover"
                    alt="Vista previa del proyecto"
                />
            </AnimatePresence>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-1.5 w-1.5 rounded-full transition-all ${i === index ? "bg-primary w-3" : "bg-white/50"}`} 
                    />
                ))}
            </div>
        </div>
    );
}

export function Projects() {
    return (
        <section id="proyectos" className="bg-background px-6 py-24 transition-colors duration-300">
            <div className="mx-auto max-w-6xl">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                        Proyectos
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        Proyectos que hablan por sí solos
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                        Soluciones reales desarrolladas con precisión técnica y enfoque comercial.
                    </p>
                </motion.div>

                {/* Carrusel / Grid de Proyectos */}
                <div className="mt-16 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory lg:overflow-visible">
                    <div className="grid grid-cols-1 gap-6 md:grid md:grid-cols-3 md:gap-8">
                        {PROJECTS_DATA.map((project) => (
                            <motion.div
                                key={project.id}
                                whileHover={{ y: -5 }}
                                className="min-w-[280px] flex-shrink-0 snap-center rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg md:min-w-0"
                            >
                                <AutoImageSwiper images={project.images} />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Botón Github */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <a 
                        href="https://github.com/GB-Soluciones-Digitales"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:border-primary/50 hover:shadow-md"
                    >
                        <Github className="h-5 w-5" />
                        Ver proyectos en Github
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}