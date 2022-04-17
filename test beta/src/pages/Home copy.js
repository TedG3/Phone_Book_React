import "./Home.css";
function update(letter){
  const JSON = require('./Contacts.json');
  console.log('ds')
}
const element =(<>
<button onClick={update("a")} id="update">Update</button>
<nav  className="alphabet_nav">
    <a className="alphabet"href="#a"><button className="start">a</button></a>
    <a href="#b"className="alphabet"><button>b</button></a>
    <a href="#c"className="alphabet"><button>c</button></a>
    <a href="#d"className="alphabet"><button>d</button></a>
    <a href="#e"className="alphabet"><button>e</button></a>
    <a href="#f"className="alphabet"><button>f</button></a>
    <a href="#g"className="alphabet"><button>g</button></a>
    <a href="#h"className="alphabet"><button>h</button></a>
    <a href="#i"className="alphabet"><button>i</button></a>
    <a href="#j"className="alphabet"><button>j</button></a>
    <a href="#k"className="alphabet"><button>k</button></a>
    <a href="#l"className="alphabet"><button>l</button></a>
    <a href="#m"className="alphabet"><button>m</button></a>
    <a href="#n"className="alphabet"><button>n</button></a>
    <a href="#o"className="alphabet"><button>o</button></a>
    <a href="#p"className="alphabet"><button>p</button></a>
    <a href="#q"className="alphabet"><button>q</button></a>
    <a href="#r"className="alphabet"><button>r</button></a>
    <a href="#s"className="alphabet"><button>s</button></a>
    <a href="#t"className="alphabet"><button>t</button></a>
    <a href="#u"className="alphabet"><button>u</button></a>
    <a href="#v"className="alphabet"><button>v</button></a>
    <a href="#w"className="alphabet"><button>w</button></a>
    <a href="#x"className="alphabet"><button>x</button></a>
    <a href="#y"className="alphabet"><button>y</button></a>
    <a href="#z"className="alphabet"><button>z</button></a>
    <a href="##"className="alphabet"><button className="end">#</button></a>
  </nav>
<div  className="scroll-container">
  <div  className="scroll-page" id="a">A</div>
  <h2>
  <div  className="scroll-page" id="b">B</div>
  <div  className="scroll-page" id="c">C</div>
  <div  className="scroll-page" id="d">D</div>
  <div  className="scroll-page" id="e">E</div>
  <div  className="scroll-page" id="f">F</div>
  <div  className="scroll-page" id="g">G</div>
  <div  className="scroll-page" id="h">H</div>
  <div  className="scroll-page" id="i">I</div>
  <div  className="scroll-page" id="j">J</div>
  <div  className="scroll-page" id="k">K</div>
  <div  className="scroll-page" id="l">L</div>
  <div  className="scroll-page" id="m">M</div>
  <div  className="scroll-page" id="n">N</div>
  <div  className="scroll-page" id="o">O</div>
  <div  className="scroll-page" id="p">P</div>
  <div  className="scroll-page" id="q">Q</div>
  <div  className="scroll-page" id="r">R</div>
  <div  className="scroll-page" id="s">S</div>
  <div  className="scroll-page" id="t">T</div>
  <div  className="scroll-page" id="u">U</div>
  <div  className="scroll-page" id="v">V</div>
  <div  className="scroll-page" id="w">W</div>
  <div  className="scroll-page" id="x">X</div>
  <div  className="scroll-page" id="y">Y</div>
  <div  className="scroll-page" id="z">Z</div>
  <div  className="scroll-page" id="#">#</div>
</div>

  </>);

const Home = () => {
    return element;
  };
  
  export default Home;