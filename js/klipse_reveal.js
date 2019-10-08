{   
    let createIFrame = (src) => {
        return `<iframe sandbox="allow-scripts" height="500px" width="70%" srcdoc='
        <pre>
          <code class=&quot;klipse&quot;>
            ${src}
          </code>
        </pre>
        <link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;css/codemirror.css&quot;>
          <script>
            window.klipse_settings = {
              selector: &quot;.klipse&quot;
            };
          </script>
          <script src=&quot;js/klipse_plugin.js&quot;></script>
        '>
        </iframe>`
    };
    
    let klipsify = (elem) => {
        elem.innerHTML = createIFrame(elem.innerHTML);
        return elem;
    }

    document.querySelectorAll('klipse-snippet').forEach(x => klipsify(x))
}