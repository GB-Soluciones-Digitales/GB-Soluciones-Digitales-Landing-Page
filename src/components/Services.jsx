import { Monitor, Smartphone, ShoppingCart, LayoutDashboard, Globe, Plug } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Monitor,
        title: "Sistemas web a medida",
        description: "Plataformas robustas y escalables. Construimos exactamente lo que necesitás, desde sistemas logísticos con seguimiento hasta herramientas operativas complejas."
    },
    {
        icon: Smartphone,
        title: "Progressive Web Apps (PWA)",
        description: "Aplicaciones instalables en el celular. Rápidas y eficientes, funcionan perfectamente para personal en movimiento o sistemas de distribución."
    },
    {
        icon: ShoppingCart,
        title: "E-commerce y Catálogos",
        description: "Llevá tu negocio al mundo digital. Tiendas online y catálogos autoadministrables para mostrar y vender productos sin intermediarios."
    },
    {
        icon: LayoutDashboard,
        title: "Paneles de gestión y reservas",
        description: "Toda tu operación en un solo lugar. Administrá información, gestioná propiedades o automatizá la reserva de turnos de manera centralizada."
    },
    {
        icon: Globe,
        title: "Aplicaciones web modernas (SPA)",
        description: "Interfaces fluidas y dinámicas. Experiencias de usuario ultrarrápidas y sin recargas, ideales para mantener a tus clientes interactuando."
    },
    {
        icon: Plug,
        title: "Integración de APIs",
        description: "Hacemos que tus sistemas se comuniquen. Conectamos herramientas de facturación electrónica, mapas y bases de datos externas sin esfuerzo manual."
    },
]

export function Services() {
    return (
        <section id="servicios" className="bg-background px-6 py-24 transition-colors duration-300">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 max-w-2xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                        Servicios
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        Soluciones que resuelven problemas reales
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        No vendemos tecnología por vender. Cada solución está pensada para resolver un problema concreto y generar un impacto directo en tu negocio.
                    </p>
                </div>
                
                {/* Contenedor Grid con 6 elementos */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) =>(
                        <motion.div 
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/50 hover:shadow-lg dark:hover:border-primary/50"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground">
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}