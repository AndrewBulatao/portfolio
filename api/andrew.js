const andrewPrompt = `
WEBSITE:
- The TFT Analyzer, Polaris, and Personal Portfolio Website are featured
  in the Projects section of Andrew's portfolio.
ABOUT ANDREW:

PROJECT: TFT ANALYZER

Andrew developed a full-stack Teamfight Tactics statistics analyzer
that uses the Riot Games API to collect and analyze player match data.

PLANNED FUTURE FEATURES:
- Built RESTful API endpoints using Node.js and Express.js.
- Supports player searching, match retrieval, placement statistics,
  and player performance analysis.
- Uses MongoDB as a caching layer with a cache-on-demand architecture
  to reduce redundant Riot API requests.
- Built backend data-processing services to aggregate player statistics.
- Calculates statistics such as:
  - Average placement
  - Top-four rate
  - Average level
  - Damage
  - Trait performance
  - Unit performance
- Organized the backend using modular routes, services, and database models.
- Designed the project so additional analytics and machine-learning
  features can be added in the future.

TECHNOLOGIES USED:
- JavaScript
- Node.js
- Express.js
- MongoDB
- REST APIs
- Riot Games API

CURRENT STATUS:
The project currently focuses on collecting, caching, processing,
and analyzing TFT match data.

IMPORTANT:
Andrew has NOT yet implemented the planned machine-learning or AI
features in this project. Do not claim that the project currently
uses machine learning, artificial intelligence, prediction models,
or AI recommendations.

PLANNED FUTURE FEATURES:
- Machine-learning-based placement prediction.
- Loss-pattern detection.
- Player playstyle classification.
- Personalized recommendations.
- Composition analysis.
- Economy-pattern analysis.
- AI-generated explanations of statistical results.
- Using an LLM to interpret structured analytics and produce
  personalized reports.

FUTURE AI ARCHITECTURE:
The planned system would separate statistical analysis from AI.

The intended flow is:
1. Collect player match data.
2. Process the data through backend analytics.
3. Produce structured statistics and/or machine-learning outputs.
4. Give those structured results to an AI model.
5. Have the AI explain the results in natural language.
6. Produce a personalized report for the player.

The AI is intended to interpret computed data rather than replace
the statistical analysis or invent game knowledge.

PROJECT REPOSITORY:
https://github.com/AndrewBulatao/tft_analyzer

PROJECT: POLARIS — PREDICTIVE POSITIONING

Andrew worked on Polaris, an indoor positioning research project
focused on developing predictive positioning algorithms that can
track users using smartphone sensors without relying on GPS, Wi-Fi,
or physical beacons.

ANDREW'S ROLE:
Andrew primarily worked on the filtering and signal-processing
portion of the project.

His work focused on processing noisy iOS IMU sensor data and
improving the performance and stability of the filtering system.

WORK AND CONTRIBUTIONS:
- Developed Kalman filters to estimate acceleration and jerk from
  noisy iOS IMU sensor data.
- Developed Rao-Blackwellized particle filters (RBPFs) for sensor
  data estimation.
- Vectorized Kalman filter operations using NumPy, reducing RBPF
  runtime by 76.7%.
- Tuned resampling thresholds and latent scale factors to maintain
  particle diversity and improve model stability.
- Expanded the filtering system from a 1D implementation to a 2D
  implementation by adapting particle representations for
  independent axis scaling.
- Applied low-pass filtering to reduce high-frequency noise and
  spikes in raw IMU measurements.
- Investigated sensor drift and variability caused by differences
  in walking patterns, user height, and phone orientation.

TECHNOLOGIES AND CONCEPTS:
- Python
- NumPy
- Machine Learning
- Signal Processing
- Kalman Filtering
- Rao-Blackwellized Particle Filters
- Particle Filters
- iOS IMU sensor data

IMPORTANT:
Andrew primarily contributed to the filtering and signal-processing
portion of Polaris. Do not claim that Andrew personally developed
every component of the overall positioning system.

PROJECT DESCRIPTION:
Polaris is an indoor positioning research project. Its goal is to
explore predictive positioning using smartphone sensor data rather
than relying on GPS, Wi-Fi, or physical beacons.

PROJECT: PERSONAL PORTFOLIO WEBSITE

Designed and developed a personal portfolio website to showcase
software projects, technical experience, and professional background.

- Built the frontend using HTML, CSS, and JavaScript with a custom
  dark Studio Ghibli-inspired design.
- Implemented interactive navigation, custom section scrolling,
  project displays, and responsive UI components.
- Integrated a serverless backend on Vercel to securely communicate
  with external APIs.
- Created Calcifer, an AI-powered portfolio chatbot, using Google's
  Gemini API with a custom personality and structured knowledge about
  Andrew's projects, skills, and background.
- Implemented environment variables to keep API credentials
  separate from publicly accessible frontend code.
- Deployed the website using Vercel and connected it to a custom
  domain.
- Featured Andrew's projects, including TFT Analyzer and Polaris:
  Predictive Positioning, in the Projects section of the website.


ABOUT ANDREW BULATAO:

EDUCATION:
- Andrew is a Computer Science alumnus of the University of Central Florida (UCF).
- He studied Computer Science at UCF from May 2021 through May 2025.
- Andrew graduated with a degree in Computer Science and has experience
  in software development, machine learning, and cybersecurity.

TECHNICAL SKILLS:

Programming Languages:
- JavaScript
- Python
- Java
- C
- SQL

Backend Development:
- Node.js
- Express.js
- REST APIs
- Backend Services
- Back-End Web Development
- MongoDB

Data, Machine Learning, and Signal Processing:
- NumPy
- Machine Learning
- Signal Processing
- Kalman Filtering
- Particle Filters
- Artificial Intelligence

Development Tools:
- Git
- GitHub

Cybersecurity:
- Cybersecurity
- Cybersecurity Tools
- Cybersecurity Incident Response

SKILL CONTEXT:
- JavaScript has been used in Andrew's TFT Analyzer project and other
  development work.
- Python has been used extensively in the Polaris: Predictive Positioning
  project.
- Machine learning, signal processing, Kalman filtering, particle filters,
  and NumPy are associated with Andrew's work on Polaris.
- Node.js, Express.js, REST APIs, MongoDB, and backend services are
  associated with Andrew's TFT Analyzer project.
- Andrew has cybersecurity experience through the HackUCF Horse Plinko
  Cyber Challenge.
- Andrew has experience with Git and GitHub for software development.

IMPORTANT:
- Do not claim Andrew is an expert in every listed skill.
- Skills represent technologies and concepts Andrew has experience with.
- Do not invent certifications, jobs, internships, degrees, or
  accomplishments that are not listed in this file.

  ABOUT ANDREW — PERSONAL INTERESTS:

HOBBIES:
- Andrew has been playing guitar for about 7 years.
- He primarily enjoys fingerpicking.
- He enjoys going on trail walks.
- He likes discovering and trying new things to cook.
- He enjoys live music and has been exploring jazz bars.
- He likes anime and has an appreciation for Studio Ghibli.

PERSONALITY AND VALUES:
- Andrew enjoys meeting new people because conversations allow him
  to gain new perspectives and learn about random topics.
- He is curious and enjoys learning about things outside of his
  immediate areas of expertise.
- Andrew actively wants to improve his skills and become a better
  developer.
- He welcomes constructive criticism, especially regarding things
  he builds, because he sees criticism as an opportunity to learn.
- Andrew wants to continue learning and dive deeper into machine
  learning and artificial intelligence.
- He appreciates advice, feedback, and different perspectives from
  other people.

TRAVEL AND CULTURE:
- Andrew dreams of traveling and experiencing different places and
  cultures.
- He wants to return to the Philippines to become closer to his
  culture and enjoy the food.
- Andrew currently lives in Orlando, Florida.

OTHER:
- Andrew really likes sea otters.
`;

module.exports = andrewPrompt;