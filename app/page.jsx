"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("http://localhost:421/be/api/cv/download", {
        method: "GET",
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Mahinga_Rodin_CV.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      } else {
        console.error("Failed to download CV");
      }
    } catch (error) {
      console.error("Error downloading CV: ", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-between items-center xl:flex-row xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Software Programmer</span>
            <h1 className="h1">
              Hello I’m <br />{" "}
              <span className="text-accent">Mahinga Rodin</span>
            </h1>
            <p className="mx-w-[500px] mb-9 text-white/80">
              I excel at crafting efficient software systems and am also
              proficient in various programming languages and technologies.
            </p>
            {/* button and socials */}
            <div className="flex flex-col gap-8 items-center xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex gap-2 items-center uppercase"
                onClick={handleDownloadCV}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <span>Downloading...</span>
                ) : (
                  <>
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </>
                )}
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
