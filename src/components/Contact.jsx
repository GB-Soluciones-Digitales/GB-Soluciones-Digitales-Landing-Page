import React from "react"
import { useState } from 'react'
import { Instagram, Mail, MessageCircle, Send} from 'lucide-react'

export function Contact() {
    const [formState, setFormState] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    })
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit() {
        console.log("Enviar WSP o Correo")
    }

    return (
        <section id="contacto" className="bg-background px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Columna izquierda */}
                    <div>
                        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                            Contacto
                        </p>
                        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            Tu proyecto empieza con una conversacion
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Contanos que necesitas. Sin compromiso, sin presion. Te damos una propuesta clara para que puedas decidir con toda la informacion.
                        </p>

                        <div className="mt-10 flex flex-col gap-6">
                            <a href="mailto:gbsolucionesdigitales@gmail.com" className="flex items-center gap-4 text-foreground transitioncolors hover:text-primary">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium">gbsolucionesdigitales@gmail.com</p>
                                </div>
                            </a>
                            <a href="https://wa.me/5493434676232" className="flex items-center gap-4 text-foreground transitioncolors hover:text-primary">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                                    <p className="font-medium">Enviar mensaje</p>
                                </div>
                            </a>
                            <a href="" className="flex items-center gap-4 text-foreground transitioncolors hover:text-primary">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Instagram className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Instagram</p>
                                    <p className="font-medium">GB Soluciones Digitales</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="rounded-xl border border-border bg-card p-8">
                        {submitted ? (
                            <div className="flex h-full flex-col items-center justify-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Send className="h7 w-7"/>
                                </div>
                                <h3>
                                    Mensaje enviado
                                </h3>
                                <p>
                                    Gracias por contactarnos. Te responderemos a la brevedad.
                                </p>
                                <button>
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div>
                                    <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-foreground">
                                        Nombre
                                    </label>
                                    <input
                                        id="nombre" 
                                        type="text" 
                                        required
                                        onChange={(e) => setFormState()}
                                        value={formState.nombre}
                                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                                        Email
                                    </label>
                                    <input
                                        id="email" 
                                        type="email" 
                                        required
                                        onChange={(e) => setFormState()}
                                        value={formState.email}
                                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-foreground">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        required
                                        rows={4}
                                        onChange={(e) => setFormState()}
                                        value={formState.nombre}
                                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                                        placeholder="Contanos sobre tu proyecto..."
                                    />
                                </div>
                                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 ">
                                    Enviar mensaje
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
} 