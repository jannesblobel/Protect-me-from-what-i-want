import { usePointToPointConstraint, useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { createRef, useCallback, useEffect } from "react";

const cursor = createRef();

function useDragConstraint(child) {
  const [, , api] = usePointToPointConstraint(cursor, child, {
    pivotA: [0, 0, 0],
    pivotB: [0, 0, 0],
  });
  useEffect(() => void api.disable(), [api]);
  const onPointerUp = useCallback(
    (e) => {
      document.body.style.cursor = "grab";
      e.target.releasePointerCapture(e.pointerId);
      api.disable();
    },
    [api]
  );
  const onPointerDown = useCallback(
    (e) => {
      document.body.style.cursor = "grabbing";
      e.stopPropagation();
      e.target.setPointerCapture(e.pointerId);
      api.enable();
    },
    [api]
  );
  return { onPointerUp, onPointerDown };
}

function Cursor() {
  const [, api] = useSphere(
    () => ({
      collisionFilterMask: 0,
      type: "Kinematic",
      mass: 0,
      args: [0.25],
    }),
    cursor
  );
  return useFrame((state) => {
    const x = state.pointer.x * state.viewport.width;
    const y = (state.pointer.y * state.viewport.height) / 1.9 + -x / 3.5;
    api.position.set(x / 1.4, y, 0);
  });
}

export { Cursor, cursor, useDragConstraint };
