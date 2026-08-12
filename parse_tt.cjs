const rawHtml = `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@delightszm/video/7567429144506567947" data-video-id="7567429144506567947" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@delightszm" href="https://www.tiktok.com/@delightszm?refer=embed">@delightszm</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`;

const jsx = rawHtml
  .replace(/class=/g, 'className=')
  .replace(/style="([^"]+)"/g, (match, styleString) => {
    const styleObj = styleString.split(';').reduce((acc, pair) => {
      let [key, value] = pair.split(':');
      if (key && value) {
        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        acc[key] = value.trim();
      }
      return acc;
    }, {});
    return `style={${JSON.stringify(styleObj)}}`;
  });

console.log(jsx);
