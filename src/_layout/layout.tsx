import { ReactNode, useState } from "preact/compat";
import { Particles } from "../components/particles/particles";
import { toCanvas } from "html-to-image";
import { jsPDF } from "jspdf";
import { ceil, floor } from "lodash";

interface LayoutProps {
  header?: ReactNode;
  content?: ReactNode;
  bottom?: ReactNode;
}

export const Layout = ({ header, content, bottom }: LayoutProps) => {
  return (
    <div className="flex justify-center w-fit">
      <div
        className="flex-col bg-white relative"
        id="element-to-print"
        style={{
          width: "210mm",
          minWidth: "210mm",
        }}
      >
        <div className="relative z-10">{header}</div>
        <div className="relative z-10">{content}</div>
        {bottom}
        <Particles className="absolute left-0 top-0 w-full h-full" />
      </div>
      {localStorage.getItem("showDownloadButton") === "true" && (
        <div className="flex flex-row fixed bottom-2 right-2 z-10">
          <DownloadButton></DownloadButton>
        </div>
      )}
    </div>
  );
};

const createPdfDocument = () => {
  // Default export is a4 paper, portrait, using millimeters for units
  const doc = new jsPDF({
    format: "a4",
    unit: "mm",
  });

  doc.setDisplayMode(1);

  return doc;
};

const DownloadButton = () => {
  const [downloading, setDownloading] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={async () => {
          try {
            setDownloading(true);
            var element = document.getElementById(
              "element-to-print"
            ) as HTMLDivElement;

            // I see the quality of html-to-image is better than html2canvas
            const canvasElement = await toCanvas(element);
            const canvasContext = canvasElement.getContext("2d")!;
            const imageWidth = canvasElement.width;
            const imageHeight = canvasElement.height;

            const pdfDoc = createPdfDocument();
            const { width: pdfPageWidth, height: pdfPageHeight } =
              pdfDoc.internal.pageSize;

            const ratio = imageWidth / pdfPageWidth;
            const numOfPages = ceil(imageHeight / (ratio * pdfPageHeight));
            const pageMarginTop = 4;
            const pageMarginBottom = 4;
            let previousImageHeight = 0;

            for (let index = 0; index < numOfPages; index++) {
              if (index !== 0) {
                pdfDoc.addPage();
              }
              let imageSectionHeight = 0;
              if (index === numOfPages - 1) {
                imageSectionHeight = imageHeight - previousImageHeight; // remain content
              } else if (index === 0) {
                imageSectionHeight = floor(
                  (pdfPageHeight - pageMarginBottom - 1) * ratio
                );
              } else if (index === 1) {
                imageSectionHeight = floor(
                  (pdfPageHeight - pageMarginBottom - pageMarginTop - 4) * ratio
                );
              } else {
                imageSectionHeight = floor(
                  (pdfPageHeight - pageMarginBottom - pageMarginTop) * ratio
                );
              }

              pdfDoc.addImage(
                canvasContext?.getImageData(
                  0,
                  previousImageHeight,
                  imageWidth,
                  imageSectionHeight
                ),
                0,
                index === 0 ? 0 : pageMarginTop,
                pdfPageWidth,
                imageSectionHeight / ratio
              );

              previousImageHeight += imageSectionHeight;
            }

            pdfDoc.setPage(1);
            pdfDoc.setFillColor(255, 255, 255);
            pdfDoc.rect(145, 250, 100, 100, "F");

            pdfDoc.setPage(2);
            pdfDoc.setFillColor(255, 255, 255);
            pdfDoc.rect(145, 0, 100, 200, "F");

            const rectImageWidth = 300;
            const rectImageHeight = 1000;
            pdfDoc.addImage(
              canvasContext.getImageData(
                680,
                1180,
                rectImageWidth,
                rectImageHeight
              ),
              145,
              pageMarginTop,
              rectImageWidth / ratio,
              rectImageHeight / ratio
            );

            // add links to pdf
            pdfDoc.setPage(1);
            pdfDoc.setFillColor(0, 0, 0);

            // pdfDoc.rect(145, 0, 65, 8);
            pdfDoc.link(145, 0, 65, 8, {
              url: "https://kernel-dang.github.io/my-cv/",
            });

            // pdfDoc.rect(155, 92, 50, 6);
            pdfDoc.link(155, 92, 50, 6, {
              url: "mailto:kerneldang@gmail.com",
            });

            // pdfDoc.rect(155, 100, 50, 6);
            pdfDoc.link(155, 100, 50, 6, {
              url: "https://www.facebook.com/kernel.dang",
            });

            // pdfDoc.rect(155, 107, 50, 6);
            pdfDoc.link(155, 107, 50, 6, {
              url: "https://www.linkedin.com/in/kernel-dang",
            });

            pdfDoc.setPage(2);
            // pdfDoc.rect(189, 144, 13, 3);
            pdfDoc.link(189, 150, 13, 3, {
              url: "https://www.linkedin.com/in/kernel-dang/#recommendations",
            });

            pdfDoc.save("DangThanhNhan_CV.pdf");
          } catch (error) {
            console.error("oops, something went wrong!", error);
          } finally {
            setDownloading(false);
          }
        }}
        class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex flex-row gap-2 items-center"
      >
        {!downloading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        )}
        {downloading && (
          <svg
            class="animate-spin size-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        Download PDF
      </button>
      <button
        type="button"
        onClick={() => {
          const particles = document.querySelector(
            "#particles-js"
          ) as HTMLElement;
          if (particles) {
            particles.style.display =
              particles.style.display === "none" ? "block" : "none";
          }
        }}
        class="cursor-pointer text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 flex flex-row gap-2 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
        Toggle Particles
      </button>
    </>
  );
};
