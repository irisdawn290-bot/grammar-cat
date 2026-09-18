const questions = [
  { id: 'where-have-you-been', chinese: '你去哪了？', wordCount: 4, punctuation: '？' },
  { id: 'get-up-six', chinese: '我每天早上六点起床。', wordCount: 7, punctuation: '。' },
  { id: 'reading-book', chinese: '她正在读一本有趣的书。', wordCount: 6, punctuation: '。' },
];
const storageKey = 'grammar-cat.translation-progress.v1';
const toast = document.querySelector('#toast');
const views = {
  home: document.querySelector('#home-view'),
  grammar: document.querySelector('#grammar-view'),
  translation: document.querySelector('#translation-view'),
};

function createProgress() {
  return { currentQuestionIndex: 0, answers: {}, completedQuestionIds: [] };
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || !Number.isInteger(saved.currentQuestionIndex) || !saved.answers || !Array.isArray(saved.completedQuestionIds)) return createProgress();
    return {
      currentQuestionIndex: Math.min(Math.max(saved.currentQuestionIndex, 0), questions.length - 1),
      answers: saved.answers,
      completedQuestionIds: saved.completedQuestionIds.filter((id) => questions.some((question) => question.id === id)),
    };
  } catch {
    return createProgress();
  }
}

let progress = loadProgress();

function persistProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
}

function showView(name) {
  Object.entries(views).forEach(([viewName, element]) => { element.hidden = viewName !== name; });
  if (name === 'translation') renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
  const question = questions[progress.currentQuestionIndex];
  const answer = document.querySelector('#translation-answer');
  document.querySelector('#question-count').textContent = `第 ${progress.currentQuestionIndex + 1} 题，共 ${questions.length} 题`;
  document.querySelector('#completed-count').textContent = `已完成 ${progress.completedQuestionIds.length} 题`;
  document.querySelector('#test-progress-bar').style.width = `${(progress.completedQuestionIds.length / questions.length) * 100}%`;
  document.querySelector('#chinese-question').textContent = `“${question.chinese}”`;
  document.querySelector('#word-count').textContent = `${question.wordCount} 个单词`;
  document.querySelector('#sentence-blanks').setAttribute('aria-label', `英文答案有 ${question.wordCount} 个单词`);
  document.querySelector('#sentence-blanks').innerHTML = `${Array.from({ length: question.wordCount }, () => '<span>____</span>').join('')}<span class="sentence-punctuation">${question.punctuation}</span>`;
  answer.value = progress.answers[question.id] || '';
  document.querySelector('#submit-answer').textContent = progress.completedQuestionIds.includes(question.id) ? '已完成，继续下一题 →' : '保存并完成本题 →';
}

function saveCurrentAnswer() {
  const question = questions[progress.currentQuestionIndex];
  progress.answers[question.id] = document.querySelector('#translation-answer').value;
  persistProgress();
}

document.querySelectorAll('[data-view]').forEach((entry) => {
  entry.addEventListener('click', (event) => { event.preventDefault(); showView(entry.dataset.view); });
});

document.querySelector('#translation-answer').addEventListener('input', () => {
  saveCurrentAnswer();
  document.querySelector('#save-note').textContent = '已自动保存。切换页面或刷新后仍可继续。';
});

document.querySelector('#submit-answer').addEventListener('click', () => {
  saveCurrentAnswer();
  const question = questions[progress.currentQuestionIndex];
  if (!progress.answers[question.id].trim()) { showToast('先写下你的完整英文翻译，再完成本题吧。'); return; }
  if (!progress.completedQuestionIds.includes(question.id)) progress.completedQuestionIds.push(question.id);
  if (progress.currentQuestionIndex < questions.length - 1) progress.currentQuestionIndex += 1;
  persistProgress();
  renderQuestion();
  showToast(progress.completedQuestionIds.length === questions.length ? '太棒了，今天的测试已完成！' : '本题已保存，继续下一题吧。');
});

document.querySelector('#restart-test').addEventListener('click', () => {
  if (!window.confirm('重新开始会清空当前测试的所有答案和进度，确定吗？')) return;
  progress = createProgress();
  localStorage.removeItem(storageKey);
  renderQuestion();
  showToast('测试已重新开始。');
});

document.querySelector('#ai-preview').addEventListener('click', () => showToast('AI 答疑将通过独立的 /api/ai/questions 接口接入。'));
