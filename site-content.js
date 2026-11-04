// ============================================================
// WEBSITE CONTENT — THE MAIN FILE YOU NEED TO EDIT
// ============================================================
// Edit the text between quotes, save, and upload this file to GitHub.
// To add a simulation clip, put its MP4/poster in assets/videos/ and
// add one entry to the `simulations` list below.
// No build step, npm, React, or other tools required.
//
// Keep claims about unfinished research accurate and only publish
// material you are authorised to share.

window.siteContent = {
  personal: {
    name: "Kai Yui Man",
    // Replace this path if you want a different profile photograph.
    photo: "assets/profile.jpg",
    // The text before and after the green emphasis in the headline.
    headline: "Building robots that|learn more from less.",
    bio: "Hi, I'm Kai Yui Man (Karl). I recently completed MSc studies in Robotics and Artificial Intelligence at UCL. I'm interested in how robots can learn reusable skills from limited experience and adapt to new environments.",
    availability: "London, UK · Exploring 2027 PhD and research opportunities",
    focusTitle: "Generalisation from limited experience",
    focusBody: "Learning useful task knowledge and reusing it where the robot has not trained before."
  },

 research: {
    title: "Force2Act",
    subtitle: "Force-Conditioned Flow Matching for Contact-Aware Robot Action Generation",
    summary1: "I investigated how visual observations, proprioception, and temporal force feedback can inform generative robot action policies. The study compared several force-conditioning mechanisms, including AdaLN, cross-attention, prefix–suffix conditioning, and dual-path force attention.",
    summary2: "In simulation, force feedback improved performance across weight discrimination, door manipulation, and precision insertion tasks. The work is now being extended towards experiments with a Franka robot.",
    affiliation: "UCL · Supervisor: Dr Valerio Modugno"
  },

  future: {
    title: "Learning generalisable skills from limited experience",
    summary: "My broader research interest is how a robot can reuse task knowledge in unfamiliar environments, and improve through a small number of new interactions when zero-shot generalisation is insufficient.",
    path1Title: "Learning reusable knowledge",
    path1Body: "Exploring how limited but informative demonstrations might reveal task-relevant structure across settings.",
    path2Title: "Rapid policy adaptation",
    path2Body: "Investigating how interaction feedback might enable efficient specialisation to a new environment."
  },

  // Edit or add rows below to update the Experience & Education sections.
  experience: [
    { date: "2026 — PRESENT", title: "AI Computer Vision Engineer", organisation: "Appraiseye", description: "Computer vision pipelines for biomedical and surgical video analysis, plus a prototype interactive 3D operating-room digital twin." },
    { date: "2026 — PRESENT", title: "Postgraduate Teaching Assistant", organisation: "University College London", description: "Supporting undergraduate Computer Science teaching and laboratory sessions." },
    { date: "2024", title: "Digital & IT Summer Intern", organisation: "Cathay Pacific", description: "Contributed to data-processing and software development in a cross-functional team." }
  ],
  education: [
    { date: "2025 — 2026", title: "MSc Robotics and Artificial Intelligence", organisation: "University College London", description: "Completed taught studies and dissertation; final classification pending. Focus on robot learning, control and manipulation." },
    { date: "2022 — 2025", title: "BSc Computer Science and Artificial Intelligence", organisation: "University of Sussex", description: "First-Class Honours. Studied machine learning, computer vision and intelligent systems." }
  ],

  // To add a project: copy one { ... } item and edit its fields.
  projects: [
    { category: "VISION–LANGUAGE MODELS", year: "2025-26", title: "It's Lolly · Service Robot VLM", description: "Industry-linked VLM project exploring 7B-model optimisation for on-robot inference and integration of visual understanding with dialogue and service APIs.", tools: "Vision–language models · Edge AI · API integration" },
    { category: "COMPUTER VISION", year: "2024–25", title: "British Sign Language recognition", description: "Designed a real-time YOLO-based recognition system, compared model variants, and integrated the selected model into an interactive web application.", tools: "Python · YOLO · OpenCV · Django" },
    { category: "REINFORCEMENT LEARNING", year: "2024", title: "Robotic arm reaching", description: "Trained and evaluated a simulated arm-reaching policy, exploring continuous control, reward design and experimental evaluation.", tools: "Panda-Gym · Stable-Baselines3 · Python" }
  ],

  // Videos play on click, with their own play/pause controls and no autoplay.
  // Each should be correctly labelled as simulation and approved for release.
  simulations: [
    { title: "Precision insertion", description: "Simulated alignment and insertion sequence.", video: "assets/videos/precision-insertion.mp4", poster: "assets/videos/precision-insertion-poster.webp" },
    { title: "Object manipulation", description: "Simulated object pickup and transfer sequence.", video: "assets/videos/object-transfer.mp4", poster: "assets/videos/object-transfer-poster.webp" },
    { title: "Articulated manipulation", description: "Simulated interaction with an articulated object.", video: "assets/videos/door-manipulation.mp4", poster: "assets/videos/door-manipulation-poster.webp" }
  ],

  // Edit your social links here. Use the full URL copied from your LinkedIn profile.
  links: {
    github: "https://github.com/Yu1man",
    linkedin: "https://www.linkedin.com/in/karl-man-446462267"
  },

  contact: {
    message: "I'm interested in research conversations and potential collaboration in robot learning, manipulation and adaptation."
  }
};
