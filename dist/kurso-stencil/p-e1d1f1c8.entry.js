import{r as e,h as o}from"./p-991e93b6.js";class t{constructor(o){e(this,o)}render(){return o("main",null,o("header",null,o("slot",{name:"header"})),o("section",null,o("slot",{name:"section"})),o("footer",null,o("slot",{name:"footer"})))}}t.style='main{color:gainsboro;margin:0 auto;min-height:100vh;display:grid;grid-template-columns:100%;grid-template-rows:1fr 200px;grid-template-areas:"my-section my-section my-section"\n    "my-footer my-footer my-footer"}section{grid-area:my-section;background-color:white}footer{grid-area:my-footer;background-color:rgb(14, 13, 13)}@media (max-width: 600px){main{grid-template-columns:1fr 100px;grid-template-rows:1fr 50px;grid-template-areas:"my-section my-section my-section"\n      "my-footer my-footer my-footer"}}@media (min-width: 600px) and (max-width: 1000px){main{grid-template-columns:1fr 200px;grid-template-rows:1fr 50px;grid-template-areas:"my-section my-section my-section"\n      "my-footer my-footer my-footer"}}@media (min-width: 1001px){main{grid-template-columns:1fr 75px;grid-template-rows:1fr\n      75px;grid-template-areas:"my-section my-section my-section"\n      "my-footer my-footer my-footer"}}';export{t as home_layout}