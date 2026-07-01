"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, X } from "lucide-react";
import { disciplines } from "@/app/data/programs";

type ChatMessage = {
  type: "bot" | "user";
  text: string;
};

type ChatStage = "discipline" | "program" | "topic" | "action";

const topicOptions = [
  "Admission process",
  "Eligibility & fees",
  "Scholarships",
  "Campus & hostel",
];

const actionOptions = ["Apply now", "Talk on WhatsApp", "Call admissions"];

const initialChat: ChatMessage[] = [
  {
    type: "bot",
    text: "Hi! Welcome to TYS University. Which faculty are you interested in?",
  },
];

const helpline = "18008901705";
const whatsappNumber = "911800121288800";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<ChatStage>("discipline");
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>(initialChat);
  const [typing, setTyping] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const replyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    let showTimer: number | undefined;
    let hideTimer: number | undefined;

    const showPromptLoop = () => {
      showTimer = window.setTimeout(() => {
        setShowPrompt(true);
        hideTimer = window.setTimeout(() => {
          setShowPrompt(false);
          showPromptLoop();
        }, 3000);
      }, 5000);
    };

    showPromptLoop();

    return () => {
      if (showTimer) window.clearTimeout(showTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, typing]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) window.clearTimeout(replyTimerRef.current);
    };
  }, []);

  const scrollToApplicationForm = () => {
    document.querySelector("#hero-application-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setOpen(false);
  };

  const whatsappLink = (messages = chat) => {
    const transcript = messages
      .filter((message) => message.type === "user")
      .map((message) => message.text)
      .join(" > ");
    const message = `Hello TYS University, I need admissions assistance.${
      transcript ? ` My selections: ${transcript}.` : ""
    }`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const currentOptions = (() => {
    if (stage === "discipline") {
      return disciplines.map((item) => item.discipline);
    }

    if (stage === "program") {
      return (
        disciplines.find((item) => item.discipline === selectedDiscipline)
          ?.programs ?? []
      );
    }

    return stage === "topic" ? topicOptions : actionOptions;
  })();

  const handleOption = (option: string) => {
    if (typing) return;

    const nextChat = [...chat, { type: "user" as const, text: option }];
    setChat(nextChat);

    if (option === "Apply now") {
      scrollToApplicationForm();
      return;
    }

    if (option === "Talk on WhatsApp") {
      window.open(whatsappLink(nextChat), "_blank", "noopener,noreferrer");
      return;
    }

    if (option === "Call admissions") {
      window.open(`tel:${helpline}`, "_self");
      return;
    }

    setTyping(true);

    replyTimerRef.current = window.setTimeout(() => {
      setTyping(false);

      if (stage === "discipline") {
        setSelectedDiscipline(option);
        setChat((current) => [
          ...current,
          { type: "bot", text: `Which program in ${option} interests you?` },
        ]);
        setStage("program");
        return;
      }

      if (stage === "program") {
        setSelectedProgram(option);
        setChat((current) => [
          ...current,
          { type: "bot", text: `What would you like to know about ${option}?` },
        ]);
        setStage("topic");
        return;
      }

      const topicReply: Record<string, string> = {
        "Admission process":
          "You can apply online or offline, followed by merit or an entrance test where applicable, counselling, document verification, fee confirmation, and enrollment.",
        "Eligibility & fees": `Eligibility and fees vary for ${selectedProgram}. Our admissions team can confirm the latest requirements and fee structure for you.`,
        Scholarships:
          "TYS University offers merit-based scholarships, need-based support, and flexible payment assistance, subject to eligibility.",
        "Campus & hostel":
          "The university provides smart classrooms, practical labs, a digital library, student activities, and supported hostel accommodation.",
      };

      setChat((current) => [
        ...current,
        {
          type: "bot",
          text:
            topicReply[option] ??
            "Our admissions team can provide the latest details for your selected program.",
        },
        {
          type: "bot",
          text: "Would you like to apply now or speak directly with our admissions team?",
        },
      ]);
      setStage("action");
    }, 750);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-60 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {showPrompt && !open ? (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-xs font-semibold text-foreground shadow-xl"
            >
              Need help with admissions?
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setOpen((current) => !current);
            setShowPrompt(false);
          }}
          aria-label={open ? "Close admissions assistant" : "Open admissions assistant"}
          aria-expanded={open}
          aria-controls="admissions-chatbot"
          className="relative flex h-15 w-15 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-2xl sm:h-16 sm:w-16"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/30 [animation-duration:2.5s]" />
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white sm:h-13 sm:w-13">
            {open ? (
              <X className="text-primary" size={24} />
            ) : (
              <Image
                src="/logo.png"
                alt=""
                width={52}
                height={52}
                className="h-11 w-11 object-contain"
              />
            )}
          </span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.section
            id="admissions-chatbot"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chatbot-title"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-3 bottom-23 z-60 flex max-h-[min(72dvh,38rem)] min-h-105 flex-col overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-[0_24px_80px_rgba(14,13,15,0.28)] sm:inset-x-auto sm:bottom-25 sm:right-6 sm:h-130 sm:w-95"
          >
            <header className="relative overflow-hidden bg-linear-to-r from-primary to-secondary px-4 py-4 text-white">
              <div className="absolute -right-8 -top-12 h-28 w-28 rounded-full bg-accent/20" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
                  <Bot className="text-primary" size={23} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 id="chatbot-title" className="text-sm font-bold">
                    TYSU Admissions Assistant
                  </h2>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/75">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Online and ready to help
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close chatbot"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <X size={18} />
                </button>
              </div>
            </header>

            <div
              className="flex-1 space-y-3 overflow-y-auto bg-soft-background/55 p-4"
              aria-live="polite"
            >
              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/55">
                Admissions support
              </p>

              {chat.map((message, index) => (
                <motion.div
                  key={`${message.type}-${index}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`w-fit max-w-[84%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-5 shadow-sm ${
                    message.type === "bot"
                      ? "rounded-tl-sm border border-secondary/8 bg-white text-foreground"
                      : "ml-auto rounded-tr-sm bg-primary text-white"
                  }`}
                >
                  {message.text}
                </motion.div>
              ))}

              {typing ? (
                <div className="flex w-fit items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.7,
                        repeat: Infinity,
                        delay: dot * 0.12,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-secondary/50"
                    />
                  ))}
                </div>
              ) : null}
              <div ref={chatEndRef} />
            </div>

            {!typing ? (
              <div className="border-t border-primary/10 bg-white p-3">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary/60">
                  Choose an option
                </p>
                <div className="flex max-h-32 flex-wrap gap-2 overflow-y-auto pr-1 sm:max-h-36">
                  {currentOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleOption(option)}
                      className="rounded-full border border-primary/15 bg-primary/5 px-3 py-2 text-xs font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="flex items-center justify-center gap-1.5 border-t border-black/5 bg-[#F8F6F2] py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-foreground/40">
              <MessageCircle size={11} />
              TYS University admissions
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </>
  );
}
