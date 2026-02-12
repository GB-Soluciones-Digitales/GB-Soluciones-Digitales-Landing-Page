import React, { useState } from "react"
import { Instagram, Mail, MessageCircle, Send} from 'lucide-react'
import { motion } from "framer-motion";

export function Contact() {
    const [formState, setFormState] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        const subject = encodeURIComponent(`Consulta Web de ${formState.nombre}`);
        const body = encodeURIComponent(
            `Hola GB Soluciones Digitales,\n\n` +
            `Soy ${formState.nombre} (${formState.email}).\n\n` +
            `Consulta:\n${formState.mensaje}`
        );
        window.location.href = `mailto:gbsolucionesdigitales@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    }

    return (
        <section id="contacto" className="bg-background px-6 py-24 transition-colors duration-300">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Columna izquierda */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                            Contacto
                        </p>
                        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            Tu proyecto empieza con una conversación
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Contanos qué necesitas. Sin compromiso, sin presión. Te damos una propuesta clara para que puedas decidir con toda la información.
                        </p>

                        <div className="mt-10 flex flex-col gap-6">
                            <a href="mailto:gbsolucionesdigitales@gmail.com" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium">gbsolucionesdigitales@gmail.com</p>
                                </div>
                            </a>
                            <a href="https://wa.me/5493434676232" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                                    <p className="font-medium">Enviar mensaje</p>
                                </div>
                            </a>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Instagram className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Instagram</p>
                                    <p className="font-medium">GB Soluciones Digitales</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Columna derecha */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-xl border border-border bg-card p-8 shadow-sm"
                    >
                        {submitted ? (
                            <div className="flex h-full flex-col items-center justify-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Send className="h-7 w-7"/>
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    Mensaje enviado
                                </h3>
                                <p className="mt-2 text-muted-foreground">
                                    Gracias por contactarnos. Te responderemos a la brevedad.
                                </p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-sm font-medium text-primary hover:underline"
                                >
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
                                        onChange={handleChange}
                                        value={formState.nombre}
                                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
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
                                        onChange={handleChange}
                                        value={formState.email}
                                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
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
                                        onChange={handleChange}
                                        value={formState.mensaje}
                                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                                        placeholder="Contanos sobre tu proyecto..."
                                    />
                                </div>
                                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]">
                                    Enviar mensaje
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}