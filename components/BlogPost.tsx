import { PropsWithChildren, useEffect, useRef, useState } from "react";

export function BlogPost({ children }: PropsWithChildren) {
  const contentRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedImage, setSelectedImage] = useState<{ source: string; description: string } | null>(null);

  useEffect(() => {
    contentRef.current?.querySelectorAll("img").forEach((image) => {
      if (!image.closest("a")) {
        image.tabIndex = 0;
        image.setAttribute("role", "button");
        image.setAttribute("aria-label", `Enlarge image: ${image.alt || "Blog image"}`);
      }
    });
  }, [children]);

  useEffect(() => {
    if (!selectedImage) return;
    dialogRef.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  function openImage(image: HTMLImageElement) {
    setSelectedImage({ source: image.dataset.fullSrc || image.currentSrc || image.src, description: image.alt });
  }

  return (
    <>
      <main
        id="main"
        className="blog-post"
        ref={contentRef}
        onClick={(event) => {
          if (event.target instanceof HTMLImageElement) {
            event.preventDefault();
            openImage(event.target);
          }
        }}
        onKeyDown={(event) => {
          if (event.target instanceof HTMLImageElement && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            openImage(event.target);
          }
        }}
      >
        {children}
      </main>
      <dialog
        className="image-viewer"
        ref={dialogRef}
        aria-label="Enlarged blog image"
        onClose={() => setSelectedImage(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <button className="image-viewer-close" type="button" onClick={() => dialogRef.current?.close()} autoFocus>
          Close
        </button>
        {selectedImage && <img src={selectedImage.source} alt={selectedImage.description} />}
      </dialog>
    </>
  );
}
