const questions = [
  { id:'q01', chinese:'我每天早上六点起床。', wordCount:7, answers:['I get up at six every morning.'], grammar:'一般现在时', explanation:'表示每天重复发生的习惯，用一般现在时；主语是 I，所以用 get。', correction:'注意时间表达 at six 和频率时间 every morning 的位置。' },
  { id:'q02', chinese:'她正在给她的猫喂食。', wordCount:6, answers:['She is feeding her cat.'], grammar:'现在进行时', explanation:'正在发生的动作使用 be + doing。', correction:'feeding 不能写成 feed；be 动词要与 she 对应。' },
  { id:'q03', chinese:'你去哪了？', wordCount:4, answers:['Where have you been?'], grammar:'现在完成时', explanation:'询问对方刚刚或最近去过哪里，常用 have/has been。', correction:'疑问句中 have 放在主语 you 前。' },
  { id:'q04', chinese:'桌子上有一本英语书。', wordCount:6, answers:['There is an English book on the table.'], grammar:'There be 句型', explanation:'表示“某处有某物”用 There is/are；一本书是单数。', correction:'English 前用 an，不用 a。' },
  { id:'q05', chinese:'我们昨天看了一部很有趣的电影。', wordCount:7, answers:['We watched a very interesting film yesterday.','We watched a very interesting movie yesterday.'], grammar:'一般过去时', explanation:'yesterday 是明确的过去时间，用 watched。film 和 movie 都自然。', correction:'规则动词 watch 的过去式是 watched。' },
  { id:'q06', chinese:'我已经完成作业了。', wordCount:5, answers:['I have finished my homework.'], grammar:'现在完成时', explanation:'强调已经完成、与现在有关的结果，用 have finished。', correction:'不能和明确过去时间 yesterday 同时使用。' },
  { id:'q07', chinese:'请记得在离开前关灯。', wordCount:7, answers:['Please remember to turn off the light before leaving.'], grammar:'不定式与动名词', explanation:'remember to do 指“记得去做某事”；before 后接动名词。', correction:'turn off 是固定短语，不能写成 turn the light off before leave。' },
  { id:'q08', chinese:'这封信是两天前写的。', wordCount:7, answers:['This letter was written two days ago.'], grammar:'一般过去时的被动语态', explanation:'信是“被写”，结构为 was + 过去分词 written。', correction:'write 的过去分词是 written，不是 wrote。' },
  { id:'q09', chinese:'如果明天下雨，我们就待在家里。', wordCount:8, answers:['If it rains tomorrow, we will stay at home.'], grammar:'条件状语从句', explanation:'if 从句谈将来时用一般现在时 rains，主句用 will stay。', correction:'不要在 if 从句中写 will rain。' },
  { id:'q10', chinese:'她擅长和孩子们打交道。', wordCount:7, answers:['She is good at dealing with children.'], grammar:'介词搭配与动名词', explanation:'be good at 后接名词或动名词；deal with 表示“与……打交道”。', correction:'at 后不能直接接 deal。' },
  { id:'q11', chinese:'正在门口等你的那个女孩是我的妹妹。', wordCount:10, answers:['The girl waiting for you at the door is my sister.'], grammar:'现在分词作定语', explanation:'waiting for you at the door 修饰 girl，表示主动、正在进行。', correction:'不要把两个谓语直接并列：The girl waits ... is ... ✗。' },
  { id:'q12', chinese:'我不知道他为什么没有参加会议。', wordCount:9, answers:['I do not know why he did not attend the meeting.','I don’t know why he didn’t attend the meeting.'], grammar:'宾语从句', explanation:'why 引导宾语从句，后面使用陈述语序 he did not attend。', correction:'不能写 why did he not attend。' },
  { id:'q13', chinese:'这是我读过的最有用的书。', wordCount:9, answers:['This is the most useful book I have ever read.'], grammar:'最高级与定语从句', explanation:'the most useful 后常接省略 that 的定语从句；ever 常与现在完成时搭配。', correction:'最高级前一般要用 the。' },
  { id:'q14', chinese:'老师建议我们每天大声朗读。', wordCount:7, answers:['The teacher suggested that we read aloud every day.'], grammar:'虚拟语气', explanation:'suggest 表“建议”时，that 从句用动词原形 read。', correction:'不要写 suggested that we readed。' },
  { id:'q15', chinese:'他花了两个小时才修好这辆自行车。', wordCount:10, answers:['It took him two hours to repair the bicycle.','It took him two hours to fix the bicycle.'], grammar:'形式主语 it', explanation:'It takes/took somebody time to do something 是固定句型。repair 和 fix 都可以。', correction:'took 后先接人 him，再接时间。' },
  { id:'q16', chinese:'直到比赛结束，我才明白团队合作的重要性。', wordCount:12, answers:['Not until the game ended did I understand the importance of teamwork.'], grammar:'倒装', explanation:'Not until 放句首时，主句需要 did + 主语 + 动词原形的倒装。', correction:'不能写 Not until ... I understood。' },
  { id:'q17', chinese:'据说这座桥建于一百多年前。', wordCount:9, answers:['It is said that this bridge was built over a hundred years ago.'], grammar:'被动语态与形式主语 it', explanation:'It is said that... 表示“据说”；桥是被建造，用 was built。', correction:'build 的过去分词是 built。' },
  { id:'q18', chinese:'如果我是你，我会接受这个机会。', wordCount:9, answers:['If I were you, I would accept this opportunity.'], grammar:'虚拟语气', explanation:'与现在事实相反的假设：if + were，主句 would + 动词原形。', correction:'正式表达中 If I were you 比 If I was you 更合适。' },
  { id:'q19', chinese:'不但学生们而且老师也对这个计划感到兴奋。', wordCount:11, answers:['Not only the students but also the teacher is excited about the plan.'], grammar:'主谓一致', explanation:'not only...but also... 的谓语通常与靠近它的主语 teacher 一致，所以用 is。', correction:'不要因 students 是复数就写 are。' },
  { id:'q20', chinese:'我宁愿步行去学校，也不愿坐公交车。', wordCount:10, answers:['I would rather walk to school than take the bus.'], grammar:'rather than', explanation:'would rather do A than do B 表示“宁愿做 A 而不愿做 B”。', correction:'rather 和 than 后的两个动词保持原形、形式一致。' },
  { id:'q21', chinese:'我永远不会忘记你第一次帮助我的那一天。', wordCount:12, answers:['I will never forget the day when you first helped me.'], grammar:'定语从句', explanation:'the day 是时间先行词，可用 when 引导定语从句。', correction:'when 在从句中作时间状语，不要重复写 on that day。' },
  { id:'q22', chinese:'无论你做什么，都不要轻易放弃。', wordCount:9, answers:['Whatever you do, do not give up easily.','Whatever you do, don’t give up easily.'], grammar:'让步状语从句', explanation:'Whatever 引导“无论……什么”的让步从句；give up 是固定搭配。', correction:'whatever 从句本身用陈述语序 you do。' },
  { id:'q23', chinese:'对我来说，重要的不是你说什么，而是你做什么。', wordCount:15, answers:['To me, what matters is not what you say but what you do.'], grammar:'主语从句与表语从句', explanation:'what matters 作主语，what you say/what you do 都是名词性从句。', correction:'what 从句中用陈述语序。' },
  { id:'q24', chinese:'我父母和我妹妹都没有出席会议。', wordCount:9, answers:['Neither my parents nor my sister attended the meeting.'], grammar:'neither...nor 与主谓一致', explanation:'neither...nor 表示“两者都不”；谓语通常与靠近它的主语 sister 一致，这里过去式 attended 不分单复数。', correction:'不要写 Neither...and，也不要漏掉 nor。' },
  { id:'q25', chinese:'只有通过不断练习，你才能真正掌握一门语言。', wordCount:11, answers:['Only through constant practice can you truly master a language.'], grammar:'倒装与介词搭配', explanation:'Only + 状语放句首，使用 can you master 的倒装。', correction:'不能写 Only through ... you can master。' },
  { id:'q26', chinese:'要不是你的帮助，我不可能按时完成这个项目。', wordCount:13, answers:['Without your help, I could not have finished the project on time.'], grammar:'虚拟语气', explanation:'without 表示与过去事实相反的条件，主句用 could not have + 过去分词。', correction:'finished 表示过去未能完成的项目。' },
  { id:'q27', chinese:'是她的耐心和努力使这个团队取得了成功。', wordCount:12, answers:['It was her patience and hard work that made the team successful.'], grammar:'强调句', explanation:'It was + 被强调部分 + that + 其余部分，用来突出原因。', correction:'去掉 It was...that 后仍是完整句子。' },
  { id:'q28', chinese:'我不知道是坐火车还是开车去那里更好。', wordCount:13, answers:['I do not know whether it is better to go there by train or by car.'], grammar:'whether...or 与形式主语 it', explanation:'whether...or 表示“是……还是……”；it 作形式主语，to go there 是真正内容。', correction:'介词搭配是 by train / by car。' },
  { id:'q29', chinese:'不是你就是他必须为这个错误负责。', wordCount:10, answers:['Either you or he has to be responsible for the mistake.'], grammar:'either...or 与主谓一致', explanation:'either...or 的谓语通常与靠近它的主语 he 一致，因此用 has。', correction:'be responsible for 是固定搭配。' },
  { id:'q30', chinese:'无论遇到什么困难，我们都不应该失去对实现目标的信心。', wordCount:17, answers:['No matter what difficulties we meet, we should not lose confidence in achieving our goals.'], grammar:'让步状语从句、介词搭配与动名词', explanation:'No matter what 引导让步从句；lose confidence in doing 是自然搭配。', correction:'in 后接 achieving，不接 achieve；goals 用复数更自然。' },
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

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function createQuestionOrder() {
  // 保持整体难度递增，只在每个难度阶段内部随机排序。
  const stages = Array.from({ length: 5 }, (_, stageIndex) => {
    const start = stageIndex * 6;
    return shuffle(questions.slice(start, start + 6).map((question) => question.id));
  });
  return stages.flat();
}

function createProgress() {
  return {
    currentQuestionIndex: 0,
    questionOrder: createQuestionOrder(),
    answers: {},
    completedQuestionIds: [],
    feedbackQuestionId: null
  };
}

function getCurrentQuestion() {
  const questionId = progress.questionOrder?.[progress.currentQuestionIndex];
  return questions.find((question) => question.id === questionId) || questions[0];
}

function getQuestionWordCount(question) {
  return question.answers[0].trim().split(/\\s+/).filter(Boolean).length;
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || !Number.isInteger(saved.currentQuestionIndex) || !saved.answers || !Array.isArray(saved.completedQuestionIds)) return createProgress();
    const savedOrder = Array.isArray(saved.questionOrder) && saved.questionOrder.length === questions.length
      ? saved.questionOrder.filter((id) => questions.some((question) => question.id === id))
      : questions.map((question) => question.id);
    const questionOrder = savedOrder.length === questions.length ? savedOrder : questions.map((question) => question.id);
    return {
      currentQuestionIndex: Math.min(Math.max(saved.currentQuestionIndex, 0), questionOrder.length - 1),
      questionOrder,
      answers: saved.answers,
      completedQuestionIds: saved.completedQuestionIds.filter((id) => questions.some((question) => question.id === id)),
      feedbackQuestionId: questions.some((question) => question.id === saved.feedbackQuestionId) ? saved.feedbackQuestionId : null,
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
  const question = getCurrentQuestion();
  const answer = document.querySelector('#translation-answer');
  document.querySelector('#question-count').textContent = `第 ${progress.currentQuestionIndex + 1} 题，共 ${questions.length} 题`;
  document.querySelector('#completed-count').textContent = `已完成 ${progress.completedQuestionIds.length} 题`;
  document.querySelector('#test-progress-bar').style.width = `${(progress.completedQuestionIds.length / questions.length) * 100}%`;
  document.querySelector('#chinese-question').textContent = `“${question.chinese}”`;
  const wordCount = getQuestionWordCount(question);\n  document.querySelector('#word-count').textContent = `${wordCount} 个单词`;
  document.querySelector('#sentence-blanks').setAttribute('aria-label', `英文答案有 ${wordCount} 个单词`);
  document.querySelector('#sentence-blanks').innerHTML = `${Array.from({ length: wordCount }, () => '<span>____</span>').join('')}<span class="sentence-punctuation">${question.punctuation || ''}</span>`;
  answer.value = progress.answers[question.id] || '';
  document.querySelector('#submit-answer').textContent = progress.completedQuestionIds.includes(question.id) ? '已完成，查看本题反馈 →' : '保存并查看反馈 →';
  document.querySelector('.question-card').hidden = progress.feedbackQuestionId === question.id;
  document.querySelector('#feedback-card').hidden = progress.feedbackQuestionId !== question.id;
  if (progress.feedbackQuestionId === question.id) renderFeedback(question);
}

function normalizeAnswer(answer) { return answer.toLowerCase().replace(/[.,!?;:'"，。！？；：]/g, '').replace(/\s+/g, ' ').trim(); }

function renderFeedback(question) {
  const answer = progress.answers[question.id];
  const matched = question.answers.some((reference) => normalizeAnswer(reference) === normalizeAnswer(answer));
  document.querySelector('#feedback-result').textContent = matched ? '回答正确，做得真棒！' : '参考表达不同，来对照学习吧。';
  document.querySelector('#feedback-answer').textContent = answer;
  document.querySelector('#feedback-reference').textContent = question.answers.join(' / ');
  document.querySelector('#feedback-grammar').textContent = question.grammar;
  document.querySelector('#feedback-explanation').textContent = question.explanation;
  document.querySelector('#feedback-correction').textContent = matched ? '你的表达与参考答案匹配。继续保持！' : `${question.correction} 不同但自然、语法正确的表达也可能成立；这里提供的是推荐参考表达。`;
  document.querySelector('#next-question').textContent = progress.currentQuestionIndex === questions.length - 1 ? '完成今日测试 →' : '继续下一题 →';
}

function saveCurrentAnswer() {
  const question = getCurrentQuestion();
  progress.answers[question.id] = document.querySelector('#translation-answer').value;
  persistProgress();
}

document.querySelectorAll('[data-view]').forEach((entry) => {
  entry.addEventListener('click', (event) => { event.preventDefault(); showView(entry.dataset.view); });
});

document.querySelector('#translation-answer').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    document.querySelector('#submit-answer').click();
  }
});

document.querySelector('#translation-answer').addEventListener('input', () => {
  saveCurrentAnswer();
  document.querySelector('#save-note').textContent = '已自动保存。切换页面或刷新后仍可继续。';
});

document.querySelector('#submit-answer').addEventListener('click', () => {
  saveCurrentAnswer();
  const question = getCurrentQuestion();
  if (!progress.answers[question.id].trim()) { showToast('先写下你的完整英文翻译，再完成本题吧。'); return; }
  if (!progress.completedQuestionIds.includes(question.id)) progress.completedQuestionIds.push(question.id);
  progress.feedbackQuestionId = question.id;
  persistProgress();
  renderQuestion();
});

document.querySelector('#next-question').addEventListener('click', () => {
  const isLastQuestion = progress.currentQuestionIndex === progress.questionOrder.length - 1;
  progress.feedbackQuestionId = null;
  if (!isLastQuestion) progress.currentQuestionIndex += 1;
  persistProgress();
  renderQuestion();
  showToast(isLastQuestion ? '太棒了，你完成了今天全部 30 道测试！' : '本题已保存，继续下一题吧。');
});

document.querySelector('#restart-test').addEventListener('click', () => {
  if (!window.confirm('重新开始会清空当前测试的所有答案和进度，确定吗？')) return;
  localStorage.removeItem(storageKey);
  progress = createProgress();
  persistProgress();
  renderQuestion();
  showToast('测试已重新开始。');
});

document.querySelector('#ai-preview').addEventListener('click', () => showToast('AI 答疑将通过独立的 /api/ai/questions 接口接入。'));
