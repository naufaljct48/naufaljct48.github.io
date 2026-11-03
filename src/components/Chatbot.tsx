import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { lines } from "../data/career";
import { useLanguage } from "../context/LanguageContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, isFirstMessage: messages.length === 0, sessionId }),
      });
      const data = await response.json();
      if (!response.ok || !data.response) throw new Error(data.error || `HTTP ${response.status}`);
      if (!sessionId) setSessionId(data.sessionId);
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: t("chat.error") }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="chat-panel"
        aria-label={isOpen ? t("chat.close") : t("chat.open")}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full grid place-items-center bg-ink text-on-ink border-2 border-ground shadow-[0_2px_4px_rgb(0_0_0/0.15),0_14px_30px_-10px_rgb(0_0_0/0.5)] transition-transform duration-300 hover:-translate-y-0.5"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-panel"
            role="dialog"
            aria-label={t("chat.title")}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[23.5rem] max-w-[calc(100vw-2rem)] h-[32rem] max-h-[calc(100dvh-8rem)] bg-ground text-ink rounded-3xl overflow-hidden flex flex-col border-2 border-ink shadow-[0_4px_8px_rgb(0_0_0/0.08),0_30px_60px_-24px_rgb(0_0_0/0.45)]"
          >
            <div className="flex h-1.5" aria-hidden="true">
              {lines.map((l) => (
                <span key={l.id} className="flex-1" style={{ background: `var(--line-${l.id})` }} />
              ))}
            </div>
            <div className="px-5 py-4 border-b border-rule">
              <p className="heading text-xl">{t("chat.title")}</p>
              <p className="text-sm text-ink-2">{t("chat.subtitle")}</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
              {messages.length === 0 && <p className="text-ink-2 px-1 pt-2 leading-relaxed">{t("chat.empty")}</p>}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : ""}`}>
                  <div
                    className={`max-w-[82%] px-4 py-2.5 text-[0.95rem] leading-relaxed whitespace-pre-line break-words ${
                      m.role === "user"
                        ? "bg-ink text-on-ink rounded-[1.25rem] rounded-br-md"
                        : "bg-surface rounded-[1.25rem] rounded-bl-md"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-1.5 px-4 py-3.5 bg-surface rounded-[1.25rem] rounded-bl-md w-fit" aria-label="…">
                  {[0, 150, 300].map((d) => (
                    <span key={d} className="w-2 h-2 rounded-full bg-ink-2 animate-pulse" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-t border-rule flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chat.placeholder")}
                aria-label={t("chat.placeholder")}
                className="flex-1 min-w-0 h-11 px-4 rounded-full bg-surface placeholder:text-ink-2 focus:outline-none focus-visible:outline-[3px] focus-visible:outline-line-dimensi"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label={t("chat.send")}
                className="w-11 h-11 shrink-0 rounded-full grid place-items-center bg-ink text-on-ink disabled:opacity-35 transition-opacity"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
