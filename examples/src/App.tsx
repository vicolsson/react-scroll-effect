import { useEffect, useRef, useState } from "react";
import ReactScrollEffect from "react-scroll-effect";

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    setScrollContainer(scrollContainerRef?.current);
  }, [scrollContainerRef]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-white overflow-y-auto" ref={scrollContainerRef}>
      <div className="mx-auto h-48 flex items-center justify-center bg-yellow-500 drop-shadow-xl">
        <h1 className="text-5xl font-bold text-center">React Scroll Effect - Examples</h1>
      </div>
      <div className="mx-auto">
        <ReactScrollEffect.Container
          scrollContainer={scrollContainer}
          scrollDistance={windowHeight * 3}
          onlyAnimateFullyVisible
          containerClassName="inset-0 flex flex-col items-center justify-center"
        >
          {(percentage) => (
            <>
              <ReactScrollEffect.Animation
                percentage={percentage}
                animationClassName="animate-quickFadeOut"
                className="absolute bottom-52 flex items-center justify-center"
              >
                <div className="animate-blinking flex flex-col items-center justify-center">
                  <h1 className="text-2xl">Scroll down please</h1>
                  <br />
                  <img src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow-direction/down-arrow.png" alt="" className="w-24" />
                </div>
              </ReactScrollEffect.Animation>

              <ReactScrollEffect.Animation
                percentage={percentage}
                animationClassName="animate-delayedTextFadeIn"
                className="absolute inset-0 w-full h-48 bg-yellow-500 drop-shadow-xl"
              >
                <h1 className="text-5xl">react-scroll-effect</h1>
              </ReactScrollEffect.Animation>

              <ReactScrollEffect.Animation
                percentage={percentage}
                animationClassName="animate-scrollMove2"
              >
                <img src="https://www.nicepng.com/png/full/22-226389_mlg-doge-png-clip-art-royalty-free-stock.png" className="w-8/12" alt=""/>
              </ReactScrollEffect.Animation>

              <ReactScrollEffect.Animation
                percentage={percentage}
                animationClassName="animate-simpleTextFadeIn"
              >
                <h1 className="text-4xl">Amazing!</h1>
              </ReactScrollEffect.Animation>

              <ReactScrollEffect.Animation
                percentage={percentage}
                animationClassName="animate-delayedTextFadeIn"
              >
                <h1 className="text-4xl">😮😮😮</h1>
              </ReactScrollEffect.Animation>
            </>
          )}
        </ReactScrollEffect.Container>
      </div>

      <div className="mx-auto bg-red-500 w-screen">
        <ReactScrollEffect.Container
          scrollContainer={scrollContainer}
          scrollDistance={windowHeight}
          containerClassName="inset-0 flex flex-col items-center justify-center"
        >
          {(percentage) => (
            <>
              <ReactScrollEffect.Animation
                percentage={percentage}
                animationClassName="animate-scaleUp"
                className="w-full flex flex-col items-center justify-center"
              >
                <h1 className="text-xl">So easy to use</h1>
              </ReactScrollEffect.Animation>
              <ReactScrollEffect.Animation
                percentage={percentage}
                animationClassName="animate-swingIn"
                className="w-full flex flex-col items-center justify-center"
              >
                <>
                  <br/>
                  <pre className="w-6/12 min-w-[450px] max-w-full bg-neutral-800 p-2 rounded-md">
                    <span className="text-violet-400">@keyframes </span>
                    <span className="text-sky-300">fadeIn </span>
                    <span className="text-white">{'{'}</span><br />
                    <span className="text-white">{'  0% {'}</span><br />
                    <span className="text-sky-300">    opacity</span>
                    <span className="text-white">: </span>
                    <span className="text-green-300">0</span>
                    <span className="text-white">;</span>
                    <br/>
                    <span className="text-white">{'  }'}</span>
                    <br/>
                    <br/>
                    <span className="text-white">{'  100% {'}</span>
                    <br/>
                    <span className="text-sky-300">    opacity</span>
                    <span className="text-white">: </span>
                    <span className="text-green-300">100%</span>
                    <span className="text-white">;</span>
                    <br/>
                    <span className="text-white">{'  }'}</span>
                    <br/>
                    <span className="text-white">{'}'}</span>
                    <br/>
                    <br/>
                    <span className="text-amber-400">.animate-fadeIn </span>
                    <span className="text-white">{'{'}</span>
                    <br/>
                    <span className="text-sky-300">  animation</span>
                    <span className="text-white">: fadeIn </span>
                    <span className="text-orange-500">ease</span>
                    <span className="text-white">;</span>
                    <br/>
                    <span className="text-white">{'}'}</span>
                    <br/>
                    <br/>
                    <span className="text-sky-700">const </span>
                    <span className="text-yellow-300">MyComponent </span>
                    <span className="text-white">= () </span>
                    <span className="text-sky-700">{'=> '}</span>
                    <span className="text-white">{'{'}</span>
                    <br/>
                    <span className="text-neutral-500">{'  <'}</span>
                    <span className="text-emerald-400">{'ReactScrollEffect.Container'}</span>
                    <br/>
                    <span className="text-sky-300">    scrollContainer</span>
                    <span className="text-white">=</span>
                    <span className="text-sky-700">{'{'}</span>
                    <span className="text-sky-300">document.body</span>
                    <span className="text-sky-700">{'}'}</span>
                    <br/>
                    <span className="text-sky-300">    scrollDistance</span>
                    <span className="text-white">=</span>
                    <span className="text-sky-700">{'{'}</span>
                    <span className="text-sky-300">window</span>
                    <span className="text-white">.</span>
                    <span className="text-sky-300">innerHeight </span>
                    <span className="text-white">* </span>
                    <span className="text-green-300">2</span>
                    <span className="text-sky-700">{'}'}</span>
                    <br/>
                    <span className="text-neutral-500">{'  >'}</span>
                    <br/>
                    <span className="text-sky-700">{'    {'}</span>
                    <span className="text-white">(</span>
                    <span className="text-sky-300">scrollPercentage</span>
                    <span className="text-white">) </span>
                    <span className="text-sky-700">{'=> '}</span>
                    <span className="text-white">(</span>
                    <br/>
                    <span className="text-neutral-500">{'      <'}</span>
                    <span className="text-emerald-400">{'ReactScrollEffect.Animation'}</span>
                    <br/>
                    <span className="text-sky-300">        percentage</span>
                    <span className="text-white">=</span>
                    <span className="text-sky-700">{'{'}</span>
                    <span className="text-sky-300">scrollPercentage</span>
                    <span className="text-sky-700">{'}'}</span>
                    <br/>
                    <span className="text-sky-300">        animationClassName</span>
                    <span className="text-white">=</span>
                    <span className="text-orange-500">"animate-fadeIn"</span>
                    <br/>
                    <span className="text-neutral-500">{'      >'}</span>
                    <br/>
                    <span className="text-neutral-500">{'        <'}</span>
                    <span className="text-sky-700">div</span>
                    <span className="text-neutral-500">{'>'}</span>
                    <br/>
                    <span className="text-white">          Fading text!</span>
                    <br/>
                    <span className="text-neutral-500">{'        </'}</span>
                    <span className="text-sky-700">div</span>
                    <span className="text-neutral-500">{'>'}</span>
                    <br/>
                    <span className="text-neutral-500">{'      <'}</span>
                    <span className="text-emerald-400">{'/ReactScrollEffect.Animation'}</span>
                    <span className="text-neutral-500">{'>'}</span>
                    <br/>
                    <span className="text-white">    )</span>
                    <span className="text-sky-700">{'}'}</span>
                    <br/>
                    <span className="text-neutral-500">{'  <'}</span>
                    <span className="text-emerald-400">{'/ReactScrollEffect.Container'}</span>
                    <span className="text-neutral-500">{'>'}</span>
                    <br/>
                    <span className="text-white">{'};'}</span>
                  </pre>
                </>
              </ReactScrollEffect.Animation>
            </>
          )}
        </ReactScrollEffect.Container>
      </div>

    </div>
  );
}

export default App;
