const questions = [
  { id: 'where-have-you-been', chinese: '你去哪了？', wordCount: 4, punctuation: '？' },
  { id: 'get-up-six', chinese: '我每天早上六点起床。', wordCount: 7, punctuation: '。' },
  { id: 'reading-book', chinese: '她正在读一本有趣的书。', wordCount: 6, punctuation: '。' },
];
const grammarLessons = [
  { id: 'parts-of-speech', title: '词性', icon: '🐾', summary: '先认识句子里的“角色”：名词、动词、形容词、副词等。', structure: '名词 (N.) + 动词 (V.) + 其他成分；形容词修饰名词，副词修饰动词、形容词或全句。', example: 'The little cat runs quickly.（这只小猫跑得很快。）', mistake: '不要把形容词和副词混用：She sings beautiful. ✗ → She sings beautifully. ✓', exercise: '在 “The happy children laughed loudly.” 中，happy 和 loudly 分别是什么词性？', answer: 'happy 是形容词，修饰 children；loudly 是副词，修饰 laughed。' },
  { id: 'tenses', title: '时态', icon: '⏰', summary: '用动词形式表达动作发生的时间和状态。', structure: '一般现在：do/does；一般过去：did；现在进行：am/is/are doing；现在完成：have/has done。', example: 'She has lived here for three years.（她已经在这里住了三年。）', mistake: 'for + 一段时间，since + 时间点：I have studied English for five years. ✓', exercise: '选择正确形式：I ___ (finish) my homework already.', answer: 'have finished。already 常与现在完成时连用。' },
  { id: 'passive', title: '被动语态', icon: '🎈', summary: '当动作的承受者更重要或施动者不明确时使用。', structure: 'be + 过去分词；时态变化体现在 be：is made / was made / will be made。', example: 'English is spoken in many countries.（许多国家讲英语。）', mistake: '被动语态必须有 be：The window broken. ✗ → The window was broken. ✓', exercise: '把 “People grow rice here.” 改为被动语态。', answer: 'Rice is grown here.' },
  { id: 'non-finite', title: '非谓语动词', icon: '🪁', summary: '不作句子谓语的动词形式：to do、doing、done。', structure: 'to do 表目的/将来；doing 表主动/进行；done 表被动/完成。', example: 'To learn English well takes time.（学好英语需要时间。）', mistake: '介词后通常用 doing：He is good at drawing. ✓ 不是 at draw。', exercise: '填空：The girl ___ (stand) by the door is my sister.', answer: 'standing。女孩主动站在门边，用现在分词作后置定语。' },
  { id: 'subjunctive', title: '虚拟语气', icon: '☁️', summary: '用来表达与事实相反的假设、愿望或建议。', structure: '与现在相反：if + did/were, would do；建议：suggest that + 主语 + (should) do。', example: 'If I were you, I would ask the teacher.（如果我是你，我会问老师。）', mistake: '条件句中 be 常用 were：If I were taller… ✓', exercise: '填空：If it ___ (not rain) tomorrow, we would go out.', answer: 'did not rain / did not rain。此处是假设，不是对未来真实预测。' },
  { id: 'attributive-clauses', title: '定语从句', icon: '🔗', summary: '用从句修饰名词或代词，说明“哪一个、什么样的”。', structure: '先行词 + who/which/that/whose + 从句；人常用 who，物常用 which。', example: 'The book that I bought is interesting.（我买的那本书很有趣。）', mistake: '关系词在从句中作宾语时可省略：The book (that) I bought…', exercise: '填空：The boy ___ is wearing blue is my brother.', answer: 'who / that。先行词是人，关系词在从句中作主语。' },
  { id: 'adverbial-clauses', title: '状语从句', icon: '🌦️', summary: '说明时间、原因、条件、让步、结果等背景信息。', structure: '时间 when/while；原因 because；条件 if；让步 although；目的 so that。', example: 'I will call you when I arrive.（我到了就给你打电话。）', mistake: '时间和条件从句谈将来时，常用一般现在时代替 will：When he comes, … ✓', exercise: '填空：___ it was raining, we went for a walk.', answer: 'Although。表示“虽然下雨，我们还是去散步了”。' },
  { id: 'noun-clauses', title: '名词性从句', icon: '📦', summary: '一个从句在句中充当名词，可作主语、宾语、表语或同位语。', structure: 'that / whether / if / 疑问词 + 陈述语序；I know what he wants.', example: 'What she said made us happy.（她说的话让我们开心。）', mistake: '从句用陈述语序：Do you know where he lives? ✓', exercise: '改错：I wonder where does she live.', answer: 'I wonder where she lives. 疑问词后使用陈述语序。' },
  { id: 'inversion', title: '倒装', icon: '🔄', summary: '为了强调或满足句式要求，把助动词、be 或全部谓语放在主语前。', structure: '否定词置首：Never have I seen…；地点置首：Here comes the bus.', example: 'Only then did I understand the rule.（直到那时我才理解规则。）', mistake: 'only + 状语置首才倒装：Only then did he leave. ✓', exercise: '改写：I have never seen such a cute cat.', answer: 'Never have I seen such a cute cat.' },
  { id: 'emphasis', title: '强调', icon: '✨', summary: '突出句子中最重要的信息。', structure: 'It is/was + 被强调部分 + that/who + 其余部分；do/does/did + 动词原形。', example: 'It was Lily who found the key.（是 Lily 找到了钥匙。）', mistake: '强调句去掉 It is/was…that/who 后，应仍是完整句子。', exercise: '强调 “yesterday”：Tom met me yesterday.', answer: 'It was yesterday that Tom met me.' },
  { id: 'subject-verb-agreement', title: '主谓一致', icon: '🤝', summary: '谓语动词的人称和数要与真正的主语一致。', structure: '单数主语 + 单数谓语；复数主语 + 复数谓语；each/every 作主语时常用单数。', example: 'Each of the students has a book.（每个学生都有一本书。）', mistake: '主语后插入的 with/as well as 不改变谓语：The teacher with students is…', exercise: '填空：Neither Tom nor his friends ___ (be) ready.', answer: 'are。neither…nor… 的谓语常与靠近它的主语 friends 一致。' },
  { id: 'prepositions', title: '介词搭配', icon: '🧩', summary: '掌握常用动词、形容词和名词后的固定介词。', structure: 'be interested in；be good at；listen to；depend on；arrive at/in。', example: 'She is interested in science.（她对科学感兴趣。）', mistake: 'discuss 是及物动词：discuss the plan ✓，不是 discuss about the plan。', exercise: '填空：He is good ___ playing the piano.', answer: 'at。be good at + 名词/动名词。' },
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
  if (name === 'grammar') renderGrammarLesson(activeGrammarLessonId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let activeGrammarLessonId = grammarLessons[0].id;

function renderGrammarLesson(lessonId) {
  const lesson = grammarLessons.find((item) => item.id === lessonId) || grammarLessons[0];
  activeGrammarLessonId = lesson.id;
  document.querySelector('#grammar-category-list').innerHTML = grammarLessons.map((item) => `<button type="button" class="grammar-category ${item.id === lesson.id ? 'is-active' : ''}" data-lesson-id="${item.id}"><span>${item.icon}</span>${item.title}</button>`).join('');
  document.querySelector('#grammar-lesson').innerHTML = `<div class="lesson-title"><span>${lesson.icon}</span><div><p class="eyebrow">GRAMMAR NOTE</p><h2>${lesson.title}</h2></div></div><p class="lesson-summary">${lesson.summary}</p><section class="lesson-block"><h3>核心结构</h3><p>${lesson.structure}</p></section><section class="lesson-block example-block"><h3>例句</h3><p>${lesson.example}</p></section><section class="lesson-block mistake-block"><h3>易错点</h3><p>${lesson.mistake}</p></section><section class="mini-exercise"><p class="eyebrow">MINI PRACTICE</p><h3>${lesson.exercise}</h3><button type="button" class="answer-toggle">查看答案</button><p class="exercise-answer" hidden>${lesson.answer}</p></section>`;
  document.querySelectorAll('[data-lesson-id]').forEach((button) => button.addEventListener('click', () => renderGrammarLesson(button.dataset.lessonId)));
  document.querySelector('.answer-toggle').addEventListener('click', (event) => { const answer = document.querySelector('.exercise-answer'); answer.hidden = !answer.hidden; event.currentTarget.textContent = answer.hidden ? '查看答案' : '收起答案'; });
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
