/* =============================================
   Nailedit CMS Data Manager
   ============================================= */

const CMS_KEY = 'nailedit_cms_v1';

const DEFAULT_DATA = {
  visible: {
    hero:         true,
    problems:     true,
    howItWorks:   true,
    benefits:     true,
    map:          true,
    faq:          true,
    signupForm:   true
  },
  texts: {
    'nav.faq':            'שאלות נפוצות',
    'nav.howItWorks':     'איך זה עובד',
    'nav.benefits':       'יתרונות',
    'nav.product':        'המוצר',
    'nav.login':          'התחברות',
    'nav.signup':         'הרשמה לפיילוט',

    'hero.heading1':      'תפסיקי להסביר,',
    'hero.heading2':      'תתחילי להראות.',
    'hero.subtext':       'אפליקציה אחת שמאפשרת להדגים עיצובים שונים, למצוא לקחות, ולנהל את הפגישות שלך ביעילות.',
    'hero.ctaLabel':      'הצטרפי לנייליסטיות שכבר נרשמו לשירות',
    'hero.ctaBtn':        'הצטרפי לרשימת ההמתנה',

    'color.green':        'ירוק מרקר',
    'color.dark':         'אפור לילה',
    'color.red':          'טרקוטה',
    'color.blue':         'תכלת שמיים',

    'problems.title1':    'בזבוז זמן',
    'problems.title2':    'שורף לך את הרווח',
    'problems.card1.title':'תמונות לא ריאליסטיות',
    'problems.card1.body': 'לקוחות מביאות השראות מאינסטגרם שלא מתאימות למבנה הציפורן, לצבע העור ולידיים שלהן. Nailedit עוזרת לך לפתור את זה.',
    'problems.card2.title':'אכזבות מהתוצאה',
    'problems.card2.body': "הלקוחה ביקשה 'תכלת' אבל התכוונה למשהו אחר? הסימולטור מונע חוסר הבנות ותיקונים יקרים.",
    'problems.card3.title':'התלבטויות מייגעות',
    'problems.card3.body': 'את מאבדת זמן יקר בכל תור רק על התלבטויות מיותרות. זה זמן שיכולת להכניס בו עוד לקוחות.',

    'howItWorks.heading1':'זה עובד בכמה',
    'howItWorks.heading2':'צעדים פשוטים',

    'benefits.title1':    'חיסכון בזמן',
    'benefits.title2':    'שמשפיע על הרווח',
    'benefits.card1.title':'תיאום ציפיות מדויק',
    'benefits.card1.body': 'הלקוחה רואה בדיוק איך יראה העיצוב על הידיים שלה לפני שתתחילי לעבוד. אין הפתעות.',
    'benefits.card2.title':'יותר לקוחות בפחות זמן',
    'benefits.card2.body': 'כשהלקוחה מגיעה עם החלטה מוכנה, התור מתקצר משמעותית ואת יכולה לקבל יותר לקוחות ביום.',
    'benefits.card3.title':'חוויית לקוחה מצוינת',
    'benefits.card3.body': 'לקוחות שמרגישות שהקשיבו להן ושהתוצאה תואמת את הציפיות, חוזרות ומפנות חברות.',

    'map.heading1':       'את מעצבת',
    'map.heading2':       'אנחנו מביאים את הלקוחות.',
    'map.subtitle':       'הצטרפות לפיילוט ה-PRO מעניקה לסטודיו שלך מיקום מועדף במפת Nailedit. לקוחות שמעצבות לעצמן ציפורניים באפליקציה מהבית, יופנו ישירות לקביעת תור אצל המקצועניות באזור שלהן.',
    'map.badge':          'מספר המשתתפות בכל עיר מוגבל',

    'faq.title':          'שאלות נפוצות',
    'faq.q1':             'האם זה יעכב לי את התור?',
    'faq.a1':             'ממש לא. הסימולטור מיועד לקצר את זמן ההתלבטות, לא להאריך אותו. רוב הלקוחות מגיעות עם החלטה מוכנה לאחר שמשחקות עם האפליקציה בבית.',
    'faq.q2':             'האם זה מתאים לכל סוגי הציפורניים?',
    'faq.a2':             'כן! הסימולטור עובד עם ציפורניים טבעיות, ג\'ל, אקריל ועוד. המערכת מזהה את מבנה הציפורן ומתאימה את ההדגמה בהתאם.',
    'faq.q3':             'האם זה בחינם?',
    'faq.a3':             'הפיילוט לנייליסטיות מוצע ללא עלות. לאחר שלב הפיילוט, נציג תוכניות מנוי שיתאימו לכל גודל עסק.',
    'faq.q4':             'איך הלקוחות מוצאות אותי?',
    'faq.a4':             'לקוחות שמשתמשות באפליקציה ומחפשות נייליסטית באזורן יוכלו לראות את הפרופיל שלך ולקבוע תור ישירות.',

    'signup.heading1':    'הצטרפות',
    'signup.heading2':    'לרשימת המתנה',
    'signup.field1':      '* שם העסק',
    'signup.field2':      '* שם מלא',
    'signup.field3':      '* טלפון',
    'signup.field4':      'אימייל',
    'signup.btn':         'הצטרפי לרשימת ההמתנה',
    'signup.success':     '🎉 נרשמת בהצלחה! ניצור איתך קשר בקרוב.',

    'footer.rights':      '© 2025 Nailedit. כל הזכויות שמורות.',
  },
  images: {
    'hero.green': 'https://www.figma.com/api/mcp/asset/ffac4fe0-1b4b-4c2a-91a3-577d6e10d062',
    'hero.blue':  'https://www.figma.com/api/mcp/asset/5713bf7d-479f-4797-9455-9d2eda2797f0',
    'hero.dark':  'https://www.figma.com/api/mcp/asset/d03bdad5-0efc-4a21-915e-25a5bf7934cc',
    'hero.red':   'https://www.figma.com/api/mcp/asset/1855386a-a904-4751-8724-6bf75a02ad08',
    'problems.card1': 'https://www.figma.com/api/mcp/asset/593ab681-f9f4-4326-ba24-08fce2826edd',
    'problems.card2': 'https://www.figma.com/api/mcp/asset/17ccc829-eee9-4e7c-a9ae-881b3fb78f5c',
    'problems.card3': 'https://www.figma.com/api/mcp/asset/4235ab15-cab7-4483-9932-0e497448cfe5',
    'howItWorks.phone': 'https://www.figma.com/api/mcp/asset/30200de4-7a52-4c11-8805-34c16d47d91e',
    'benefits.card1': 'https://www.figma.com/api/mcp/asset/63fca0ff-3d4e-418a-b38f-392ba38ea2c9',
    'benefits.card2': 'https://www.figma.com/api/mcp/asset/efc60a15-93be-489b-9711-c6450c035d54',
    'benefits.card3': 'https://www.figma.com/api/mcp/asset/155cbfab-2589-41b0-9cd8-0448dafa9fe6',
    'map.bg': 'https://www.figma.com/api/mcp/asset/ab3116c4-3b24-494a-a051-0b62d399b1a8',
    'map.stylist1': 'https://www.figma.com/api/mcp/asset/d4ce98a7-a5bb-46a5-96f5-6b14b1bf74ff',
    'map.stylist2': 'https://www.figma.com/api/mcp/asset/d4ce98a7-a5bb-46a5-96f5-6b14b1bf74ff',
    'map.stylist3': 'https://www.figma.com/api/mcp/asset/d4ce98a7-a5bb-46a5-96f5-6b14b1bf74ff',
    'map.stylist4': 'https://www.figma.com/api/mcp/asset/d4ce98a7-a5bb-46a5-96f5-6b14b1bf74ff',
    'map.stylist5': 'https://www.figma.com/api/mcp/asset/d4ce98a7-a5bb-46a5-96f5-6b14b1bf74ff',
  },
  videos: {}
};

window.CmsData = {
  _data: null,

  load() {
    try {
      const raw = localStorage.getItem(CMS_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        this._data = this._merge(DEFAULT_DATA, saved);
      } else {
        this._data = JSON.parse(JSON.stringify(DEFAULT_DATA));
      }
    } catch (e) {
      this._data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    return this._data;
  },

  save(data) {
    this._data = data;
    localStorage.setItem(CMS_KEY, JSON.stringify(data));
  },

  reset() {
    localStorage.removeItem(CMS_KEY);
    this._data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    return this._data;
  },

  get() {
    if (!this._data) this.load();
    return this._data;
  },

  getText(key) {
    const d = this.get();
    return (d.texts && d.texts[key] !== undefined) ? d.texts[key] : (DEFAULT_DATA.texts[key] || '');
  },

  getImage(key) {
    const d = this.get();
    return (d.images && d.images[key]) ? d.images[key] : (DEFAULT_DATA.images[key] || '');
  },

  isVisible(section) {
    const d = this.get();
    return (d.visible && d.visible[section] !== undefined) ? d.visible[section] : true;
  },

  exportJSON() {
    return JSON.stringify(this.get(), null, 2);
  },

  importJSON(jsonStr) {
    const data = JSON.parse(jsonStr);
    this.save(this._merge(DEFAULT_DATA, data));
  },

  _merge(defaults, overrides) {
    const result = JSON.parse(JSON.stringify(defaults));
    if (!overrides) return result;
    if (overrides.visible)  Object.assign(result.visible, overrides.visible);
    if (overrides.texts)    Object.assign(result.texts, overrides.texts);
    if (overrides.images)   Object.assign(result.images, overrides.images);
    if (overrides.videos)   Object.assign(result.videos, overrides.videos);
    return result;
  }
};
