import { Search, Code2, Handshake, Lightbulb } from "lucide-react";
import React from "react";

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Entendemos tu negocio",
        description: "Antes de escribir una sola linea de codigo, nos tomamos el tiempo de entender que necesitas y por que."
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Propuesta clara",
        description: "Te presentamos un plan concreto: que vamos a construir, como y en cuanto tiempo. Sin letra chica."
    },
    {
        number: "03",
        icon: Code2,
        title: "Desarrollo con entregas",
        description: "Vas viendo resultados desde el primer dia. Entregas parciales, feedback constante, sin sorpresas."
    },
    {
        number: "04",
        icon: Handshake,
        title: "Soporte continuo",
        description: "No desaparecemos despues de entregar. Te acompañamos para que tu sistema funcione y evolucione."
    },
]
export function Process() {
    return (
        <section id="proceso" className=" bg-muted px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                        Proceso
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"> 
                        Simple, transparente y sin vueltas
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                        Trabajamos con un proceso claro para que siempre sepas en que etapa esta tu proyecto.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <div key={step.number} className="relative text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <step.icon className="h-7 w-7" />
                            </div>
                            <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-widest text-primary">
                                Paso {step.number}
                            </span>
                            <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                                {step.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 