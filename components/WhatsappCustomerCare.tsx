"use client";

import { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function WhatsAppFloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const whatsappNumber = "2349134810580";

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setChatHistory((prev) => [...prev, "Hi! How can I help you?"]);
    }, 3000);

    const timer2 = setTimeout(() => {
      setHasNewMessage(true);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleSend = () => {
    if (message.trim() !== "") {
      const encodedMessage = encodeURIComponent(message.trim());
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");
    }
  };

  const handleIconClick = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);

    if (!soundPlayed && audioRef.current) {
      audioRef.current.play();
      setSoundPlayed(true);
    }
  };

  const handleCloseChat = () => setIsOpen(false);

  return (
    <>
      <audio ref={audioRef} src="/chat-pop.mp3" preload="auto" />
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <Card className="w-80 shadow-lg animate-in fade-in duration-300">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/agent-avatar.png"
                  alt="Agent"
                  width={42}
                  height={42}
                  className="rounded-full"
                />
                <h4 className="text-sm font-semibold">Chat with Us</h4>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseChat}
                className="text-gray-600 hover:text-gray-800"
              >
                <FaTimes size={22} />
              </Button>
            </CardHeader>

            <CardContent className="space-y-2">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 bg-muted p-2 rounded-md"
                >
                  {index === 0 && (
                    <Image
                      src="/agent-avatar.png"
                      alt="Agent"
                      width={24}
                      height={24}
                      className="rounded-full mt-1"
                    />
                  )}
                  <p className="text-sm text-gray-800">{chat}</p>
                </div>
              ))}
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Textarea
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-muted resize-none"
                rows={2}
              />
              <Button
                className="w-full bg-green-500 hover:bg-green-600"
                onClick={handleSend}
              >
                Send
              </Button>
            </CardFooter>
          </Card>
        )}
        <div className="relative">
          {/* Floating image above and to the left */}

          <Button
            onClick={handleIconClick}
            className="rounded-full bg-green-500 hover:bg-green-600 text-white p-4 shadow-lg relative"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={100} />
            {hasNewMessage && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                1
              </span>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
