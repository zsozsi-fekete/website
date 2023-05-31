import { useState, useLayoutEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

const PortalModal = ({
  children,
  wrapperId,
}: {
  children: ReactNode;
  wrapperId: string;
}) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId) as HTMLElement;
    if (!element) {
      element = document.getElementById("modal-id") as HTMLElement;
    }
    setPortalElement(element);
  }, [wrapperId]);

  if (!portalElement) return null;

  return createPortal(children, portalElement);
};

export default PortalModal;
