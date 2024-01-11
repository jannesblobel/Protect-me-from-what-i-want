import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

//unused for now

interface ScrollManagerProps {
  section: number;
  onSectionChange: (section: number) => void;
}

export default function ScrollManager(props: ScrollManagerProps) {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");
  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [data.el, section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.offset;
      return;
    }
    console.log(data.offset);

    const curSection = Math.round(data.offset * data.pages);
    if (data.offset > lastScroll.current && curSection === 0) {
      onSectionChange(1);
    }
    if (
      data.offset < lastScroll.current &&
      data.offset < 1 / (data.pages - 1)
    ) {
      onSectionChange(0);
    }
    lastScroll.current = data.offset;
  });

  return null;
}
