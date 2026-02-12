import { LayoutDashboard, Monitor, Globe, Plug } from "lucide-react";
import React from "react";

const services = [
    {
        icon: Monitor,
        title: "Sistema web a medida",
        description: "Nada de plantillas genericas. Construimos la plataforma exacta que tu negocio necesita para operar mejor."
    },
    {
        icon: LayoutDashboard,
        title: "Paneles de gestion y administracion",
        description: "Toda tu operacion en un solo lugar. Controla datos, equipos y procesps desde un panel claro y facil de usar."
    },
    {
        icon: Globe,
        title: "Aplicaciones web modernas (SPA)",
        description: "Interfaces rapidas y fluidas que tus usuarios van a querer usar. Sin recargas, sin esperas."
    },
    {
        icon: Plug,
        title: "Integracion y APIs",
        description: "Conectamos tus herramientas actuales para que trabajen juntas. Sin duplicar datos, sin esfuerzo manual."
    },
]
export function Services() {
    return (
        <section id="servicios" className="bg-background px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 max-w-2xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                        Servicios
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        Soluciones que resuleven problemas reales
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        No vendemos tecnologia por vender. Cada solucion esta pensada para resolver un problema concreto de tu negocio.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) =>(
                        <div 
                            key={service.title}
                            className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/30 hover:bg-muted/50"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/30 hover:bg-muted/50">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground">
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 