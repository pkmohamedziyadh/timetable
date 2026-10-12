/* ============================================================
   S-VYASA timetable data
   ------------------------------------------------------------
   HOW TO ADD A SECTION
   1. Copy the whole { ... } block inside `classes` for an existing
      section, paste it after it (add a comma), and change:
        id, label, group, title, and the details (semester, year, ...)
   2. Edit the 6 days. Every day must add up to exactly 8 periods.
        {s:'ai'}                      a subject from `subjects` below
        {s:'bda', span:2}             a subject spanning 2 periods
        {s:'bda', f:'Other Faculty'}  different faculty for this slot only
        {s:'nms', r:'F-16'}           show a room badge
        {t:'Mentoring'}               plain text (no popup)
        {t:'Open Elective', k:'oe'}   plain text styled as an elective
   3. New subject? Add it to `subjects` (any colour, e.g. '#4C6FA6').
      Order in `subjects` = order in the Course Directory.
   4. Optional per-section faculty for the Course Directory:
        faculty: { bda: 'Ms. Someone' }
   Periods: 1-2 | 3-4 | 5-6 | 7-8 (the breaks sit between these pairs).
   ============================================================ */
window.TIMETABLES = {
  subjects: [
    {id:'ai', name:'Artificial Intelligence', full:'Artificial Intelligence', color:'var(--c-ai)', faculty:'Ms Nidhi Singh'},
    {id:'cns', name:'Cryptography & Network Security', full:'Cryptography and Network Security', color:'#3F4F8F', faculty:'Dr. Mrutyunjaya M S'},
    {id:'cnsl', name:'Crypto & Network Security — Lab', full:'Cryptography and Network Security Laboratory', color:'var(--c-lab)', faculty:'Dr. Mrutyunjaya M S / Dr. Vamsi Krishna'},
    {id:'iot', name:'IoT Security', full:'IoT Security', color:'#8A4A2E', faculty:'Mr. Shine V J'},
    {id:'bcs', name:'Blockchain Security', full:'Blockchain Security', color:'#5B5F97', faculty:'Ms. Tamizh Arasi G S', bold:true},
    {id:'isa', name:'InfoSec Analysis & Audit Mgmt', full:'Information Security Analysis and Audit Management', color:'#7A6B2E', faculty:'Dr. Ananda Raj'},
    {id:'toc', name:'Theory of Computation', full:'Theory of Computation', color:'var(--c-toc)', faculty:'Dr Ramkumar P'},
    {id:'bda', name:'Big Data Analytics', full:'Big Data Analytics', color:'var(--c-bda)', faculty:'Ms. Nandini / Sugandh Kumar'},
    {id:'ds', name:'Distributed Systems', full:'Distributed Systems', color:'var(--c-ds)', faculty:'Mr. Himanshu Sahu'},
    {id:'nms', name:'Network Mgmt Systems', full:'Network Management Systems', color:'var(--c-nms)', faculty:'Dr. Naveen N'},
    {id:'dbms', name:'Database Mgmt System', full:'Database Management System', color:'var(--c-dbms)', faculty:'Mr Mohan Gowda G S', bold:true},
    {id:'dwm', name:'Data Warehousing & Mining', full:'Introduction to Data Warehousing & Data Mining', color:'var(--c-dwm)', faculty:'Dr. R Nandhi Kesavan'},
    {id:'bee', name:'Business Essentials for Engineers', full:'Business Essentials for Engineers', color:'var(--c-mgmt)', faculty:'Ms. Savitha'},
    {id:'lab', name:'Database Mgmt System — Lab', full:'Database Management System — Lab', color:'var(--c-lab)', faculty:'Mr Mohan Gowda G S'},
    {id:'aps', name:'Aptitude & Professional Skills', full:'Aptitude & Professional Skills', color:'var(--c-aps)', faculty:'Mr. Mrutyunjay S Navalagatti'}
  ],

  classes: [
    {
      id: 'v-cse-e',
      aliases: ['sec-e', 'e'],
      label: 'V Sem · CSE · Sec-E',
      group: 'V Semester · CSE (General)',
      title: 'V Semester CSE (Sec-E)',
      semester: 'V Semester',
      year: '2026 – 2027 (Odd)',
      specialization: 'CSE (General) · Sec-E',
      classroom: 'F-16',
      wef: '10 / 08 / 2026',
      duration: "Aug '26 – Dec '26",
      days: {
      mon: [
        {s:'dbms'},
        {s:'ai'},
        {t:'Mentoring'},
        {t:'Open Elective', k:'oe'},
        {s:'bda', f:'Ms. Nandini / Mr. Vivek Yadav', r:'F-16', span:2},
        {s:'bee'},
        {t:'Placement Training'}
      ],
      tue: [
        {s:'toc'},
        {s:'dwm', r:'F-16'},
        {s:'nms', r:'F-16'},
        {s:'bee'},
        {s:'dbms'},
        {s:'ds'},
        {t:'Library'},
        {t:'Placement Training'}
      ],
      wed: [
        {s:'bda', r:'F-16', span:2},
        {s:'ds'},
        {t:'Open Elective', k:'oe'},
        {s:'ai'},
        {s:'aps', r:'FF-05'},
        {s:'aps', r:'FF-05'},
        {s:'aps', r:'FF-05'}
      ],
      thu: [
        {s:'ds'},
        {s:'nms', r:'F-16'},
        {s:'bee'},
        {s:'toc'},
        {s:'lab', span:2},
        {t:'Mentoring'},
        {t:'Club Activity'}
      ],
      fri: [
        {s:'nms', r:'F-16'},
        {s:'dwm', r:'F-16'},
        {s:'ai'},
        {t:'Open Elective', k:'oe'},
        {s:'toc'},
        {t:'Club Activity'},
        {s:'dwm', r:'F-16'},
        {t:'Club Activity'}
      ],
      sat: [
        {t:'Club Activity'},
        {t:'Club Activity'},
        {t:'Club Activity'},
        {t:'Club Activity'},
        {t:'Club Activity'},
        {t:'Club Activity'},
        {t:'Club Activity', span:2}
      ]
      }
    },
    {
      id: 'v-cys-c',
      aliases: ['sec-c', 'c', 'cys', 'cyber'],
      label: 'V Sem · Cyber Security · Sec-C',
      group: 'V Semester · CSE (Cyber Security)',
      title: 'V Semester CSE Cyber Security (Sec-C)',
      semester: 'V Semester',
      year: '2026 – 2027 (Odd)',
      specialization: 'CSE – Cyber Security · Sec-C',
      classroom: 'F-09',
      wef: '10 / 08 / 2026',
      duration: "Aug '26 – Dec '26",
      faculty: { toc: 'Ms. Shilpashree S', ds: 'Ms. Nandini K', dbms: 'Dr. Mohan Kumar AV', lab: 'Dr. Mohan Kumar AV' },
      days: {
      mon: [
        {s:'iot'},
        {s:'bcs'},
        {s:'cns'},
        {t:'Open Elective', k:'oe'},
        {s:'lab', span:2},
        {t:'Placement Training'},
        {t:'Club Activity'}
      ],
      tue: [
        {s:'ds'},
        {s:'toc'},
        {s:'bcs'},
        {s:'iot'},
        {s:'isa'},
        {t:'Mentoring'},
        {t:'Placement Training'},
        {t:'Club Activity'}
      ],
      wed: [
        {s:'iot'},
        {s:'isa'},
        {s:'cns'},
        {t:'Open Elective', k:'oe'},
        {s:'ds'},
        {t:'Mentoring'},
        {t:'Placement Training'},
        {t:'Library'}
      ],
      thu: [
        {s:'dbms'},
        {s:'bcs'},
        {s:'cns'},
        {s:'toc'},
        {s:'dbms'},
        {s:'aps', r:'FF-05'},
        {s:'aps', r:'FF-05'},
        {s:'aps', r:'FF-05'}
      ],
      fri: [
        {s:'cnsl', span:2},
        {s:'toc'},
        {t:'Open Elective', k:'oe'},
        {s:'isa'},
        {s:'ds'},
        {t:'Club Activity'},
        {t:'Club Activity'}
      ],
      sat: [
        {t:'Club Activity', span:2},
        {t:'Club Activity'},
        {t:'Club Activity'},
        {t:'Club Activity'},
        {t:'Club Activity'},
        {t:'Club Activity'},
        {t:'Club Activity'}
      ]
      }
    }
  ]
};
