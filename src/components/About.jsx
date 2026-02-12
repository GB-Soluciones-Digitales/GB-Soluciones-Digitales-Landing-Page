import { ShieldCheck, Target, Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const values = [
    {
        icon: Target,
        title: "Sin rodeos",
        description: "Soluciones directas que resuelven lo que importa. Nada de funcionalidades que nadie pidió."
    },
    {
        icon: ShieldCheck,
        title: "Código serio",
        description: "Buenas prácticas, seguridad de datos y arquitectura pensada para crecer en tu negocio."
    },
    {
        icon: Users,
        title: "Siempre disponibles",
        description: "Comunicación abierta en cada etapa. Preguntas, cambios y dudas: estamos ahí."
    },
]

export function About() {
    return (
        <section id="nosotros" className="bg-muted px-6 py-24 transition-colors duration-300">
            <div className="mx-auto max-w-6xl">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 max-w-2xl"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                        Nosotros
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        Desarrolladores que entienden de negocios
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        No somos solo técnicos. Entendemos que detrás de cada sistema hay un negocio que necesita resultados concretos. Por eso cada solución está pensada para generar impacto real.
                    </p>
                </motion.div>

                <div className="grid gap-8 sm:grid-cols-3">
                    {values.map((value, index) => (
                        <motion.div 
                            key={value.title} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="flex gap-4 group"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}