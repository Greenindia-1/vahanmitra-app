import { useState } from "react";

const colors = {
  navy: "#0A2540",
  teal: "#00D4B2",
  tealDark: "#00A896",
  orange: "#FF6B35",
  red: "#FF3B30",
  green: "#00C851",
  yellow: "#FFB800",
  white: "#FFFFFF",
  lightBg: "#F0F4F8",
  cardBg: "#FFFFFF",
  textDark: "#0A2540",
  textMid: "#4A6080",
  textLight: "#8FA3B8",
  navyLight: "#1A3A5C",
};

const style = {
  phone: {
    width: 390,
    height: 780,
    background: colors.lightBg,
    borderRadius: 40,
    overflow: "hidden",
    boxShadow: "0 40px 80px rgba(10,37,64,0.35), 0 0 0 2px rgba(10,37,64,0.1)",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Nunito', 'Segoe UI', sans-serif",
    position: "relative",
  },
  statusBar: {
    background: colors.navy,
    color: colors.white,
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 20px 4px",
    flexShrink: 0,
  },
  screen: {
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none",
  },
  bottomNav: {
    background: colors.white,
    borderTop: 1px solid #E0EAF4,
    display: "flex",
    justifyContent: "space-around",
    padding: "8px 0 10px",
    flexShrink: 0,
    boxShadow: "0 -4px 16px rgba(10,37,64,0.06)",
  },
};

function StatusBar() {
  return (
    <div style={style.statusBar}>
      <span>9:41</span>
      <span style={{ letterSpacing: 1 }}>●●●●</span>
      <span>🔋 92%</span>
    </div>
  );
}

function BottomNav({ active, setScreen }) {
  const items = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "vehicles", icon: "🚗", label: "My Vehicles" },
    { id: "insurance", icon: "🛡️", label: "Insurance" },
    { id: "support", icon: "🎧", label: "Support" },
  ];
  return (
    <div style={style.bottomNav}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setScreen(item.id === "insurance" ? "insurance" : item.id === "home" ? "home" : "home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            padding: "2px 10px",
          }}
        >
          <span style={{ fontSize: 20 }}>{item.icon}</span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: active === item.id ? colors.teal : colors.textLight,
              letterSpacing: 0.3,
            }}
          >
            {item.label}
          </span>
          {active === item.id && (
            <div style={{ width: 20, height: 3, background: colors.teal, borderRadius: 2, marginTop: 1 }} />
          )}
        </button>
      ))}
    </div>
  );
}

// ─── SCREEN 1: HOME DASHBOARD ─────────────────────────────────────────────
function HomeScreen({ setScreen }) {
  const [vrn, setVrn] = useState("");
  const services = [
    { icon: "🛡️", label: "Insurance\nCompare", screen: "insurance" },
    { icon: "⏳", label: "Fitness\nStatus", screen: "vehicle" },
    { icon: "📄", label: "Permit\nRenewal", screen: "vehicle" },
    { icon: "🛣️", label: "Road Tax\nCheck", screen: "vehicle" },
    { icon: "💨", label: "Pollution\nPUCC", screen: "vehicle" },
    { icon: "🚦", label: "Challan\nDetails", screen: "challan" },
    { icon: "🛰️", label: "GPS\nTracking", screen: "vehicle" },
    { icon: "⚖️", label: "Lok\nAdalat", screen: "challan" },
  ];

  return (
    <div style={{ background: colors.lightBg, minHeight: "100%" }}>
      {/* Header */}
      <div
        style={{
          background: linear-gradient(135deg, ${colors.navy} 0%, ${colors.navyLight} 100%),
          padding: "16px 20px 24px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ background: colors.teal, borderRadius: 8, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🚘</div>
              <span style={{ color: colors.white, fontWeight: 900, fontSize: 20, letterSpacing: -0.5 }}>
                Vahan<span style={{ color: colors.teal }}>Mitra</span>
              </span>
            </div>
            <div style={{ color: colors.teal, fontSize: 11, fontWeight: 600, marginTop: 2, marginLeft: 40 }}>
              Aapka Vahaan, Hamaari Zimmedaari
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 20, width: 36, height: 36, cursor: "pointer", fontSize: 16 }}>🔔</button>
            <button style={{ background: colors.teal, border: "none", borderRadius: 20, width: 36, height: 36, cursor: "pointer", fontSize: 16 }}>👤</button>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ background: colors.white, borderRadius: 16, padding: "6px 6px 6px 14px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
          <span style={{ fontSize: 16 }}>🔍</span>
          <input
            value={vrn}
            onChange={(e) => setVrn(e.target.value.toUpperCase())}
            placeholder="Vehicle No. daalen — DL01AB1234"
            style={{ flex: 1, border: "none", outline: "none", fontSize: 13, color: colors.textDark, fontFamily: "inherit", fontWeight: 600, background: "transparent" }}
          />
          <button
            onClick={() => setScreen("vehicle")}
            style={{
              background: linear-gradient(135deg, ${colors.teal}, ${colors.tealDark}),
              color: colors.white,
              border: "none",
              borderRadius: 12,
              padding: "10px 18px",
              fontWeight: 800,
              fontSize: 13,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Check Now ▶️
          </button>
        </div>
      </div>

      {/* Quick Services */}
      <div style={{ padding: "20px 16px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontWeight: 800, fontSize: 15, color: colors.textDark }}>Quick Services</span>
          <span style={{ fontSize: 12, color: colors.teal, fontWeight: 700 }}>View All →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setScreen(s.screen)}
              style={{
                background: colors.white,
                border: "none",
                borderRadius: 14,
                padding: "12px 4px 10px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                boxShadow: "0 2px 8px rgba(10,37,64,0.08)",
                transition: "transform 0.15s",
              }}
            >
              <div style={{ background: linear-gradient(135deg, ${colors.navy}15, ${colors.teal}20), borderRadius: 12, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                {s.icon}
              </div>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: colors.textMid, textAlign: "center", lineHeight: 1.3, whiteSpace: "pre-line" }}>
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Alert Banner */}
      <div style={{ margin: "0 16px 16px", background: linear-gradient(135deg, #FF6B35, #FF3B30), borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 24 }}>⚠️</span>
        <div>
          <div style={{ color: colors.white, fontWeight: 800, fontSize: 13 }}>DL01AB1234 — Alert!</div>
          <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 11, marginTop: 2 }}>Fitness Certificate 20 din mein expire hoga.</div>
        </div>
        <button style={{ marginLeft: "auto", background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 10, padding: "6px 12px", color: colors.white, fontWeight: 700, fontSize: 11, cursor: "pointer", whiteSpace: "nowrap" }}>
          Renew →
        </button>
      </div>

      {/* Recent Vehicles */}
      <div style={{ padding: "0 16px 20px" }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: colors.textDark, marginBottom: 12 }}>Hamaari Gaadiyaan 🚛</div>
        {[
          { no: "DL01AB1234", type: "Truck", status: "green", label: "All OK" },
          { no: "HR26XX9988", type: "Car", status: "orange", label: "PUC Expiring" },
        ].map((v, i) => (
          <div key={i} onClick={() => setScreen("vehicle")} style={{ background: colors.white, borderRadius: 14, padding: "12px 14px", marginBottom: 10, display: "flex", alignItems: "center", gap: 12, cursor: "pointer", boxShadow: "0 2px 8px rgba(10,37,64,0.07)" }}>
            <div style={{ background: colors.navy, borderRadius: 10, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
              {v.type === "Truck" ? "🚛" : "🚗"}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 13, color: colors.textDark }}>{v.no}</div>
              <div style={{ fontSize: 11, color: colors.textLight, marginTop: 1 }}>{v.type} • Last checked: Today</div>
            </div>
            <div style={{ background: v.status === "green" ? "#E8FFF4" : "#FFF5E8", borderRadius: 8, padding: "4px 10px" }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: v.status === "green" ? colors.green : colors.orange }}>{v.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SCREEN 2: VEHICLE STATUS ──────────────────────────────────────────────
function VehicleScreen({ setScreen }) {
  const docs = [
    { label: "Insurance", status: "active", date: "12 Dec 2026", icon: "🛡️", color: colors.green, bg: "#E8FFF4" },
    { label: "Fitness Cert.", status: "expired", date: "20 Jun 2025", icon: "⏳", color: colors.red, bg: "#FFF0F0" },
    { label: "Pollution (PUC)", status: "expiring", date: "10 Jun 2026", icon: "💨", color: colors.orange, bg: "#FFF5E8" },
    { label: "Road Tax", status: "active", date: "31 Mar 2027", icon: "🛣️", color: colors.green, bg: "#E8FFF4" },
    { label: "Permit", status: "active", date: "15 Aug 2026", icon: "📄", color: colors.green, bg: "#E8FFF4" },
    { label: "Challans", status: "pending", date: "03 Pending", icon: "🚦", color: colors.red, bg: "#FFF0F0" },
  ];

  const statusLabel = { active: "Active ✓", expired: "Expired ✗", expiring: "Expiring Soon !", pending: "Pending !" };

  return (
    <div style={{ background: colors.lightBg, minHeight: "100%" }}>
      {/* Header */}
      <div style={{ background: linear-gradient(135deg, ${colors.navy}, ${colors.navyLight}), padding: "16px 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <button onClick={() => setScreen("home")} style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 10, width: 34, height: 34, cursor: "pointer", color: colors.white, fontSize: 16 }}>←</button>
          <span style={{ color: colors.white, fontWeight: 800, fontSize: 17 }}>Live Vehicle Status</span>
        </div>

        {/* Vehicle Card */}
        <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", borderRadius: 18, padding: "16px", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ background: colors.teal, borderRadius: 14, width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>🚛</div>
          <div style={{ flex: 1 }}>
            <div style={{ color: colors.white, fontWeight: 900, fontSize: 18, letterSpacing: 1 }}>DL 01 AB 1234</div>
            <div style={{ color: colors.teal, fontSize: 12, fontWeight: 700, marginTop: 2 }}>TATA Motors — Heavy Commercial</div>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, marginTop: 2 }}>Owner: Jai Prakash Singh</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ background: colors.teal, borderRadius: 8, padding: "3px 8px" }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: colors.navy }}>REG: 2019</span>
            </div>
          </div>
        </div>
      </div>

      {/* Document Health */}
      <div style={{ padding: "16px 16px 8px" }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: colors.textDark, marginBottom: 12 }}>Document Health Report 📋</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {docs.map((d, i) => (
            <div key={i} style={{ background: colors.white, borderRadius: 14, padding: "14px 12px", boxShadow: "0 2px 8px rgba(10,37,64,0.07)", borderLeft: 4px solid ${d.color} }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <span style={{ fontSize: 20 }}>{d.icon}</span>
                <div style={{ background: d.bg, borderRadius: 6, padding: "2px 7px" }}>
                  <span style={{ fontSize: 9, fontWeight: 800, color: d.color }}>{statusLabel[d.status]}</span>
                </div>
              </div>
              <div style={{ fontWeight: 800, fontSize: 12, color: colors.textDark, marginBottom: 3 }}>{d.label}</div>
              <div style={{ fontSize: 10, color: colors.textLight, fontWeight: 600 }}>{d.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ padding: "12px 16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
        <button onClick={() => setScreen("challan")} style={{ background: linear-gradient(135deg, ${colors.red}, #CC2020), color: colors.white, border: "none", borderRadius: 14, padding: "14px", fontWeight: 800, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          🚦 3 Pending Challans Dekhein — ₹8,000
        </button>
        <button style={{ background: linear-gradient(135deg, ${colors.navy}, ${colors.navyLight}), color: colors.white, border: "none", borderRadius: 14, padding: "14px", fontWeight: 800, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          📥 Download Full Report (PDF)
        </button>
      </div>
    </div>
  );
}

// ─── SCREEN 3: INSURANCE COMPARE ──────────────────────────────────────────
function InsuranceScreen({ setScreen }) {
  const [selected, setSelected] = useState("car");
  const vehicles = [
    { id: "car", icon: "🚗", label: "Car" },
    { id: "bike", icon: "🏍️", label: "Bike" },
    { id: "truck", icon: "🚛", label: "Truck" },
    { id: "bus", icon: "🚌", label: "Bus" },
    { id: "tractor", icon: "🚜", label: "Tractor" },
  ];
  const quotes = [
    { company: "HDFC ERGO", logo: "🏦", price: "₹23,900", idv: "₹8,50,000", tag: "Best Price 🏆", tagColor: colors.green, tagBg: "#E8FFF4", rating: "4.8", claims: "98%" },
    { company: "ICICI Lombard", logo: "🏛️", price: "₹24,500", idv: "₹8,50,000", tag: "24x7 Support 🎧", tagColor: colors.teal, tagBg: "#E8FFFC", rating: "4.6", claims: "96%" },
    { company: "Tata AIG", logo: "🏢", price: "₹25,100", idv: "₹8,50,000", tag: "Fast Claim ⚡", tagColor: colors.orange, tagBg: "#FFF5E8", rating: "4.5", claims: "95%" },
    { company: "Bajaj Allianz", logo: "🔵", price: "₹25,800", idv: "₹8,50,000", tag: "Cashless Garages 🔧", tagColor: "#6B4FBB", tagBg: "#F0EEFF", rating: "4.4", claims: "94%" },
  ];

  return (
    <div style={{ background: colors.lightBg, minHeight: "100%" }}>
      <div style={{ background: linear-gradient(135deg, ${colors.navy}, ${colors.navyLight}), padding: "16px 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <button onClick={() => setScreen("home")} style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 10, width: 34, height: 34, cursor: "pointer", color: colors.white, fontSize: 16 }}>←</button>
          <span style={{ color: colors.white, fontWeight: 800, fontSize: 17 }}>Insurance Compare & Buy</span>
        </div>

        {/* Vehicle Type Selector */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
          {vehicles.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelected(v.id)}
              style={{
                background: selected === v.id ? colors.teal : "rgba(255,255,255,0.1)",
                border: 2px solid ${selected === v.id ? colors.teal : "rgba(255,255,255,0.2)"},
                borderRadius: 14,
                padding: "8px 14px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 22 }}>{v.icon}</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: selected === v.id ? colors.navy : colors.white }}>{v.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "16px 16px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontWeight: 800, fontSize: 15, color: colors.textDark }}>4 Quotes Available</span>
          <span style={{ fontSize: 11, color: colors.textLight }}>IDV: ₹8,50,000</span>
        </div>

        {quotes.map((q, i) => (
          <div key={i} style={{ background: colors.white, borderRadius: 16, padding: "16px", marginBottom: 12, boxShadow: i === 0 ? 0 4px 20px rgba(0,212,178,0.2) : "0 2px 8px rgba(10,37,64,0.07)", border: i === 0 ? 2px solid ${colors.teal} : "2px solid transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ background: colors.lightBg, borderRadius: 10, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{q.logo}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: colors.textDark }}>{q.company}</div>
                  <div style={{ display: "flex", gap: 6, marginTop: 3 }}>
                    <span style={{ fontSize: 10, color: colors.yellow }}>{"★".repeat(Math.floor(parseFloat(q.rating)))}</span>
                    <span style={{ fontSize: 10, color: colors.textLight }}>{q.rating}</span>
                  </div>
                </div>
              </div>
              <div style={{ background: q.tagBg, borderRadius: 8, padding: "4px 8px" }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: q.tagColor }}>{q.tag}</span>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: colors.lightBg, borderRadius: 12, padding: "10px 14px", marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 10, color: colors.textLight, fontWeight: 600 }}>Annual Premium</div>
                <div style={{ fontWeight: 900, fontSize: 20, color: colors.navy }}>{q.price}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 10, color: colors.textLight, fontWeight: 600 }}>IDV</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: colors.textDark }}>{q.idv}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: colors.textLight, fontWeight: 600 }}>Claim Ratio</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: colors.green }}>{q.claims}</div>
              </div>
            </div>

            <button style={{ background: i === 0 ? linear-gradient(135deg, ${colors.teal}, ${colors.tealDark}) : linear-gradient(135deg, ${colors.navy}, ${colors.navyLight}), color: i === 0 ? colors.navy : colors.white, border: "none", borderRadius: 12, padding: "12px", width: "100%", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
              Buy Now — {q.price} / Year
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SCREEN 4: CHALLAN & LOK ADALAT ───────────────────────────────────────
function ChallanScreen({ setScreen }) {
  const challans = [
    { no: "CH12345", date: "10 May 2025", violation: "Overspeed", amount: "₹2,000", status: "pending", statusColor: colors.orange, statusBg: "#FFF5E8" },
    { no: "CH45678", date: "20 May 2025", violation: "Red Light Jump", amount: "₹5,000", status: "court", statusColor: colors.red, statusBg: "#FFF0F0" },
    { no: "CH78901", date: "28 May 2025", violation: "No Helmet", amount: "₹1,000", status: "pending", statusColor: colors.orange, statusBg: "#FFF5E8" },
  ];

  return (
    <div style={{ background: colors.lightBg, minHeight: "100%" }}>
      <div style={{ background: linear-gradient(135deg, ${colors.navy}, ${colors.navyLight}), padding: "16px 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <button onClick={() => setScreen("home")} style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 10, width: 34, height: 34, cursor: "pointer", color: colors.white, fontSize: 16 }}>←</button>
          <span style={{ color: colors.white, fontWeight: 800, fontSize: 17 }}>Challan & Lok Adalat</span>
        </div>

        {/* Total Banner */}
        <div style={{ background: linear-gradient(135deg, ${colors.red}, #CC2020), borderRadius: 18, padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, fontWeight: 600 }}>Total Pending Amount</div>
            <div style={{ color: colors.white, fontWeight: 900, fontSize: 26, letterSpacing: -1 }}>₹8,000</div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, marginTop: 2 }}>3 Challans Outstanding</div>
          </div>
          <div style={{ fontSize: 48 }}>🚦</div>
        </div>
      </div>

      <div style={{ padding: "16px 16px 8px" }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: colors.textDark, marginBottom: 12 }}>Challan List 📋</div>

        {challans.map((c, i) => (
          <div key={i} style={{ background: colors.white, borderRadius: 16, padding: "14px", marginBottom: 10, boxShadow: "0 2px 8px rgba(10,37,64,0.07)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div>
                <span style={{ fontWeight: 800, fontSize: 13, color: colors.textDark }}>#{c.no}</span>
                <span style={{ fontSize: 11, color: colors.textLight, marginLeft: 8 }}>{c.date}</span>
              </div>
              <div style={{ background: c.statusBg, borderRadius: 8, padding: "3px 9px" }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: c.statusColor }}>{c.status === "court" ? "Court Case ⚖️" : "Pending ⏳"}</span>
              </div>
            </div>
            <div style={{ fontSize: 12, color: colors.textMid, fontWeight: 600, marginBottom: 10 }}>🚔 Violation: {c.violation}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span style={{ fontSize: 11, color: colors.textLight }}>Fine Amount: </span>
                <span style={{ fontWeight: 900, fontSize: 16, color: colors.red }}>{c.amount}</span>
              </div>
              <button style={{
                background: c.status === "court" ? linear-gradient(135deg, ${colors.navy}, ${colors.navyLight}) : linear-gradient(135deg, ${colors.teal}, ${colors.tealDark}),
                color: c.status === "court" ? colors.white : colors.navy,
                border: "none", borderRadius: 10, padding: "8px 16px", fontWeight: 800, fontSize: 12, cursor: "pointer"
              }}>
                {c.status === "court" ? "View Details →" : "Pay Now →"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lok Adalat Section */}
      <div style={{ margin: "8px 16px 20px" }}>
        <div style={{ background: linear-gradient(135deg, #1A3A8C, #0A2580), borderRadius: 18, padding: "18px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, right: -20, fontSize: 80, opacity: 0.1 }}>⚖️</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ background: colors.teal, borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>⚖️</div>
            <div>
              <div style={{ color: colors.white, fontWeight: 800, fontSize: 14 }}>Lok Adalat Special</div>
              <div style={{ color: colors.teal, fontSize: 10, fontWeight: 600 }}>Evening Lok Adalat Program</div>
            </div>
          </div>
          <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, lineHeight: 1.5, marginBottom: 14 }}>
            Apne traffic challans ko <strong style={{ color: colors.teal }}>Evening Lok Adalat</strong> ke zariye jaldi aur aasaani se resolve karein. Court case avoid karein, kam penalty mein mamla settle hoga.
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
            {["50% Fine Rebate", "No Court Date", "Same Day Settlement"].map((t, i) => (
              <div key={i} style={{ background: "rgba(0,212,178,0.15)", borderRadius: 8, padding: "4px 8px", border: "1px solid rgba(0,212,178,0.3)" }}>
                <span style={{ color: colors.teal, fontSize: 9, fontWeight: 700 }}>✓ {t}</span>
              </div>
            ))}
          </div>
          <button style={{ background: linear-gradient(135deg, ${colors.teal}, ${colors.tealDark}), color: colors.navy, border: "none", borderRadius: 12, padding: "13px", width: "100%", fontWeight: 900, fontSize: 14, cursor: "pointer" }}>
            🏛️ Open Lok Adalat Portal
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────
export default function VahanMitraApp() {
  const [screen, setScreen] = useState("home");

  const navActive = screen === "insurance" ? "insurance" : screen === "home" ? "home" : screen === "vehicle" ? "vehicles" : "home";

  const renderScreen = () => {
    switch (screen) {
      case "home": return <HomeScreen setScreen={setScreen} />;
      case "vehicle": return <VehicleScreen setScreen={setScreen} />;
      case "insurance": return <InsuranceScreen setScreen={setScreen} />;
      case "challan": return <ChallanScreen setScreen={setScreen} />;
      default: return <HomeScreen setScreen={setScreen} />;
    }
  };

  const screenTitles = { home: "Home Dashboard", vehicle: "Vehicle Status", insurance: "Insurance", challan: "Challans" };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "linear-gradient(135deg, #E8F0F8 0%, #D0E4F0 100%)", padding: "20px", fontFamily: "'Nunito', sans-serif" }}>
      {/* Screen Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { id: "home", label: "🏠 Screen 1: Home" },
          { id: "vehicle", label: "🚛 Screen 2: Vehicle" },
          { id: "insurance", label: "🛡️ Screen 3: Insurance" },
          { id: "challan", label: "🚦 Screen 4: Challan" },
        ].map((s) => (
          <button
            key={s.id}
            onClick={() => setScreen(s.id)}
            style={{
              background: screen === s.id ? colors.navy : colors.white,
              color: screen === s.id ? colors.white : colors.textDark,
              border: 2px solid ${screen === s.id ? colors.navy : "#D0DCE8"},
              borderRadius: 20,
              padding: "7px 16px",
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Phone Frame */}
      <div style={style.phone}>
        <StatusBar />
        <div style={style.screen}>
          {renderScreen()}
        </div>
        <BottomNav active={navActive} setScreen={setScreen} />
      </div>

      <div style={{ marginTop: 16, fontSize: 11, color: colors.textMid, fontWeight: 600, textAlign: "center" }}>
        VahanMitra v1.0 · Sab Screens Interactive Hain · Upar tabs se switch karein
      </div>
    </div>
  );
}