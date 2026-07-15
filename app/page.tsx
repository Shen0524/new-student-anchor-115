"use client";

import { useState } from "react";

type EventItem = {
  time: string;
  duration: string;
  title: string;
  tags: string[];
  note: string;
  category: "learning" | "global" | "community" | "career" | "break";
};

const days: Record<"day1" | "day2", { title: string; place: string; events: EventItem[] }> = {
  day1: {
    title: "Day 1｜認識學系與未來",
    place: "正心樓 0525 教室",
    events: [
      { time: "08:20", duration: "90 分鐘", title: "學系大探索", tags: ["沈祐成主任", "0525 教室"], note: "打開學系全貌，建立兩天探索旅程的起點。", category: "learning" },
      { time: "09:50", duration: "10 分鐘", title: "學涯定錨探索課程・前測", tags: ["0525 教室"], note: "記錄進入課程前的想法與期待。", category: "learning" },
      { time: "10:10", duration: "50 分鐘", title: "海外留學姊妹校介紹", tags: ["李亞欣國際長"], note: "解鎖海外留學與全球永續趨勢。", category: "global" },
      { time: "11:00", duration: "50 分鐘", title: "永續力就是你的競爭力", tags: ["康思源老師"], note: "大學生必懂的永續證照與未來職涯。", category: "learning" },
      { time: "11:50", duration: "100 分鐘", title: "新生與導師交流饗宴", tags: ["張曉平老師", "吳俊錡老師"], note: "在午餐交流中認識導師與新同學。", category: "community" },
      { time: "13:30", duration: "100 分鐘", title: "學長姊分享・雙主修、輔系", tags: ["張曉平老師", "系學會"], note: "健產系大家族相見歡。", category: "community" },
      { time: "15:20", duration: "50 分鐘", title: "別人搶不走的關鍵寶物——證照人生", tags: ["賴坤明老師"], note: "證照上身，讓工作人生不卡關。", category: "career" },
      { time: "16:10", duration: "50 分鐘", title: "食品技師攻略分享", tags: ["楊謹亘系友"], note: "食品技師必備考照密技。", category: "career" },
    ],
  },
  day2: {
    title: "Day 2｜探索方向與動手實作",
    place: "0623 教室、中餐教室與實驗室",
    events: [
      { time: "08:30", duration: "50 分鐘", title: "你不需要一開始就確定志向", tags: ["大一探索地圖與行動清單", "陳翰紳老師"], note: "從大一的迷惘探索，到跨出行動的第一步。", category: "learning" },
      { time: "09:20", duration: "50 分鐘", title: "創業到底在做什麼？", tags: ["趙靜慈系友", "許智皓系友"], note: "一張地圖看懂從 0 到 1 的實戰經驗。", category: "career" },
      { time: "10:20", duration: "100 分鐘", title: "英文能力前測", tags: ["0623 教室"], note: "掌握自己的英文能力起點。", category: "learning" },
      { time: "12:00", duration: "60 分鐘", title: "午休時間", tags: ["休息・充電"], note: "為下午的實作體驗補充能量。", category: "break" },
      { time: "13:00", duration: "130 分鐘", title: "一機搞定・吃出健康", tags: ["王玲惠主廚", "中餐教室"], note: "動手操作的健康飲食實作課。", category: "learning" },
      { time: "15:20", duration: "30 分鐘", title: "校園導覽", tags: ["認識校園"], note: "熟悉未來四年的學習與生活場域。", category: "community" },
      { time: "16:00", duration: "50 分鐘", title: "小小實驗室・哇啊哇!!", tags: ["張雲菁老師", "實驗室"], note: "認識老師的研究領域，探索未來專題與研究機會。", category: "learning" },
      { time: "16:50", duration: "10 分鐘", title: "學涯定錨探索課程・後測", tags: ["沈祐成主任"], note: "回看兩天旅程，為大學生活超前部署。", category: "learning" },
    ],
  },
};

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<"day1" | "day2">("day1");
  const day = days[selectedDay];

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">115 學年度・健康產業科技管理學系</p>
          <h1>新生定錨<br />探索課程</h1>
          <p className="lead">兩天，從認識學系到描繪自己的大學探索地圖。</p>
        </div>
        <aside className="info" aria-label="課程基本資訊">
          <div className="info-row"><span className="info-icon" aria-hidden="true">01</span><div><b>日期</b><span>9 月 1 日（二）— 9 月 2 日（三）</span></div></div>
          <div className="info-row"><span className="info-icon" aria-hidden="true">02</span><div><b>時間</b><span>08:20 — 17:00</span></div></div>
          <div className="info-row"><span className="info-icon" aria-hidden="true">03</span><div><b>主要地點</b><span>正心樓 0525 教室</span></div></div>
        </aside>
      </section>

      <section className="summary" aria-label="課程摘要">
        <div className="stat"><b>2 天</b><span>完整探索旅程</span></div>
        <div className="stat"><b>16 場</b><span>主題活動與體驗</span></div>
        <div className="stat"><b>08:20–17:00</b><span>每日課程時段</span></div>
      </section>

      <nav className="toolbar" aria-label="日期切換">
        <div className="tabs" role="group" aria-label="選擇日期">
          <button type="button" className={selectedDay === "day1" ? "tab active" : "tab"} aria-pressed={selectedDay === "day1"} onClick={() => setSelectedDay("day1")}>9/1（二）</button>
          <button type="button" className={selectedDay === "day2" ? "tab active" : "tab"} aria-pressed={selectedDay === "day2"} onClick={() => setSelectedDay("day2")}>9/2（三）</button>
        </div>
        <button type="button" className="print" onClick={() => window.print()}>列印完整日程</button>
      </nav>

      <section className="day" aria-live="polite">
        <div className="day-head"><h2>{day.title}</h2><span>{day.place}</span></div>
        <div className="timeline">
          {day.events.map((event) => (
            <article className={`event category-${event.category}`} key={`${selectedDay}-${event.time}`}>
              <div className="time">{event.time}<span className="duration">{event.duration}</span></div>
              <div><h3>{event.title}</h3><div className="meta">{event.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div></div>
              <div className="note">{event.note}</div>
            </article>
          ))}
        </div>
      </section>

      <div className="legend" aria-label="活動類型">
        <span><i className="learning" />學習探索</span><span><i className="global" />國際視野</span><span><i className="community" />交流連結</span><span><i className="career" />職涯發展</span>
      </div>
      <footer>115 學年度・健康產業科技管理學系｜學涯定錨探索課程</footer>
    </main>
  );
}
