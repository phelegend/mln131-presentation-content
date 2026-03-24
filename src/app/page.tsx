"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap');

        :root {
          --gold: #c9a84c;
          --gold-light: #e8d48b;
          --deep-red: #8b1a1a;
          --cream: #f5f0e8;
          --section-bg: #0f0c08;
          --card-bg: rgba(201,168,76,0.06);
          --text-light: #e8e0d0;
          --text-muted: #a89e8c;
        }
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body {
          font-family:'Source Sans 3',sans-serif;
          background:var(--section-bg);
          color:var(--text-light);
          line-height:1.7;
          overflow-x:hidden;
        }
        body::after {
          content:''; position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:0.025;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        .hero {
          min-height:100vh; display:flex; flex-direction:column; justify-content:center;
          align-items:center; text-align:center; position:relative; overflow:hidden;
          background: radial-gradient(ellipse 80% 50% at 50% 45%, rgba(201,168,76,0.07) 0%, transparent 70%);
        }
        .hero-content { position:relative; z-index:2; max-width:900px; padding:2rem; }
        .hero-label {
          font-weight:600; font-size:0.85rem; letter-spacing:4px; text-transform:uppercase;
          color:var(--gold); margin-bottom:2rem; opacity:0; animation:fadeUp 1s .3s forwards;
        }
        .hero h1 {
          font-family:'Playfair Display',serif; font-size:clamp(2.2rem,5vw,4rem); font-weight:900;
          line-height:1.2; color:var(--cream); margin-bottom:1.5rem; opacity:0; animation:fadeUp 1s .5s forwards;
        }
        .hero h1 .hl { color:var(--gold); font-style:italic; }
        .hero-desc {
          font-family:'Crimson Pro',serif; font-size:1.2rem; color:var(--text-muted);
          max-width:650px; margin:0 auto 3rem; opacity:0; animation:fadeUp 1s .7s forwards;
        }
        .scroll-hint {
          opacity:0; animation:fadeUp 1s 1s forwards, floatY 3s ease-in-out 1.5s infinite;
          display:flex; flex-direction:column; align-items:center; gap:.5rem;
          color:var(--gold); font-size:.8rem; letter-spacing:2px; text-transform:uppercase; text-decoration:none;
        }
        .scroll-hint svg { width:24px; height:24px; stroke:var(--gold); }
        section { padding:6rem 2rem; position:relative; }
        .section-inner { max-width:1100px; margin:0 auto; }
        .section-label { font-weight:600; font-size:.75rem; letter-spacing:4px; text-transform:uppercase; color:var(--gold); margin-bottom:1rem; }
        .section-title { font-family:'Playfair Display',serif; font-size:clamp(1.8rem,3.5vw,2.8rem); font-weight:700; color:var(--cream); margin-bottom:1rem; line-height:1.3; }
        .section-subtitle { font-family:'Crimson Pro',serif; font-size:1.15rem; color:var(--text-muted); max-width:700px; margin-bottom:3rem; }
        .section-divider { width:60px; height:2px; background:var(--gold); margin:0 0 2rem; opacity:.5; }
        .concept-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:2rem; }
        .concept-card {
          background:var(--card-bg); border:1px solid rgba(201,168,76,.15);
          border-radius:12px; padding:0; overflow:hidden; transition:transform .3s,border-color .3s,box-shadow .3s;
        }
        .concept-card:hover { transform:translateY(-4px); border-color:rgba(201,168,76,.4); box-shadow:0 12px 40px rgba(201,168,76,.08); }
        .card-img-wrap {
          width:100%; height:200px; overflow:hidden; position:relative;
          background:rgba(201,168,76,.03);
        }
        .card-img-wrap img {
          width:100%; height:100%; object-fit:cover; display:block;
          filter:sepia(20%) brightness(.85); transition:filter .4s, transform .4s;
        }
        .concept-card:hover .card-img-wrap img { filter:sepia(5%) brightness(.95); transform:scale(1.03); }
        .card-body { padding:1.5rem 2rem 2rem; }
        .card-tag { font-size:.7rem; letter-spacing:3px; text-transform:uppercase; color:var(--gold); font-weight:600; margin-bottom:.75rem; }
        .concept-card h3 { font-family:'Playfair Display',serif; font-size:1.3rem; color:var(--cream); margin-bottom:.75rem; }
        .concept-card p { color:var(--text-muted); font-size:.95rem; }
        .timeline { position:relative; padding-left:3rem; }
        .timeline::before {
          content:''; position:absolute; left:0; top:0; bottom:0; width:2px;
          background:linear-gradient(to bottom,transparent,var(--gold),var(--gold),transparent);
        }
        .tl-item { position:relative; margin-bottom:3.5rem; padding-left:2rem; }
        .tl-item::before {
          content:''; position:absolute; left:-3.55rem; top:.5rem; width:12px; height:12px;
          border-radius:50%; background:var(--gold); box-shadow:0 0 12px rgba(201,168,76,.5);
        }
        .tl-era { font-size:.7rem; letter-spacing:3px; text-transform:uppercase; color:var(--gold); font-weight:600; margin-bottom:.5rem; }
        .tl-item h3 { font-family:'Playfair Display',serif; font-size:1.4rem; color:var(--cream); margin-bottom:.3rem; }
        .tl-hl { color:var(--gold-light); font-weight:600; font-size:.95rem; margin-bottom:.5rem; }
        .tl-item p { color:var(--text-muted); font-size:.95rem; }
        .tl-img {
          margin-top:1rem; border-radius:8px; overflow:hidden; max-width:520px;
          border:1px solid rgba(201,168,76,.15);
        }
        .tl-img img { width:100%; height:220px; object-fit:cover; display:block; filter:sepia(20%) brightness(.82); transition:filter .3s; }
        .tl-img:hover img { filter:sepia(5%) brightness(.95); }
        .pillars-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:2rem; }
        .pillar-card {
          background:linear-gradient(135deg,rgba(201,168,76,.05),rgba(201,168,76,.01));
          border:1px solid rgba(201,168,76,.12); border-radius:14px; padding:2.5rem 2rem;
          position:relative; transition:transform .3s,box-shadow .3s;
        }
        .pillar-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(201,168,76,.06); }
        .pillar-number {
          font-family:'Playfair Display',serif; font-size:3.5rem; font-weight:900;
          color:rgba(201,168,76,.15); position:absolute; top:1rem; right:1.5rem; line-height:1;
        }
        .pillar-card h3 { font-family:'Playfair Display',serif; font-size:1.3rem; color:var(--gold); margin-bottom:1rem; }
        .pillar-card p { color:var(--text-muted); font-size:.95rem; line-height:1.8; }
        .paradox-section { background:linear-gradient(180deg,var(--section-bg),rgba(139,26,26,.08) 50%,var(--section-bg)); }
        .steps-container { display:flex; flex-direction:column; gap:2rem; margin-bottom:3rem; }
        .step-card {
          display:flex; align-items:flex-start; gap:1.5rem;
          background:rgba(201,168,76,.04); border-left:3px solid var(--gold);
          padding:1.8rem 2rem; border-radius:0 12px 12px 0; transition:background .3s;
        }
        .step-card:hover { background:rgba(201,168,76,.08); }
        .step-num { font-family:'Playfair Display',serif; font-size:2rem; font-weight:900; color:var(--gold); min-width:50px; line-height:1; }
        .step-card p { color:var(--text-light); font-size:1.05rem; line-height:1.7; }
        .alert-box {
          background:linear-gradient(135deg,rgba(139,26,26,.15),rgba(139,26,26,.05));
          border:1px solid rgba(201,168,76,.25); border-radius:14px; padding:3rem; text-align:center;
        }
        .alert-box h3 { font-family:'Playfair Display',serif; font-size:1.6rem; color:var(--gold); margin-bottom:1.5rem; }
        .alert-box p { color:var(--text-muted); font-size:1.05rem; line-height:1.8; max-width:700px; margin:0 auto 1.5rem; }
        .alert-box .quote {
          font-family:'Crimson Pro',serif; font-style:italic; font-size:1.3rem; color:var(--gold-light);
          margin-top:1.5rem; padding-top:1.5rem; border-top:1px solid rgba(201,168,76,.2);
        }
        .conclusion-section { background:linear-gradient(180deg,var(--section-bg),rgba(201,168,76,.04)); }
        .conclusion-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:2rem; margin-bottom:3rem; }
        .conclusion-card { background:var(--card-bg); border:1px solid rgba(201,168,76,.12); border-radius:12px; padding:2rem; }
        .conclusion-card h3 { font-family:'Playfair Display',serif; font-size:1.2rem; color:var(--gold); margin-bottom:1rem; }
        .conclusion-card p { color:var(--text-muted); font-size:.95rem; line-height:1.8; }
        .cta-block {
          text-align:center; padding:3rem;
          background:linear-gradient(135deg,rgba(201,168,76,.08),transparent);
          border-radius:16px; border:1px solid rgba(201,168,76,.15);
        }
        .cta-block h3 { font-family:'Playfair Display',serif; font-size:1.5rem; color:var(--cream); margin-bottom:.75rem; }
        .cta-block p { font-family:'Crimson Pro',serif; font-style:italic; font-size:1.15rem; color:var(--gold-light); }
        /* AI Transparency */
        .ai-transparency { border-top:1px solid rgba(201,168,76,.1); }
        .ai-transparency .section-title { font-size:clamp(1.4rem,2.5vw,2rem); }
        .ai-table {
          width:100%; border-collapse:collapse; margin-bottom:2rem;
        }
        .ai-table thead tr {
          border-bottom:1px solid rgba(201,168,76,.3);
        }
        .ai-table th {
          font-weight:600; font-size:.75rem; letter-spacing:3px; text-transform:uppercase;
          color:var(--gold); padding:.75rem 1rem; text-align:left;
        }
        .ai-table th:not(:first-child) { text-align:right; }
        .ai-table td {
          padding:.85rem 1rem; font-size:.95rem; color:var(--text-muted);
          border-bottom:1px solid rgba(201,168,76,.06);
        }
        .ai-table td:not(:first-child) { text-align:right; }
        .ai-table tbody tr:hover td { color:var(--text-light); background:rgba(201,168,76,.03); }
        .ai-table .tag-ai { color:var(--gold-light); font-weight:600; }
        .ai-table .tag-student { color:var(--text-light); }
        .ai-note {
          text-align:center; font-family:'Crimson Pro',serif; font-size:.95rem;
          color:var(--text-muted); line-height:1.8;
        }
        footer { text-align:center; padding:3rem 2rem; border-top:1px solid rgba(201,168,76,.1); color:var(--text-muted); font-size:.85rem; }
        footer span { color:var(--gold); }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .reveal { opacity:0; transform:translateY(40px); transition:opacity .8s,transform .8s; }
        .reveal.visible { opacity:1; transform:translateY(0); }
        @media(max-width:768px) {
          section{padding:4rem 1.5rem}
          .concept-grid,.pillars-grid,.conclusion-grid{grid-template-columns:1fr}
          .timeline{padding-left:2rem} .tl-item{padding-left:1rem}
          .step-card{flex-direction:column;gap:.5rem}
          .alert-box{padding:2rem 1.5rem}
          .ai-table th, .ai-table td { padding:.65rem .5rem; font-size:.85rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-label">Tổng quan về Dân chủ — MLN131</div>
          <h1>Khi tiến tới cộng sản chủ nghĩa, nền dân chủ sẽ <span className="hl">&ldquo;tự tiêu vong&rdquo;</span>?</h1>
          <p className="hero-desc">Dân chủ &ldquo;tự tiêu vong&rdquo; có phải là sự mất dân chủ, hay là sự phát triển đến một hình thức cao hơn? Có người cho rằng như vậy nghĩa là con người sẽ mất tự do, sống trong một chế độ độc tài toàn trị. Sự thật là gì?</p>
          <a href="#khai-niem" className="scroll-hint">
            Cuộn xuống
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </a>
        </div>
      </section>

      {/* KHÁI NIỆM */}
      <section id="khai-niem">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Khái niệm</div>
            <h2 className="section-title">Nguồn gốc &amp; Bản chất cốt lõi</h2>
            <p className="section-subtitle">Dân chủ không chỉ là một khái niệm chính trị — nó là nền tảng của mọi xã hội văn minh, được nhìn nhận từ nhiều góc độ khác nhau qua hàng nghìn năm lịch sử.</p>
            <div className="section-divider"></div>
          </div>
          <div className="concept-grid">
            <div className="concept-card reveal">
              <div className="card-img-wrap">
                <img src="/images/athens-democracy.png" alt="Dân chủ Hy Lạp cổ đại" />
              </div>
              <div className="card-body">
                <div className="card-tag">Nghĩa gốc</div>
                <h3>Tiếng Hy Lạp cổ đại</h3>
                <p>Xuất phát từ tiếng Hy Lạp cổ đại, dân chủ (<em>Demos Kratos</em>) có nghĩa là &ldquo;quyền lực của nhân dân&rdquo; hay &ldquo;quyền lực thuộc về nhân dân&rdquo;.</p>
              </div>
            </div>
            <div className="concept-card reveal">
              <div className="card-img-wrap">
                <img src="/images/marx-lenin.png" alt="Mác và Lênin" />
              </div>
              <div className="card-body">
                <div className="card-tag">Quan điểm Mác - Lênin</div>
                <h3>Hình thức tổ chức nhà nước</h3>
                <p>Về chính trị, dân chủ là một hình thức tổ chức nhà nước của giai cấp thống trị, một kiểu nhà nước mà ở đó các quyền cơ bản của con người được pháp luật hóa. Lênin khẳng định dân chủ là &ldquo;sự thống trị của đa số&rdquo;.</p>
              </div>
            </div>
            <div className="concept-card reveal">
              <div className="card-img-wrap">
                <img src="/images/hcm-marx-lenin.png" alt="Tư tưởng Hồ Chí Minh" />
              </div>
              <div className="card-body">
                <div className="card-tag">Tư tưởng Hồ Chí Minh</div>
                <h3>Giá trị nhân loại</h3>
                <p>&ldquo;Dân là chủ&rdquo; và &ldquo;Dân làm chủ&rdquo;. Trong chế độ ta, nhân dân là chủ, còn Chính phủ là &ldquo;đầy tớ trung thành của nhân dân&rdquo;.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="lich-su">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Tiến trình lịch sử</div>
            <h2 className="section-title">Những nấc thang lịch sử của Dân chủ</h2>
            <div className="section-divider"></div>
          </div>
          <div className="timeline">
            <div className="tl-item reveal">
              <div className="tl-era">Thời kỳ đầu</div>
              <h3>Cộng sản nguyên thủy</h3>
              <div className="tl-hl">Chưa có nền dân chủ chính thức.</div>
              <p>Xã hội chưa có giai cấp, chưa có nhà nước, và do đó chưa xuất hiện bất kỳ hình thức dân chủ nào.</p>
              <div className="tl-img"><img src="/images/primitive-commune.png" alt="Cộng sản nguyên thủy" /></div>
            </div>
            <div className="tl-item reveal">
              <div className="tl-era">Cổ đại</div>
              <h3>Chiếm hữu nô lệ</h3>
              <div className="tl-hl">Nền dân chủ chủ nô — đầu tiên trong lịch sử.</div>
              <p>Xuất hiện nền dân chủ chủ nô, nền dân chủ đầu tiên trong lịch sử, nhưng chỉ phục vụ cho giai cấp chủ nô.</p>
              <div className="tl-img"><img src="/images/slave-society.png" alt="Chiếm hữu nô lệ" /></div>
            </div>
            <div className="tl-item reveal">
              <div className="tl-era">Trung cổ</div>
              <h3>Phong kiến</h3>
              <div className="tl-hl">Nền quân chủ chuyên chế — không có dân chủ.</div>
              <p>Không có nền dân chủ, thay vào đó là nền quân chủ chuyên chế, quyền lực tập trung trong tay vua chúa và quý tộc.</p>
              <div className="tl-img"><img src="/images/feudalism.png" alt="Phong kiến" /></div>
            </div>
            <div className="tl-item reveal">
              <div className="tl-era">Cận - Hiện đại</div>
              <h3>Tư bản chủ nghĩa</h3>
              <div className="tl-hl">Nền dân chủ tư sản ra đời.</div>
              <p>Nền dân chủ tư sản ra đời, mở rộng quyền chính trị cho nhiều tầng lớp hơn, nhưng bản chất vẫn phục vụ giai cấp tư sản.</p>
              <div className="tl-img"><img src="/images/capitalism.png" alt="Tư bản chủ nghĩa" /></div>
            </div>
            <div className="tl-item reveal">
              <div className="tl-era">1871 — nay</div>
              <h3>Xã hội chủ nghĩa</h3>
              <div className="tl-hl">Nền dân chủ vô sản (XHCN) — cao hơn về chất.</div>
              <p>Nền dân chủ vô sản (XHCN) ra đời, là nền dân chủ cao hơn về chất. Phôi thai từ Công xã Pari (1871) và xác lập sau Cách mạng tháng Mười Nga (1917).</p>
              <div className="tl-img"><img src="/images/hcm-marx-lenin.png" alt="Chủ nghĩa xã hội" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* BẢN CHẤT */}
      <section id="ban-chat">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Bản chất Dân chủ XHCN</div>
            <h2 className="section-title">3 Phương diện Bản chất</h2>
            <p className="section-subtitle">Dân chủ XHCN là nền dân chủ mà mọi quyền lực thuộc về nhân dân, được thực hiện thông qua Nhà nước pháp quyền XHCN dưới sự lãnh đạo của Đảng Cộng sản.</p>
            <div className="section-divider"></div>
          </div>
          <div className="pillars-grid">
            <div className="pillar-card reveal"><div className="pillar-number">01</div><h3>Bản chất Chính trị</h3><p>Mang bản chất của giai cấp công nhân, có tính nhân dân rộng rãi và tính dân tộc sâu sắc. Thực hiện cơ chế nhất nguyên chính trị, do Đảng Cộng sản lãnh đạo. Nhân dân là chủ thể quyền lực nhà nước, tham gia vào quản lý nhà nước.</p></div>
            <div className="pillar-card reveal"><div className="pillar-number">02</div><h3>Bản chất Kinh tế</h3><p>Dựa trên chế độ sở hữu xã hội (công hữu) về các tư liệu sản xuất chủ yếu. Nhân dân là chủ thể phát triển lực lượng sản xuất và là người thụ hưởng lợi ích kinh tế.</p></div>
            <div className="pillar-card reveal"><div className="pillar-number">03</div><h3>Bản chất Tư tưởng - Văn hóa - Xã hội</h3><p>Lấy chủ nghĩa Mác - Lênin làm hệ tư tưởng chủ đạo. Thực hiện giải phóng con người triệt để, phát triển toàn diện cá nhân và thực hiện quyền tự do, bình đẳng.</p></div>
          </div>
        </div>
      </section>

      {/* GIẢI MÃ */}
      <section id="nghich-ly" className="paradox-section">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Giải mã nghịch lý</div>
            <h2 className="section-title">Tại sao lại &ldquo;Tự tiêu vong&rdquo;?</h2>
            <div className="section-divider"></div>
          </div>
          <div className="steps-container reveal">
            <div className="step-card"><div className="step-num">1</div><p>Theo lý luận Mác - Lênin, dân chủ là một hình thức tổ chức nhà nước của giai cấp thống trị. Nó vẫn mang tính giai cấp và là một công cụ chính trị.</p></div>
            <div className="step-card"><div className="step-num">2</div><p>Chế độ Cộng sản chủ nghĩa (tương lai) là một xã hội không còn giai cấp. Khi giai cấp biến mất, nhà nước cũng mất đi lý do tồn tại.</p></div>
            <div className="step-card"><div className="step-num">3</div><p>Nền dân chủ sẽ mất đi khi giai cấp và nhà nước không còn.</p></div>
          </div>
          <div className="alert-box reveal">
            <h3>ĐÂY KHÔNG PHẢI LÀ ĐỘC TÀI!</h3>
            <p>Độc tài là sự cai trị bằng bạo lực của một bộ máy nhà nước.</p>
            <p>Khi tiến lên Cộng sản chủ nghĩa, sự &ldquo;tiêu vong&rdquo; của dân chủ thực chất là sự tiêu vong của bộ máy cưỡng chế chính trị. Lúc này, pháp luật ép buộc được thay thế hoàn toàn bằng thói quen tự quản lý xã hội và đạo đức tự giác của con người.</p>
            <div className="quote">&ldquo;Đó không phải là sự mất tự do, mà là sự thăng hoa của tự do tuyệt đối.&rdquo;</div>
          </div>
        </div>
      </section>

      {/* KẾT LUẬN */}
      <section id="ket-luan" className="conclusion-section">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Kết luận</div>
            <h2 className="section-title">Thực tiễn Việt Nam &amp; Trách nhiệm của chúng ta</h2>
            <div className="section-divider"></div>
          </div>
          <div className="conclusion-grid reveal">
            <div className="conclusion-card"><h3>Mối quan hệ biện chứng</h3><p>Dân chủ XHCN là cơ sở để xây dựng nhà nước; ngược lại, nhà nước là công cụ để thực thi quyền làm chủ của nhân dân.</p></div>
            <div className="conclusion-card"><h3>Định hướng tại Việt Nam</h3><p>Xây dựng Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân. Phát huy dân chủ đi đôi với tăng cường pháp chế và phòng, chống tham nhũng.</p><p style={{marginTop:".75rem"}}>Công dân có trách nhiệm tích cực trong việc xây dựng và bảo vệ chế độ dân chủ.</p></div>
          </div>
          <div className="cta-block reveal">
            <h3>Vậy trách nhiệm của bạn trong kỷ nguyên hiện nay là gì?</h3>
            <p>Hãy suy ngẫm</p>
          </div>
        </div>
      </section>

      {/* MINH BẠCH AI */}
      <section className="ai-transparency">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Công khai</div>
            <h2 className="section-title">Minh bạch về việc sử dụng AI</h2>
            <div className="section-divider"></div>
          </div>
          <div className="reveal">
            <table className="ai-table">
              <thead>
                <tr>
                  <th>Hạng mục</th>
                  <th>Thực hiện</th>
                  <th>Tỷ lệ AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nội dung bài trình bày</td>
                  <td className="tag-student">Sinh viên</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Hình ảnh minh họa</td>
                  <td className="tag-student">Sinh viên sưu tầm</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Bố cục &amp; thiết kế giao diện</td>
                  <td className="tag-ai">AI (Claude)</td>
                  <td>~90%</td>
                </tr>
                <tr>
                  <td>Lập trình HTML/CSS/JS</td>
                  <td className="tag-ai">AI (Claude)</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>Hiệu ứng &amp; animation</td>
                  <td className="tag-ai">AI (Claude)</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>Chỉ đạo nội dung &amp; chọn ảnh</td>
                  <td className="tag-student">Sinh viên</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>Minigame (lập trình)</td>
                  <td className="tag-ai">AI (Claude)</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>Minigame (ý tưởng &amp; nội dung)</td>
                  <td className="tag-student">Sinh viên</td>
                  <td>0%</td>
                </tr>
              </tbody>
            </table>
            <p className="ai-note">
              Công cụ AI sử dụng: Claude (Anthropic) — Hỗ trợ thiết kế giao diện, viết code và lập trình minigame.<br />
              Toàn bộ nội dung học thuật, hình ảnh, ý tưởng trình bày và ý tưởng minigame do sinh viên thực hiện.
            </p>
          </div>
        </div>
      </section>

      <footer><p>Bài trình bày môn <span>MLN131</span> — Chủ nghĩa xã hội khoa học</p></footer>
    </>
  );
}
