import { images, hasImage } from "@/lib/images";

const teamMembers = [
  { id: 1, name: "Fan Haoyu", role: "Member" },
  { id: 2, name: "Jiang Shan", role: "Member" },
  { id: 3, name: "Zhang Yise", role: "Member" },
  { id: 4, name: "Shi Jincheng", role: "Captain" },
  { id: 5, name: "Jin Yinuo", role: "Member" },
  { id: 6, name: "Wu Yueyang", role: "Member" },
  { id: 7, name: "Huang Xingning", role: "Member" },
  { id: 8, name: "Bian Zheyu", role: "Member" },
  { id: 9, name: "Hu Gaoxuan", role: "Member" },
  { id: 10, name: "Zhou Xingyu", role: "Member" },
  { id: 11, name: "Yang Jiahe", role: "Member" },
  { id: 12, name: "Xu Chuqiao", role: "Member" },
  { id: 13, name: "Zou Chucheng", role: "Member" },
  { id: 14, name: "Xia Xikai", role: "Member" },
  { id: 15, name: "Jiang Siyu", role: "Member" },
  { id: 16, name: "Wu Hao", role: "Member" },
  { id: 17, name: "Cui Tianchang", role: "Member" },
];

function ImageSlot({ src, alt, label }: { src: string; alt: string; label: string }) {
  if (hasImage(src)) {
    return <img src={src} alt={alt} className="w-full h-full object-cover rounded-lg" />;
  }
  return (
    <div className="image-placeholder rounded-lg flex items-center justify-center" style={{ minHeight: "100px" }}>
      <div className="text-center p-4">
        <div className="text-2xl">📷</div>
        <div className="text-sm">{label}</div>
      </div>
    </div>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-end gap-4 mb-4">
        <span className="text-6xl font-bold text-gray-200">{number}</span>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <hr className="border-gray-200" />
    </div>
  );
}

function TerminalCard({ terminal, title, children }: { terminal: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-black text-white px-4 py-2 text-sm font-mono flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        <span className="ml-2">{terminal} — {title}</span>
      </div>
      <div className="p-4 bg-white">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="scan-line"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glitch-text">
            TEAM 6353: REBUILT
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            A Decade of Engineering Heritage (2016–2026) | EFZ Shanghai
          </p>
          <p className="text-gray-500 mb-8">
            From team #9036 to #6353, we redefine the boundary between simplicity and power.
          </p>
          <div className="aspect-[3/1] max-w-3xl mx-auto">
            <ImageSlot src={images.teamGroupPhoto} alt="Team Photo" label="TEAM GROUP PHOTO" />
          </div>
        </div>
      </section>

      {/* 360° CONNECTIVITY */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader number="03" title="360° Connectivity" />
          <div className="grid md:grid-cols-3 gap-4">
            <TerminalCard terminal="TERMINAL_A" title="Campus Integration">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Campus Activities</h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    <li>Mentoring Qiu Chengtong Class</li>
                    <li>Campus Open Days</li>
                    <li>Annual Robot Carnival</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Collaboration</h4>
                  <p className="text-sm text-gray-600">Events with Team 6907 (Fudan International)</p>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <ImageSlot src={images.campus.activity} alt="Campus" label="📷" />
                  <ImageSlot src={images.campus.openDay} alt="Open Day" label="📷" />
                  <ImageSlot src={images.campus.carnival} alt="Carnival" label="📷" />
                </div>
              </div>
            </TerminalCard>
            <TerminalCard terminal="TERMINAL_B" title="Global Connectivity">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Cross-border Mentorship</h4>
                  <p className="text-sm text-gray-600">Mentoring Team 1149 (Australia)</p>
                </div>
                <div>
                  <h4 className="font-semibold">Strategic Network</h4>
                  <p className="text-sm text-gray-600">Scrimmages with teams 8347, 19726, 22389</p>
                </div>
                <div>
                  <h4 className="font-semibold">Online Exchange</h4>
                  <p className="text-sm text-gray-600">Seminars with SCIE (Shenzhen)</p>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <ImageSlot src={images.global.mentorship} alt="Mentor" label="📷" />
                  <ImageSlot src={images.global.scrimmage} alt="Scrimmage" label="📷" />
                  <ImageSlot src={images.global.seminar} alt="Seminar" label="📷" />
                </div>
              </div>
            </TerminalCard>
            <TerminalCard terminal="TERMINAL_C" title="Social Outreach">
              <div className="space
