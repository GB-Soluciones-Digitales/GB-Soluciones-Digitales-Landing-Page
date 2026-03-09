import { ArrowUpRight, Github, ChevronRight, ChevronLeft, X, ZoomIn } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS_DATA = [
    {
        id: 1,
        title: "Sistema Inmobiliario",
        description: "Gestión integral de propiedades y clientes con panel administrativo.",
        images: ["/inmobiliaria/1.png", "/inmobiliaria/2.png", "/inmobiliaria/Hero.jpeg", "/inmobiliaria/Ventas.jpeg", "/inmobiliaria/PropiedadDetalle.jpeg", "/inmobiliaria/PropiedadDetalle2.jpeg", "/inmobiliaria/Tasacion.jpeg", "/inmobiliaria/Contacto.jpeg"], 
        href: "https://inmobiliariabottazzi.com.ar",
    },
    {
        id: 2,
        title: "Ecommerce Camel Shop",
        description: "Tienda online moderna con carrito dinámico y catálogo autogestionable.",
        images: ["ecommerce/ecommerce-resposive.png", "ecommerce/ecommerce-inicio.jpeg", "ecommerce/ecommerce-inicio-2.jpeg", "ecommerce/ecommerce-catalogo.jpeg", "ecommerce/ecommerce-prenda-detalle.jpeg", "ecommerce/ecommerce-carrito.jpeg", "ecommerce/ecommerce-checkout.jpeg", "ecommerce/ecommerce-contacto.jpeg", "ecommerce/ecommerce-contacto-2.jpeg", "ecommerce/ecommerce-admin-login.png", "ecommerce/ecommerce-admin-panel.png", "ecommerce/ecommerce-admin-pedidos.png", "ecommerce/ecommerce-admin-hero.png"],
        href: "https://camelmodashop.vercel.app",
    },
    {
        id: 3,
        title: "Plataforma Logística",
        description: "Plataforma de gestión logistica con seguimiento en tiempo real y facturación.",
        images: ["/logistica/1.png", "/logistica/2.png", "/logistica/Dashboard.jpeg", "/logistica/GestionV.jpeg", "/logistica/ViajesModal.jpg", "/logistica/Reportes.jpg", "/logistica/Seguimiento.jpeg", "/logistica/Facturacion.jpeg", "/logistica/Finanzas.jpeg"],
        href: "https://blogistica.vercel.app",
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
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 z-10">
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
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const closeLightbox = useCallback(() => setSelectedProject(null), []);
    
    const nextImage = useCallback(() => {
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => 
            prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
    }, [selectedProject]);

    const prevImage = useCallback(() => {
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => 
            prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
    }, [selectedProject]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedProject) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeLightbox();
        };

        window.addEventListener("keydown", handleKeyDown);
        
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [selectedProject, nextImage, prevImage, closeLightbox]);

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
                                className="min-w-[280px] flex-shrink-0 snap-center rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg md:min-w-0 flex flex-col"
                            >
                                <div 
                                    className="relative cursor-pointer group rounded-t-xl overflow-hidden"
                                    onClick={() => {
                                        setSelectedProject(project);
                                        setCurrentImageIndex(0);
                                    }}
                                >
                                    <AutoImageSwiper images={project.images} />
                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/0 opacity-0 backdrop-blur-none transition-all duration-300 group-hover:bg-background/40 group-hover:opacity-100 group-hover:backdrop-blur-sm">
                                        <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xl">
                                            <ZoomIn className="h-4 w-4" />
                                            Ver galería
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline w-fit"
                                    >
                                        Visitar Página <ChevronRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

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

            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/40 backdrop-blur-xl p-4 sm:p-6"
                    >
                        <button 
                            onClick={closeLightbox}
                            className="absolute right-6 top-6 z-50 rounded-full bg-card/50 p-3 text-foreground transition-colors hover:bg-destructive hover:text-destructive-foreground"
                            aria-label="Cerrar galería"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="relative flex w-full max-w-5xl flex-1 items-center justify-center mt-12 mb-4">
                            <button 
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-0 z-10 -ml-2 rounded-full bg-background/80 p-3 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground sm:left-4"
                            >
                                <ChevronLeft className="h-8 w-8" />
                            </button>

                            <motion.img 
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                src={selectedProject.images[currentImageIndex]} 
                                alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
                                className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                            />

                            <button 
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-0 z-10 -mr-2 rounded-full bg-background/80 p-3 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground sm:right-4"
                            >
                                <ChevronRight className="h-8 w-8" />
                            </button>
                        </div>

                        <div className="text-center mb-6">
                            <p className="text-sm text-muted-foreground">
                                Imagen {currentImageIndex + 1} de {selectedProject.images.length}
                            </p>
                        </div>

                        <div className="flex w-full max-w-3xl justify-center gap-3 overflow-x-auto pb-4 px-2">
                            {selectedProject.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md transition-all ${
                                        currentImageIndex === index 
                                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105 opacity-100" 
                                        : "opacity-50 hover:opacity-100"
                                    }`}
                                >
                                    <img 
                                        src={img} 
                                        alt={`Miniatura ${index + 1}`} 
                                        className="h-full w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}