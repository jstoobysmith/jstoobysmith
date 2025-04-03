RevealInlineSvg = () => ({

	id: 'inline-svg',
// https://github.com/ranr01/reveal-inline-svg
  init: reveal => reveal.getSlides().forEach(function(s){
    s.querySelectorAll("object").forEach(function(e) {
      e.addEventListener("load", function() {
        var params = e.querySelectorAll("param");
        //replacing object with inline svg
        if (e.contentDocument) {
          let svgNode = e.contentDocument.documentElement.cloneNode(true);
          svgNode.setAttribute('style', e.getAttribute('style'))
          e.parentElement.replaceChild(svgNode, e);
        }
        else {
          console.log("oops");
        }
        //Setting "preserveAspectRatio" for each SVG to scale correctly
        s.querySelectorAll("svg").forEach(function(e){
          e.setAttribute("preserveAspectRatio","xMidYMid meet");
          e.removeAttribute("height");
        });
        //applying formating according to params
        params.forEach(function(p){
          //get svg element with the same id
          [].forEach.call(s.querySelectorAll(p.getAttribute("data-svg-target")), function(svg_e) {
            //apply the attributes of the param element to the svg element
            var attrs = p.attributes;
            for(var i = attrs.length - 1; i >= 0; i--) {
              if (attrs[i].name == "data-svg-target") {
                ;
              }
              else if (attrs[i].name == "class") {
                svg_e.setAttribute("class", svg_e.getAttribute("class") + " " + attrs[i].value);
              }
              else {
                svg_e.setAttribute(attrs[i].name, attrs[i].value);
              }
            }
          });
        });
      });
    });
  })
});