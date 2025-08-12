
const { useState, useEffect, useMemo } = React;

const LESSONS = [
  { title: "التحيات الأساسية", items: [
    { de: "Hallo", ar: "مرحباً", hint: "ها-لو" },
    { de: "Guten Morgen", ar: "صباح الخير", hint: "جوتِن مورجن" },
    { de: "Guten Abend", ar: "مساء الخير", hint: "جوتِن آبنِد" },
    { de: "Tschüss", ar: "إلى اللقاء", hint: "تشوس" },
    { de: "Auf Wiedersehen", ar: "وداعاً", hint: "أوف فيدرزين" },
  ]}
];

function speak(text, lang="de-DE") {
  if (!("speechSynthesis" in window)) {
    alert("النطق غير مدعوم");
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  window.speechSynthesis.speak(utter);
}

function App() {
  const [idx, setIdx] = useState(0);
  const item = LESSONS[0].items[idx];
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">{LESSONS[0].title}</h1>
      <div className="bg-white/20 rounded-xl p-4 mb-4">
        <div className="text-3xl mb-2">{item.de}</div>
        <div className="text-xl mb-2">{item.ar}</div>
        <div className="text-sm">{item.hint}</div>
      </div>
      <button onClick={()=>speak(item.de,"de-DE")} className="bg-white text-black px-4 py-2 rounded mr-2">🔊 ألماني</button>
      <button onClick={()=>speak(item.ar,"ar-SA")} className="bg-white text-black px-4 py-2 rounded">🔊 عربي</button>
      <div className="mt-4">
        <button onClick={()=>setIdx((idx-1+LESSONS[0].items.length)%LESSONS[0].items.length)} className="bg-black/30 px-3 py-1 rounded mr-2">السابق</button>
        <button onClick={()=>setIdx((idx+1)%LESSONS[0].items.length)} className="bg-black/30 px-3 py-1 rounded">التالي</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
