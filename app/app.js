/* ═══════════════════════════════════════════════════════
   FinPeace — Financial Health Checkup
   app.js — SPA Router · State · DISC Logic · Core Values
   Matching original mockup visual style
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ── Constants ── */
const STEPS = [
  { id: 0, label: 'Chào mừng', short: 'Welcome' },
  { id: 1, label: 'Hiểu bản thân', short: 'DISC' },
  { id: 2, label: 'Thu nhập', short: 'Income' },
  { id: 3, label: 'Chi tiêu', short: 'Expense' },
  { id: 4, label: 'Tài sản', short: 'Assets' },
  { id: 5, label: 'Nợ nần', short: 'Debt' },
  { id: 6, label: 'Rủi ro', short: 'Risk' },
  { id: 7, label: 'Mục tiêu', short: 'Goals' },
  { id: 8, label: 'Kết quả', short: 'Result' },
];

/* Core Values — Matching mockup: icon + label, 2x2 grid */
const CORE_VALUES = [
  { id: 'family',     label: 'Gia đình',    icon: 'family' },
  { id: 'invest',     label: 'Đầu tư',      icon: 'invest' },
  { id: 'experience', label: 'Trải nghiệm', icon: 'experience' },
  { id: 'career',     label: 'Sự nghiệp',   icon: 'career' },
  { id: 'health',     label: 'Sức khỏe',    icon: 'health' },
  { id: 'freedom',    label: 'Tự do',       icon: 'freedom' },
  { id: 'legacy',     label: 'Di sản',      icon: 'legacy' },
  { id: 'safety',     label: 'An toàn',     icon: 'safety' },
  { id: 'knowledge',  label: 'Tri thức',    icon: 'knowledge' },
  { id: 'connection', label: 'Kết nối',     icon: 'connection' },
];

const DISC_QUESTIONS = [
  {
    id: 'q1',
    question: 'Phong cách ra quyết định đầu tư của bạn là gì?',
    options: [
      { label: 'Quyết đoán & Nhanh chóng (D - Dominance)', desc: 'Thích nắm quyền kiểm soát, tập trung vào kết quả lợi nhuận cao.', disc: 'D' },
      { label: 'Cẩn trọng & Phân tích (C - Conscientiousness)', desc: 'Dựa trên dữ liệu, chi tiết và quy trình chặt chẽ để giảm thiểu rủi ro.', disc: 'C' },
      { label: 'Ổn định & Kiên nhẫn (S - Steadiness)', desc: 'Ưu tiên sự an toàn, bảo vệ tài sản và tính nhất quán dài hạn.', disc: 'S' },
      { label: 'Nhiệt tình & Kết nối (I - Influence)', desc: 'Thích chia sẻ cơ hội, đầu tư theo cảm hứng và mối quan hệ.', disc: 'I' },
    ]
  },
  {
    id: 'q2',
    question: 'Khi đối mặt với một quyết định tài chính quan trọng, bạn thường:',
    options: [
      { label: 'Quyết định nhanh dựa trên mục tiêu rõ ràng', desc: 'Hành động ngay, không ngại rủi ro nếu cơ hội đủ lớn.', disc: 'D' },
      { label: 'Tham khảo nhiều ý kiến trước khi quyết', desc: 'Cân nhắc tác động đến mọi người xung quanh.', disc: 'I' },
      { label: 'Suy nghĩ kỹ, tìm phương án an toàn nhất', desc: 'Ổn định và bền vững là ưu tiên hàng đầu.', disc: 'S' },
      { label: 'Phân tích số liệu rồi mới hành động', desc: 'So sánh dữ liệu, tính toán xác suất cẩn thận.', disc: 'C' },
    ]
  },
  {
    id: 'q3',
    question: 'Điều gì khiến bạn hài lòng nhất về tình hình tài chính?',
    options: [
      { label: 'Đạt mục tiêu tham vọng nhanh hơn dự kiến', desc: 'Vượt KPI và tạo đột phá.', disc: 'D' },
      { label: 'Tự do chi tiêu cho trải nghiệm vui vẻ', desc: 'Tiền giúp tạo kỷ niệm đáng nhớ.', disc: 'I' },
      { label: 'Gia đình được bảo vệ, cuộc sống ổn định', desc: 'Biết rằng mọi thứ đã được lo liệu.', disc: 'S' },
      { label: 'Kế hoạch tài chính đi đúng con số', desc: 'Mọi dòng tiền đều trong tầm kiểm soát.', disc: 'C' },
    ]
  },
  {
    id: 'q4',
    question: 'Trong một nhóm lập kế hoạch tài chính gia đình, bạn thường:',
    options: [
      { label: 'Người đưa ra quyết định cuối cùng', desc: 'Đặt mục tiêu và dẫn dắt hướng đi.', disc: 'D' },
      { label: 'Người truyền cảm hứng cho mọi người', desc: 'Tạo động lực và năng lượng tích cực.', disc: 'I' },
      { label: 'Người lắng nghe và hòa giải', desc: 'Đảm bảo ai cũng đồng ý trước khi tiến hành.', disc: 'S' },
      { label: 'Người lập bảng tính và kiểm tra', desc: 'Theo dõi ngân sách, kiểm tra từng chi tiết.', disc: 'C' },
    ]
  },
  {
    id: 'q5',
    question: 'Khi gặp chi phí bất ngờ lớn, phản ứng đầu tiên của bạn là:',
    options: [
      { label: 'Tìm cách giải quyết ngay lập tức', desc: 'Hành động nhanh, thậm chí vay mượn nếu cần.', disc: 'D' },
      { label: 'Chia sẻ với người thân để xin tư vấn', desc: 'Gọi điện cho bạn bè hoặc gia đình.', disc: 'I' },
      { label: 'Rút từ quỹ dự phòng đã chuẩn bị sẵn', desc: 'Bình tĩnh vì đã có kế hoạch từ trước.', disc: 'S' },
      { label: 'Lập danh sách ưu tiên chi trả', desc: 'Tính toán dòng tiền còn lại trước khi quyết.', disc: 'C' },
    ]
  },
];

const DISC_PROFILES = {
  D: { name: 'Dominance', vi: 'Quyết đoán', color: '#E53E3E', desc: 'Bạn là người hướng kết quả, thích thử thách và ra quyết định nhanh. Chiến lược tài chính phù hợp: mục tiêu cụ thể, milestones rõ ràng, và tự do điều chỉnh kế hoạch.' },
  I: { name: 'Influence', vi: 'Tạo ảnh hưởng', color: '#ED8936', desc: 'Bạn là người lạc quan, giao tiếp tốt và thích chia sẻ. Chiến lược tài chính phù hợp: tích sản với mục đích rõ ràng, kết hợp trải nghiệm, và có cộng đồng đồng hành.' },
  S: { name: 'Steadiness', vi: 'Ổn định', color: '#38A169', desc: 'Bạn coi trọng sự ổn định, kiên nhẫn và trung thành. Chiến lược tài chính phù hợp: tích sản đều đặn, bảo hiểm đầy đủ, và kế hoạch dài hạn không biến động lớn.' },
  C: { name: 'Conscientiousness', vi: 'Cẩn trọng', color: '#3182CE', desc: 'Bạn là người phân tích, chính xác và theo quy trình. Chiến lược tài chính phù hợp: data-driven, spreadsheet chi tiết, và tối ưu hóa từng con số.' },
};

/* ── SVG Icon Library ── */
const ICONS = {
  family: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  invest: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  experience: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l1.5 3.5L17 13l-3.5 1.5L12 18l-1.5-3.5L7 13l3.5-1.5z"/></svg>',
  career: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><path d="M12 12v.01"/></svg>',
  health: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  freedom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/></svg>',
  legacy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4-3 8-6 8-11a8 8 0 00-16 0c0 5 4 8 8 11z"/><circle cx="12" cy="11" r="3"/></svg>',
  safety: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  knowledge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>',
  connection: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>',
  checkmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
};

/* ── State ── */
const STATE_KEY = 'finpeace_health_check';

let state = {
  currentStep: 0,
  completedSteps: [],
  coreValues: [],
  discAnswers: {},
  discProfile: null,
  income: {},
  expenses: {},
  assets: {},
  debts: {},
  insurance: {},
  goals: [],
  sip: {},
};

/* ── App Object ── */
const App = {
  init() {
    this.loadState();
    this.renderStepper();
    this.renderCoreValues();
    this.renderDISC();
    this.renderPageDots();
    this.goToStep(state.currentStep);
    this.initParallax();
    this.drawRadar(); // Draw initial empty radar
  },

  /* ── State ── */
  loadState() {
    try {
      const saved = localStorage.getItem(STATE_KEY);
      if (saved) state = { ...state, ...JSON.parse(saved) };
    } catch (e) { /* ignore */ }
  },

  saveState() {
    try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  },

  /* ── Navigation ── */
  goToStep(stepId) {
    state.currentStep = stepId;

    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(`step-${stepId}`);
    if (target) target.classList.add('active');

    this.updateStepper();
    this.updateNav();
    this.updatePageDots();
    this.saveState();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  nextStep() {
    if (state.currentStep === 0) {
      this.goToStep(1);
      return;
    }

    if (!this.validateStep(state.currentStep)) return;

    if (!state.completedSteps.includes(state.currentStep)) {
      state.completedSteps.push(state.currentStep);
    }

    if (state.currentStep < STEPS.length - 1) {
      this.goToStep(state.currentStep + 1);
    }
  },

  prevStep() {
    if (state.currentStep > 0) {
      this.goToStep(state.currentStep - 1);
    }
  },

  validateStep(stepId) {
    if (stepId === 1) {
      if (state.coreValues.length === 0) {
        this.toast('Hãy chọn ít nhất 1 giá trị cốt lõi.', 'error');
        document.getElementById('valuesGrid').scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
      }
      if (Object.keys(state.discAnswers).length < DISC_QUESTIONS.length) {
        this.toast('Hãy trả lời tất cả câu hỏi DISC.', 'error');
        document.getElementById('discQuestions').scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
      }
      this.calculateDISC();
      return true;
    }
    return true;
  },

  toast(message, type = 'info') {
    const t = document.createElement('div');
    t.className = `toast toast-${type}`;
    t.textContent = message;
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transition = 'opacity 0.3s';
      setTimeout(() => t.remove(), 300);
    }, 3000);
  },

  /* ── Nav Updates ── */
  updateNav() {
    const step = state.currentStep;
    const wrapper = document.getElementById('stepperWrapper');
    const btnSaveQuit = document.getElementById('btnSaveQuit');
    const btnBack = document.getElementById('btnBack');
    const btnNext = document.getElementById('btnNext');
    const bottomNav = document.getElementById('bottomNav');
    const pageDots = document.getElementById('pageDots');
    const navLinks = document.getElementById('navLinks');

    if (step === 0) {
      wrapper.classList.remove('visible');
      btnSaveQuit.style.display = 'none';
      bottomNav.style.display = 'none';
      pageDots.style.display = 'none';
      navLinks.style.display = 'none';
    } else {
      wrapper.classList.add('visible');
      btnSaveQuit.style.display = '';
      bottomNav.style.display = '';
      pageDots.style.display = '';
      navLinks.style.display = '';

      btnBack.style.visibility = step <= 1 ? 'hidden' : 'visible';

      if (step === STEPS.length - 1) {
        btnNext.innerHTML = `Tiếp tục <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
      } else {
        btnNext.innerHTML = `Tiếp tục <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
      }
    }
  },

  /* ── Stepper ── */
  renderStepper() {
    const container = document.getElementById('stepper');
    const stepsList = STEPS.filter(s => s.id > 0);
    container.innerHTML = stepsList.map((s, idx) => `
      <div class="step ${state.currentStep === s.id ? 'active' : ''}" onclick="App.goToStep(${s.id})">
        <div class="step-dot ${state.completedSteps.includes(s.id) ? 'completed' : state.currentStep === s.id ? 'active' : 'pending'}">
          ${state.completedSteps.includes(s.id) ? ICONS.checkmark : s.id}
        </div>
        <span class="step-label">${s.label}</span>
        ${idx < stepsList.length - 1 ? `<div class="step-line ${state.completedSteps.includes(s.id) ? 'completed' : ''}"></div>` : ''}
      </div>
    `).join('');
  },

  updateStepper() { this.renderStepper(); },

  /* ── Page Dots ── */
  renderPageDots() {
    const container = document.getElementById('pageDots');
    if (!container) return;
    const stepsList = STEPS.filter(s => s.id > 0);
    container.innerHTML = stepsList.map(s =>
      `<div class="page-dot ${state.currentStep === s.id ? 'active' : ''}"></div>`
    ).join('');
  },

  updatePageDots() { this.renderPageDots(); },

  /* ── Core Values ── */
  renderCoreValues() {
    const grid = document.getElementById('valuesGrid');
    if (!grid) return;

    grid.innerHTML = CORE_VALUES.map(v => `
      <div class="value-card ${state.coreValues.includes(v.id) ? 'selected' : ''} ${!state.coreValues.includes(v.id) && state.coreValues.length >= 3 ? 'disabled' : ''}"
           onclick="App.toggleValue('${v.id}')">
        <div class="value-icon">${ICONS[v.icon]}</div>
        <span class="value-label">${v.label}</span>
      </div>
    `).join('');

    this.updateValuesCounter();
  },

  toggleValue(id) {
    const idx = state.coreValues.indexOf(id);
    if (idx >= 0) {
      state.coreValues.splice(idx, 1);
    } else {
      if (state.coreValues.length >= 3) return;
      state.coreValues.push(id);
    }
    this.saveState();
    this.renderCoreValues();
  },

  updateValuesCounter() {
    const count = state.coreValues.length;
    const counter = document.getElementById('valuesCounter');
    const countEl = document.getElementById('valuesCount');
    if (!counter || !countEl) return;
    countEl.textContent = count;
    counter.className = 'selection-counter' + (count === 3 ? ' full' : '');
  },

  /* ── DISC ── */
  renderDISC() {
    const container = document.getElementById('discQuestions');
    if (!container) return;

    container.innerHTML = DISC_QUESTIONS.map(q => `
      <div class="disc-card" id="disc-q-${q.id}">
        <h4 style="margin-bottom:16px;font-size:18px;font-weight:600;">${q.question}</h4>
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${q.options.map(opt => `
            <div class="disc-option ${state.discAnswers[q.id] === opt.disc ? 'selected' : ''}"
                 onclick="App.selectDISC('${q.id}', '${opt.disc}', this)">
              <div class="disc-radio"></div>
              <div class="disc-option-text">
                <strong>${opt.label}</strong>
                <span>${opt.desc}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    if (Object.keys(state.discAnswers).length === DISC_QUESTIONS.length) {
      this.calculateDISC();
      this.showDISCResult();
    }
  },

  selectDISC(questionId, discType, element) {
    state.discAnswers[questionId] = discType;
    this.saveState();

    const parent = element.closest('.disc-card');
    parent.querySelectorAll('.disc-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');

    // Update radar live
    this.calculateDISC();
    this.drawRadar();

    if (Object.keys(state.discAnswers).length === DISC_QUESTIONS.length) {
      this.showDISCResult();
    }
  },

  calculateDISC() {
    const scores = { D: 0, I: 0, S: 0, C: 0 };
    Object.values(state.discAnswers).forEach(type => {
      scores[type] = (scores[type] || 0) + 1;
    });

    const total = DISC_QUESTIONS.length;
    const normalized = {};
    for (const key in scores) {
      normalized[key] = Math.round((scores[key] / total) * 100);
    }

    const dominant = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    state.discProfile = { ...scores, normalized, dominant };
    this.saveState();
  },

  showDISCResult() {
    const resultDiv = document.getElementById('discResult');
    const summaryDiv = document.getElementById('discSummary');
    if (!resultDiv || !summaryDiv || !state.discProfile) return;

    const profile = DISC_PROFILES[state.discProfile.dominant];
    const normalized = state.discProfile.normalized;

    summaryDiv.innerHTML = `
      <div style="margin-bottom:16px;">
        <span class="label-sm" style="color:var(--on-surface-variant);">Phong cách chính</span>
        <h3 style="color:${profile.color};margin-top:4px;font-size:28px;">${profile.vi} (${state.discProfile.dominant})</h3>
      </div>
      <p class="body-md text-muted" style="margin-bottom:20px;">${profile.desc}</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        ${['D', 'I', 'S', 'C'].map(type => `
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:10px;height:10px;border-radius:50%;background:${DISC_PROFILES[type].color};"></div>
            <span class="label-md">${DISC_PROFILES[type].vi}</span>
            <span class="mono label-md" style="margin-left:auto;color:${DISC_PROFILES[type].color};">${normalized[type]}%</span>
          </div>
        `).join('')}
      </div>
    `;

    resultDiv.style.display = 'block';

    // Update radar card text
    const radarCaption = document.querySelector('#discRadarCard p');
    if (radarCaption) {
      radarCaption.textContent = `Phong cách chính: ${profile.vi} (${state.discProfile.dominant})`;
      radarCaption.style.fontStyle = 'normal';
      radarCaption.style.fontWeight = '600';
      radarCaption.style.color = profile.color;
    }

    setTimeout(() => {
      resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  },

  /* ── Radar Chart ── */
  drawRadar() {
    const canvas = document.getElementById('discRadar');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) / 2 - 36;
    const labels = ['D', 'I', 'S', 'C'];
    const n = labels.length;

    // Get values (default to 0 if no answers yet)
    let values;
    if (state.discProfile && state.discProfile.normalized) {
      values = labels.map(l => state.discProfile.normalized[l] / 100);
    } else {
      values = [0, 0, 0, 0];
    }

    ctx.clearRect(0, 0, W, H);

    // Grid rings — concentric circles (matching mockup style)
    for (let ring = 1; ring <= 4; ring++) {
      const r = (R / 4) * ring;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = ring === 4 ? '#bccabc' : '#e0e2e8';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Axes
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + R * Math.cos(angle), cy + R * Math.sin(angle));
      ctx.strokeStyle = '#e0e2e8';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Data polygon fill
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const idx = i % n;
      const angle = (Math.PI * 2 * idx) / n - Math.PI / 2;
      const r = R * Math.max(values[idx], 0.08);
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(0, 168, 89, 0.12)';
    ctx.fill();
    ctx.strokeStyle = '#006d38';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Data points
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const r = R * Math.max(values[i], 0.08);
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#006d38';
      ctx.fill();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Center dot
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#a8f3c3';
    ctx.fill();

    // Labels
    ctx.font = '600 15px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const lx = cx + (R + 22) * Math.cos(angle);
      const ly = cy + (R + 22) * Math.sin(angle);
      ctx.fillStyle = DISC_PROFILES[labels[i]].color;
      ctx.fillText(labels[i], lx, ly);
    }
  },

  /* ── Parallax for glass panels ── */
  initParallax() {
    document.addEventListener('mousemove', (e) => {
      const panels = document.querySelectorAll('.glass-parallax');
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      panels.forEach(panel => {
        panel.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  },
};

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => App.init());
