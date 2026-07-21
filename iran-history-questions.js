const questions = [

{
id:1,
title:"اگر قرار بود تمام عمرت را در یکی از این جوامع زندگی کنی، کدام را انتخاب می‌کردی؟",
answers:[
{text:"جامعه‌ای با امنیت، قانون و نظم بالا",score:{security:2,law:2,stability:2,discipline:1}},
{text:"جامعه‌ای که علم و آموزش مهم‌ترین ارزش آن است",score:{science:2,education:2,culture:1,innovation:1}},
{text:"جامعه‌ای که تجارت و ارتباط با جهان در آن رونق دارد",score:{trade:2,economy:2,international:2,prosperity:1}},
{text:"جامعه‌ای که سنت و آیین‌های مذهبی در آن پررنگ است",score:{religion:2,tradition:2,community:2,spirituality:1}}
]
},

{
id:2,
title:"اگر فرزندت قرار باشد در یک جامعه بزرگ شود، دوست داری مهم‌ترین چیزی که یاد بگیرد چیست؟",
answers:[
{text:"تفکر، مطالعه و دانش",score:{science:2,education:2,innovation:1}},
{text:"احترام به خانواده و سنت",score:{family:2,tradition:2,community:1}},
{text:"انضباط و مسئولیت‌پذیری",score:{discipline:2,law:2,government:1}},
{text:"تجارت و ارتباط با مردم جهان",score:{trade:2,international:2,economy:1}}
]
},

{
id:3,
title:"اگر ثروت زیادی در اختیار حکومت باشد، بهتر است صرف چه چیزی شود؟",
answers:[
{text:"مدرسه، دانشگاه و کتابخانه",score:{science:2,education:2,innovation:1}},
{text:"ارتش و امنیت کشور",score:{security:2,war:2,discipline:1}},
{text:"جاده‌ها، بازارها و تجارت",score:{trade:2,economy:2,prosperity:1}},
{text:"معابد، بناهای فرهنگی و تاریخی",score:{religion:2,culture:2,architecture:2}}
]
},

{
id:4,
title:"اگر در یک شهر تاریخی قدم بزنی، بیشتر جذب کدام بخش می‌شوی؟",
answers:[
{text:"کتابخانه‌ها و مدارس",score:{science:2,education:2,culture:1}},
{text:"بازارها و کاروانسراها",score:{trade:2,economy:2,international:1}},
{text:"کاخ‌ها و ساختمان‌های حکومتی",score:{government:2,law:1,architecture:2}},
{text:"آتشکده، مسجد یا مکان‌های آیینی",score:{religion:2,tradition:2,spirituality:2}}
]
},

{
id:5,
title:"اگر شغلی را در آن دوران انتخاب می‌کردی، کدام را ترجیح می‌دادی؟",
answers:[
{text:"دانشمند یا پزشک",score:{science:2,education:2}},
{text:"بازرگان",score:{trade:2,economy:2,international:1}},
{text:"هنرمند یا معمار",score:{art:2,culture:2,architecture:2}},
{text:"سرباز یا فرمانده",score:{war:2,discipline:2,security:1}}
]
},

{
id:6,
title:"مهم‌ترین ویژگی یک حکومت خوب چیست؟",
answers:[
{text:"اجرای قانون برای همه",score:{law:2,justice:2}},
{text:"توسعه علم و فناوری",score:{science:2,innovation:2}},
{text:"ایجاد رفاه اقتصادی",score:{economy:2,prosperity:2}},
{text:"حفظ سنت و هویت ملی",score:{tradition:2,nationalIdentity:2}}
]
},

{
id:7,
title:"اگر خبر حمله دشمن برسد، بهترین واکنش چیست؟",
answers:[
{text:"مذاکره تا حد امکان",score:{peace:2,international:2}},
{text:"آمادگی کامل نظامی",score:{war:2,security:2}},
{text:"محافظت از مردم و شهرها",score:{comfort:2,family:2,justice:1}},
{text:"حفظ اقتصاد و تجارت",score:{trade:2,economy:2}}
]
},

{
id:8,
title:"اگر قرار بود در یک شهر زندگی کنی، دوست داشتی چه چیزی بیش از همه مشهور باشد؟",
answers:[
{text:"دانشگاه‌ها و دانشمندان",score:{science:2,education:2}},
{text:"بازارهای بزرگ",score:{trade:2,economy:2}},
{text:"آثار معماری",score:{architecture:2,art:2,culture:1}},
{text:"امنیت و نظم مثال‌زدنی",score:{security:2,stability:2,law:1}}
]
},

{
id:9,
title:"در اوقات فراغت بیشتر به چه کاری علاقه داری؟",
answers:[
{text:"مطالعه و یادگیری",score:{science:2,education:2}},
{text:"سفر و کشف مکان‌های جدید",score:{international:2,adventure:2}},
{text:"شرکت در مراسم فرهنگی یا مذهبی",score:{culture:2,religion:2}},
{text:"فعالیت‌های ورزشی و رقابتی",score:{competition:2,discipline:1,war:1}}
]
},

{
id:10,
title:"اگر تنها یک ارزش را برای جامعه انتخاب کنی، کدام است؟",
answers:[
{text:"عدالت",score:{justice:3,law:1}},
{text:"آزادی",score:{freedom:3,individualism:1}},
{text:"رفاه",score:{comfort:2,prosperity:2}},
{text:"هویت ملی",score:{nationalIdentity:2,tradition:2}}
]
},
  {
id:11,
title:"فرض کن حاکم شهر از مردم می‌خواهد برای ساخت یک بنای بزرگ مالیات بیشتری پرداخت کنند. اگر نتیجه قطعی باشد، ترجیح می‌دهی این بنا چه باشد؟",
answers:[
{text:"دانشگاه، کتابخانه یا رصدخانه",score:{science:2,education:2,innovation:1,culture:1}},
{text:"پل، جاده و بازارهای جدید",score:{trade:2,economy:2,prosperity:1,international:1}},
{text:"دژ، دیوار دفاعی و پادگان",score:{security:2,war:2,discipline:1,government:1}},
{text:"معبد، مسجد یا بنای آیینی",score:{religion:2,tradition:2,spirituality:2,culture:1}}
]
},

{
id:12,
title:"اگر در جامعه‌ای زندگی می‌کردی که هر چند سال یک‌بار با جنگ روبه‌رو می‌شد، چه احساسی داشتی؟",
answers:[
{text:"تا جای ممکن باید از جنگ جلوگیری کرد.",score:{peace:2,comfort:2,family:1,justice:1}},
{text:"اگر برای حفظ کشور لازم باشد، جنگ قابل قبول است.",score:{war:2,nationalIdentity:2,security:1}},
{text:"مهم این است که مردم کمترین آسیب را ببینند.",score:{comfort:2,justice:2,community:1}},
{text:"اگر تجارت آسیب نبیند، می‌توان بحران را مدیریت کرد.",score:{trade:2,economy:2,international:1}}
]
},

{
id:13,
title:"بیشتر دوست داری مردم تو را با کدام ویژگی بشناسند؟",
answers:[
{text:"دانش و خرد",score:{science:2,education:2,culture:1}},
{text:"شجاعت و قدرت",score:{war:2,discipline:2,competition:1}},
{text:"ثروت و موفقیت اقتصادی",score:{economy:2,trade:2,prosperity:1}},
{text:"درستکاری و عدالت",score:{justice:2,law:2,community:1}}
]
},

{
id:14,
title:"اگر قرار بود در یک جشن بزرگ ملی شرکت کنی، کدام بخش برایت جذاب‌تر بود؟",
answers:[
{text:"نمایش اختراعات، کتاب‌ها و دستاوردهای علمی",score:{science:2,innovation:2,education:1}},
{text:"موسیقی، شعر و هنر",score:{culture:2,art:2,architecture:1}},
{text:"رژه نظامی و نمایش قدرت",score:{war:2,government:2,discipline:1}},
{text:"آیین‌های سنتی و مذهبی",score:{religion:2,tradition:2,spirituality:2}}
]
},

{
id:15,
title:"فرض کن امکان سفر آزاد در سراسر کشور وجود دارد. بیشتر دوست داری به کجا بروی؟",
answers:[
{text:"شهرهای علمی و فرهنگی",score:{science:2,culture:2,education:1}},
{text:"بندرها و مراکز تجارت",score:{trade:2,international:2,economy:1}},
{text:"مناطق مرزی و قلعه‌ها",score:{adventure:2,war:2,security:1}},
{text:"زیارتگاه‌ها و شهرهای مقدس",score:{religion:2,spirituality:2,tradition:1}}
]
},

{
id:16,
title:"اگر قرار بود یک قانون جدید تصویب شود، کدام را مهم‌تر می‌دانستی؟",
answers:[
{text:"همه در برابر قانون برابر باشند.",score:{law:2,justice:2,freedom:1}},
{text:"فرصت تحصیل برای همه فراهم شود.",score:{education:2,science:2,socialMobility:1}},
{text:"حمایت از تولید و تجارت داخلی",score:{economy:2,trade:2,prosperity:1}},
{text:"حفظ سنت‌ها و ارزش‌های تاریخی",score:{tradition:2,nationalIdentity:2,religion:1}}
]
},

{
id:17,
title:"اگر همسایه‌ای از کشور دیگری به شهر شما مهاجرت کند، اولین واکنش تو چیست؟",
answers:[
{text:"از آشنایی با فرهنگ جدید استقبال می‌کنم.",score:{international:2,culture:2,freedom:1}},
{text:"اگر قانون را رعایت کند، مشکلی نیست.",score:{law:2,security:2,government:1}},
{text:"به همکاری اقتصادی فکر می‌کنم.",score:{trade:2,economy:2,prosperity:1}},
{text:"ترجیح می‌دهم هویت فرهنگی شهر حفظ شود.",score:{nationalIdentity:2,tradition:2,community:1}}
]
},

{
id:18,
title:"اگر قرار بود در یک خانواده اشرافی یا معمولی زندگی کنی، کدام جامعه را ترجیح می‌دادی؟",
answers:[
{text:"جامعه‌ای که هرکس بتواند با تلاش پیشرفت کند.",score:{socialMobility:2,education:1,innovation:1,economy:1}},
{text:"جامعه‌ای که نظم طبقاتی مشخصی داشته باشد.",score:{government:2,discipline:2,tradition:1}},
{text:"جامعه‌ای که همه از رفاه نسبی برخوردار باشند.",score:{comfort:2,justice:2,prosperity:1}},
{text:"جامعه‌ای که خانواده و جایگاه اجتماعی اهمیت زیادی داشته باشد.",score:{family:2,community:2,tradition:1}}
]
},

{
id:19,
title:"اگر قرار بود شهر تو به یک دلیل در تاریخ مشهور شود، دوست داشتی آن دلیل چه باشد؟",
answers:[
{text:"مرکز علم و اندیشه",score:{science:2,education:2,culture:1}},
{text:"مرکز تجارت جهان",score:{trade:2,international:2,economy:1}},
{text:"قدرت نظامی و پیروزی‌ها",score:{war:2,security:2,government:1}},
{text:"هنر، معماری و فرهنگ",score:{architecture:2,art:2,culture:2}}
]
},

{
id:20,
title:"در نهایت اگر فقط یکی از این سبک‌های زندگی را انتخاب کنی، کدام را برمی‌گزینی؟",
answers:[
{text:"زندگی آرام، امن و باکیفیت",score:{peace:2,comfort:2,security:1,stability:1}},
{text:"زندگی پر از پیشرفت، یادگیری و نوآوری",score:{science:2,innovation:2,education:1}},
{text:"زندگی پرچالش، رقابتی و پرهیجان",score:{competition:2,adventure:2,war:1}},
{text:"زندگی ریشه‌دار با هویت، سنت و همبستگی اجتماعی",score:{tradition:2,nationalIdentity:2,community:2}}
]
},
  {
id:21,
title:"اگر در جامعه‌ای زندگی می‌کردی که حکومت قصد اجرای یک اصلاح بزرگ را داشت، کدام را مفیدتر می‌دانستی؟",
answers:[
{text:"گسترش آموزش و مراکز علمی",score:{science:2,education:2,innovation:1,socialMobility:1}},
{text:"بهبود تجارت و ساخت راه‌های جدید",score:{trade:2,economy:2,prosperity:1,international:1}},
{text:"تقویت قانون و نظم عمومی",score:{law:2,security:2,stability:1,government:1}},
{text:"حفظ سنت‌ها و میراث فرهنگی",score:{tradition:2,culture:2,nationalIdentity:1,religion:1}}
]
},

{
id:22,
title:"اگر قرار بود در یک محله زندگی کنی، همسایه‌های ایده‌آل تو چه کسانی بودند؟",
answers:[
{text:"استادان، نویسندگان و پژوهشگران",score:{science:2,education:2,culture:1}},
{text:"تاجران و صنعتگران موفق",score:{trade:2,economy:2,prosperity:1}},
{text:"نظامیان و افراد منظم",score:{discipline:2,security:2,war:1}},
{text:"خانواده‌های قدیمی و پایبند به سنت",score:{family:2,tradition:2,community:1}}
]
},

{
id:23,
title:"دوست داری مهم‌ترین ویژگی شهر محل زندگی‌ات چه باشد؟",
answers:[
{text:"آرامش و امنیت",score:{peace:2,security:2,comfort:1,stability:1}},
{text:"فرصت پیشرفت و کسب درآمد",score:{economy:2,socialMobility:2,trade:1}},
{text:"فرهنگ و هنر غنی",score:{culture:2,art:2,architecture:1}},
{text:"هویت ملی و انسجام اجتماعی",score:{nationalIdentity:2,community:2,tradition:1}}
]
},

{
id:24,
title:"اگر قرار بود یک کتاب درباره جامعه ایده‌آلت نوشته شود، عنوان آن چه بود؟",
answers:[
{text:"سرزمین دانش و خرد",score:{science:2,education:2,innovation:1}},
{text:"سرزمین صلح و رفاه",score:{peace:2,comfort:2,prosperity:1}},
{text:"سرزمین افتخار و قدرت",score:{war:2,government:2,nationalIdentity:1}},
{text:"سرزمین سنت و فرهنگ",score:{culture:2,tradition:2,religion:1}}
]
},

{
id:25,
title:"فرض کن باید یک روز را با یکی از این افراد بگذرانی.",
answers:[
{text:"یک دانشمند",score:{science:2,education:2}},
{text:"یک تاجر",score:{trade:2,economy:2}},
{text:"یک معمار یا هنرمند",score:{architecture:2,art:2,culture:1}},
{text:"یک فرمانده نظامی",score:{war:2,discipline:2}}
]
},

{
id:26,
title:"اگر قرار بود کشور فقط روی یک حوزه سرمایه‌گذاری کند، کدام را انتخاب می‌کردی؟",
answers:[
{text:"دانش و فناوری",score:{science:2,innovation:2,education:1}},
{text:"اقتصاد و تجارت",score:{economy:2,trade:2,prosperity:1}},
{text:"دفاع و امنیت",score:{security:2,war:2,discipline:1}},
{text:"فرهنگ و میراث تاریخی",score:{culture:2,architecture:2,nationalIdentity:1}}
]
},

{
id:27,
title:"اگر در جامعه‌ای زندگی می‌کردی که مردم از نظر مالی وضعیت خوبی داشتند، دوست داشتی این ثروت بیشتر از چه راهی به دست آمده باشد؟",
answers:[
{text:"نوآوری و علم",score:{innovation:2,science:2}},
{text:"تجارت با کشورهای دیگر",score:{trade:2,international:2}},
{text:"قدرت و فتوحات",score:{war:2,government:2}},
{text:"کشاورزی و تولید داخلی",score:{economy:2,community:1,tradition:1}}
]
},

{
id:28,
title:"اگر قرار بود یکی از این ارزش‌ها در جامعه تو بیشتر از بقیه رعایت شود، کدام را انتخاب می‌کردی؟",
answers:[
{text:"عدالت برای همه",score:{justice:2,law:2}},
{text:"آزادی انتخاب",score:{freedom:2,individualism:2}},
{text:"مسئولیت‌پذیری اجتماعی",score:{community:2,family:2}},
{text:"وفاداری به کشور",score:{nationalIdentity:2,discipline:1,tradition:1}}
]
},

{
id:29,
title:"اگر قرار بود در یک دوره تاریخی نمایشگاه برگزار کنی، موضوع آن چه بود؟",
answers:[
{text:"اختراعات و دستاوردهای علمی",score:{science:2,innovation:2}},
{text:"راه‌های بازرگانی و اقتصاد",score:{trade:2,economy:2}},
{text:"آثار هنری و معماری",score:{art:2,architecture:2,culture:1}},
{text:"آیین‌ها و رسوم مردم",score:{tradition:2,religion:2,culture:1}}
]
},

{
id:30,
title:"اگر فقط یک جمله قرار بود فلسفه زندگی جامعه‌ات باشد، کدام را انتخاب می‌کردی؟",
answers:[
{text:"دانایی بزرگ‌ترین قدرت است.",score:{science:2,education:2,innovation:1}},
{text:"امنیت پایه هر پیشرفتی است.",score:{security:2,law:2,stability:1}},
{text:"رونق اقتصادی زندگی مردم را بهتر می‌کند.",score:{economy:2,trade:2,prosperity:1}},
{text:"ریشه‌های فرهنگی، آینده را می‌سازند.",score:{culture:2,tradition:2,nationalIdentity:1}}
]
},
  {
id:31,
title:"اگر قرار بود شهر تو به خاطر یک ویژگی در تاریخ ماندگار شود، ترجیح می‌دادی چه باشد؟",
answers:[
{text:"بزرگ‌ترین مرکز علمی زمان خود",score:{science:2,education:2,innovation:1,culture:1}},
{text:"امن‌ترین و منظم‌ترین شهر کشور",score:{security:2,law:2,stability:2,discipline:1}},
{text:"ثروتمندترین مرکز تجارت",score:{trade:2,economy:2,international:2,prosperity:1}},
{text:"زیباترین شهر از نظر هنر و معماری",score:{art:2,architecture:2,culture:2}}
]
},

{
id:32,
title:"اگر حکومت از تو برای مشورت دعوت کند، روی چه موضوعی تأکید می‌کنی؟",
answers:[
{text:"سرمایه‌گذاری روی آموزش و پژوهش",score:{science:2,education:2,innovation:2}},
{text:"ایجاد فرصت اقتصادی برای مردم",score:{economy:2,trade:2,socialMobility:1}},
{text:"تقویت نظم و اجرای قانون",score:{law:2,government:2,security:1}},
{text:"حفظ سنت‌ها و هویت تاریخی",score:{tradition:2,nationalIdentity:2,culture:1}}
]
},

{
id:33,
title:"اگر قرار بود جشنی ملی برگزار شود، دوست داشتی محور اصلی آن چه باشد؟",
answers:[
{text:"دستاوردهای علمی و فرهنگی",score:{science:2,culture:2,education:1}},
{text:"رونق بازار و تجارت",score:{trade:2,economy:2,prosperity:1}},
{text:"پیروزی‌های تاریخی و قدرت کشور",score:{war:2,nationalIdentity:2,government:1}},
{text:"آیین‌ها و رسوم کهن",score:{tradition:2,religion:2,community:1}}
]
},

{
id:34,
title:"اگر قرار بود در یک خانواده معمولی زندگی کنی، مهم‌ترین انتظار تو از جامعه چیست؟",
answers:[
{text:"بتوانم با تلاش پیشرفت کنم.",score:{socialMobility:2,education:2,economy:1}},
{text:"آرامش و امنیت خانواده حفظ شود.",score:{family:2,comfort:2,security:1}},
{text:"فرهنگ و هنر همیشه زنده باشد.",score:{culture:2,art:2,community:1}},
{text:"قانون از همه یکسان حمایت کند.",score:{law:2,justice:2,stability:1}}
]
},

{
id:35,
title:"اگر در یک بازار تاریخی قدم بزنی، بیشتر جذب چه چیزی می‌شوی؟",
answers:[
{text:"کتاب‌فروشی‌ها و ابزارهای علمی",score:{science:2,education:2,culture:1}},
{text:"کالاهای خارجی و تجارت بین‌المللی",score:{trade:2,international:2,economy:1}},
{text:"صنایع‌دستی و هنر",score:{art:2,culture:2,architecture:1}},
{text:"مراسم سنتی و آیینی",score:{tradition:2,religion:2,spirituality:1}}
]
},

{
id:36,
title:"اگر قرار بود رهبر جامعه یک ویژگی برجسته داشته باشد، کدام را ترجیح می‌دهی؟",
answers:[
{text:"خرد و دانش",score:{science:2,education:2,justice:1}},
{text:"اقتدار و نظم",score:{government:2,discipline:2,security:1}},
{text:"توانایی رونق اقتصاد",score:{economy:2,trade:2,prosperity:1}},
{text:"پایبندی به ارزش‌های فرهنگی",score:{tradition:2,culture:2,nationalIdentity:1}}
]
},

{
id:37,
title:"اگر مجبور باشی یکی از این سبک‌های زندگی را انتخاب کنی، کدام را برمی‌گزینی؟",
answers:[
{text:"زندگی آرام و باثبات",score:{peace:2,comfort:2,stability:2}},
{text:"زندگی پر از یادگیری و پیشرفت",score:{science:2,innovation:2,education:2}},
{text:"زندگی پرهیجان و ماجراجویانه",score:{adventure:2,competition:2,war:1}},
{text:"زندگی ریشه‌دار و سنتی",score:{family:2,tradition:2,religion:1}}
]
},

{
id:38,
title:"اگر قرار بود نام تو در تاریخ ثبت شود، دوست داشتی به چه دلیل باشد؟",
answers:[
{text:"اختراع یا کشف علمی",score:{science:2,innovation:2,education:1}},
{text:"کمک به رونق اقتصاد کشور",score:{economy:2,trade:2,prosperity:1}},
{text:"دفاع از سرزمین",score:{war:2,security:2,nationalIdentity:1}},
{text:"خلق آثار فرهنگی ماندگار",score:{culture:2,art:2,architecture:1}}
]
},

{
id:39,
title:"کدام جمله به شخصیت تو نزدیک‌تر است؟",
answers:[
{text:"دانش آینده را می‌سازد.",score:{science:2,education:2,innovation:1}},
{text:"امنیت پایه آرامش مردم است.",score:{security:2,law:2,stability:1}},
{text:"رونق اقتصادی کیفیت زندگی را بالا می‌برد.",score:{economy:2,trade:2,comfort:1}},
{text:"ملت بدون فرهنگ، هویت ندارد.",score:{culture:2,nationalIdentity:2,tradition:1}}
]
},

{
id:40,
title:"اگر می‌توانستی فقط یک آرزو برای جامعه‌ای که در آن زندگی می‌کنی داشته باشی، کدام را انتخاب می‌کردی؟",
answers:[
{text:"جامعه‌ای دانا، خلاق و پیشرو",score:{science:2,education:2,innovation:2}},
{text:"جامعه‌ای ثروتمند، امن و باثبات",score:{economy:2,security:2,stability:2}},
{text:"جامعه‌ای متحد با هویت تاریخی قوی",score:{nationalIdentity:2,community:2,tradition:2}},
{text:"جامعه‌ای آرام که مردم در آن با عدالت و رفاه زندگی کنند.",score:{peace:2,justice:2,comfort:2}}
]
}

];

];
