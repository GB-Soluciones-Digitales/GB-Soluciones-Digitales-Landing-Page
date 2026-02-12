import { ShieldCheck, Target, Users } from "lucide-react";
import React from "react";

const values = [
    {
        icon: Target,
        title: "Sin rodeos",
        description: "Soluciones directas que resuelven lo que importa. Nada de funcionalidades que nadie pidio."
    },
    {
        icon: ShieldCheck,
        title: "Codigo serio",
        description: "Buenas practicas, seguridad de datosy arquitectura pensada para crecer en tu negocio."
    },
    {
        icon: Users,
        title: "Siempre disponibles",
        description: "Comunicacion abierta en cada etapa. Preguntas, cambios y dudas: estamos ahi."
    },
]
export function About() {
    return (
        <section id="nosotros" className="bg-muted px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 max-w-2xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                        Nosotros
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        Desarrolladores que entienden de negocios
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        No somos solo tecnicos. Entendemos que detras de cada sistema hay un negocio que necesita resultados concretos. Por eso cada solucion esta pensada para generar impacto real.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                    {values.map((value) => (
                        <div key={value.title} className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <value.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="mb-1 font-heading font-semibold text-foreground">
                                    {value.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 