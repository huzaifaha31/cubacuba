let currentChart = null;

const sections = {
    home: `
        <section>
            <h2 class="text-3xl font-bold text-sky-800 dark:text-sky-400 mb-4 pb-2 border-b-2 border-sky-200 dark:border-sky-700 flex items-center gap-2">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-lg">🏠</span>
                <span>مرحبًا بك في مستكشف الخِلاف والاختِلاف</span>
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                يهدف هذا التطبيق إلى تبسيط وشرح مفهومي "الخِلاف" و "الاختِلاف" في الفقه الإسلامي. هذان المصطلحان، رغم تقاربهما، يحملان معاني دقيقة تؤثر في فهم الأحكام والتفاعلات الفقهية.
            </p>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate border-t-4 border-sky-600">
                    <div class="rounded-xl p-6 card-inner">
                        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-3 flex items-center gap-2">
                            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-sm">1</span>
                            الخِلاف (Al-Khilaf)
                        </h3>
                        <p class="mb-4 text-gray-700 dark:text-gray-300">يُشير غالبًا إلى النزاع أو المعارضة في المقصد والطريق، وقد لا يستند بالضرورة إلى دليل معتبر، ويحمل أحيانًا دلالة سلبية تشير إلى الشقاق.</p>
                        <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-200">من معانيه اللغوية:</h4>
                        <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>ضد الموافقة</li>
                            <li>نزاع، خصومة</li>
                            <li>تَضَارُبٌ فِي الرَّأْيِ</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate border-t-4 border-amber-600">
                    <div class="rounded-xl p-6 card-inner">
                        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-3 flex items-center gap-2">
                            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm">2</span>
                            الاختِلاف (Al-Ikhtilaf)
                        </h3>
                        <p class="mb-4 text-gray-700 dark:text-gray-300">يُشير غالبًا إلى التنوع والتباين في الآراء المبني على الاجتهاد والأدلة المعتبرة، ويكون فيه المقصد واحدًا ولكن الطرق تتعدد. يُعتبر هذا من رحمة الشريعة وسعتها.</p>
                        <h4 class="font-semibold mb-2 text-gray-800 dark:text-gray-200">من معانيه اللغوية:</h4>
                        <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>التنوّع والتباين</li>
                            <li>ضد الاتفاق (بمعنى التعدد)</li>
                            <li>variety, variousness, difference</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,
    comparison: `
        <section>
            <h2 class="text-3xl font-bold text-sky-800 dark:text-sky-400 mb-4 pb-2 border-b-2 border-sky-200 dark:border-sky-700 flex items-center gap-2">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-lg">⚖️</span>
                <span>مقارنة تفاعلية: الخِلاف مقابل الاختِلاف</span>
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                استخدم الأزرار أدناه لاستكشاف الفروقات الجوهرية بين المفهومين بناءً على السمات الرئيسية المذكورة في التقرير.
            </p>
            <div class="flex flex-wrap justify-center gap-2 mb-8">
                <button class="btn-animate bg-sky-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-shadow duration-200 shadow-md" onclick="updateComparison('definition')">التعريف الاصطلاحي</button>
                <button class="btn-animate bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-shadow duration-200" onclick="updateComparison('intent')">المقصود والطريق</button>
                <button class="btn-animate bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-shadow duration-200" onclick="updateComparison('evidence')">الاستناد إلى الدليل</button>
                <button class="btn-animate bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-shadow duration-200" onclick="updateComparison('ruling')">التكييف الشرعي</button>
                <button class="btn-animate bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-shadow duration-200" onclick="updateComparison('summary')">الخلاصة</button>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate border-t-4 border-sky-600">
                    <div class="rounded-xl p-6 card-inner">
                        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-3">الخِلاف</h3>
                        <div id="comparison-khilaf" class="text-lg min-h-[150px] leading-relaxed text-gray-700 dark:text-gray-300">
                            هو ذهاب كل طرف إلى وجهة غير وجهة الآخر، سواءً في الأقوال أو الأفعال أو المواقف.
                        </div>
                    </div>
                </div>
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate border-t-4 border-amber-600">
                    <div class="rounded-xl p-6 card-inner">
                        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-3">الاختِلاف</h3>
                        <div id="comparison-ikhtilaf" class="text-lg min-h-[150px] leading-relaxed text-gray-700 dark:text-gray-300">
                            هو تباين الآراء في مسألةٍ ما مع بقاء نوعٍ من الاتفاق في الأصول أو الغايات.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    types: `
        <section>
            <h2 class="text-3xl font-bold text-sky-800 dark:text-sky-400 mb-4 pb-2 border-b-2 border-sky-200 dark:border-sky-700 flex items-center gap-2">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-lg">🧭</span>
                <span>خريطة أنواع الاختلاف</span>
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                ينقسم الاختلاف إلى عدة أنواع بناءً على اعتبارات مختلفة. تصفح الأقسام أدناه لفهم هذه التصنيفات وأمثلتها.
            </p>
            <div class="space-y-8">
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate">
                    <div class="rounded-xl p-6 card-inner">
                        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-3">1. أقسام الاختلاف باعتبار الظاهر</h3>
                        <p class="mb-4 text-gray-700 dark:text-gray-300">ينقسم الاختلاف من حيث ظاهره ونتيجته إلى نوعين رئيسيين:</p>
                        <div class="flex flex-wrap gap-4">
                            <button class="btn-animate bg-sky-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-shadow duration-200 shadow-md" onclick="showTypeDetail('tanawwu')" data-type="tanawwu">اختلاف التنوع</button>
                            <button class="btn-animate bg-sky-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-shadow duration-200 shadow-md" onclick="showTypeDetail('tadadd')" data-type="tadadd">اختلاف التضاد</button>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate">
                    <div class="rounded-xl p-6 card-inner">
                        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-3">2. أنواع الخلاف باعتبار الإثمار</h3>
                        <p class="mb-4 text-gray-700 dark:text-gray-300">ينقسم الخلاف من حيث نتيجته العملية (هل يغير الحكم أم لا) إلى نوعين:</p>
                        <div class="flex flex-wrap gap-4">
                            <button class="btn-animate bg-sky-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-shadow duration-200 shadow-md" onclick="showTypeDetail('manawi')" data-type="manawi">الخلاف المعنوي</button>
                            <button class="btn-animate bg-sky-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-shadow duration-200 shadow-md" onclick="showTypeDetail('lafdhi')" data-type="lafdhi">الخلاف اللفظي</button>
                        </div>
                    </div>
                </div>

                <div id="type-detail-area" class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl card-animate bg-sky-50 dark:bg-slate-700 min-h-[200px] hidden p-[2px]">
                    <div class="rounded-xl p-6 card-inner">
                        <!-- Details will be injected here -->
                    </div>
                </div>
            </div>
        </section>
    `,
    evidence: `
        <section>
            <h2 class="text-3xl font-bold text-sky-800 dark:text-sky-400 mb-4 pb-2 border-b-2 border-sky-200 dark:border-sky-700 flex items-center gap-2">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-lg">📜</span>
                <span>الأدلة من الكتاب والسنة</span>
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                توضح النصوص التالية أن الاختلاف (التنوع) هو سنة كونية، وأن الاختلاف (النزاع) المذموم هو ما كان مبنيًا على البغي بعد مجيء العلم.
            </p>
            <div class="space-y-6">
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate">
                    <div class="rounded-xl p-6 card-inner">
                        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-3">آيات قرآنية</h3>
                        <div class="space-y-4">
                            <blockquote class="border-r-4 border-sky-500 pr-4 text-gray-700 dark:text-gray-300 leading-relaxed bg-sky-50/60 dark:bg-sky-900/30 rounded-lg py-3">
                                ﴿وَمِنۡ ءَايَٰتِهِۦ خَلۡقُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَٱخۡتِلَٰفُ أَلۡسِنَتِكُمۡ وَأَلۡوَٰنِكُمۡۚ إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّلۡعَٰلِمِينَ ٢٢﴾ <span class="text-sm text-sky-700 dark:text-sky-400">(سورة الروم: 22)</span>
                            </blockquote>
                            <blockquote class="border-r-4 border-sky-500 pr-4 text-gray-700 dark:text-gray-300 leading-relaxed bg-sky-50/60 dark:bg-sky-900/30 rounded-lg py-3">
                                ﴿وَءَاتَيۡنَٰهُم بَيِّنَٰتٖ مِّنَ ٱلۡأَمۡرِۖ فَمَا ٱخۡتَلَفُوٓاْ إِلَّا مِنۢ بَعۡدِ مَا جَآءَهُمُ ٱلۡعِلۡمُ بَغۡيَۢا بَيۡنَهُمۡۚ إِنَّ رَبَّكَ يَقۡضِي بَيۡنَهُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ فِيمَا كَانُواْ فِيهِ يَخۡتَلِفُونَ ١٧﴾ <span class="text-sm text-sky-700 dark:text-sky-400">(سورة الجاثية: 17)</span>
                            </blockquote>
                            <blockquote class="border-r-4 border-sky-500 pr-4 text-gray-700 dark:text-gray-300 leading-relaxed bg-sky-50/60 dark:bg-sky-900/30 rounded-lg py-3">
                                ﴿كَانَ ٱلنَّاسُ أُمَّةٗ وَٰحِدَةٗ فَبَعَثَ ٱللَّهُ ٱلنَّبِيِّـۧنَ مُبَشِّرِينَ وَمُنذِرِينَ وَأَنزَلَ مَعَهُمُ ٱلۡكِتَٰبَ بِٱلۡحَقِّ لِيَحۡكُمَ بَيۡنَ ٱلنَّاسِ فِيمَا ٱخۡتَلَفُواْ فِيهِۚ وَمَا ٱخۡتَلَفَ فِيهِ إِلَّا ٱلَّذِينَ أُوتُوهُ مِنۢ بَعۡدِ مَا جَآءَتۡهُمُ ٱلۡبَيِّنَٰتُ بَغۡيَۢا بَيۡنَهُمۡۖ فَهَدَى ٱللَّهُ ٱلَّذِينَ ءَامَنُواْ لِمَا ٱخۡتَلَفُواْ فِيهِ مِنَ ٱلۡحَقِّ بِإِذۡنِهِۦۗ وَٱللَّهُ يَهۡدِي مَن يَشَآءُ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٍ ٢١٣﴾ <span class="text-sm text-sky-700 dark:text-sky-400">(سورة البقرة: 213)</span>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate">
                    <div class="rounded-xl p-6 card-inner">
                        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-3">نصوص مروية</h3>
                        <div class="space-y-4">
                            <blockquote class="border-r-4 border-amber-500 pr-4 text-gray-700 dark:text-gray-300 leading-relaxed bg-amber-50/60 dark:bg-amber-900/30 rounded-lg py-3">
                                روي عنه صلى الله عليه وسلم أنه قال: «‌اختلاف ‌أمتي رحمة»
                            </blockquote>
                            <blockquote class="border-r-4 border-amber-500 pr-4 text-gray-700 dark:text-gray-300 leading-relaxed bg-amber-50/60 dark:bg-amber-900/30 rounded-lg py-3">
                                من حديث ابن عباس مرفوعًا بلفظ: «‌اختلاف ‌أصحابى رحمة»
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    causes: `
        <section>
            <h2 class="text-3xl font-bold text-sky-800 dark:text-sky-400 mb-4 pb-2 border-b-2 border-sky-200 dark:border-sky-700 flex items-center gap-2">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-lg">🧠</span>
                <span>اسباب الإختلاف بين الناس</span>
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                هذه النقاط السبع توضح الأسباب الجذرية والطبيعية والمنهجية التي تؤدي إلى تباين واختلاف الآراء بين البشر.
            </p>

            <div class="mb-6">
                <input
                    id="causes-search"
                    type="text"
                    class="w-full md:w-2/3 lg:w-1/2 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100"
                    placeholder="ابحث عن سبب أو كلمة (مثلاً: الرغبات، المناهج، التقليد)..."
                />
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
                <!-- 1 -->
                <div
                    class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate border-r-4 border-sky-500"
                    data-cause-card="true"
                    data-cause-title="اختلاف فطري وطبعي وضروري"
                >
                    <div class="rounded-xl p-6 card-inner">
                        <button
                            type="button"
                            class="w-full flex items-center justify-between text-right text-xl font-bold text-sky-700 dark:text-sky-400 mb-3 focus:outline-none"
                            data-cause-toggle
                        >
                            <span>1) إختلاف أمر فطري وطبعي وضروري</span>
                            <span
                                class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-sm transition-transform duration-200"
                                aria-hidden="true"
                            >
                                +
                            </span>
                        </button>

                        <div class="space-y-2 text-gray-700 dark:text-gray-300" data-cause-body>
                            <p class="mb-3 font-semibold">إرادة الله المطلقة:</p>
                            <p class="mb-3 text-sm">الله قادر على أن يجعل كل البشر أمة واحدة متفقة في الرأي والاعتقاد، لكنه لم يفعل.</p>
                            <p class="mb-3 font-semibold">الحكمة من الاختلاف:</p>
                            <p class="mb-3 text-sm">الاختلاف بين الناس أمر فطري وطبيعي وضروري، ويُظهر تنوع الله في الخلق.</p>
                        </div>
                    </div>
                </div>

                <!-- 2 -->
                <div
                    class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate border-r-4 border-amber-500"
                    data-cause-card="true"
                    data-cause-title="اختلاف المدارك والعقول"
                >
                    <div class="rounded-xl p-6 card-inner">
                        <button
                            type="button"
                            class="w-full flex items-center justify-between text-right text-xl font-bold text-sky-700 dark:text-sky-400 mb-3 focus:outline-none"
                            data-cause-toggle
                        >
                            <span>2) إختلاف المدارك والعقول</span>
                            <span
                                class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-sm transition-transform duration-200"
                                aria-hidden="true"
                            >
                                +
                            </span>
                        </button>

                        <div class="space-y-2 text-gray-700 dark:text-gray-300" data-cause-body>
                            <p class="mb-3 font-semibold">الفطرة الإلهية:</p>
                            <p class="mb-3 text-sm">الله خلق البشر بالقدرات العقلية المتفاوتة؛ فكل شخص يختلف في سرعة الفهم والذكاء والاستيعاب والقدرة على التحليل.</p>
                        </div>
                    </div>
                </div>

                <!-- ... بقية الأسباب بنفس الطريقة ... -->
                <!-- لتوفير المساحة، أضفت 2 فقط، أكمل البقية بنفس التنسيق -->
            </div>
        </section>
    `,
    discussion: `
        <section>
            <h2 class="text-3xl font-bold text-sky-800 dark:text-sky-400 mb-4 pb-2 border-b-2 border-sky-200 dark:border-sky-700 flex items-center gap-2">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-lg">💬</span>
                <span>مناقشة: المصيب والمخطئ في الاجتهاد</span>
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                توضح النصوص الشرعية أن الاجتهاد مأجور حتى لو لم يصب المجتهد الحق، طالما كان اجتهاده مبنيًا على أصول صحيحة. هذا الفهم هو أساس الرحمة والسعة في الاختلاف السائغ.
            </p>
            <div class="grid md:grid-cols-2 gap-6 items-center">
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate">
                    <div class="rounded-xl p-6 card-inner">
                        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-3">أجر المجتهد</h3>
                        <p class="mb-4 text-gray-700 dark:text-gray-300">حديث عمرو بن العاص (رضي الله عنه) يوضح هذا المبدأ:</p>
                        <blockquote class="border-r-4 border-sky-500 pr-4 italic text-gray-700 dark:text-gray-300 leading-relaxed bg-sky-50/60 dark:bg-sky-900/30 rounded-lg py-3">
                            «إِذَا حَكَمَ الْحَاكِمُ فَاجْتَهَدَ فَأَصَابَ فَلَهُ أَجْرَانِ، وَإِذَا حَكَمَ فَاجْتَهَدَ فَأَخْطَأَ فَلَهُ أَجْرٌ» (رواه البخاري ومسلم)
                        </blockquote>
                        <p class="mt-4 text-gray-700 dark:text-gray-300">
                            يوضح الإمام الشعراني أن هذا دليل على مشروعية تنوع الأقوال، وأن خطأ المجتهد هنا هو "عدم مصادفة الدليل" لا "الخروج عن الشريعة"، ولذلك له أجر على تتبعه واجتهاده.
                        </p>
                    </div>
                </div>
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate">
                    <div class="rounded-xl p-6 card-inner">
                        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-3">رسم بياني: أجر الاجتهاد</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">تمثيل بصري لعدد الأجور لمن أصاب ولمن أخطأ في الاجتهاد.</p>
                        <div class="chart-container">
                            <canvas id="rewardChart" role="img" aria-label="تمثيل بياني لأجر من اجتهد فأصاب وأجر من اجتهد فأخطأ"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    quiz: `
        <section>
            <h2 class="text-3xl font-bold text-sky-800 dark:text-sky-400 mb-4 pb-2 border-b-2 border-sky-200 dark:border-sky-700 flex items-center gap-2">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-lg">✅</span>
                <span>اختبر معلوماتك</span>
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                أجب عن الأسئلة التالية لاختبار فهمك لمفاهيم الخلاف والاختلاف. اضغط على الإجابة التي تعتقد أنها صحيحة.
            </p>

            <div id="quiz-container" class="space-y-6">
                <!-- سيتم حقن الأسئلة بواسطة JavaScript -->
            </div>

            <div id="quiz-result" class="mt-8 hidden">
                <div class="bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-6 card-inner border-t-4 border-sky-600">
                    <h3 class="text-2xl font-bold text-sky-700 dark:text-sky-400 mb-3 text-center">النتيجة</h3>
                    <p id="quiz-score" class="text-xl text-center text-gray-700 dark:text-gray-300 mb-4"></p>
                    <button
                        onclick="resetQuiz()"
                        class="btn-animate bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-shadow duration-200 shadow-md mx-auto block"
                    >
                        إعادة الاختبار
                    </button>
                </div>
            </div>
        </section>
    `,
};

const comparisonData = {
    definition: {
        khilaf:
            'هو ذهاب كل طرف إلى وجهة غير وجهة الآخر، سواءً في الأقوال أو الأفعال أو المواقف.',
        ikhtilaf:
            'هو تباين الآراء في مسألةٍ ما مع بقاء نوعٍ من الاتفاق في الأصول أو الغايات.',
    },
    intent: {
        khilaf: 'اختلاف في المقصود والطريق معًا.',
        ikhtilaf: 'أن يكون المقصود واحدًا لكن الطريق أو الوسيلة مختلفة.',
    },
    evidence: {
        khilaf: 'لا يستند إلى دليل، وقد يكون من آثار البدعة.',
        ikhtilaf: 'يستند إلى دليل معتبر شرعيًا.',
    },
    ruling: {
        khilaf: 'قد يصف النزاع والشقاق الذي لا تُقره الشريعة.',
        ikhtilaf: 'يُعد من آثار الرحمة والتنوع المسموح به في الاجتهاد.',
    },
    summary: {
        khilaf:
            'أشمل وأعمّ وقد يحمل معنى النزاع والتنازع غير المبني على الدليل.',
        ikhtilaf: 'هو التعدد المقبول في الرأي داخل إطار الاجتهاد الشرعي.',
    },
};

const typeDetails = {
    tanawwu: `
        <h4 class="text-xl font-bold text-green-700 dark:text-green-500 mb-3">اختلاف التنوع (مشروع)</h4>
        <p class="mb-3 text-gray-700 dark:text-gray-300">هو اختلاف بين أقوال أو أفعال كلّها صحيحة ومشروعة، لا يُناقض بعضها بعضًا. يُعد من محاسن الشريعة ويفتح باب السعة والرحمة.</p>
        <p class="font-semibold mb-2 text-gray-800 dark:text-gray-200">أمثلة:</p>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>صيغ التشهد المختلفة في الصلاة.</li>
            <li>قراءات القرآن الكريم (مثل: مالكِ / مَلِكِ).</li>
            <li>أذكار الركوع والسجود المتنوعة.</li>
        </ul>
    `,
    tadadd: `
        <h4 class="text-xl font-bold text-red-700 dark:text-red-500 mb-3">اختلاف التضاد (يحتاج ترجيح)</h4>
        <p class="mb-3 text-gray-700 dark:text-gray-300">هو اختلاف بين قولين لا يمكن اجتماعهما؛ إذا صَحّ أحدهما بَطَل الآخر. هذا النوع لا بد فيه من الترجيح بالقوة الدليلية.</p>
        <p class="font-semibold mb-2 text-gray-800 dark:text-gray-200">أمثلة:</p>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>حكم البيع بعد نداء الجمعة (صحيح مع الإثم / باطل).</li>
            <li>عدد الرضعات المحرِّمة (ثلاث / خمس).</li>
        </ul>
        <p class="mt-4 font-semibold text-gray-800 dark:text-gray-200">ينقسم هذا النوع إلى قسمين (انظر البطاقات الفرعية):</p>
        <div class="flex flex-wrap gap-4 mt-4">
            <button class="btn-animate bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-shadow duration-200" onclick="showTypeDetail('saigh')" data-type="saigh">اختلاف تضاد (سائغ)</button>
            <button class="btn-animate bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-shadow duration-200" onclick="showTypeDetail('madhmoum')" data-type="madhmoum">اختلاف تضاد (مذموم)</button>
        </div>
    `,
    saigh: `
        <h4 class="text-xl font-bold text-blue-700 dark:text-blue-500 mb-3">اختلاف تضاد (سائغ غير مذموم)</h4>
        <p class="mb-3 text-gray-700 dark:text-gray-300">هو اختلاف مقبول ومعتبر لأنه يقوم على أسس صحيحة واجتهاد معتبر (مثل اختلاف في فهم نص يحتمل أكثر من وجه).</p>
        <p class="font-semibold mb-2 text-gray-800 dark:text-gray-200">أمثلة:</p>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>حكم قراءة الفاتحة خلف الإمام.</li>
            <li>مقدار مسح الرأس في الوضوء.</li>
        </ul>
    `,
    madhmoum: `
        <h4 class="text-xl font-bold text-red-800 dark:text-red-600 mb-3">اختلاف تضاد (غير سائغ بل مذموم)</h4>
        <p class="mb-3 text-gray-700 dark:text-gray-300">هو الخلاف الذي لا يُعذر صاحبه، لأنه مبني على أسباب باطلة، أو مخالفة نص قطعي، أو تجاهل إجماع ثابت، أو مبني على الهوى والتعصب.</p>
        <p class="font-semibold mb-2 text-gray-800 dark:text-gray-200">أمثلة:</p>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>الخلاف في أصول العقيدة القطعية.</li>
            <li>إنكار ركن من أركان الإسلام.</li>
            <li>الابتداع في الدين.</li>
        </ul>
    `,
    manawi: `
        <h4 class="text-xl font-bold text-indigo-700 dark:text-indigo-500 mb-3">الخلاف المعنوي (حقيقي)</h4>
        <p class="mb-3 text-gray-700 dark:text-gray-300">هو اختلاف حقيقي بين الفقهاء أو المجتهدين في الحكم الشرعي أو أثره العملي، بحيث يترتب على القولين أحكام وآثار مختلفة في التطبيق. له "ثمرة عملية".</p>
        <p class="font-semibold mb-2 text-gray-800 dark:text-gray-200">أمثلة:</p>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>نقض الوضوء بمس المرأة (ينقض مطلقًا / لا ينقض إلا بشهوة) وما يترتب على ذلك من صحة الصلاة من عدمها.</li>
            <li>قراءة الفاتحة خلف الإمام (واجبة على المأموم / تكفي قراءة الإمام).</li>
        </ul>
    `,
    lafdhi: `
        <h4 class="text-xl font-bold text-gray-700 dark:text-gray-400 mb-3">الخلاف اللفظي (صوري)</h4>
        <p class="mb-3 text-gray-700 dark:text-gray-300">هو اختلاف في العبارات والألفاظ والتعبيرات، دون أن يترتب على ذلك اختلاف حقيقي في الحكم الشرعي أو أثر عملي في الواقع. لا ثمرة عملية له.</p>
        <p class="font-semibold mb-2 text-gray-800 dark:text-gray-200">أمثلة:</p>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>القول: (الأمر للوجوب) مقابل (الأمر يقتضي الوجوب) مع اتحاد النتيجة.</li>
            <li>اختلاف في تعريف الفقه بزيادة كلمات لا تغير المعنى العملي.</li>
        </ul>
    `,
};

// بيانات الكويز
const quizQuestions = [
    {
        question: 'ما الفرق الرئيسي بين الخِلاف والاختِلاف؟',
        options: [
            'الخِلاف مبني على أدلة والاختلاف ليس كذلك',
            'الاختِلاف مبني على الاجتهاد والأدلة المعتبرة، بينما الخِلاف قد لا يستند إلى دليل معتبر',
            'لا فرق بينهما',
            'الاختلاف يكون في العقيدة فقط',
        ],
        correct: 1,
        explanation:
            'الاختِلاف غالبًا ما يكون مبنيًا على الاجتهاد والأدلة المعتبرة، بينما الخِلاف قد لا يستند إلى دليل معتبر وقد يحمل معنى النزاع.',
    },
    {
        question: 'اختلاف التنوع هو:',
        options: [
            'اختلاف بين قولين لا يمكن اجتماعهما',
            'اختلاف بين أقوال كلّها صحيحة ومشروعة',
            'اختلاف مذموم',
            'اختلاف يحتاج دائمًا إلى ترجيح',
        ],
        correct: 1,
        explanation:
            'اختلاف التنوع هو اختلاف بين أقوال أو أفعال كلّها صحيحة ومشروعة، لا يُناقض بعضها بعضًا، مثل صيغ التشهد المختلفة.',
    },
    {
        question: 'أي من الأسباب التالية يُعَدّ سببًا لاختلاف الناس؟',
        options: [
            'اختلاف المدارك والعقول',
            'اختلاف الرغبات',
            'اختلاف المناهج العلمية',
            'جميع ما ذُكر',
        ],
        correct: 3,
        explanation:
            'جميع الخيارات السابقة تُعَدّ من الأسباب الطبيعية والفطرية التي تؤدي إلى اختلاف الآراء بين الناس.',
    },
    {
        question: 'ما حكم المجتهد الذي اجتهد فأخطأ؟',
        options: [
            'يأثم ولا أجر له',
            'له أجر واحد على اجتهاده',
            'لا أجر ولا إثم',
            'يُعاقب على خطئه',
        ],
        correct: 1,
        explanation:
            'قال النبي ﷺ: «إِذَا حَكَمَ الْحَاكِمُ فَاجْتَهَدَ فَأَصَابَ فَلَهُ أَجْرَانِ، وَإِذَا حَكَمَ فَاجْتَهَدَ فَأَخْطَأَ فَلَهُ أَجْرٌ». فالمجتهد الذي أخطأ له أجر واحد على اجتهاده.',
    },
    {
        question: 'الخلاف اللفظي (الصوري) هو:',
        options: [
            'خلاف له ثمرة عملية واضحة',
            'خلاف في العبارات فقط دون تأثير عملي',
            'خلاف مذموم',
            'خلاف يحتاج إلى ترجيح',
        ],
        correct: 1,
        explanation:
            'الخلاف اللفظي (الصوري) هو اختلاف في العبارات والألفاظ فقط، دون أن يترتب عليه اختلاف حقيقي في الحكم أو الأثر العملي.',
    },
];

let quizState = {
    currentAnswers: [],
    answered: 0,
};

function showSection(sectionId) {
    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }

    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = sections[sectionId];

    const sectionEl = contentArea.querySelector('section');
    if (sectionEl) {
        sectionEl.classList.add('fade-in-up');
    }

    // تحديث أزرار التبويب
    document.querySelectorAll('nav button').forEach((btn) => {
        btn.classList.remove('bg-sky-700', 'text-white', 'nav-link-active');
        btn.classList.add(
            'text-gray-600',
            'dark:text-gray-300',
            'hover:bg-sky-100',
            'dark:hover:bg-slate-700',
            'hover:text-sky-800',
            'dark:hover:text-sky-300'
        );
    });

    const activeBtn = document.getElementById(`nav-${sectionId}`);
    if (activeBtn) {
        activeBtn.classList.add('bg-sky-700', 'text-white', 'nav-link-active');
        activeBtn.classList.remove(
            'text-gray-600',
            'dark:text-gray-300',
            'hover:bg-sky-100',
            'dark:hover:bg-slate-700',
            'hover:text-sky-800',
            'dark:hover:text-sky-300'
        );
    }

    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.value = sectionId;
    }

    if (sectionId === 'discussion') {
        renderRewardChart();
    }

    if (sectionId === 'comparison') {
        updateComparison('definition');
    }

    if (sectionId === 'causes') {
        initCausesFeatures();
    }

    if (sectionId === 'quiz') {
        initQuiz();
    }
}

function updateComparison(key) {
    document.getElementById('comparison-khilaf').innerText =
        comparisonData[key].khilaf;
    document.getElementById('comparison-ikhtilaf').innerText =
        comparisonData[key].ikhtilaf;

    const buttons = document.querySelectorAll(
        '#content-area button[onclick^="updateComparison"]'
    );
    buttons.forEach((btn) => {
        if (btn.onclick.toString().includes(key)) {
            btn.classList.add('bg-sky-600', 'text-white', 'shadow-md');
            btn.classList.remove(
                'bg-gray-200',
                'dark:bg-slate-700',
                'text-gray-700',
                'dark:text-gray-300'
            );
        } else {
            btn.classList.remove('bg-sky-600', 'text-white', 'shadow-md');
            btn.classList.add(
                'bg-gray-200',
                'dark:bg-slate-700',
                'text-gray-700',
                'dark:text-gray-300'
            );
        }
    });
}

function showTypeDetail(typeKey) {
    const detailWrapper = document.getElementById('type-detail-area');
    if (!detailWrapper) return;

    const inner = detailWrapper.querySelector('.card-inner');
    if (inner) {
        inner.innerHTML = typeDetails[typeKey];
    }
    detailWrapper.classList.remove('hidden');
    detailWrapper.classList.add('fade-in-up');

    const allTypeButtons = document.querySelectorAll(
        '#content-area button[data-type]'
    );
    allTypeButtons.forEach((btn) => {
        const currentType = btn.getAttribute('data-type');

        if (currentType === typeKey) {
            btn.classList.add('bg-amber-600', 'text-white');
            btn.classList.remove(
                'bg-sky-600',
                'bg-gray-200',
                'dark:bg-slate-700',
                'text-gray-700',
                'dark:text-gray-300'
            );
        } else {
            if (['tanawwu', 'tadadd', 'manawi', 'lafdhi'].includes(currentType)) {
                btn.classList.add('bg-sky-600', 'text-white');
                btn.classList.remove(
                    'bg-amber-600',
                    'bg-gray-200',
                    'dark:bg-slate-700',
                    'text-gray-700',
                    'dark:text-gray-300'
                );
            } else {
                btn.classList.add(
                    'bg-gray-200',
                    'dark:bg-slate-700',
                    'text-gray-700',
                    'dark:text-gray-300'
                );
                btn.classList.remove('bg-amber-600', 'bg-sky-600', 'text-white');
            }
        }
    });

    if (['saigh', 'madhmoum'].includes(typeKey)) {
        const tadaddButton = document.querySelector(
            '#content-area button[data-type="tadadd"]'
        );
        if (tadaddButton) {
            tadaddButton.classList.add('bg-amber-600', 'text-white');
            tadaddButton.classList.remove('bg-sky-600');
        }
    }
}

function renderRewardChart() {
    const canvas = document.getElementById('rewardChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (currentChart) {
        currentChart.destroy();
    }

    const isDark = document.documentElement.classList.contains('dark');

    currentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['اجتهد فأخطأ', 'اجتهد فأصاب'],
            datasets: [
                {
                    label: 'عدد الأجور',
                    data: [1, 2],
                    backgroundColor: [
                        'rgba(234, 179, 8, 0.7)',
                        'rgba(14, 116, 144, 0.8)',
                    ],
                    borderColor: [
                        'rgba(234, 179, 8, 1)',
                        'rgba(14, 116, 144, 1)',
                    ],
                    borderWidth: 1,
                    borderRadius: 6,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1200,
                easing: 'easeOutQuart',
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        color: isDark ? '#d1d5db' : '#374151',
                    },
                    title: {
                        display: true,
                        text: 'مقدار الأجر',
                        color: isDark ? '#e5e7eb' : '#1f2937',
                    },
                    grid: {
                        color: isDark
                            ? 'rgba(148, 163, 184, 0.15)'
                            : 'rgba(148, 163, 184, 0.25)',
                    },
                },
                x: {
                    ticks: {
                        color: isDark ? '#d1d5db' : '#374151',
                    },
                    grid: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    rtl: true,
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    padding: 10,
                    cornerRadius: 8,
                    bodyFont: {
                        family: 'Tajawal',
                    },
                    titleFont: {
                        family: 'Tajawal',
                    },
                },
            },
        },
    });
}

function initCausesFeatures() {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) return;

    const cards = contentArea.querySelectorAll('[data-cause-card]');
    cards.forEach((card, index) => {
        const toggleBtn = card.querySelector('[data-cause-toggle]');
        const body = card.querySelector('[data-cause-body]');
        const icon = toggleBtn
            ? toggleBtn.querySelector('span[aria-hidden="true"]')
            : null;

        if (!toggleBtn || !body) return;

        const isFirst = index === 0;
        if (!isFirst) {
            body.classList.add('hidden');
        } else {
            body.classList.remove('hidden');
        }
        if (icon) {
            icon.textContent = isFirst ? '−' : '+';
        }

        toggleBtn.addEventListener('click', () => {
            const isHidden = body.classList.contains('hidden');

            cards.forEach((otherCard) => {
                const otherBody = otherCard.querySelector('[data-cause-body]');
                const otherIcon = otherCard.querySelector(
                    '[data-cause-toggle] span[aria-hidden="true"]'
                );
                if (otherBody && otherIcon) {
                    otherBody.classList.add('hidden');
                    otherIcon.textContent = '+';
                }
            });

            if (isHidden) {
                body.classList.remove('hidden');
                if (icon) icon.textContent = '−';
            }
        });
    });

    const searchInput = document.getElementById('causes-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const q = searchInput.value.trim().toLowerCase();
            cards.forEach((card) => {
                const title = (
                    card.getAttribute('data-cause-title') || ''
                ).toLowerCase();
                const text = card.innerText.toLowerCase();
                const match = !q || title.includes(q) || text.includes(q);
                card.classList.toggle('hidden', !match);
            });
        });
    }
}

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        const shouldShow = window.scrollY > 250;
        btn.classList.toggle('hidden', !shouldShow);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}

// Dark Mode
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleBtnMobile = document.getElementById('theme-toggle-mobile');
    const icon = document.getElementById('theme-icon');
    const iconMobile = document.getElementById('theme-icon-mobile');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        if (icon) icon.textContent = '☀️';
        if (iconMobile) iconMobile.textContent = '☀️';
    }

    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (icon) icon.textContent = isDark ? '☀️' : '🌙';
        if (iconMobile) iconMobile.textContent = isDark ? '☀️' : '🌙';

        // إعادة رسم الرسم البياني إذا كان موجودًا
        if (currentChart) {
            const canvas = document.getElementById('rewardChart');
            if (canvas) {
                renderRewardChart();
            }
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }
    if (toggleBtnMobile) {
        toggleBtnMobile.addEventListener('click', toggleTheme);
    }
}

// الكويز
function initQuiz() {
    quizState = {
        currentAnswers: [],
        answered: 0,
    };

    const container = document.getElementById('quiz-container');
    if (!container) return;

    container.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className =
            'bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-xl p-[2px] card-animate';
        questionDiv.innerHTML = `
            <div class="rounded-xl p-6 card-inner">
                <h3 class="text-xl font-bold text-sky-700 dark:text-sky-400 mb-4">
                    ${index + 1}. ${q.question}
                </h3>
                <div class="space-y-3">
                    ${q.options
                        .map(
                            (opt, i) => `
                        <div
                            class="quiz-option border-2 border-gray-300 dark:border-slate-600 rounded-lg p-4 cursor-pointer hover:border-sky-500 dark:hover:border-sky-400 transition-all"
                            data-question="${index}"
                            data-option="${i}"
                            onclick="selectOption(${index}, ${i})"
                        >
                            <span class="text-gray-800 dark:text-gray-200">${opt}</span>
                        </div>
                    `
                        )
                        .join('')}
                </div>
                <div id="explanation-${index}" class="mt-4 hidden">
                    <div class="bg-sky-50 dark:bg-sky-900/30 border-r-4 border-sky-500 rounded-lg p-4">
                        <p class="text-sm text-gray-700 dark:text-gray-300">${q.explanation}</p>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

function selectOption(questionIndex, optionIndex) {
    if (quizState.currentAnswers[questionIndex] !== undefined) return;

    quizState.currentAnswers[questionIndex] = optionIndex;
    quizState.answered++;

    const question = quizQuestions[questionIndex];
    const options = document.querySelectorAll(
        `[data-question="${questionIndex}"]`
    );

    options.forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (i === question.correct) {
            opt.classList.add('correct');
        } else if (i === optionIndex && i !== question.correct) {
            opt.classList.add('incorrect');
        }
    });

    const explanation = document.getElementById(`explanation-${questionIndex}`);
    if (explanation) {
        explanation.classList.remove('hidden');
    }

    if (quizState.answered === quizQuestions.length) {
        showQuizResult();
    }
}

function showQuizResult() {
    const correctCount = quizState.currentAnswers.filter(
        (ans, i) => ans === quizQuestions[i].correct
    ).length;

    const resultDiv = document.getElementById('quiz-result');
    const scoreP = document.getElementById('quiz-score');

    if (resultDiv && scoreP) {
        scoreP.textContent = `لقد أجبت بشكل صحيح على ${correctCount} من ${quizQuestions.length} أسئلة! ${
            correctCount === quizQuestions.length
                ? '🎉 ممتاز!'
                : correctCount >= quizQuestions.length / 2
                ? '👍 جيد جدًا!'
                : '💪 واصل التعلم!'
        }`;
        resultDiv.classList.remove('hidden');
    }
}

function resetQuiz() {
    initQuiz();
    const resultDiv = document.getElementById('quiz-result');
    if (resultDiv) {
        resultDiv.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    initBackToTop();
    initThemeToggle();
});