import Content from "./Components/content";
import Header from "./Components/headers";
import ParagraphProvider from "./Contexts/paragraph";


function App() {
  return (
    <div className='h-full w-full text-center p-2 bg-slate-500 text-white'>
      <ParagraphProvider>
        <Header />
        <Content />
      </ParagraphProvider>
    </div>
  );
}

export default App;
