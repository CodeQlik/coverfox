"use client";
import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    bg: "bg-gradient-to-br from-green-400 to-green-300",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".15"/><g><circle cx="16" cy="16" r="10" fill="#fff" fillOpacity=".15"/><path d="M16 10v8M12 16h8" stroke="#fff" strokeWidth="2"/></g></svg>
    ),
    title: "Investment Plans",
    subtitle: (
      <>
        Invest <span className="font-bold">₹10K</span> and Get<br />
        <span className="font-bold text-2xl">₹1 Crore</span> return*
      </>
    ),
    cta: "View plans",
  },
  {
    bg: "bg-gradient-to-br from-blue-500 to-blue-400",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".15"/><g><path d="M16 10a6 6 0 016 6v2a6 6 0 01-12 0v-2a6 6 0 016-6z" fill="#fff" fillOpacity=".15"/><path d="M16 10v8" stroke="#fff" strokeWidth="2"/></g></svg>
    ),
    title: "Health Insurance",
    subtitle: (
      <>
        Book <span className="font-bold">Free Health Insurance<br />Consultation</span> at home
      </>
    ),
    cta: "Book home visit",
  },
  {
    bg: "bg-gradient-to-br from-pink-400 to-purple-300",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".15"/><g><rect x="10" y="14" width="12" height="8" rx="2" fill="#fff" fillOpacity=".15"/><rect x="14" y="10" width="4" height="4" fill="#fff" fillOpacity=".15"/></g></svg>
    ),
    title: "SIP Calculator",
    subtitle: (
      <>
        Make investment simple<br />with our <span className="font-bold">SIP calculator</span>
      </>
    ),
    cta: "Calculate now",
  },
  {
    bg: "bg-gradient-to-br from-yellow-400 to-orange-300",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".15"/><g><rect x="10" y="14" width="12" height="8" rx="2" fill="#fff" fillOpacity=".15"/></g></svg>
    ),
    title: "Travel Insurance",
    subtitle: (
      <>
        Secure your trip with<br />comprehensive coverage
      </>
    ),
    // No cta
  },
  {
    bg: "bg-gradient-to-br from-purple-400 to-pink-300",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".15"/><g><rect x="10" y="14" width="12" height="8" rx="2" fill="#fff" fillOpacity=".15"/></g></svg>
    ),
    title: "Car Insurance",
    subtitle: (
      <>
        Upto <span className='font-bold'>91% Discount</span> on car insurance
      </>
    ),
    cta: "Get quote",
  },
  {
    bg: "bg-gradient-to-br from-cyan-400 to-blue-300",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".15"/><g><rect x="10" y="14" width="12" height="8" rx="2" fill="#fff" fillOpacity=".15"/></g></svg>
    ),
    title: "Home Insurance",
    subtitle: (
      <>
        <span className="font-bold">₹50 Lakh Cover</span> for Your Home Insurance starting at Just <span className="font-bold">₹80/month*</span>
      </>
    ),
    // No cta
  },
  {
    bg: "bg-gradient-to-br from-red-400 to-yellow-300",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".15"/><g><rect x="10" y="14" width="12" height="8" rx="2" fill="#fff" fillOpacity=".15"/></g></svg>
    ),
    title: "AskPB",
    subtitle: (
      <>
        Got a <span className="font-bold">question about insurance?</span><br />Write to us
      </>
    ),
    cta: "Contact us",
  },
];

function getCardsPerView() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

const ServicesSlider = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setCardsPerView(getCardsPerView());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide by 1 card (pause while dragging)
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Get the slides to show, wrap if needed
  const getVisibleSlides = () => {
    let visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      visible.push(slides[(current + i) % slides.length]);
    }
    return visible;
  };

  // Drag/Swipe handlers
  function onDragStart(e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
    setIsDragging(true);
    dragStartX.current = (e.type === "touchstart" ? (e as React.TouchEvent<HTMLDivElement>).touches[0].clientX : (e as React.MouseEvent<HTMLDivElement>).clientX);
    dragDelta.current = 0;
  }
  function onDragMove(e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const clientX = e.type === "touchmove" ? (e as React.TouchEvent<HTMLDivElement>).touches[0].clientX : (e as React.MouseEvent<HTMLDivElement>).clientX;
    dragDelta.current = clientX - dragStartX.current;
  }
  function onDragEnd() {
    setIsDragging(false);
    if (dragDelta.current > 50) {
      // Slide right
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (dragDelta.current < -50) {
      // Slide left
      setCurrent((prev) => (prev + 1) % slides.length);
    }
    dragDelta.current = 0;
  }

  // Dots logic
  const numSets = slides.length;

  return (
    <section className="w-full bg-[#F5F8FC] py-8 flex flex-col items-center">
      <div className="max-w-6xl w-full overflow-x-hidden">
        <div
          ref={containerRef}
          className="flex justify-center items-stretch gap-6 transition-transform duration-500 select-none"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={() => isDragging && onDragEnd()}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          {getVisibleSlides().map((slide, idx) => (
            <div
              key={idx}
              className="flex-grow flex-shrink basis-0 flex items-stretch"
            >
              <div className={`w-full h-64 rounded-2xl shadow-lg flex flex-col gap-4 text-white relative ${slide.bg}`}
                   style={{ minHeight: 220 }}>
                <div className="absolute top-4 right-4">{slide.icon}</div>
                <div className="text-sm opacity-80 mb-1 p-8 pb-0">{slide.title}</div>
                <div className="text-2xl font-bold mb-2 px-8">{slide.subtitle}</div>
                {slide.cta && (
                  <div className="px-8 mt-auto mb-8">
                    <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-50 transition w-max">
                      {slide.cta}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-4">
        {Array.from({ length: slides.length }).map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${current === idx ? "bg-blue-500" : "bg-blue-200"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide set ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSlider; 