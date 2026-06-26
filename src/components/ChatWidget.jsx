import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    let currentSession = localStorage.getItem('gb_chat_session');
    if (!currentSession) {
      currentSession = crypto.randomUUID();
      localStorage.setItem('gb_chat_session', currentSession);
    }
    setSessionId(currentSession);
    
    setMessages([
      { role: 'assistant', content: '¡Hola! Soy  GiBi, el asistente virtual de GB Soluciones Digitales. ¿En qué te puedo ayudar hoy?' }
    ]);
  }, []);

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-focus en el input cuando se abre el chat
  useEffect(() => {
    if (!isLoading && isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading, isOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://botgbsolucionesdigitales-production.up.railway.app/api/chat-web', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          mensaje: userMsg
        })
      });

      if (!response.ok) throw new Error('Error en la red');
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.respuesta }]);
      
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Hubo un error al conectar con el servidor. Por favor, intentá nuevamente.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Ventana de Chat */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[380px] h-[500px] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-semibold text-sm">GiBi Asistente Virtual</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Área de mensajes */}
          <div className="flex-1 overflow-y-auto p-4 bg-muted/30 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-br-sm' 
                      : 'bg-background border border-border text-foreground rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-background border border-border rounded-2xl px-4 py-3 rounded-bl-sm shadow-sm flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input de texto */}
          <form onSubmit={sendMessage} className="p-3 bg-background border-t border-border flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
              className="flex-1 bg-muted px-4 py-2 rounded-full text-sm outline-none dark:text-white focus:ring-1 focus:ring-primary disabled:opacity-50"
            />
            <button 
              type="submit" 
              disabled={!inputValue.trim() || isLoading}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center h-10 w-10 shrink-0"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Botón Flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? 'rotate-90 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100 relative'}`}
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}