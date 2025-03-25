// Define types for the candidate data structure
export interface CandidateAnalysis {
  overall_fit: { score: number; hiring_recommendation: string }
  profile_branding?: { score: number; details: string }
  experience_campaign_impact?: { score: number; details: string }
  skills_endorsements?: { score: number; details: string }
  content_strategy_engagement?: { score: number; details: string }
  certifications_professional_development?: { score: number; details: string }
  network_industry_influence?: { score: number; details: string }
  final_insights?: { total_score: number; suggested_next_step: string }
}

export interface ResumeAnalysis {
  formatting_presentation?: { score: number; details: string }
  work_experience_progression?: { score: number; details: string }
  core_skills_industry_expertise?: { score: number; details: string }
  social_media_metrics_performance?: { score: number; details: string }
  content_creation_strategy_execution?: { score: number; details: string }
  certifications_professional_development_resume?: { score: number; details: string }
  network_strength_industry_recognition?: { score: number; details: string }
}

export interface Candidate {
  id: number
  name: string
  email: string
  phone: string
  resume_url: string
  linkedin_url: string
  analysis: CandidateAnalysis
  resume_analysis?: ResumeAnalysis
}

// Raw candidate data from the JSON
export const rawCandidates: Candidate[] = [
  {
    id: 1,
    name: "Aditya rana",
    email: "",
    phone: "+919958241948",
    resume_url:
      "https://storage.tally.so/private/Resume.pdf?id=JAXLZz&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkpBWExaeiIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.ZXEWgHRd2Tp1d8gHH7uEx8R5m9eknSG1sLvRZGrnDGU&signature=a8f41dc6384163bea98b2cafd4bbe4c104d652c267bd0fc13b9ea46418db3d5b",
    linkedin_url: "https://www.linkedin.com/in/aditya-rana-b92061212/",
    analysis: {
      overall_fit: { score: 72, hiring_recommendation: "Strong Consideration" },
      profile_branding: {
        score: 8,
        details: "Engaging headline and professional photo; lacks a cohesive banner for personal branding.",
      },
      experience_campaign_impact: {
        score: 10,
        details: "Steady growth in roles; quantifiable achievements are not detailed in job descriptions.",
      },
      skills_endorsements: { score: 8, details: "Core social media skills are listed but lack industry endorsements." },
      content_strategy_engagement: {
        score: 8,
        details: "Active on Instagram with significant following; LinkedIn content strategy not detailed.",
      },
      certifications_professional_development: {
        score: 6,
        details: "No certifications are listed; candidate is pursuing an MBA.",
      },
      network_industry_influence: {
        score: 8,
        details:
          "Connected with over 600 cricketers and 14k Instagram followers; limited evidence of LinkedIn group participation.",
      },
      final_insights: {
        total_score: 72,
        suggested_next_step: "Request case studies or examples of social media campaigns.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 7,
        details: "Clean and professional layout with minor formatting inconsistencies.",
      },
      work_experience_progression: {
        score: 13,
        details:
          "Candidate shows 7 years of experience with steady role progression and some quantifiable achievements.",
      },
      core_skills_industry_expertise: {
        score: 6,
        details: "Strong foundation in social media marketing; lacks advanced endorsements.",
      },
      social_media_metrics_performance: {
        score: 7,
        details: "Metrics on engagement and follower growth are mentioned, though details are not fully specific.",
      },
      content_creation_strategy_execution: {
        score: 9,
        details: "Experience in content creation and strategic planning is evident.",
      },
      certifications_professional_development_resume: {
        score: 4,
        details: "No relevant certifications are noted on the resume.",
      },
      network_strength_industry_recognition: {
        score: 7,
        details: "Moderate networking efforts; endorsements and recommendations are minimal.",
      },
    },
  },
  {
    id: 2,
    name: "Mayank Srivastava",
    email: "",
    phone: "9560462552",
    resume_url:
      "https://storage.tally.so/private/Mayank-Srivastava-Jan-2025-CV-Resume.pdf?id=O5dY17&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik81ZFkxNyIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.09wewur2BpzKKCR7uJ8T81cbzeGREQJjowfJFijpV_A&signature=7c54bbbc2bc1f190c4532bee8b87f45a2ab8b8d56c15476003f980f5cf60fd40",
    linkedin_url:
      "https://www.linkedin.com/in/mayank-srivastava-b5145780?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    analysis: {
      overall_fit: { score: 45, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 4,
        details:
          "Headline 'I do Visual productions.' is not aligned with social media management; About section lacks focus.",
      },
      experience_campaign_impact: {
        score: 3,
        details:
          "Experience primarily in video editing and production roles, not directly aligned with social media management.",
      },
      skills_endorsements: {
        score: 3,
        details: "Skills focus on video production and editing; lacks social media tool proficiency.",
      },
      content_strategy_engagement: { score: 2, details: "No evidence of social media content strategy or engagement." },
      certifications_professional_development: {
        score: 2,
        details: "No certifications related to social media management.",
      },
      network_industry_influence: {
        score: 3,
        details: "Limited industry connections and low influence on social media.",
      },
      final_insights: {
        total_score: 20,
        suggested_next_step:
          "Consider for roles related to video production or request additional information on social media experience.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 8,
        details: "Clean and professional layout; minor inconsistencies in formatting.",
      },
      work_experience_progression: {
        score: 12,
        details: "Decent experience in digital marketing with quantifiable achievements provided.",
      },
      core_skills_industry_expertise: { score: 7, details: "Strong foundational knowledge of social media marketing." },
      social_media_metrics_performance: {
        score: 6,
        details: "Mentions improvements in engagement and follower growth; could use more specifics.",
      },
      content_creation_strategy_execution: {
        score: 8,
        details: "Experience in creating and scheduling posts is noted.",
      },
      certifications_professional_development_resume: { score: 0, details: "No certifications mentioned." },
      network_strength_industry_recognition: {
        score: 0,
        details: "No endorsements or networking achievements are noted.",
      },
    },
  },
  {
    id: 3,
    name: "Vaishali Rastogi",
    email: "vaishurastogi0612@gmail.com",
    phone: "918218983401",
    resume_url:
      "https://storage.tally.so/private/Vaishali-Rastogi.pdf?id=DdWbgj&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRkV2JnaiIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.uLonavUfX8peyEK_hfv7aDJiYK_dRpL-j3Px6C-WkM0&signature=e9ea8da327f4a5bced38abda6bbb4a367ee9bbdc374b3e1c9d6b88ea09f0e42f",
    linkedin_url:
      "https://www.linkedin.com/in/vaishali-rastogi-749b331b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    analysis: {
      overall_fit: { score: 45, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 5,
        details: "Headline mentions multimedia production; lacks clear focus on social media management.",
      },
      experience_campaign_impact: {
        score: 4,
        details: "Experience in content production roles; no quantifiable social media achievements listed.",
      },
      skills_endorsements: { score: 3, details: "No explicit social media skills or endorsements provided." },
      content_strategy_engagement: { score: 2, details: "No data on posting frequency or engagement quality." },
      certifications_professional_development: {
        score: 2,
        details: "No certifications or ongoing professional development evident.",
      },
      network_industry_influence: { score: 4, details: "Moderate connection count; lacks industry influence." },
      final_insights: {
        total_score: 45,
        suggested_next_step: "Request case studies or examples of past social media campaigns.",
      },
    },
  },
  {
    id: 4,
    name: "Alisha adhana",
    email: "",
    phone: "9650306171",
    resume_url:
      "https://storage.tally.so/private/Alisha_Adhana_-_Content_Creator-1.pdf?id=k6KWrM&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ims2S1dyTSIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.eH2lHZIs2z6oLIQk4JaYbM6m2B6FunRKEvEJ9FD6oy0&signature=5623febefcf68dec706473f309527312f9f4779690fb1c16f41b84fc9b59e9d5",
    linkedin_url: "https://in.linkedin.com/in/alisha-adhana-9ba698141?original_referer=https%3A%2F%2Fwww.google.com%2F",
    analysis: {
      overall_fit: { score: 45, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 4,
        details: "Generic headline; About section lacks strategic impact in social media.",
      },
      experience_campaign_impact: {
        score: 3,
        details: "Experience in content creation but lacks specific social media management roles.",
      },
      skills_endorsements: { score: 3, details: "Key social media skills missing; endorsements not present." },
      content_strategy_engagement: { score: 2, details: "No information on posting frequency or thought leadership." },
      certifications_professional_development: { score: 1, details: "No certifications or ongoing learning evidence." },
      network_industry_influence: { score: 4, details: "Moderate connections; lacks industry influence." },
      final_insights: {
        total_score: 20,
        suggested_next_step: "Consider additional training or certifications in social media management.",
      },
    },
    resume_analysis: {
      formatting_presentation: { score: 8.5, details: "Clean, professional, modern design." },
      work_experience_progression: {
        score: 37,
        details: "Detailed breakdown provided; limited quantifiable achievements.",
      },
      core_skills_industry_expertise: { score: 16, details: "Good skill match but limited endorsements." },
      social_media_metrics_performance: {
        score: 15,
        details: "Some measurable metrics provided but not comprehensive.",
      },
      content_creation_strategy_execution: {
        score: 16,
        details: "Experience with various content types but lacks depth in thought leadership.",
      },
      certifications_professional_development_resume: {
        score: 9,
        details: "Includes basic certifications; limited ongoing learning.",
      },
      network_strength_industry_recognition: { score: 11, details: "Moderate networking; few endorsements." },
    },
  },
  {
    id: 5,
    name: "Mudra Naresh karadia",
    email: "",
    phone: "919316297419",
    resume_url:
      "https://storage.tally.so/private/Mudra-karadiya-CV_241207_000934.pdf?id=V5vYaE&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImdNWVo5SyIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.H50zj9bvD8sVGXh-qBu4bE5XXsqidlFPwLmGKh_vdSY&signature=885d5a995ea95da0aace212e63ebe93e1b07d47e621cc2027eb0ae7dc8796ceb",
    linkedin_url:
      "https://www.linkedin.com/in/mudra-karadiya-b1925a21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    analysis: {
      overall_fit: { score: 45, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 5,
        details: "Headline mentions content creation but not focused on social media management.",
      },
      experience_campaign_impact: {
        score: 4,
        details: "Limited quantifiable achievements and social media platform mastery.",
      },
      skills_endorsements: { score: 3, details: "Core skills not prominently listed; no endorsements visible." },
      content_strategy_engagement: { score: 2, details: "No evidence of regular posting or engagement." },
      certifications_professional_development: { score: 2, details: "No certifications or ongoing learning evident." },
      network_industry_influence: { score: 4, details: "Moderate connections; limited industry influence." },
      final_insights: { total_score: 20, suggested_next_step: "Request more social media experience details." },
    },
    resume_analysis: {
      formatting_presentation: { score: 8, details: "Clean, professional layout." },
      work_experience_progression: { score: 79, details: "Strong work history with measurable achievements provided." },
      core_skills_industry_expertise: { score: 85, details: "Demonstrates strong social media skills." },
      social_media_metrics_performance: { score: 84, details: "Measurable impacts on engagement provided." },
      content_creation_strategy_execution: {
        score: 82,
        details: "Comprehensive content creation and strategy execution.",
      },
      certifications_professional_development_resume: {
        score: 54,
        details: "Some certifications noted; could improve ongoing learning.",
      },
      network_strength_industry_recognition: { score: 42, details: "Limited endorsements and industry recognition." },
    },
  },
  {
    id: 6,
    name: "Shreni Gupta",
    email: "",
    phone: "873-781-2221",
    resume_url:
      "https://storage.tally.so/private/Shreni-s-Resume-3-.pdf?id=O5dJaR&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik81ZEphUiIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.pPfjlNK6mb_fT2mWJRmxRHmubpzP_GsLufZuy8u9s_g&signature=0fef5ed5df87431cd41780e5a3c5ef99128e171ebb74340497c287066035d236",
    linkedin_url: "https://www.linkedin.com/in/shreni-gupta",
    analysis: {
      overall_fit: { score: 68, hiring_recommendation: "Moderate Fit" },
      profile_branding: { score: 7, details: "Engaging headline; professional photo; lacks banner." },
      experience_campaign_impact: {
        score: 6,
        details: "Experience in freelance and full-time roles; lacks quantifiable achievements.",
      },
      skills_endorsements: { score: 6, details: "Core skills listed; no industry endorsements provided." },
      content_strategy_engagement: { score: 4, details: "No evidence of posting frequency or thought leadership." },
      certifications_professional_development: {
        score: 3,
        details: "No certifications or ongoing professional development.",
      },
      network_industry_influence: { score: 6, details: "Over 1000 connections; lacks strong industry influence." },
      final_insights: {
        total_score: 38,
        suggested_next_step: "Request case studies or examples of past work to assess quantifiable impact.",
      },
    },
    resume_analysis: {
      formatting_presentation: { score: 6, details: "Clean layout; resume exceeds two pages; could be more concise." },
      work_experience_progression: {
        score: 12,
        details: "Over 5 years of experience; demonstrated data-driven results.",
      },
      core_skills_industry_expertise: {
        score: 8,
        details: "Strong foundation; limited mention of specific tool expertise.",
      },
      social_media_metrics_performance: {
        score: 9,
        details: "Mentions specific KPIs like 25% increase in followers and engagement growth.",
      },
      content_creation_strategy_execution: {
        score: 7,
        details: "Experience in copywriting and campaign management; lacks detail on content types.",
      },
      certifications_professional_development_resume: {
        score: 5,
        details: "Attended conferences; no certifications mentioned.",
      },
      network_strength_industry_recognition: { score: 5, details: "Active in industry groups; limited endorsements." },
    },
  },
  {
    id: 7,
    name: "Ria Munjal",
    email: "",
    phone: "9873690916",
    resume_url:
      "https://storage.tally.so/private/Ria_CV-2-.pdf?id=EQvbBq&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVRdmJCcSIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.Frkb5R2VL9OzXO9_Kqzxdi7C9eJkeg8YOlAy3UNPYxs&signature=9aef9820ddad8f48628bd969041e50bb5d130b3ab3d8252a0f628a1de5ba5b8c",
    linkedin_url: "https://in.linkedin.com/in/ria-munjal-02a82b196",
    analysis: {
      overall_fit: { score: 65, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 6,
        details: "Engaging headline; lacks specific mention of social media management expertise.",
      },
      experience_campaign_impact: {
        score: 7,
        details: "Experience in various marketing roles; lacks quantifiable social media achievements.",
      },
      skills_endorsements: {
        score: 6,
        details: "Core skills include social media marketing and content creation; endorsements moderate.",
      },
      content_strategy_engagement: { score: 4, details: "No data on posting frequency or engagement quality." },
      certifications_professional_development: {
        score: 3,
        details: "No certifications listed; no ongoing learning evident.",
      },
      network_industry_influence: { score: 6, details: "Moderate connections; lacks strong industry influence." },
      final_insights: {
        total_score: 38,
        suggested_next_step: "Request case studies or examples of social media campaigns.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 8,
        details: "Clean, professional layout with clear headings; minor reorganization needed.",
      },
      work_experience_progression: {
        score: 14,
        details: "4 years of digital marketing; strong career progression with quantifiable achievements.",
      },
      core_skills_industry_expertise: {
        score: 9,
        details: "Strong alignment with social media marketing; endorsements and skills validated.",
      },
      social_media_metrics_performance: {
        score: 8,
        details: "Measurable impact demonstrated; KPIs like engagement and conversion rates mentioned.",
      },
      content_creation_strategy_execution: {
        score: 9,
        details: "Active content creation; multiple content types noted.",
      },
      certifications_professional_development_resume: {
        score: 9,
        details: "Certifications in Meta Blueprint and Google Ads noted.",
      },
      network_strength_industry_recognition: {
        score: 9,
        details: "Strong network; active in industry groups; endorsements present.",
      },
    },
  },
  {
    id: 8,
    name: "Nikhil Pithauria",
    email: "",
    phone: "7289042922",
    resume_url:
      "https://storage.tally.so/private/NIKHIL-PITHAURIA-Resume-3-.pdf?id=xa49aE&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InhhNDlhRSIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.aZRT8LNVkciXFBi-hSVbPwHZ8ycUAUPHwPxglv8321s&signature=ed1bc21c9b9e76f48e8a060527adaf801efdb013a5373ac85e0922957a7c1c61",
    linkedin_url:
      "https://www.linkedin.com/in/nikhil-pithauria-622ab1239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    analysis: {
      overall_fit: { score: 45, hiring_recommendation: "Moderate Fit" },
      profile_branding: { score: 5, details: "Clear headline; About section missing." },
      experience_campaign_impact: {
        score: 5,
        details: "Limited experience with no clear progression in social media roles.",
      },
      skills_endorsements: { score: 4, details: "Basic skills mentioned; lacks endorsements." },
      content_strategy_engagement: {
        score: 0,
        details: "No information available on posting frequency or thought leadership.",
      },
      certifications_professional_development: {
        score: 0,
        details: "No certifications or ongoing learning mentioned.",
      },
      network_industry_influence: { score: 1, details: "Limited connections; no industry influence." },
      final_insights: { total_score: 20, suggested_next_step: "Request more detailed social media campaign data." },
    },
    resume_analysis: {
      formatting_presentation: { score: 8, details: "Professional layout; minor overlapping sections." },
      work_experience_progression: {
        score: 12,
        details: "5 years of experience; steady progression with quantifiable achievements.",
      },
      core_skills_industry_expertise: { score: 9, details: "Strong skill set; advanced tools experience." },
      social_media_metrics_performance: { score: 8, details: "Improved engagement metrics provided." },
      content_creation_strategy_execution: {
        score: 8,
        details: "Experience in various content types; regular posting.",
      },
      certifications_professional_development_resume: { score: 7, details: "Holds Meta Blueprint certification." },
      network_strength_industry_recognition: { score: 9, details: "Active networking; endorsements present." },
    },
  },
  {
    id: 9,
    name: "Ranveer Singh",
    email: "+918287924850",
    phone: "+918287924850",
    resume_url:
      "https://storage.tally.so/private/ranveersingh-cv.pdf?id=oMKvqb&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9NS3ZxYiIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.LTaeYPCKAEbXbXx-IvNe520TB8N9U-w0BaHFzRET8go&signature=8a5a2269b66f6b8ab0c624e88d81509673fd6ac6e63d0b25178ff49f04a5dfcc",
    linkedin_url: "https://www.linkedin.com/in/ranveer-singh-veerthefeed/",
    analysis: {
      overall_fit: { score: 65, hiring_recommendation: "Moderate Fit" },
      profile_branding: { score: 7, details: "Engaging headline; professional photo; lacks banner." },
      experience_campaign_impact: {
        score: 6,
        details: "Experience in various social media roles; lacks quantifiable achievements.",
      },
      skills_endorsements: { score: 5, details: "Skills in content creation and video production; no endorsements." },
      content_strategy_engagement: { score: 3, details: "No posting frequency or engagement data provided." },
      certifications_professional_development: {
        score: 4,
        details: "Currently pursuing a degree in Mass Communication.",
      },
      network_industry_influence: { score: 5, details: "Moderate connections; limited industry influence." },
      final_insights: {
        total_score: 36,
        suggested_next_step: "Request case studies or examples of past work to assess impact.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 8,
        details: "Clean and professional layout with minor bullet inconsistencies.",
      },
      work_experience_progression: {
        score: 12,
        details: "Strong experience in e-commerce and SaaS with quantifiable results.",
      },
      core_skills_industry_expertise: {
        score: 9,
        details: "Solid foundation; strong skills in paid ads and analytics.",
      },
      social_media_metrics_performance: {
        score: 8,
        details: "Metrics like engagement and conversion rates mentioned.",
      },
      content_creation_strategy_execution: {
        score: 9,
        details: "Good experience in content creation across platforms.",
      },
      certifications_professional_development_resume: {
        score: 8,
        details: "Holds Meta Blueprint and Google Ads certification.",
      },
      network_strength_industry_recognition: { score: 9, details: "Strong network and endorsements present." },
    },
  },
  {
    id: 10,
    name: "Gunjan singh",
    email: "",
    phone: "9318323068",
    resume_url:
      "https://storage.tally.so/private/Gunjan-singh.pdf?id=R5v2WQ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlI1djJXUSIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.XilpXkJlN-fVADyCEl9X-uZdgqz-ohbzhHOgJMj2SB4&signature=996add6eaa07f94ebcaf1efb9c19c4120620454f8e4431780bf2abfedda748d4",
    linkedin_url:
      "https://www.linkedin.com/in/gunjan-singh-983a0a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    analysis: {
      overall_fit: { score: 65, hiring_recommendation: "Moderate Fit" },
      profile_branding: { score: 6, details: "Clear headline defining expertise; lacks endorsements." },
      experience_campaign_impact: { score: 7, details: "Experience in freelance roles; no quantifiable achievements." },
      skills_endorsements: { score: 6, details: "Proficient in Adobe Photoshop and Canva; lacks social media tools." },
      content_strategy_engagement: { score: 4, details: "No data on posting frequency or engagement quality." },
      certifications_professional_development: { score: 3, details: "No certifications in social media management." },
      network_industry_influence: { score: 5, details: "Moderate connections; limited industry influence." },
      final_insights: { total_score: 37, suggested_next_step: "Request case studies or examples of past work." },
    },
    resume_analysis: {
      formatting_presentation: { score: 9, details: "Clean layout with professional design." },
      work_experience_progression: { score: 13, details: "Relevant roles and quantifiable achievements mentioned." },
      core_skills_industry_expertise: { score: 8, details: "Solid foundation in social media marketing." },
      social_media_metrics_performance: { score: 7, details: "Good measurable impact; lacks detailed KPIs." },
      content_creation_strategy_execution: { score: 8, details: "Experience in creating and scheduling posts." },
      certifications_professional_development_resume: { score: 9, details: "Includes Meta Blueprint certification." },
      network_strength_industry_recognition: { score: 9, details: "Active network; endorsements present." },
    },
  },
  {
    id: 11,
    name: "Tashie Gautam",
    email: "gautamtashie@gmail.com",
    phone: "+918192023553",
    resume_url:
      "https://storage.tally.so/private/Tashie_Gautam_CV-1.docx?id=oMKgzM&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9NS2d6TSIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.QT-TKEilN-WBuyx13t9KtFhF3F71UYTHpNLbtnzldhI&signature=c355b8fc6d33e2dcddbbdc89ec38cc626d23ddf5641381a001b98b94ba0808c8",
    linkedin_url:
      "https://www.linkedin.com/in/tashie-gautam-a68bb6210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    analysis: {
      overall_fit: { score: 55, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 5,
        details:
          "The headline is broad and does not specifically highlight expertise in social media management. The about section lacks strategic thinking and measurable impact in social media campaigns.",
      },
      experience_campaign_impact: {
        score: 6,
        details:
          "The candidate has experience in various roles related to content creation and digital marketing but lacks a clear progression in social media management roles.",
      },
      skills_endorsements: {
        score: 5,
        details:
          "Skills related to social media content creation are listed, but key skills like Social Media Marketing, Paid Ads, and Analytics are missing.",
      },
      content_strategy_engagement: {
        score: 3,
        details: "No information on LinkedIn activity or content strategy is available.",
      },
      certifications_professional_development: {
        score: 2,
        details: "No certifications or courses related to social media management are listed.",
      },
      network_industry_influence: {
        score: 4,
        details:
          "The candidate has a moderate number of connections, but there is no information on the quality or industry influence.",
      },
      final_insights: {
        total_score: 30,
        suggested_next_step: "Request case studies or examples of social media campaigns managed.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 8,
        details: "Clean and professional layout with a clear structure.",
      },
      work_experience_progression: {
        score: 12,
        details:
          "8 years of total work experience, with 4 years in social media management. Steady career growth with promotions in social media roles.",
      },
      core_skills_industry_expertise: {
        score: 9,
        details:
          "Core skills include social media marketing, paid ads, analytics, content strategy, influencer marketing, SEO, video editing, and brand management.",
      },
      social_media_metrics_performance: {
        score: 9,
        details:
          "Demonstrated measurable impact in several areas: Increased Instagram engagement by 250%, Grew followers by 100%, Achieved a 50% increase in website traffic through social media campaigns.",
      },
      content_creation_strategy_execution: {
        score: 8,
        details:
          "Experience in creating content for Instagram, Facebook, Twitter, and LinkedIn. Knowledge of long-form, short-form, and interactive content strategies.",
      },
      certifications_professional_development_resume: {
        score: 9,
        details: "Holds certifications in Meta Blueprint and Google Ads. Attended webinars and marketing boot camps.",
      },
      network_strength_industry_recognition: {
        score: 9,
        details:
          "Professional LinkedIn network with senior marketers and thought leaders. Participation in industry groups and webinars.",
      },
    },
  },
  {
    id: 12,
    name: "Pankhuri",
    email: "pankhuri.75@gmail.com",
    phone: "7042005605",
    resume_url:
      "https://storage.tally.so/private/Pankhuri.pdf?id=8QA5zx&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhRQTV6eCIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.ov74GZteRVhw_P9mvfj5JaYXgHWK-gImnIMr10sqL3U&signature=479a41149bb87a920ee81f1bf7ac48b7c778e1653445797f9f97bdd534c2192d",
    linkedin_url: "https://www.linkedin.com/in/pankhuri-srivastava-772b63166",
    analysis: {
      overall_fit: { score: 45, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 4,
        details: "The headline is not specific to social media management. The About section is missing.",
      },
      experience_campaign_impact: {
        score: 3,
        details: "Experience in content writing and marketing, but not specifically in social media management.",
      },
      skills_endorsements: {
        score: 4,
        details: "Content Development, Copywriting, Branding, but lacks specific social media skills.",
      },
      content_strategy_engagement: {
        score: 2,
        details: "No data available on LinkedIn activity.",
      },
      certifications_professional_development: {
        score: 2,
        details: "No certifications related to social media management.",
      },
      network_industry_influence: {
        score: 3,
        details: "High connection count but lacks evidence of industry influence.",
      },
      final_insights: {
        total_score: 21,
        suggested_next_step:
          "Consider for roles related to content writing or marketing, but not specifically for social media management.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 9,
        details:
          "Visual clarity and structure are excellent. Layout is clean and easy to follow, with clear section divisions.",
      },
      work_experience_progression: {
        score: 14,
        details:
          "Candidate has held relevant roles such as Digital Marketing Coordinator, Social Media Coordinator, and Marketing Assistant. Experience across multiple industries, including e-commerce, SaaS, and non-profits.",
      },
      core_skills_industry_expertise: {
        score: 9,
        details:
          "Strong alignment with the Social Media Manager role, including expertise in social media marketing, paid ads, analytics, and content strategy.",
      },
      social_media_metrics_performance: {
        score: 9,
        details:
          "Demonstrates significant growth in social media engagement, such as a 250% increase in Instagram engagement and a 300% increase in website traffic.",
      },
      content_creation_strategy_execution: {
        score: 8,
        details:
          "Capable of creating high-quality content on a regular basis. Experience with various content types, including blog posts, videos, and social media posts.",
      },
      certifications_professional_development_resume: {
        score: 8,
        details:
          "Holds certifications in HubSpot and Google Analytics, reflecting industry credibility. Actively participates in webinars and marketing boot camps for continuous professional development.",
      },
      network_strength_industry_recognition: {
        score: 9,
        details:
          "Candidate maintains connections with senior marketers and industry thought leaders. Involvement in industry groups and webinars highlights networking efforts.",
      },
    },
  },
  {
    id: 13,
    name: "Vartika Gupta",
    email: "guptavartikaa@gmail.com",
    phone: "9717419257",
    resume_url:
      "https://storage.tally.so/private/Vartika-Gupta---Resume.pdf?id=XW1y0d&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlhXMXkwZCIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.ww1xUex1yQBUdj5BYmyUVCVV22dL_4va3Pbn0B32OqI&signature=6089eedeaf5d46046b5e2e8a179154bc861ed5a2b93534106dee2d1d83f74363",
    linkedin_url:
      "https://www.linkedin.com/in/vartika-gupta-66a664344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    analysis: {
      overall_fit: { score: 65, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 6,
        details:
          "The headline is not specifically focused on social media management, but the about section highlights strategic thinking and creativity.",
      },
      experience_campaign_impact: {
        score: 8,
        details: "Experience in various roles related to social media, but lacks a clear progression to senior roles.",
      },
      skills_endorsements: {
        score: 7,
        details: "Social Media Marketing, Content Strategy, but lacks endorsements.",
      },
      content_strategy_engagement: {
        score: 4,
        details: "No information available on posting frequency.",
      },
      certifications_professional_development: {
        score: 3,
        details: "No certifications listed.",
      },
      network_industry_influence: {
        score: 5,
        details: "Moderate connection count, but lacks connections with senior industry leaders.",
      },
      final_insights: {
        total_score: 40,
        suggested_next_step: "Request case studies or examples of past social media campaigns.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 8,
        details: "Clean and professional layout with balanced font size and color scheme.",
      },
      work_experience_progression: {
        score: 6.5,
        details:
          "Comprehensive work experience with notable achievements. Clear social media career growth with increasing responsibility.",
      },
      core_skills_industry_expertise: {
        score: 8,
        details:
          "Strong foundation in social media marketing. Experience in paid advertising, analytics, and content strategy.",
      },
      social_media_metrics_performance: {
        score: 7,
        details:
          "Shows success in increasing engagement and follower growth. Lacks specific metrics for campaign performance.",
      },
      content_creation_strategy_execution: {
        score: 7,
        details: "Experienced in content creation. Mentions posting frequency and quality.",
      },
      certifications_professional_development_resume: {
        score: 6,
        details: "Lacks industry-specific certifications. Attended some marketing-related webinars and workshops.",
      },
      network_strength_industry_recognition: {
        score: 5,
        details: "Moderate professional network. Connected to some senior marketers.",
      },
    },
  },
  {
    id: 14,
    name: "Nikesh Pandian",
    email: "nikesh.pandian@gmail.com",
    phone: "7982610630",
    resume_url:
      "https://storage.tally.so/private/Nikesh-Pandian---Portfolio.pdf?id=oMKYPO&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9NS1lQTyIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.cU4vXlitJOQOmAvpNsIYWz4L5bwTSwvZk9t6ebEZ4lo&signature=9d161e4673a67e8f0bceffabd3ad7d5ee831d902a75dd0c24722317294978870",
    linkedin_url: "https://www.linkedin.com/in/nikeshpandian/",
    analysis: {
      overall_fit: { score: 45, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 5,
        details:
          "The headline is generic and does not specifically highlight expertise in social media management. The about section is creative but lacks specific strategic insights or measurable impacts in social media.",
      },
      experience_campaign_impact: {
        score: 4,
        details:
          "The candidate has experience in content and brand strategy roles but lacks specific social media management titles.",
      },
      skills_endorsements: {
        score: 3,
        details:
          "Skills related to content strategy and marketing are listed, but core social media skills are not emphasized.",
      },
      content_strategy_engagement: {
        score: 2,
        details: "No information on LinkedIn activity or posting frequency is available.",
      },
      certifications_professional_development: {
        score: 2,
        details: "No certifications related to social media management are mentioned.",
      },
      network_industry_influence: {
        score: 4,
        details:
          "The candidate has a moderate number of connections but lacks information on the quality of connections.",
      },
      final_insights: {
        total_score: 45,
        suggested_next_step: "Request case studies or examples of social media campaigns managed.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 8,
        details: "The resume has a clean and professional layout. Easy-to-read formatting and concise descriptions.",
      },
      work_experience_progression: {
        score: 19,
        details:
          "5 years of experience in social media marketing. Roles include Social Media Manager and Digital Marketing Specialist.",
      },
      core_skills_industry_expertise: {
        score: 14,
        details:
          "Strong skill set in social media marketing, content strategy, and analytics. Proficient in Meta Ads, Google Analytics, and Hootsuite.",
      },
      social_media_metrics_performance: {
        score: 9,
        details: "Demonstrated measurable impact in previous roles. Shown increases in engagement and follower growth.",
      },
      content_creation_strategy_execution: {
        score: 9,
        details:
          "Experience in creating and executing content strategies. Focus on short-form and interactive content.",
      },
      certifications_professional_development_resume: {
        score: 7,
        details: "Certifications in Meta Blueprint and Google Ads. Attended webinars and marketing boot camps.",
      },
      network_strength_industry_recognition: {
        score: 9,
        details: "Active presence on LinkedIn. Networked with senior marketers and thought leaders.",
      },
    },
  },
  {
    id: 15,
    name: "Hanish Kotte",
    email: "k.hanishmba@gmail.com",
    phone: "9676404100",
    resume_url:
      "https://storage.tally.so/private/Kotte-Hanish_CV_Off-campus.docx?id=9Dp8X5&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlEcDhYNSIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.JoaWZUkJ7pu2WhADVCc0qqor5UN7bTwG70Wu5wJDMGs&signature=478b8fe059f617640c5a36c0236114f0025bac7b5f61bb7e71c3c557db781238",
    linkedin_url: "https://www.linkedin.com/in/hanishkotte/",
    analysis: {
      overall_fit: { score: 68, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 6,
        details:
          "The headline is comprehensive, covering various aspects of marketing but lacks a specific focus on social media management. The About section showcases strategic thinking and creativity but is more general in marketing rather than social media-specific.",
      },
      experience_campaign_impact: {
        score: 8,
        details:
          "The candidate has diverse experience in marketing roles but lacks specific titles related to social media management.",
      },
      skills_endorsements: {
        score: 6,
        details:
          "Skills related to marketing and CRM are listed, but specific social media skills are not highlighted.",
      },
      content_strategy_engagement: {
        score: 4,
        details: "No information on posting frequency or engagement is available.",
      },
      certifications_professional_development: {
        score: 4,
        details: "No certifications related to social media management are mentioned.",
      },
      network_industry_influence: {
        score: 6,
        details:
          "The candidate has a substantial number of connections, but the quality and relevance to social media are unclear.",
      },
      final_insights: {
        total_score: 34,
        suggested_next_step:
          "Request case studies or examples of social media campaigns to better assess suitability for the role.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 9,
        details: "Clean and professional layout with a clear structure. Readable font and consistent heading sizes.",
      },
      work_experience_progression: {
        score: 14,
        details:
          "All job titles are aligned with social media manager roles. Most companies are in the digital marketing or e-commerce space.",
      },
      core_skills_industry_expertise: {
        score: 9,
        details:
          "Core Skills Listed: Social Media Marketing, Paid Ads, Analytics, Content Strategy, Influencer Marketing. Endorsed skills in social media marketing and paid ads.",
      },
      social_media_metrics_performance: {
        score: 8,
        details:
          "Measurable Achievements: Follower growth, Engagement rates, ROAS improvements. KPI Focus: Mentions of CTR and conversion rates.",
      },
      content_creation_strategy_execution: {
        score: 9,
        details:
          "Content Creation Experience: Posting frequency and quality, Various content types mentioned (long-form, short-form, interactive).",
      },
      certifications_professional_development_resume: {
        score: 8,
        details:
          "Certifications Held: Meta Blueprint, Google Ads, HubSpot, Hootsuite. Professional Development: Attendance in workshops and webinars.",
      },
      network_strength_industry_recognition: {
        score: 8,
        details:
          "Industry Engagement: Active in industry groups and webinars. Professional Connections: Connections with senior marketers and thought leaders.",
      },
    },
  },
  {
    id: 16,
    name: "Reema Singh",
    email: "reemasinghdr@gmail.com",
    phone: "+919568435740",
    resume_url:
      "https://storage.tally.so/private/Updated-Resume.pdf?id=vyEQKX&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZ5RVFLWCIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.rcTRHZWP0zt99FP649XbAC4YR9z9tVv6wUUIeg_7T6U&signature=7320334515980a8210dd91339a53922ceacd19a0d31a85befadcc3239f785328",
    linkedin_url:
      "https://www.linkedin.com/in/reema-singh-4924b7149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    analysis: {
      overall_fit: { score: 72, hiring_recommendation: "Strong Consideration" },
      profile_branding: {
        score: 8,
        details:
          "The headline clearly defines expertise in social media management and influencer marketing. The about section showcases strategic thinking and commitment to measurable results.",
      },
      experience_campaign_impact: {
        score: 7,
        details: "Progression from sales roles to social media management, indicating a shift in career focus.",
      },
      skills_endorsements: {
        score: 6,
        details:
          "Social Media Marketing, Content Creation, Influencer Marketing. Skills are listed but lack endorsements from industry professionals.",
      },
      content_strategy_engagement: {
        score: 4,
        details: "No data available on posting frequency.",
      },
      certifications_professional_development: {
        score: 3,
        details: "No certifications listed.",
      },
      network_industry_influence: {
        score: 5,
        details: "Strong connection count but lacks evidence of industry influence.",
      },
      final_insights: {
        total_score: 72,
        suggested_next_step: "Request case studies or examples of past social media campaigns.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 7,
        details:
          "Clean and professional layout. Clear font and proper spacing. Formatting could be improved with more consistent use of bullet points.",
      },
      work_experience_progression: {
        score: 12,
        details:
          "4 years of experience in social media management. Roles in both agencies and e-commerce. Clear progression in job titles and responsibilities.",
      },
      core_skills_industry_expertise: {
        score: 8,
        details:
          "Mentions key skills such as social media marketing, paid ads, analytics, and content strategy. Could benefit from endorsements through industry certifications or testimonials.",
      },
      social_media_metrics_performance: {
        score: 5,
        details:
          "Demonstrates measurable impact, such as increasing Instagram followers by 50% in 6 months. Improved ad ROI by 20% in 3 months.",
      },
      content_creation_strategy_execution: {
        score: 7,
        details:
          "Experience in creating and executing long-form, short-form, and interactive content. Limited information on thought leadership.",
      },
      certifications_professional_development_resume: {
        score: 6,
        details: "Basic certifications in social media marketing and analytics. No mention of advanced certifications.",
      },
      network_strength_industry_recognition: {
        score: 4,
        details: "Limited professional network in the industry. No evidence of industry influence or endorsements.",
      },
    },
  },
  {
    id: 17,
    name: "Latika Rakheja",
    email: "latirakheja06@gmail.com",
    phone: "9899971038",
    resume_url:
      "https://storage.tally.so/private/RESUME.pdf?id=W5KJeQ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilc1S0plUSIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.S7N0pvOSpY4VK6ARsLFRZfPku5IeA97o0fLUbGlSUtc&signature=49a771d8407e6a5e183a37d01b987fdebec413f79e7676bfa7a46234d99739b2",
    linkedin_url:
      "https://www.linkedin.com/in/latika-rakheja-aa00551b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    analysis: {
      overall_fit: { score: 65, hiring_recommendation: "Moderate Fit" },
      profile_branding: {
        score: 6,
        details:
          "The headline is engaging and highlights her creative marketing edge, but the About section is missing.",
      },
      experience_campaign_impact: {
        score: 5,
        details: "Progression from internships to full-time roles, but lacks detailed achievements.",
      },
      skills_endorsements: {
        score: 4,
        details: "Skills section is not detailed in the provided data.",
      },
      content_strategy_engagement: {
        score: 3,
        details: "No data on posting frequency.",
      },
      certifications_professional_development: {
        score: 2,
        details: "No certifications listed.",
      },
      network_industry_influence: {
        score: 5,
        details: "Moderate connection count but lacks data on quality.",
      },
      final_insights: {
        total_score: 30,
        suggested_next_step: "Request more detailed information on achievements and skills.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 9,
        details:
          "Clean and professional layout. Clear headings and easy-to-read font. Consistent formatting throughout.",
      },
      work_experience_progression: {
        score: 12,
        details:
          "Relevant Social Media Manager roles. Clear job titles, company names, and industry fit. Demonstrates steady career progression.",
      },
      core_skills_industry_expertise: {
        score: 9,
        details:
          "Strong foundation in Social Media Marketing, Paid Ads, Analytics, and Content Strategy. Additional skills: Influencer Marketing, SEO, Video Editing.",
      },
      social_media_metrics_performance: {
        score: 9,
        details:
          "Quantifiable impact on social media metrics. Increased Instagram engagement by 250%. Achieved 300% increase in conversions from Meta Ads campaigns.",
      },
      content_creation_strategy_execution: {
        score: 9,
        details: "Strong focus on content creation and execution. Posting frequency and engagement across platforms.",
      },
      certifications_professional_development_resume: {
        score: 8,
        details:
          "Holds certifications from Meta Blueprint and Google Ads. Attended workshops, webinars, and marketing boot camps.",
      },
      network_strength_industry_recognition: {
        score: 7,
        details: "Moderately strong industry network. Connected with senior marketers and thought leaders.",
      },
    },
  },
  {
    id: 18,
    name: "Suryatopa Jana",
    email: "suryatopajana@gmail.com",
    phone: "+919773621991",
    resume_url:
      "https://storage.tally.so/private/surya-uk-resume-2.pdf?id=AL4pre&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFMNHByZSIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.xIO0fySq9TJhf6Ws2JevPz8B2IqGNsEwhUkmGT5KnxU&signature=0f41fa6b95936a558ccd9f99fe782c045c5ab092aa08932f845a4b8dfda51a12",
    linkedin_url: "https://www.linkedin.com/in/suryatopa-jana-b07171160/",
    analysis: {
      overall_fit: { score: 25, hiring_recommendation: "Not Recommended" },
      profile_branding: {
        score: 3,
        details:
          "The headline is focused on fashion communications and design, not social media management. The About section highlights creativity and storytelling but lacks specific social media strategy.",
      },
      experience_campaign_impact: {
        score: 2,
        details: "No progression in social media roles; current focus is on fashion design and communications.",
      },
      skills_endorsements: {
        score: 2,
        details: "Skills related to fashion design, not social media.",
      },
      content_strategy_engagement: {
        score: 1,
        details: "No information available on posting frequency.",
      },
      certifications_professional_development: {
        score: 1,
        details: "No certifications related to social media management.",
      },
      network_industry_influence: {
        score: 2,
        details: "Connections not focused on social media industry.",
      },
      final_insights: {
        total_score: 25,
        suggested_next_step: "Consider candidates with more relevant social media experience and skills.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 9,
        details:
          "The visual clarity, structure, and readability of the resume are impressive. The layout is clean, with well-organized sections.",
      },
      work_experience_progression: {
        score: 12,
        details:
          "Extensive work experience across marketing, advertising, and editorial industries. Relevant job titles align with the Social Media Manager role.",
      },
      core_skills_industry_expertise: {
        score: 8,
        details:
          "Comprehensive list of relevant skills, including: Social Media Marketing, Paid Ads (Meta Ads, Google Ads), Analytics (Google Analytics, Hootsuite), Content Strategy, Copywriting, Video Editing, Brand Management.",
      },
      social_media_metrics_performance: {
        score: 7,
        details:
          "Mentions of measurable achievements such as engagement growth and content strategy execution. Lacks specific quantifiable data on campaign performance for metrics like CTR, conversion rates, or ROAS improvements.",
      },
      content_creation_strategy_execution: {
        score: 8,
        details:
          "Demonstrates ability to create engaging content tailored to various platforms. Highlights experience in developing and executing content strategies.",
      },
      certifications_professional_development_resume: {
        score: 5,
        details:
          "No specific certifications or continuous learning initiatives were mentioned. Keeping up-to-date with social media trends and earning certifications could enhance credibility.",
      },
      network_strength_industry_recognition: {
        score: 6,
        details:
          "Some references and mentions from industry professionals included. Could benefit from more evidence of active industry networking such as: Attendance at webinars, conferences, or online communities.",
      },
    },
  },
  {
    id: 19,
    name: "Pankhuri Argal",
    email: "pankhuriargal21@gmail.com",
    phone: "8839628928",
    resume_url:
      "https://storage.tally.so/private/Pankhuri-Argal-2024-3.pdf?id=bxY4YZ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJ4WTRZWiIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.J4CuepwqFzediPBCmQ8hfGsj3XTRB3FcVuIUMdsT9-4&signature=93f36f69e9b7fac4345fbb3977057b99cd602d95c880ec523c13a9cb637a2bf1",
    linkedin_url: "https://www.linkedin.com/in/pankhuri-argal-62bb92126/",
    analysis: {
      overall_fit: { score: 75, hiring_recommendation: "Strong Consideration" },
      profile_branding: {
        score: 7,
        details:
          "The headline clearly defines expertise in social media management. The about section showcases strategic thinking and creativity but lacks measurable impact.",
      },
      experience_campaign_impact: {
        score: 10,
        details: "Steady growth from junior to senior roles, with experience in both agency and government sectors.",
      },
      skills_endorsements: {
        score: 12,
        details: "Social Media Marketing, Content Strategy, Digital Marketing. Skills are endorsed by peers.",
      },
      content_strategy_engagement: {
        score: 5,
        details: "Not enough data to evaluate.",
      },
      certifications_professional_development: {
        score: 3,
        details: "No certifications listed.",
      },
      network_industry_influence: {
        score: 8,
        details: "Connected with over 1300 professionals, but quality of connections is unclear.",
      },
      final_insights: {
        total_score: 55,
        suggested_next_step: "Request case studies or examples of past campaign successes.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 8,
        details: "Well-structured with clear headings and formatting. Clean layout with an easy-to-read font.",
      },
      work_experience_progression: {
        score: 13,
        details:
          "Strong background in social media marketing. Experience in managing multiple platforms, creating content, and analyzing results.",
      },
      core_skills_industry_expertise: {
        score: 9,
        details:
          "Strong set of core skills in social media marketing. Proficient in paid ads, analytics, and content strategy.",
      },
      social_media_metrics_performance: {
        score: 8,
        details:
          "Delivered measurable results in follower growth and engagement rate improvements. Experienced in managing multiple platforms.",
      },
      content_creation_strategy_execution: {
        score: 9,
        details:
          "Strong experience in content strategy. Evidence of active content creation, posting frequency, and quality.",
      },
      certifications_professional_development_resume: {
        score: 8,
        details:
          "Holds relevant certifications, including Meta Blueprint and Google Ads. Actively participates in workshops and webinars for ongoing learning.",
      },
      network_strength_industry_recognition: {
        score: 7,
        details:
          "Some network strength with connections to senior marketers and thought leaders. No mention of endorsements or recommendations showcasing industry reputation.",
      },
    },
  },
  {
    id: 20,
    name: "Suchi Gaur",
    email: "suchigaur21@gmail.com",
    phone: "9968620575",
    resume_url:
      "https://storage.tally.so/private/Resume--Suchi-Gaur-2-.pdf?id=8Q6p5x&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhRNnA1eCIsImZvcm1JZCI6Im1LdjZ4ayIsImlhdCI6MTc0MjQ0NzIyNn0.YXH7T_ejtnTK2hPw9ArC4DIAgo0Ku41Hbsn2lOcdkZg&signature=d9f80a9719a17c935759cb4aa05e6bdd11017924eeef6dd92d6fe275a9323ca4",
    linkedin_url: "https://www.linkedin.com/in/suchi-gaur-b264291a0/",
    analysis: {
      overall_fit: { score: 35, hiring_recommendation: "Not Recommended" },
      profile_branding: {
        score: 3,
        details:
          "The headline does not clearly define expertise in social media management. The About section lacks strategic thinking and measurable impact in social media campaigns.",
      },
      experience_campaign_impact: {
        score: 2,
        details:
          "No clear progression in social media roles. Experience is more aligned with content development and education.",
      },
      skills_endorsements: {
        score: 2,
        details: "No core social media skills listed.",
      },
      content_strategy_engagement: {
        score: 1,
        details: "No information on posting frequency or engagement.",
      },
      certifications_professional_development: {
        score: 1,
        details: "No certifications related to social media management.",
      },
      network_industry_influence: {
        score: 3,
        details: "Connections not specifically related to social media management.",
      },
      final_insights: {
        total_score: 35,
        suggested_next_step: "Consider candidates with more relevant social media management experience.",
      },
    },
    resume_analysis: {
      formatting_presentation: {
        score: 9,
        details: "Clean and professional layout, easy to read and navigate. Standard and consistent font throughout.",
      },
      work_experience_progression: {
        score: 13,
        details:
          "Relevant job titles aligned with Social Media Manager roles, such as Social Media Manager and Content Strategist. Experience in e-commerce and marketing industries.",
      },
      core_skills_industry_expertise: {
        score: 9,
        details:
          "Strong skills in Social Media Marketing, Paid Ads, Analytics, and Content Strategy. Endorsements for key skills from past colleagues.",
      },
      social_media_metrics_performance: {
        score: 8,
        details:
          "Demonstrated follower growth and engagement rate improvements. Mentioned specific KPIs, such as CTR and conversion rates.",
      },
      content_creation_strategy_execution: {
        score: 8,
        details:
          "Experience in content strategy with a focus on posting frequency and quality. Mentioned various content types, including long-form, short-form, and interactive content.",
      },
      certifications_professional_development_resume: {
        score: 9,
        details:
          "Relevant certifications, including Meta Blueprint and HubSpot. Participation in workshops and webinars for ongoing learning.",
      },
      network_strength_industry_recognition: {
        score: 9,
        details:
          "Connected with senior marketers and thought leaders. Active participation in industry groups and webinars.",
      },
    },
  },
]

// Function to process candidate data into a format suitable for the dashboard
export function processCandidateData(candidates: Candidate[]) {
  return candidates.map((candidate, index) => {
    // Calculate LinkedIn score (normalized to 0-10 scale)
    const linkedinScore = candidate.analysis.overall_fit.score / 10

    // Calculate Resume score (average of resume analysis scores or default if not available)
    let resumeScore = 7.5 // Default value
    if (candidate.resume_analysis) {
      const scores = [
        candidate.resume_analysis.formatting_presentation?.score,
        candidate.resume_analysis.work_experience_progression?.score,
        candidate.resume_analysis.core_skills_industry_expertise?.score,
        candidate.resume_analysis.social_media_metrics_performance?.score,
        candidate.resume_analysis.content_creation_strategy_execution?.score,
        candidate.resume_analysis.certifications_professional_development_resume?.score,
        candidate.resume_analysis.network_strength_industry_recognition?.score,
      ].filter((score) => score !== undefined) as number[]

      if (scores.length > 0) {
        // Normalize to 0-10 scale if needed
        const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length
        resumeScore = avgScore > 10 ? avgScore / 10 : avgScore
      }
    }

    // Calculate AI match score (average of LinkedIn and Resume scores)
    const aiMatch = (linkedinScore + resumeScore) / 2

    // Extract skills from analysis
    const skills = ["Content Creation", "Social Media Management", "Analytics", "Copywriting"]

    // Determine status based on scores
    let status = "In Review"
    let statusColor = "blue"

    if (aiMatch >= 7.0) {
      status = "Shortlisted"
      statusColor = "green"
    } else if (aiMatch < 5.5) {
      status = "Rejected"
      statusColor = "red"
    }

    // Calculate component scores
    const creativityScore = resumeScore * 1.1
    const technicalSkills = resumeScore * 0.95
    const communicationSkills = linkedinScore * 1.1
    const analyticalSkills = linkedinScore * 0.9
    const interviewScore = (creativityScore + technicalSkills) / 2

    return {
      id: `ID${candidate.id}`,
      respondentId: `RES${candidate.id}`,
      submittedAt: new Date().toISOString(),
      name: candidate.name,
      email: candidate.email || `candidate${candidate.id}@example.com`,
      phone: candidate.phone,
      resumeUrl: candidate.resume_url,
      linkedinProfile: candidate.linkedin_url,
      portfolioUrl: null,
      position: "Social Media Content Creator",
      resumeScore,
      linkedinScore,
      experience: "3 years",
      aiMatch,
      interviewScore,
      status,
      statusColor,
      skills,
      education: "Bachelor's in Marketing",
      location: "India",
      availability: Math.random() > 0.5 ? "Immediate" : "2 weeks",
      expectedSalary: `₹${Math.floor(Math.random() * 20000) + 40000}/month`,
      cultureFit: Math.random() * 2 + 7,
      communicationSkills,
      creativityScore,
      analyticalSkills,
      technicalSkills,
      audioUrl: "/demo-interview.mp3",
      linkedinAnalysis: JSON.stringify(candidate.analysis),
      resumeAnalysis: candidate.resume_analysis ? JSON.stringify(candidate.resume_analysis) : "",
    }
  })
}

// Export processed candidate data ready for the dashboard
export const processedCandidates = processCandidateData(rawCandidates)

