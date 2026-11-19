"use client";

import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { Mic, Play, Pause, RotateCcw, Shuffle, Sparkles, Award, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SPEECH_PROMPTS } from "@/lib/data";

export function InteractiveSpeechTimer() {
  const [topicIndex, setTopicIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const selectedTopic = SPEECH_PROMPTS[topicIndex] || SPEECH_PROMPTS[0];

  // Rotate topic deterministically
  const handleNextTopic = () => {
    setTopicIndex((prev) => (prev + 1) % SPEECH_PROMPTS.length);
    handleReset();
  };

  // Timer controls
  const handleStart = () => {
    setIsRunning(true);
    setIsFinished(false);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(60);
    setIsFinished(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsRunning(false);
            setIsFinished(true);
            try {
              confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 },
              });
            } catch {
              // fallback
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const percentage = ((60 - timeLeft) / 60) * 100;

  return (
    <section id="simulator" className="py-20 bg-[#FFF8E7] bg-grid-pattern border-b-[4px] border-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="green" size="default" rotate="right">
            FITUR INTERAKTIF FORUM
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Simulator Latihan Bicara{" "}
            <span className="bg-[#FFD84D] px-2 py-0.5 border-2 border-black inline-block rotate-[-1deg] shadow-[3px_3px_0_0_#000]">
              60 Detik
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-semibold leading-relaxed">
            Metode kilat andalan Fortaipubing! Ambil satu topik, nyalakan mikrofon imajiner,
            dan berbicaralah dalam Bahasa Indonesia tanpa berhenti selama 1 menit penuh.
          </p>
        </div>

        {/* Main Stage Card */}
        <div className="rounded-2xl border-[4px] border-black bg-white p-6 sm:p-10 shadow-[10px_10px_0_0_#000] relative space-y-8">
          {/* Top Stage Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl border-2 border-black bg-[#FFD84D] flex items-center justify-center shadow-[3px_3px_0_0_#000]">
                <Mic className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-black/60 tracking-wider">
                  Kategori: {selectedTopic.category}
                </span>
                <h3 className="font-heading font-black text-lg sm:text-xl text-black">
                  {selectedTopic.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="pink" size="sm">
                Tingkat: {selectedTopic.difficulty}
              </Badge>
              <Button
                size="sm"
                variant="outline"
                onClick={handleNextTopic}
                className="gap-1.5"
                title="Ganti Topik Latihan"
              >
                <Shuffle className="w-3.5 h-3.5" />
                Ganti Topik #{topicIndex + 1}
              </Button>
            </div>
          </div>

          {/* Speech Prompt Display */}
          <div className="rounded-xl border-[3px] border-black bg-[#FFFDF0] p-6 shadow-[4px_4px_0_0_#000] space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-black/70 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#FF7A00]" />
              Pertanyaan / Panduan Bicara Kamu:
            </div>
            <p className="font-heading font-black text-xl sm:text-2xl text-black leading-snug">
              &quot;{selectedTopic.prompt}&quot;
            </p>
            <div className="pt-2 flex items-start gap-2 text-xs font-bold text-black/80 bg-white/70 p-3 rounded-lg border border-black/15">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong>Tips Fortaipubing:</strong> {selectedTopic.tips}
              </span>
            </div>
          </div>

          {/* Countdown Display & Controls */}
          <div className="rounded-xl border-[3px] border-black bg-[#121212] p-6 sm:p-8 text-white shadow-[6px_6px_0_0_#FFD84D] text-center space-y-6">
            <div className="flex items-center justify-between text-xs font-bold text-white/70 px-2">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    isRunning ? "bg-red-500 animate-ping" : "bg-gray-500"
                  }`}
                />
                <span>{isRunning ? "MIC ON • BERBICARALAH!" : "SIAP DIMULAI"}</span>
              </div>
              <span>TARGET: 60 DETIK BAHASA INDONESIA</span>
            </div>

            {/* Giant Timer Number */}
            <div className="font-heading font-black text-6xl sm:text-8xl tracking-tight text-[#FFD84D]">
              00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
            </div>

            {/* Brutalist Progress Bar */}
            <div className="w-full h-5 rounded-full border-2 border-white bg-neutral-800 overflow-hidden p-0.5">
              <div
                className="h-full rounded-full bg-[#00D084] transition-all duration-500 ease-linear"
                style={{ width: `${percentage}%` }}
              />
            </div>

            {/* Timer Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {!isRunning ? (
                <Button
                  size="lg"
                  variant="default"
                  onClick={handleStart}
                  className="px-8 text-base bg-[#FFD84D]"
                  disabled={timeLeft === 0}
                >
                  <Play className="w-5 h-5 mr-1 fill-black" />
                  Mulai Bicara (60d)
                </Button>
              ) : (
                <Button
                  size="lg"
                  variant="pink"
                  onClick={handlePause}
                  className="px-8 text-base"
                >
                  <Pause className="w-5 h-5 mr-1 fill-black" />
                  Jeda Waktu
                </Button>
              )}

              <Button
                size="lg"
                variant="outline"
                onClick={handleReset}
                className="px-6 text-base"
              >
                <RotateCcw className="w-5 h-5 mr-1" />
                Ulangi
              </Button>
            </div>
          </div>

          {/* Finished Celebration Banner */}
          {isFinished && (
            <div className="rounded-xl border-[3px] border-black bg-[#BBF7D0] p-6 shadow-[4px_4px_0_0_#000] animate-in zoom-in-95 duration-150 space-y-3">
              <div className="flex items-center gap-2 font-heading font-black text-xl text-black">
                <Award className="w-6 h-6 text-black" />
                Luar Biasa! 60 Detik Berhasil Dituntaskan!
              </div>
              <p className="text-sm font-semibold text-black/85 leading-relaxed">
                Kamu baru saja membuktikan bahwa kamu mampu menyampaikan gagasan secara runtut.
                Coba evaluasi diri: Apakah kamu tadi sempat ragu memilih kata? Apakah ada kata
                pengisi seperti &quot;eee...&quot; atau &quot;anu...&quot;? Di Fortaipubing, kita latih ini bersama setiap Sabtu!
              </p>
              <div className="pt-2">
                <a href="#gabung">
                  <Button size="sm" variant="dark">
                    Gabung Latihan Penuh di Bima →
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
