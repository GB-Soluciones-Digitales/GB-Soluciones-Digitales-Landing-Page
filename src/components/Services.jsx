import { LayoutDashboard, Monitor, Globe, Plug } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Monitor,
        title: "Sistema web a medida",
        description: "Nada de plantillas genéricas. Construimos la plataforma exacta que tu negocio necesita para operar mejor."
    },
    {
        icon: LayoutDashboard,
        title: "Paneles de gestión y administración",
        description: "Toda tu operación en un solo lugar. Controla datos, equipos y procesos desde un panel claro y fácil de usar."
    },
    {
        icon: Globe,
        title: "Aplicaciones web modernas (SPA)",
        description: "Interfaces rápidas y fluidas que tus usuarios van a querer usar. Sin recargas, sin esperas."
    },
    {
        icon: Plug,
        title: "Integración y APIs",
        description: "Conectamos tus herramientas actuales para que trabajen juntas. Sin duplicar datos, sin esfuerzo manual."
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
                        No vendemos tecnología por vender. Cada solución está pensada para resolver un problema concreto de tu negocio.
                    </p>
                </div>
                
                {/* Contenedor Grid Animado */}
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