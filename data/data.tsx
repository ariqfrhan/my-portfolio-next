import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const navItem = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#project" },
  { name: "Contact", link: "#contact" },
];
type SocialIcon = {
  link: string;
  icon: React.ReactElement;
};
export const social: SocialIcon[] = [
  {
    link: "https://github.com/ariqfrhan",
    icon: <FaGithub />,
  },
  {
    link: "https://www.linkedin.com/in/ariqfarhan/",
    icon: <FaLinkedin />,
  },
  {
    link: "https://www.instagram.com/ariqfrhan",
    icon: <FaInstagram />,
  },
];

export const techStack = [
  {
    id: 1,
    name: "Java",
    image: "/java.svg",
  },
  {
    id: 2,
    image: "/typescript.png",
    name: "Typescript",
  },
  {
    id: 32,
    image: "/flutter.svg",
    name: "Flutter",
  },
  {
    id: 4,
    image: "/react.png",
    name: "ReactJs",
  },
  {
    id: 5,
    image: "/laravel.png",
    name: "Laravel",
  },
  {
    id: 6,
    image: "/wordpress.png",
    name: "Wordpress",
  },
  {
    id: 7,
    image: "/uipath.png",
    name: "UiPath",
  },
  {
    id: 8,
    image: "/davinci.png",
    name: "DaVinci",
  },
];

export const experience = [
  {
    id: 1,
    title: "Automation Project Intern",
    company: "Merck Group",
    timeline: "Aug 2024 - Present",
    image: "/merck.jpg",
    description: [
      "Planned, documented, and developed Robotic Process Automation (RPA) systems across several business processes within the distribution department, achieving an 88% improvement in time efficiency using UiPath.",
      "Enhanced RPA potential by integrating AI capabilities, increasing automation accuracy by over 95% and reducing manual intervention, significantly boosting process reliability and scalability.",
      "Set up Orchestrator and deployed UiPath Apps, creating interactive user interfaces and improving automation management and performance tracking by 80%.",
    ],
  },
  {
    id: 2,
    title: "Information Technology & Product Developer Intern",
    company: "PT Astra International - Toyota Sales Operation",
    timeline: "Feb 2024 - Jul 2024",
    image: "/auto2000.jpg",
    description: [
      "Led the development of an end-to-end Robotic Process Automation (RPA) solution to optimize Sales & Aftersales Productivity Reports and Aftersales Branch Outstanding Reports for branches at Auto2000, using UiPath and achieving 92% time efficiency and increased 27x productivity",
      "Developed 6 Sales & Aftersales Productivity Analytical Dashboard with PowerBI as the end product of RPA script.",
      "Participated and developed Individual Learning Path feature on Auto2000's internal employee development website for employee competency development in 126 branches",
    ],
  },
  {
    id: 3,
    title: "Fullstack Web Developer",
    company: "Eksekutif Mahasiswa Universitas Brawijaya",
    timeline: "Mar 2023 - Feb 2024",
    image: "/emub.png",
    description: [
      "Developed and Maintain EM UB 2023's Website to provide information for 20k+ active students of Universitas Brawijaya",
      "Created and implement new website theme for EM UB’s Kabinet Karya Paripurna",
      "Developed EMUB Apps (Mobile Application) and successfully downloaded by more than 16k active students",
      "Led colorist and camera person for EM UB’s Company Profile",
    ],
  },
  {
    id: 4,
    title: "Fullstack Web Developer",
    company: "Nol Derajat Film",
    timeline: "Feb 2024 - Jan 2024",
    image: "/ndf.jpg",
    description: [
      "Developed and Maintain Nol Derajat Film's website to provide information about Nol Derajat Film to 500+ active member",
      "Created member film submission form with google spreadsheet as the database",
      "Led IT team to migrate Nol Derajat Film's website to the new hosting provider",
    ],
  },
  {
    id: 5,
    title: "Frontend Web Developer",
    company: "RAJA Brawijaya 2023",
    timeline: "Jul 2023 - Sep 2023",
    image: "/rabraw.png",
    description: [
      "Implement new website front-end theme for the official RAJA Brawijaya 2023 website using React-InertiaJS",
      "Successfully launched the website in 2 weeks to provide information about student orientation to 16k freshman year student",
    ],
  },
  {
    id: 6,
    title: "Basic Programming, Laboratory Teaching Assistant",
    company: "FILKOM UB",
    timeline: "Sep 2022 - Dec 2022",
    image: "/filkom.jpg",
    description: [
      "Mentored 22 students in basic programming practicum",
      "Designed programming practicum using the Java programming language",
      "Designed the case study of basic programming practicum",
    ],
  },
  {
    id: 7,
    title: "Project-Based Intern: Data Scientist Virtual Internship Experience",
    company: "id/x partners",
    timeline: "Aug 2022",
    image: "/idx.jpg",
    description: [
      " Learn R, SQL, and Python programming languages to create statistical analysis.",
      "Learn how to handle, analyze, present, and visualize data by statistical and machine learning.",
      "Make a Logistic Regression model from credit score study case to create data science solutions for clients with 89% accuracy",
    ],
  },
];

export const projects = [
  {
    type: "web",
    title: "Ruang Kompetensi",
    desc: "Ruang Kompetensi is internal website of Auto2000, focusing in Company Knowledge Management",
    image: "/website-rukom.png",
    linkWeb: "https://ruang-kompetensi.com",
    linkGithub: "",
    stack: ["PHP", "Wordpress", "Javascript"],
  },
  {
    type: "web",
    title: "RAJA Brawijaya 2023",
    desc: "RAJA Brawijaya is a series of events to introduce the campus environment to new students of Universitas Brawijaya",
    image: "/website-rabraw.png",
    linkWeb: "https://rajabrawijaya.ub.ac.id",
    linkGithub: "https://github.com/ariqfrhan/rajabrawijaya-2023",
    stack: ["InertiaJs", "Typescript", "TailwindCSS", "Laravel"],
  },
  {
    type: "web",
    title: "EM UB 2023",
    desc: "Eksekutif Mahasiswa Universitas Brawijaya 2023's official website",
    image: "/website-emub.png",
    linkWeb: "https://em.ub.ac.id",
    linkGithub: "https://github.com/ariqfrhan/EM-2023-Wordpress-Theme",
    stack: ["Wordpress", "PHP", "Bootstrap", "Custom Theme"],
  },
  {
    type: "web",
    title: "Nol Derajat Film",
    desc: "Nol Derajat Film's 2023 official website",
    image: "/website-nolder.png",
    linkWeb: "https://nolderajat.ub.ac.id/",
    linkGithub: "https://github.com/ariqfrhan/EM-2023-Wordpress-Theme",
    stack: ["Wordpress", "PHP", "Bootstrap", "Custom Theme"],
  },
  {
    type: "web",
    title: "Digital Bank Admin Dashboard",
    desc: "Digital Bank Admin-side for Flutter",
    image: "/digital-bank.png",
    linkWeb: "",
    linkGithub: "https://github.com/ariqfrhan/backend-bwa_bank_frhan",
    stack: ["PHP", "Laravel"],
  },
  {
    type: "web",
    title: "HSE Training Indonesia",
    desc: "HSE Training Indonesia's official landing page",
    image: "/website-hse.png",
    linkWeb: "https://hse-training.co.id/",
    linkGithub:
      "https://github.com/ariqfrhan/HSE-Training-Indonesia-Landing-Page",
    stack: ["Wordpress", "PHP", "Bootstrap", "Custom Theme"],
  },
  {
    type: "web",
    title: "Cineaste",
    desc: "Movie website made with ReactJs, TailwindCSS and consuming TMDB API",
    image: "/website-cineaste.png",
    linkWeb: "",
    linkGithub: "https://github.com/ariqfrhan/cineaste-v2",
    stack: ["ReactJs", "TailwindCSS", "Axios"],
  },
  {
    type: "mobile",
    title: "Cardi Care",
    desc: "Healthcare reminder platform",
    image: "/cardi-care.png",
    linkWeb: "",
    linkGithub: "https://github.com/ariqfrhan/cardi_care",
    stack: ["Flutter", "Firebase"],
  },
  {
    type: "mobile",
    title: "Digital Bank",
    desc: "Digital Bank created with flutter and laravel as backend",
    image: "/digital-bank.png",
    linkWeb: "",
    linkGithub: "https://github.com/ariqfrhan/bwa_bank_frhan",
    stack: ["Flutter", "Laravel", "JWT"],
  },
  {
    type: "mobile",
    title: "Shareplate",
    desc: "Food waste management app",
    image: "/shareplate.png",
    linkWeb: "",
    linkGithub: "https://github.com/ariqfrhan/shareplate",
    stack: ["Flutter", "ExpressJs", "Firebase"],
  },
  {
    type: "mobile",
    title: "Otolink",
    desc: "Twitter-like automotive application",
    image: "/otolink.png",
    linkWeb: "",
    linkGithub: "https://gitlab.com/muhammadariq3/papb-finalproject",
    stack: ["Java", "Volley", "Firebase", "SQLite"],
  },
];

export const videoProject = [
  {
    title: "Lebih Baik Putih Tulang Daripada Putih Mata",
    company: "Marunaka Pictures",
    link: "https://www.youtube.com/embed/Lb1ecjOeZ1k?si=sIXKCdHE6g5TncRj?autoplay=1",
    desc: "Rapik (46) terpaksa kehilangan pekerjaan utamanya karena mesin kapal miliknya akan disita oleh Bank. Padahal sebelumnya ia sudah diperingati oleh sahabatnya, Asnawi (46). Alhasil Rapik harus bekerja serabutan di darat demi bisa memenuhi kebutuhan hidupnya & anaknya Zul (10). Suatu malam Zul datang menghampiri Rapik untuk memberikan surat rekreasi sekolah. Rapik hanya bisa pasrah dan harus bisa lebih keras lagi saat bekerja. Perasaan gagal menjadi Bapak semakin tak terelakkan. Sampai akhirnya solusi itu datang ketika Hodri (40) yang adalah saudara Asnawi datang.",
    stack: ["Color Grading", "DaVinci Pro"],
  },
  {
    title: "5 Min 1",
    company: "Marunaka Pictures",
    link: "https://drive.google.com/file/d/1YQcjfDPYNqYNAx375Di_QRNHo4DT1Zux/preview",
    desc: "Peran Orang tua bagi Mugi sudah digantikan oleh fasilitas dan uang yang melimpah. Setidaknya itu yang Ia rasakan karena Orang tuanya sangat sibuk bekerja. Tak suka kesepian, Ia memilih hidup dijalanan. Mugi merasa bisa hidup tanpa fasilitas Orang tuanya dengan berbekal pengetahuan hidup Filosofi Jawa.",
    stack: ["Color Grading", "DaVinci Pro"],
  },
  {
    title: "Memantik Baskara",
    company: "TEDx UniversitasBrawijaya 2023",
    link: "https://www.youtube.com/embed/WxtBVjELweA?si=8ja2lh9U-jE_UPU-",
    desc: "Kapan terakhir kali kamu bebaskan gelora dalam dirimu? ❌ \n Dengan Memantik Baskara dalam dirimu, gejolak takjub akan kembali membuatmu haus akan wawasan tentang hal-hal yang akan menuntunmu menuju apa yang sebenarnya kamu ingin temukan.",
    stack: ["Color Grading", "DaVinci Pro", "Gaffer"],
  },
  {
    title: "Semayam Asa",
    company: "TEDx UniversitasBrawijaya 2023",
    link: "https://www.youtube.com/embed/EpnSSyRlXvo?si=yzBg_pUtxrXL_-Hk",
    desc: "Tidak lama lagi, tidak ada lagi kekhawatiranmu ☀️\nDi antara delapan milyar individu yang menghembuskan udara di planet yang sama, kamu masih memiliki keyakinan yang begitu kuat akan potensi dan keunikan untuk membawamu menuju sesuatu yang sarat akan makna. \nSayangnya, intervensi dan limitasi terkadang terasa sangat nyata, menjadi wujud yang sama sekali tidak dikehendaki. \nDengan sedikit ragu, kamu kembali melangkahkan kaki. Terlihat sebuah lorong dengan ukiran yang membetuk 2 dua kata: Semayam Asa.\nDetik ketika dirimu memasukinya, keberanianmu menjadi lebih besar dari segala hal yang menghentikanmu. ",
    stack: ["Color Grading", "DaVinci Pro", "Gaffer"],
  },
  {
    title: "Swara Insan",
    company: "TEDx UniversitasBrawijaya 2023",
    link: "https://drive.google.com/file/d/1rlDS2PjJDmqIg7z1Ht28n6O0yTyxPAd_/preview",
    desc: "Sudah siapkah dirimu memulai eksplorasi? 🛣️\nIntervensi dan limitasi tidak akan lagi menghentikan ide-ide brilian yang seringkali terkunci rapat dalam benak. Menemukan makna akan kembali menjadi sebuah pengalaman unik yang dapat dieksplorasi dengan leluasa.\n\nRanah eksplorasi ini akan menjadi pantikan ‘Gelora Djiwa’ dalam dirimu.",
    stack: ["Color Grading", "DaVinci Pro", "Gaffer"],
  },
  {
    title: "Brawijaya Uncensored - Company Profile",
    company: "Eksekutif Mahasiswa Universitas Brawijaya 2023",
    link: "https://www.youtube.com/embed/uA0eLmYm9w4?si=AhS0Qz-S8PXkrRhr",
    desc: "EM UB sebagai organisasi mahasiswa yang primus inter pares di tengah kompleksitas peradaban tentu memiliki posisi yang sentral sebagai poros dan sekaligus kiblat mahasiswa dalam menjalankan aktivitas perkuliahannya disamping bidang akademiknya. \nSebagai respon, EM UB 2023 berupaya melakukan reformasi dan restrukturisasi birokrasi internal demi pelayanan publik yang lebih efektif, efisien, dan responsif,sehingga terbentuk SDM yang siap berkualitas dan berdaya saing tinggi.\nSebagai gagasan utama menyongsong era baru, EM UB 2023 akan membawa misi besar terkait pengembangan peningkatan mutu kompetitif mahasiswa di tingkat nasional dan internasional dalam berbagai bidang.\nEM UB 2023 kabinet Karya Paripurna “Rise Of Brawijayans!”",
    stack: ["Color Grading", "Drone Videography"],
  },
  {
    title: "Atas Nama Sejahtera - Documentary Film",
    company: "KARADOKS - BEM FILKOM",
    link: "https://www.youtube.com/embed/-oWUErr2pfE?si=jkbnqxT0MMiSJwrE",
    desc: "Sebuah video dokumenter tentang perjuangan driver di belakang layar aplikasi. ",
    stack: ["Color Grading", "DaVinci Pro", "Gaffer"],
  },
];
