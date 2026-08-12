import { useEffect } from 'react';

export function TikTokEmbed() {
  return (
    <div className="w-full flex justify-center tiktok-wrapper relative z-20">
      <blockquote 
        className="tiktok-embed rounded-[32px] overflow-hidden" 
        cite="https://www.tiktok.com/@delightszm/video/7567429144506567947" 
        data-video-id="7567429144506567947" 
        style={{ maxWidth: "605px", minWidth: "325px" }} 
      >
        <section>
          <a target="_blank" title="@delightszm" href="https://www.tiktok.com/@delightszm?refer=embed">@delightszm</a>
        </section>
      </blockquote>
    </div>
  );
}
