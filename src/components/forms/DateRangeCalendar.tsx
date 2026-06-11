"use client";

import { useState } from "react";

interface DateRangeCalendarProps {
  selectedDates: string[];
  onSelectDates: (dates: string[]) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
}

export function DateRangeCalendar({
  selectedDates,
  onSelectDates,
  onBlur,
  error,
  touched,
}: DateRangeCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const hasError = touched && !!error;

  function getNextMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
  }

  function getPrevMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
  }

  function getDaysInMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  function getFirstDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function formatDate(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function toggleDate(date: Date) {
    const dateStr = formatDate(date);
    if (selectedDates.includes(dateStr)) {
      onSelectDates(selectedDates.filter((d) => d !== dateStr));
    } else {
      onSelectDates([...selectedDates, dateStr]);
    }
  }

  function isFutureDate(date: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date > today;
  }

  function renderCalendar(month: Date) {
    const daysInMonth = getDaysInMonth(month);
    const firstDay = getFirstDayOfMonth(month);
    const days: (Date | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(month.getFullYear(), month.getMonth(), day));
    }

    const weeks: (Date | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    const monthName = month.toLocaleString("es-ES", {
      month: "long",
      year: "numeric",
    });
    const monthNameCap =
      monthName.charAt(0).toUpperCase() + monthName.slice(1);

    return (
      <div className="rounded-lg bg-white p-4">
        <h3 className="mb-4 text-center text-lg font-bold text-primary">
          {monthNameCap}
        </h3>

        <div className="mb-2 grid grid-cols-7 gap-1 text-center">
          {["L", "M", "MI", "J", "V", "S", "D"].map((day) => (
            <div key={day} className="text-xs font-semibold text-zinc-600">
              {day}
            </div>
          ))}
        </div>

        <div className="space-y-1">
          {weeks.map((week, weekIdx) => (
            <div
              key={weekIdx}
              className="grid grid-cols-7 gap-1"
            >
              {week.map((day, dayIdx) => {
                if (!day) {
                  return (
                    <div key={`empty-${dayIdx}`} className="aspect-square" />
                  );
                }

                const dateStr = formatDate(day);
                const isSelected = selectedDates.includes(dateStr);
                const isFuture = isFutureDate(new Date(day));

                return (
                  <button
                    key={dateStr}
                    onClick={() => isFuture && toggleDate(day)}
                    disabled={!isFuture}
                    className={`aspect-square rounded-lg text-sm font-medium transition ${
                      !isFuture
                        ? "text-zinc-300 bg-zinc-100 cursor-not-allowed"
                        : isSelected
                          ? "bg-cta text-white"
                          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                    }`}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const month1 = currentMonth;
  const month2 = getNextMonth(currentMonth);

  return (
    <div onBlur={() => onBlur?.()} tabIndex={0} role="group">
      <label className="mb-2 block text-sm font-semibold text-zinc-700">
        Elige los días de servicio
      </label>

      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={() => setCurrentMonth(getPrevMonth(currentMonth))}
          className="rounded-full p-2 hover:bg-zinc-100"
        >
          ‹
        </button>

        <span className="text-center text-sm font-semibold text-primary">
          Días seleccionados: {selectedDates.length}
        </span>

        <button
          onClick={() => setCurrentMonth(getNextMonth(currentMonth))}
          className="rounded-full p-2 hover:bg-zinc-100"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {renderCalendar(month1)}
        {renderCalendar(month2)}
      </div>

      {hasError && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
