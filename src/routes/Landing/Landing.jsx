import React, { useEffect, useRef, useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GridWork from "../../components/GridWork/GridWork";
import ExtraSection from "../../components/ExtraSection/ExtraSection";
import ExtraSectionRow from "../../components/ExtraSectionRow/ExtraSectionRow";
import { useNavigate } from "react-router-dom";

/* =========================
   CAROUSEL SIZE CONFIG
   ========================= */
const CAROUSEL_SIZES = {
  desktop: {
    square: 0.16, // Square images as vw multiplier
    wide: 0.3, // Wide images as vh multiplier
    tall: 0.1, // Tall images as vw multiplier
  },
  mobile: {
    square: 0.6, // Square images as vw multiplier
    wide: 0.25, // Wide images as vh multiplier
    tall: 0.5, // Tall images as vw multiplier
  },
};

/* =========================
   Desktop: Cursor Image Snake with Text in Canvas
   ========================= */
function CursorCarouselCanvas({
  totalImages,
  aspectRatioTolerance,
  imagePaths,
  distanceThreshold = 60,
  text,
  className = "",
}) {
  const canvasRef = useRef(null);
  const zoneRef = useRef(null);

  const dprRef = useRef(1);
  const rafRef = useRef(0);

  const [images, setImages] = useState([]);
  const [ready, setReady] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  const trailRef = useRef([]);
  const lastPosRef = useRef({ x: 0, y: 0, has: false });
  const currentImageIdxRef = useRef(0);

  // Load custom fonts
  useEffect(() => {
    const loadFonts = async () => {
      try {
        const serifFont = new FontFace(
          "InstrumentSerif",
          "url(/assets/fonts/InstrumentSerif-Regular.ttf)"
        );
        const symbolFont = new FontFace(
          "Symbola",
          "url(/assets/fonts/Symbola.ttf)"
        );

        const [loadedSerif, loadedSymbol] = await Promise.all([
          serifFont.load(),
          symbolFont.load(),
        ]);

        document.fonts.add(loadedSerif);
        document.fonts.add(loadedSymbol);
        setFontLoaded(true);
      } catch (error) {
        console.error("Font loading failed:", error);
        setFontLoaded(true);
      }
    };

    loadFonts();
  }, []);

  // Load images
  useEffect(() => {
    let alive = true;
    const loaders = imagePaths.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () =>
            resolve({
              img,
              naturalWidth: img.naturalWidth || img.width,
              naturalHeight: img.naturalHeight || img.height,
            });
          img.onerror = reject;
          img.src = src;
        })
    );
    Promise.all(loaders).then((loaded) => {
      if (!alive) return;
      setImages(loaded);
      setReady(true);
    });
    return () => {
      alive = false;
    };
  }, [imagePaths]);

  const computeDrawSize = (meta) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const ar = meta.naturalWidth / meta.naturalHeight;
    const sizes = CAROUSEL_SIZES.desktop;

    if (Math.abs(1 - ar) <= aspectRatioTolerance) {
      const w = vw * sizes.square;
      const h = (w / meta.naturalWidth) * meta.naturalHeight;
      return { w, h };
    }
    if (meta.naturalWidth > meta.naturalHeight) {
      const h = vh * sizes.wide;
      const w = (h / meta.naturalHeight) * meta.naturalWidth;
      return { w, h };
    }
    const w = vw * sizes.tall;
    const h = (w / meta.naturalWidth) * meta.naturalHeight;
    return { w, h };
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    dprRef.current = dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
  };

  const renderLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas || !fontLoaded) {
      rafRef.current = requestAnimationFrame(renderLoop);
      return;
    }
    const ctx = canvas.getContext("2d");
    const dpr = dprRef.current;

    // Fill with white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw images
    const parentRect = canvas.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset || 0;

    const trail = trailRef.current;
    for (let i = 0; i < trail.length; i++) {
      const { x: pageX, y: pageY, index } = trail[i];
      const meta = images[index];
      if (!meta) continue;

      const { w, h } = computeDrawSize(meta);
      const drawW = w * dpr;
      const drawH = h * dpr;

      const cssX = pageX - parentRect.left;
      const cssY = pageY - (parentRect.top + scrollY);
      const cx = cssX * dpr;
      const cy = cssY * dpr;

      ctx.drawImage(meta.img, cx - drawW / 2, cy - drawH / 2, drawW, drawH);
    }

    // Draw text at bottom with blend mode
    ctx.save();
    ctx.globalCompositeOperation = "difference";

    const fontSize = canvas.width * 0.064; // 6.4vw
    const lineHeight = fontSize * 0.94; // 94% leading
    const padding = 32 * dpr;

    ctx.fillStyle = "white";
    ctx.textBaseline = "bottom";

    const maxWidth = canvas.width - padding * 2;
    const x = padding;
    let y = canvas.height - padding;

    // Split text and arrow
    const parts = text.split("⤵");
    const mainText = parts[0].trim();
    const arrow = "⤵";

    // Render main text with InstrumentSerif
    ctx.font = `${fontSize}px InstrumentSerif, serif`;

    const words = mainText.split(" ");
    let line = "";
    const lines = [];

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        lines.push(line);
        line = words[i] + " ";
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    // Draw text from bottom up
    for (let i = lines.length - 1; i >= 0; i--) {
      ctx.fillText(lines[i], x, y);
      y -= lineHeight;
    }

    // Draw arrow with Symbola font on same line as last text
    ctx.font = `${fontSize}px Symbola, serif`;
    const lastLine = lines[lines.length - 1];
    const lastLineWidth = ctx.measureText(lastLine);
    ctx.fillText(arrow, x + lastLineWidth.width * 0.77, canvas.height * 0.95);

    ctx.restore();

    rafRef.current = requestAnimationFrame(renderLoop);
  };

  const handleMouseMove = (e) => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const x = e.clientX;
    const y = e.clientY + scrollY;

    const last = lastPosRef.current;
    if (!last.has) {
      lastPosRef.current = { x, y, has: true };
      return;
    }

    const dx = x - last.x;
    const dy = y - last.y;
    const dist = Math.hypot(dx, dy);

    if (dist >= distanceThreshold) {
      lastPosRef.current = { x, y, has: true };
      const t = trailRef.current.slice();
      if (t.length >= totalImages) t.shift();
      t.push({ x, y, index: currentImageIdxRef.current });
      trailRef.current = t;
      currentImageIdxRef.current =
        (currentImageIdxRef.current + 1) % images.length;
    }
  };

  useEffect(() => {
    if (!ready || !fontLoaded) return;
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const zone = zoneRef.current;
    zone?.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(renderLoop);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      zone?.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [ready, fontLoaded, images]);

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <div
        ref={zoneRef}
        className="absolute inset-0 w-full h-full z-20"
        style={{ pointerEvents: "auto" }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      />
    </div>
  );
}

/* =========================
   Mobile: Canvas Carousel (No Blend Mode, just images)
   ========================= */
function MobileCanvasCarousel({
  imagePaths,
  aspectRatioTolerance,
  intervalMs = 1000,
  className = "",
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const dprRef = useRef(1);

  const [images, setImages] = useState([]);
  const [ready, setReady] = useState(false);

  const idxRef = useRef(0);
  const lastTickRef = useRef(performance.now());

  useEffect(() => {
    let alive = true;
    Promise.all(
      imagePaths.map(
        (src) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () =>
              resolve({
                img,
                naturalWidth: img.naturalWidth || img.width,
                naturalHeight: img.naturalHeight || img.height,
              });
            img.onerror = reject;
            img.src = src;
          })
      )
    ).then((loaded) => {
      if (!alive) return;
      setImages(loaded);
      setReady(true);
    });
    return () => {
      alive = false;
    };
  }, [imagePaths]);

  const computeDrawSizeMobile = (meta) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const ar = meta.naturalWidth / meta.naturalHeight;
    const sizes = CAROUSEL_SIZES.mobile;

    if (Math.abs(1 - ar) <= aspectRatioTolerance) {
      const w = vw * sizes.square;
      const h = (w / meta.naturalWidth) * meta.naturalHeight;
      return { w, h };
    }
    if (meta.naturalWidth > meta.naturalHeight) {
      const h = vh * sizes.wide;
      const w = (h / meta.naturalHeight) * meta.naturalWidth;
      return { w, h };
    }
    const w = vw * sizes.tall;
    const h = (w / meta.naturalWidth) * meta.naturalHeight;
    return { w, h };
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    dprRef.current = dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      rafRef.current = requestAnimationFrame(draw);
      return;
    }
    const ctx = canvas.getContext("2d");
    const dpr = dprRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (images.length) {
      const now = performance.now();
      if (now - lastTickRef.current >= intervalMs) {
        idxRef.current = (idxRef.current + 1) % images.length;
        lastTickRef.current = now;
      }

      const centerX = canvas.width / 2;
      const centerY = Math.round(canvas.height * 0.34);
      const meta = images[idxRef.current];
      const { w, h } = computeDrawSizeMobile(meta);
      const drawW = w * dpr;
      const drawH = h * dpr;

      ctx.drawImage(
        meta.img,
        centerX - drawW / 2,
        centerY - drawH / 2,
        drawW,
        drawH
      );
    }

    rafRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    if (!ready) return;
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    rafRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(rafRef.current);
    };
  }, [ready, images]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full z-10 pointer-events-none ${className}`}
    />
  );
}

export default function Landing() {
  const navigate = useNavigate();

  const aspectRatioTolerance = 0.3;

  const carouselImages = [
    "assets/images/fold_cursor_carousel/fold_a.png",
    "assets/images/fold_cursor_carousel/fold_b.png",
    "assets/images/fold_cursor_carousel/fold_c.png",
    "assets/images/fold_cursor_carousel/fold_d.png",
    "assets/images/fold_cursor_carousel/fold_e.png",
    "assets/images/fold_cursor_carousel/fold_f.png",
    "assets/images/fold_cursor_carousel/fold_g.png",
    "assets/images/fold_cursor_carousel/fold_j.png",
    "assets/images/fold_cursor_carousel/fold_k.png",
    "assets/images/fold_cursor_carousel/fold_l.png",
    "assets/images/fold_cursor_carousel/fold_m.png",
    "assets/images/fold_cursor_carousel/fold_n.png",
    "assets/images/fold_cursor_carousel/fold_o.png",
    "assets/images/fold_cursor_carousel/fold_p.png",
    "assets/images/fold_cursor_carousel/fold_q.png",
  ];

  const totalImages = carouselImages.length;

  const heroText =
    "I'm Giacomo, a creative developer based near Milano. I mainly design and build websites and often dabble myself with other tasks due to demand. ⤵";
  return (
    <>
      <div className="relative h-[94dvh] overflow-hidden bg-white">
        {/* DESKTOP canvas with text - ABSOLUTE positioning */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <CursorCarouselCanvas
            totalImages={totalImages}
            aspectRatioTolerance={aspectRatioTolerance}
            imagePaths={carouselImages}
            distanceThreshold={60}
            text={heroText}
          />
        </div>

        {/* MOBILE: Canvas + separate text overlay */}
        <div className="md:hidden absolute inset-0 w-full h-full">
          <MobileCanvasCarousel
            imagePaths={carouselImages}
            aspectRatioTolerance={aspectRatioTolerance}
            intervalMs={400}
          />

          {/* Mobile text overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none flex items-end">
            <div className="w-full p-4">
              <div className="font-serif text-4xl leading-[94%] text-dark text-center">
                I'm Giacomo, a creative developer based near Milano. I mainly
                design and build websites and often dabble myself with other
                tasks due to demand. <span className="font-symbola">⤵</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of page */}
      <GridLayout cn="items-end">
        <SectionHeader
          content="Featured Work"
          hr={true}
          hideHrOnMobile={true}
        />
        <GridWork
          cols={6}
          video={`assets/videos/domu/domu_cover_square.mp4`}
          title={`Domu`}
          link="/work/domu"
        />
        <GridWork
          cols={3}
          image={`assets/images/work/regular/regular_thumb.png`}
          title={`Regular Magazine`}
          link="/work/regular"
        />
        <GridWork
          start={4}
          cols={6}
          video={`assets/videos/misuraemme.mp4`}
          title={`Misuraemme Moodboard Creator`}
          link="https://www.misuraemme.it/en/materials/moodboard-creator"
        />
        <GridWork
          cols={3}
          video={`assets/videos/logo_spin.mp4`}
          title={`Jack Marelli`}
          link="https://pitch.com/public/a11bd9a9-6432-4e14-8989-5f6288e39d51/4cb5ad97-18fa-47b2-ae99-d8e90e164b47"
        />
        <GridWork
          cols={6}
          image={`assets/images/work/sinapsi/propic_negative.png`}
          title={`Sinapsi`}
          link="/work/sinapsi"
        />
        <div
          onClick={() => navigate("/work")}
          className="col-span-12 md:col-span-3 h-fit md:aspect-square border md:border-2 border-dark flex flex-col justify-center items-center cursor-pointer mb-4 md:mb-8 pt-2"
        >
          <h2 className="font-serif text-3xl md:text-7xl">All Work</h2>
          <span className="font-symbola text-4xl md:text-7xl -mt-4 md:-mt-8">
            ⇁
          </span>
        </div>
        <p className="col-start-1 col-span-full font-serif text-3xl/8 md:text-6xl">
          I am all for the details: visual hierarchies, communication throught
          color and shapes, perfect spacings. Design and code are mediums of
          expression, through which I bring ideas to life with precision and
          flair.
        </p>
        <SectionHeader content="Extra" hr={false} />
        <ExtraSection title="Services">
          <ExtraSectionRow content="Web Design & Development" bt={false} />
          <ExtraSectionRow content="UI/UX Design" />
          <ExtraSectionRow content="Interaction & IoT" />
          <ExtraSectionRow content="Project Management" />
        </ExtraSection>

        <ExtraSection title="Approach">
          <ExtraSectionRow
            content="Always driven by the client's goal"
            bt={false}
          />
          <ExtraSectionRow content="Actively recommending improvements" />
          <ExtraSectionRow content="Pick two: quality, speed, budget" />
        </ExtraSection>
      </GridLayout>
    </>
  );
}
