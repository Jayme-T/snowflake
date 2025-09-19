// @flow
import * as d3 from 'd3'

export type TrackId = 'COMMUNICATION' | 'CUSTOMER ADVOCACY' | 'ACCOUNT PARTNERSHIP' | 'DELIVERABLES' |
  'TROUBLESHOOTING' | 'INTEGRATION EXPERTISE' | 'DATA ANALYTICS' | 'PLATFORM AND PRODUCT KNOWLEDGE' |
  'COLLABORATION' | 'MENTORSHIP' | 'CROSS-FUNCTIONAL INFLUENCE' | 'PROJECT LEADERSHIP' |
  'SOLUTION DESIGN' | 'TECHNICAL STRATEGY' | 'SCOPING & ESTIMATION' | 'BEST PRACTICE ADVOCACY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'COMMUNICATION': Milestone,
  'CUSTOMER ADVOCACY': Milestone,
  'ACCOUNT PARTNERSHIP': Milestone,
  'DELIVERABLES': Milestone,
  'TROUBLESHOOTING': Milestone,
  'INTEGRATION EXPERTISE': Milestone,
  'DATA ANALYTICS': Milestone,
  'PLATFORM AND PRODUCT KNOWLEDGE': Milestone,
  'COLLABORATION': Milestone,
  'MENTORSHIP': Milestone,
  'CROSS-FUNCTIONAL INFLUENCE': Milestone,
  'PROJECT LEADERSHIP': Milestone,
  'SOLUTION DESIGN': Milestone,
  'TECHNICAL STRATEGY': Milestone,
  'SCOPING & ESTIMATION': Milestone,
  'BEST PRACTICE ADVOCACY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.0',
  '3.75': '1.1',
  '7.5': '1.2',
  '11': '1.3',
  '14.5': '1.4',
  '18': '1.5',
  '21': '1.6',
  '25': '1.7',
  '28.5': '1.8',
  '33.75': '1.9',
  '37.5': '2.1',
  '41.24': '2.2',
  '45': '2.3',
  '48.75': '2.4',
  '52': '2.5',
  '67.5': '3.1',
  '71.25': '3.2',
  '75': '3.3',
  '78.75': '3.4',
  '82.5': '3.5',
  '101.25': '4.1',
  '108': '4.3',
  '116.25': '4.5',
  '123.75': '4.7',
  '131.25': '4.9',
  '135':'5'
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'COMMUNICATION': Track,
  'CUSTOMER ADVOCACY': Track,
  'ACCOUNT PARTNERSHIP': Track,
  'DELIVERABLES': Track,
  'TROUBLESHOOTING': Track,
  'INTEGRATION EXPERTISE': Track,
  'DATA ANALYTICS': Track,
  'PLATFORM AND PRODUCT KNOWLEDGE': Track,
  'COLLABORATION': Track,
  'MENTORSHIP': Track,
  'CROSS-FUNCTIONAL INFLUENCE': Track,
  'PROJECT LEADERSHIP': Track,
  'SOLUTION DESIGN': Track,
  'TECHNICAL STRATEGY': Track,
  'SCOPING & ESTIMATION': Track,
  'BEST PRACTICE ADVOCACY': Track,

|}

export const tracks: Tracks = {
  "COMMUNICATION": {
    "displayName": "COMMUNICATION",
    "category": "A",
    "description": "Articulates complex technical concepts and project updates clearly and concisely to diverse audiences, from technical teams to non-technical stakeholders.",
    "milestones": [
      {
        "summary": "Communicates basic project statuses and technical findings to internal teams and primary customer contacts.",
        "signals": [
          "Provides clear, brief project status updates in team meetings.",
          "Writes organized internal emails summarizing technical issues.",
          "Asks clarifying questions to understand customer needs.",
          "Listens attentively and takes notes during calls."
        ],
        "examples": [
          "Shared a JIRA ticket update with the team.",
          "Sent an internal email summarizing a bug identified during a sync call.",
          "Confirmed understanding of a customer's request by restating it in a follow-up email."
        ]
      },
      {
        "summary": "Effectively communicates project progress and technical details to key customer stakeholders and manages their expectations.",
        "signals": [
          "Leads portions of customer calls, articulating project milestones.",
          "Drafts concise, professional emails for external communication.",
          "Presents technical findings and recommendations clearly to both internal and external audiences.",
          "Manages customer expectations around timelines and scope."
        ],
        "examples": [
          "Delivered a slide deck on project progress to a customer's steering committee.",
          "Wrote a formal email to a customer's project manager outlining a solution.",
          "Effectively navigated a difficult conversation about a project delay, explaining the reasoning calmly."
        ]
      },
      {
        "summary": "Acts as a primary point of contact, influencing customer's technical and business decisions through expert communication.",
        "signals": [
          "Consistently and proactively provides updates, anticipating customer needs.",
          "Facilitates productive discussions between highly technical and non-technical parties.",
          "Presents complex solution designs in an easy-to-understand manner.",
          "Navigates and de-escalates tense situations with composure."
        ],
        "examples": [
          "Conducted a whiteboard session to visually explain a complex integration flow.",
          "Successfully de-escalated a customer who was upset about an issue, guiding them to a productive path forward.",
          "Wrote a summary of a technical deep-dive for executive stakeholders."
        ]
      },
      {
        "summary": "Is a master communicator who shapes a team's communication standards and handles high-stakes conversations.",
        "signals": [
          "Coaches team members on communication best practices.",
          "Creates and implements templates for external communications to ensure consistency.",
          "Leads complex, multi-party conversations with executive-level stakeholders.",
          "Can successfully communicate bad news in a way that maintains trust and partnership."
        ],
        "examples": [
          "Developed and presented a standardized format for project update emails.",
          "Led an emergency bridge call to communicate a critical production issue, providing clear direction and updates.",
          "Successfully navigated a conversation about a major scope change with a customer's C-suite."
        ]
      },
      {
        "summary": "Acts as a company-wide resource on communication, establishing cross-organizational standards and fostering an expert culture of communication.",
        "signals": [
          "Defines and advocates for communication principles that are adopted across the organization.",
          "Mentors junior employees on professional communication in customer-facing roles.",
          "Is trusted to handle the most difficult, high-stakes communication challenges."
        ],
        "examples": [
          "Created a new communication framework for client-facing teams.",
          "Authored a blog post or presentation on effective communication for professional services.",
          "Spoke at a company-wide meeting about best practices for external communication."
        ]
      }
    ]
  },
  "CUSTOMER ADVOCACY": {
    "displayName": "CUSTOMER ADVOCACY",
    "category": "A",
    "description": "Champions the customer's needs and business objectives within the organization, ensuring their voice is heard and their best interests are represented.",
    "milestones": [
      {
        "summary": "Represents the customer's stated needs and provides feedback to internal teams.",
        "signals": [
          "Clearly documents and relays customer requirements and feedback.",
          "Articulates why a specific feature is important to the customer.",
          "Identifies and escalates customer pain points to the appropriate internal team."
        ],
        "examples": [
          "Shared a customer's specific use case for a feature request with the product team.",
          "Flagged a support ticket as a high priority based on a customer's business impact.",
          "In a team meeting, spoke up about a customer's concern regarding a recent bug."
        ]
      },
      {
        "summary": "Proactively identifies customer's unstated needs and acts as their champion within the company.",
        "signals": [
          "Identifies underlying business problems based on customer requests.",
          "Presents the customer's perspective in internal discussions, influencing a decision.",
          "Goes above and beyond to find a solution to a customer problem, even if it's outside the standard process."
        ],
        "examples": [
          "Proposed a feature to the product team after noticing a recurring customer need.",
          "Secured a developer's time for a critical bug fix by articulating its impact on the customer's business.",
          "Found a workaround for a customer's issue when a direct fix was not immediately available."
        ]
      },
      {
        "summary": "Develops deep relationships with customers, becoming their trusted advisor and internal advocate.",
        "signals": [
          "Acts as the first point of contact for customer escalations.",
          "Leads internal meetings to align teams on a customer's strategic goals.",
          "Successfully negotiates trade-offs that benefit both the customer and the company."
        ],
        "examples": [
          "Organized a cross-functional meeting to discuss a customer's long-term business strategy.",
          "Successfully negotiated a scope change that aligned with a customer's business goals and our technical capabilities.",
          "Received positive feedback from a customer about being a trusted partner."
        ]
      },
      {
        "summary": "Is a company-wide advocate for the customer, influencing product and strategic roadmaps based on customer feedback.",
        "signals": [
          "Identifies common pain points across multiple customers and advocates for a systemic solution.",
          "Shares detailed customer stories with senior leadership to inform decision-making.",
          "Acts as a formal mentor or informal coach on customer advocacy for others."
        ],
        "examples": [
          "Led a presentation on customer feedback to the executive team.",
          "Authored a document outlining a new product feature based on data from customer support tickets.",
          "Influenced the roadmap of a major product by highlighting a key customer need."
        ]
      },
      {
        "summary": "Sets the standard for customer advocacy within the organization, fostering a culture of prioritizing customer needs.",
        "signals": [
          "Defines a new process for gathering and acting on customer feedback.",
          "Is the go-to person for high-stakes customer relationships.",
          "Designs and leads training sessions on customer empathy and advocacy."
        ],
        "examples": [
          "Created a new process for quarterly business reviews with strategic customers.",
          "Successfully re-engaged a customer who was on the verge of churn.",
          "Developed a toolkit for junior team members to help them advocate for their customers."
        ]
      }
    ]
  },
  "ACCOUNT PARTNERSHIP": {
    "displayName": "ACCOUNT PARTNERSHIP",
    "category": "A",
    "description": "Builds and maintains strong, professional relationships with customer stakeholders to ensure project success and long-term business value.",
    "milestones": [
      {
        "summary": "Builds trust and rapport with day-to-day customer contacts.",
        "signals": [
          "Responds to customer inquiries promptly and professionally.",
          "Consistently delivers on small commitments.",
          "Learns and uses customer's names, roles, and internal structure."
        ],
        "examples": [
          "Sent a professional introduction email to a new team member on the customer side.",
          "Proactively checked in with a customer's project manager to see if they needed help.",
          "Followed up on a request from a customer within the agreed-upon timeframe."
        ]
      },
      {
        "summary": "Develops a deep understanding of the customer's business and builds relationships with key stakeholders beyond day-to-day contacts.",
        "signals": [
          "Can speak confidently about the customer's business goals and challenges.",
          "Identifies new opportunities for partnership or expansion within the account.",
          "Proactively provides insights that are relevant to the customer's business."
        ],
        "examples": [
          "Shared a blog post or article with a customer that was relevant to their industry.",
          "Identified an opportunity to introduce a new product line to a customer based on their business needs.",
          "Pushed to get a formal introduction to a key technical stakeholder on the customer side."
        ]
      },
      {
        "summary": "Is a trusted partner to the customer's leadership, influencing their strategy and identifying long-term growth opportunities.",
        "signals": [
          "Serves as a formal or informal mentor to team members on the customer side.",
          "Successfully navigates challenging conversations about business value, budget, or contract renewal.",
          "Identifies and nurtures relationships with new stakeholders as a customer's team evolves."
        ],
        "examples": [
          "Presented a proposal for a new phase of a project that tied directly to the customer's strategic goals.",
          "Successfully renewed a contract by demonstrating the business value of our partnership.",
          "Acted as a resource for the customer's team on a technical challenge that was not in scope."
        ]
      },
      {
        "summary": "Develops a strategic partnership with the customer's executive leadership, helping them achieve their long-term business goals.",
        "signals": [
          "Acts as a strategic thought partner for the customer, anticipating their needs.",
          "Negotiates and closes complex deals by highlighting long-term value.",
          "Is a public champion of the customer's success within the industry."
        ],
        "examples": [
          "Co-authored a case study with the customer to be presented at an industry conference.",
          "Successfully sold a complex, multi-year deal by demonstrating how our solution would drive significant revenue growth.",
          "Became a trusted advisor to the customer's CTO, providing insights that helped them meet their goals."
        ]
      },
      {
        "summary": "Is a company-wide leader in building strategic partnerships, establishing best practices that are adopted across the organization.",
        "signals": [
          "Defines and advocates for a new approach to account management.",
          "Is a sought-after resource for a sales team on how to manage key accounts.",
          "Successfully negotiates and closes a high-stakes, multi-million dollar deal."
        ],
        "examples": [
          "Developed a new process for identifying and prioritizing high-value accounts.",
          "Led a training session for the entire professional services team on how to build a strategic partnership.",
          "Successfully closed a deal with a top-tier client, setting a new standard for a company."
        ]
      }
    ]
  },
  "DELIVERABLES": {
    "displayName": "DELIVERABLES",
    "category": "A",
    "description": "Creates high-quality, professional, and accurate documentation and artifacts for internal and external use, ensuring clarity and precision.",
    "milestones": [
      {
        "summary": "Produces basic, accurate documentation and project artifacts for internal use.",
        "signals": [
          "Maintains accurate meeting notes and shares them with the team.",
          "Creates clear JIRA tickets with all necessary information.",
          "Contributes to internal wikis and knowledge bases."
        ],
        "examples": [
          "Wrote detailed notes from a customer call that included action items.",
          "Created a JIRA ticket with a clear description and all necessary screenshots.",
          "Updated an internal wiki page with information about a new feature."
        ]
      },
      {
        "summary": "Creates professional, client-facing documentation and artifacts that are accurate and well-organized.",
        "signals": [
          "Produces well-written, professional project plans or status reports.",
          "Creates clear and concise email updates for customers.",
          "Documents technical solutions in a way that is easy for customers to understand."
        ],
        "examples": [
          "Wrote a polished project plan for a new implementation.",
          "Created a comprehensive status report that included progress, risks, and action items.",
          "Documented a technical solution in a clear way for a customer's developer team."
        ]
      },
      {
        "summary": "Develops a high standard for client-facing documentation and project artifacts, ensuring they are accurate, well-designed, and easy to use.",
        "signals": [
          "Creates comprehensive, well-structured guides or playbooks for customers.",
          "Produces templates and standards for the team to use for documentation.",
          "Successfully anticipates customer questions and includes the answers in the documentation."
        ],
        "examples": [
          "Authored a comprehensive technical guide for a customer's developer team.",
          "Created a new template for project plans that the whole team can use.",
          "Developed a visual diagram that simplified a complex technical flow for a customer."
        ]
      },
      {
        "summary": "Is an expert in creating high-quality deliverables, setting a new bar for the team and company.",
        "signals": [
          "Creates and implements a new standard for documentation that is adopted company-wide.",
          "Successfully creates and delivers a high-stakes, client-facing presentation.",
          "Receives positive feedback from customers specifically about the quality of the documentation."
        ],
        "examples": [
          "Developed a new standard for SOW (Statement of Work) documents that is adopted across the company.",
          "Created and delivered a presentation that led to a new contract.",
          "Authored a series of documents that were published on the company's website as a resource for customers."
        ]
      },
      {
        "summary": "Is a company-wide leader in the creation of high-quality deliverables, defining and leading a culture of professional documentation.",
        "signals": [
          "Is a sought-after resource for other teams on how to create high-quality deliverables.",
          "Designs and leads training sessions on professional documentation.",
          "Is asked to review and approve all high-stakes deliverables for the company."
        ],
        "examples": [
          "Created a new process for reviewing and approving all client-facing deliverables.",
          "Led a training session for the professional services team on how to create compelling presentations.",
          "Authored a blog post on best practices for professional documentation."
        ]
      }
    ]
  },
  "TROUBLESHOOTING": {
    "displayName": "TROUBLESHOOTING",
    "category": "B",
    "description": "Systematically identifies, diagnoses, and resolves technical issues in a timely and efficient manner.",
    "milestones": [
      {
        "summary": "Follows a defined process to troubleshoot and resolve common technical issues.",
        "signals": [
          "Uses clear steps to reproduce a reported issue.",
          "Leverages internal tools and documentation to find answers.",
          "Asks for help when they are stuck on a problem."
        ],
        "examples": [
          "Followed a runbook to troubleshoot a failed API call.",
          "Used internal logging tools to identify the cause of a bug.",
          "Escalated a complex issue to an engineering team with all the necessary information."
        ]
      },
      {
        "summary": "Diagnoses and solves complex technical issues with minimal guidance, documenting the solution for future use.",
        "signals": [
          "Can isolate the root cause of an issue in a complex system.",
          "Develops novel solutions to a new problem.",
          "Documents the steps to solve a problem so others can do it in the future."
        ],
        "examples": [
          "Used network logs to identify a subtle bug in an integration.",
          "Figured out a workaround for a customer's issue when a direct fix was not possible.",
          "Created a new troubleshooting guide for a recurring issue."
        ]
      },
      {
        "summary": "Anticipates and proactively prevents technical issues, setting a new standard for proactive problem-solving.",
        "signals": [
          "Identifies potential issues before they become a problem.",
          "Develops new tools or processes to prevent future issues.",
          "Mentors others on how to troubleshoot and solve problems."
        ],
        "examples": [
          "Identified a potential performance issue and proactively addressed it before it affected a customer.",
          "Wrote a script to automate a common troubleshooting task.",
          "Led a brown bag session on how to use a new debugging tool."
        ]
      },
      {
        "summary": "Is a go-to expert for high-stakes technical issues, solving the most complex problems with composure.",
        "signals": [
          "Can diagnose and solve a critical production issue under pressure.",
          "Is a sought-after resource for other teams when they are stuck on a difficult problem.",
          "Successfully manages communication and expectations during a production incident."
        ],
        "examples": [
          "Led an emergency bridge call to diagnose and fix a major outage.",
          "Provided a detailed post-mortem analysis of a critical incident.",
          "Successfully managed a customer's expectations during a major outage, providing clear updates and a path to resolution."
        ]
      },
      {
        "summary": "Sets the standard for troubleshooting excellence, defining a new approach to problem-solving and incident management.",
        "signals": [
          "Creates and implements a new process for incident management that is adopted company-wide.",
          "Designs and leads training sessions on advanced troubleshooting techniques.",
          "Is a public champion of a new approach to problem-solving."
        ],
        "examples": [
          "Created a new runbook for handling major incidents.",
          "Led a training session for the entire professional services team on how to use a new debugging tool.",
          "Authored a blog post on best practices for incident management."
        ]
      }
    ]
  },
  "INTEGRATION EXPERTISE": {
    "displayName": "INTEGRATION EXPERTISE",
    "category": "B",
    "description": "Demonstrates deep knowledge of platform integrations and APIs, enabling effective solution design and implementation for customers.",
    "milestones": [
      {
        "summary": "Understands and applies a basic knowledge of APIs and integration points.",
        "signals": [
          "Can use an API client to send simple requests.",
          "Understands the basics of API documentation.",
          "Can explain how two systems are connected at a high level."
        ],
        "examples": [
          "Used Postman to send a test API request to a customer's endpoint.",
          "Read and understood an API's documentation to find a specific endpoint.",
          "Explained how our platform connects to a customer's ERP system."
        ]
      },
      {
        "summary": "Designs and implements moderately complex integrations, troubleshooting issues and providing guidance to customers.",
        "signals": [
          "Can design and document a complete integration flow.",
          "Troubleshoots integration issues with minimal guidance.",
          "Provides clear, professional guidance to a customer's developer team."
        ],
        "examples": [
          "Created a flow diagram of a new integration between our platform and a customer's CRM.",
          "Used logging tools to find the root cause of a failed API call.",
          "Provided a detailed response to a customer's developer team with a solution to a bug."
        ]
      },
      {
        "summary": "Is a go-to expert for complex integrations, solving the most difficult problems and providing strategic guidance.",
        "signals": [
          "Successfully designs and implements a complex, multi-system integration.",
          "Can troubleshoot and resolve issues in a high-stakes production environment.",
          "Acts as a strategic partner to a customer's technical leadership, providing guidance on their long-term integration strategy."
        ],
        "examples": [
          "Designed a complex integration between our platform and a customer's legacy system.",
          "Successfully led an emergency bridge call to fix a production integration issue.",
          "Provided a long-term strategy for a customer to migrate from one integration to another."
        ]
      },
      {
        "summary": "Is a company-wide leader in integration expertise, setting new standards for the team and providing strategic guidance to senior leadership.",
        "signals": [
          "Identifies and advocates for new integration partners.",
          "Creates new tools or processes to improve the team's ability to implement integrations.",
          "Acts as a formal mentor or informal coach on integration best practices for others."
        ],
        "examples": [
          "Wrote a new guide for integrating with a popular e-commerce platform.",
          "Developed a new process for reviewing and approving all integration designs.",
          "Authored a blog post on best practices for designing and implementing APIs."
        ]
      },
      {
        "summary": "Is a recognized industry expert in integration and APIs, influencing the company's long-term product and technical strategy.",
        "signals": [
          "Leads the design and implementation of a new API.",
          "Is a sought-after resource for a sales team on how to pitch complex integrations.",
          "Presents at industry conferences on integration best practices."
        ],
        "examples": [
          "Led a project to design and build a new, highly-scalable API.",
          "Successfully pitched a complex integration to a top-tier client, securing a new contract.",
          "Spoke at an industry conference on best practices for designing and implementing APIs."
        ]
      }
    ]
  },
  "DATA ANALYTICS": {
    "displayName": "DATA ANALYTICS",
    "category": "B",
    "description": "Analyzes and interprets data to drive insights, measure project success, and provide value to customers.",
    "milestones": [
      {
        "summary": "Applies a basic understanding of data to support project success.",
        "signals": [
          "Can pull and analyze data from internal systems with guidance.",
          "Can create a basic report to track a project's progress.",
          "Understands and explains the meaning of key metrics."
        ],
        "examples": [
          "Used a SQL query to pull data for a project report.",
          "Created a basic dashboard to track a project's key metrics.",
          "Explained the meaning of a key performance indicator (KPI) to a customer."
        ]
      },
      {
        "summary": "Leverages data to proactively identify trends and insights, using them to inform decisions.",
        "signals": [
          "Can independently analyze data to find trends and insights.",
          "Creates and presents a clear, data-driven report to a customer.",
          "Uses data to anticipate and proactively address a problem."
        ],
        "examples": [
          "Used data to identify a trend in customer behavior that could impact a project.",
          "Created a report for a customer that used data to highlight a key business opportunity.",
          "Used data to proactively identify a potential issue with a new feature."
        ]
      },
      {
        "summary": "Acts as a strategic advisor, using data to help customers achieve their business goals.",
        "signals": [
          "Can tell a compelling story with data that influences a customer's business strategy.",
          "Designs and implements complex data analysis to solve a customer's business problem.",
          "Mentors others on how to use data to drive insights."
        ],
        "examples": [
          "Created a data-driven presentation that helped a customer achieve their business goals.",
          "Used data to help a customer understand the impact of a recent campaign.",
          "Led a brown bag session on how to use a new data visualization tool."
        ]
      },
      {
        "summary": "Is a company-wide leader in data analytics, setting a new standard for the team and providing strategic guidance to senior leadership.",
        "signals": [
          "Identifies and advocates for new data analysis tools or processes.",
          "Creates a new standard for data analysis that is adopted company-wide.",
          "Is a sought-after resource for other teams on how to use data to drive insights."
        ],
        "examples": [
          "Authored a new guide for data analysis that is adopted across the company.",
          "Led a project to implement a new data visualization tool.",
          "Provided a detailed data-driven analysis to the executive team that informed a new product strategy."
        ]
      },
      {
        "summary": "Is a recognized industry expert in data analytics, influencing the company's long-term product and technical strategy.",
        "signals": [
          "Leads the design and implementation of a new data platform.",
          "Is a sought-after resource for a sales team on how to pitch data-driven solutions.",
          "Presents at industry conferences on data analytics best practices."
        ],
        "examples": [
          "Led a project to design and build a new, highly-scalable data platform.",
          "Successfully pitched a data-driven solution to a top-tier client, securing a new contract.",
          "Spoke at an industry conference on best practices for data analytics."
        ]
      }
    ]
  },
  "PLATFORM AND PRODUCT KNOWLEDGE": {
    "displayName": "PLATFORM AND PRODUCT KNOWLEDGE",
    "category": "B",
    "description": "Develops a comprehensive understanding of the company's platform and products, acting as a subject matter expert for customers.",
    "milestones": [
      {
        "summary": "Understands and articulates the basic features and functions of the platform and products.",
        "signals": [
          "Can explain what the product does and how it helps customers.",
          "Can answer basic questions about the platform without needing to look up the answer.",
          "Knows where to find information about a new feature."
        ],
        "examples": [
          "Provided a basic overview of the product to a new customer.",
          "Answered a customer's question about a specific feature without needing to consult documentation.",
          "Found and shared a new feature's documentation with a customer."
        ]
      },
      {
        "summary": "Demonstrates a deep understanding of the platform and products, providing detailed guidance to customers.",
        "signals": [
          "Can explain the technical architecture of the platform.",
          "Can articulate the benefits of a new feature to a customer.",
          "Provides detailed guidance on how to use a complex feature."
        ],
        "examples": [
          "Led a technical deep dive on the platform's architecture for a customer's developer team.",
          "Successfully articulated the business value of a new feature to a customer.",
          "Created a step-by-step guide on how to use a complex feature."
        ]
      },
      {
        "summary": "Is a go-to expert on the platform and products, solving the most difficult problems and providing strategic guidance.",
        "signals": [
          "Can troubleshoot and resolve issues that require a deep understanding of the platform's architecture.",
          "Acts as a strategic partner to a customer's technical leadership, providing guidance on their long-term product strategy.",
          "Mentors others on how to develop a deep understanding of the platform and products."
        ],
        "examples": [
          "Successfully diagnosed and fixed a complex bug that required a deep understanding of the platform.",
          "Provided a long-term product strategy for a customer to migrate from one product to another.",
          "Led a brown bag session on how to use a new product."
        ]
      },
      {
        "summary": "Is a company-wide leader in platform and product knowledge, setting a new standard for the team and providing strategic guidance to senior leadership.",
        "signals": [
          "Identifies and advocates for new product features based on customer feedback.",
          "Creates new tools or processes to improve the team's ability to learn about the platform and products.",
          "Is a sought-after resource for other teams on how to use the platform and products."
        ],
        "examples": [
          "Authored a new guide for a new product that is adopted across the company.",
          "Led a project to implement a new knowledge base.",
          "Provided a detailed analysis to the executive team that informed a new product strategy."
        ]
      },
      {
        "summary": "Is a recognized industry expert in the platform and products, influencing the company's long-term product and technical strategy.",
        "signals": [
          "Leads the design and implementation of a new product.",
          "Is a sought-after resource for a sales team on how to pitch complex product solutions.",
          "Presents at industry conferences on product best practices."
        ],
        "examples": [
          "Led a project to design and build a new, highly-scalable product.",
          "Successfully pitched a complex product solution to a top-tier client, securing a new contract.",
          "Spoke at an industry conference on best practices for product design."
        ]
      }
    ]
  },
  "COLLABORATION": {
    "displayName": "COLLABORATION",
    "category": "C",
    "description": "Works effectively with cross-functional teams and customers to achieve a shared goal.",
    "milestones": [
      {
        "summary": "Works effectively within a team, contributing to a shared goal.",
        "signals": [
          "Shares information and ideas with the team.",
          "Asks for help when they are stuck on a problem.",
          "Contributes to team meetings and discussions."
        ],
        "examples": [
          "Shared a new idea with the team in a meeting.",
          "Asked for help from a team member to solve a problem.",
          "Contributed to a team meeting by providing a project update."
        ]
      },
      {
        "summary": "Works effectively with a cross-functional team, contributing to a shared goal.",
        "signals": [
          "Can work effectively with different teams, such as engineering, product, and sales.",
          "Can articulate a customer's needs to a cross-functional team.",
          "Contributes to a cross-functional meeting by providing a project update."
        ],
        "examples": [
          "Worked with the engineering team to prioritize a bug fix.",
          "Shared a customer's specific use case for a feature request with the product team.",
          "Provided a project update to a cross-functional team in a meeting."
        ]
      },
      {
        "summary": "Is a go-to resource for cross-functional collaboration, solving the most difficult problems and providing strategic guidance.",
        "signals": [
          "Successfully leads a complex, multi-team project.",
          "Can mediate and resolve conflicts between different teams.",
          "Acts as a strategic partner to different teams, providing guidance on how to work together effectively."
        ],
        "examples": [
          "Led a project that required a collaboration between multiple teams.",
          "Successfully mediated a conflict between the engineering and product teams.",
          "Provided a long-term strategy for a customer to migrate from one product to another."
        ]
      },
      {
        "summary": "Is a company-wide leader in collaboration, setting a new standard for the team and providing strategic guidance to senior leadership.",
        "signals": [
          "Identifies and advocates for new collaboration tools or processes.",
          "Creates a new standard for collaboration that is adopted company-wide.",
          "Is a sought-after resource for other teams on how to work together effectively."
        ],
        "examples": [
          "Authored a new guide for collaboration that is adopted across the company.",
          "Led a project to implement a new collaboration tool.",
          "Provided a detailed analysis to the executive team that informed a new product strategy."
        ]
      },
      {
        "summary": "Is a recognized industry expert in collaboration, influencing the company's long-term product and technical strategy.",
        "signals": [
          "Leads the design and implementation of a new collaboration tool.",
          "Is a sought-after resource for a sales team on how to pitch collaborative solutions.",
          "Presents at industry conferences on collaboration best practices."
        ],
        "examples": [
          "Led a project to design and build a new, highly-scalable collaboration tool.",
          "Successfully pitched a complex collaborative solution to a top-tier client, securing a new contract.",
          "Spoke at an industry conference on best practices for collaboration."
        ]
      }
    ]
  },
  "MENTORSHIP": {
    "displayName": "MENTORSHIP",
    "category": "C",
    "description": "Guides and supports the professional growth of colleagues, sharing knowledge and expertise to help others succeed.",
    "milestones": [
      {
        "summary": "Shares knowledge and expertise with colleagues, providing support and guidance.",
        "signals": [
          "Answers a colleague's questions about a new feature or process.",
          "Shares a new idea or a best practice with the team.",
          "Provides constructive feedback to a colleague on their work."
        ],
        "examples": [
          "Explained how to use a new tool to a colleague.",
          "Shared a new best practice for a customer integration with the team.",
          "Provided constructive feedback to a colleague on a project plan."
        ]
      },
      {
        "summary": "Acts as an informal mentor to colleagues, guiding their professional growth and development.",
        "signals": [
          "Can identify a colleague's strengths and weaknesses and provide guidance on how to improve.",
          "Provides a colleague with a challenging project to help them grow their skills.",
          "Provides a colleague with a clear path to success."
        ],
        "examples": [
          "Helped a colleague identify their career goals and provided a plan to achieve them.",
          "Provided a colleague with a challenging project that helped them grow their skills.",
          "Provided a colleague with a clear path to success."
        ]
      },
      {
        "summary": "Is a formal mentor, guiding the professional growth and development of a junior employee.",
        "signals": [
          "Can successfully guide a junior employee through a complex project.",
          "Provides a junior employee with a clear path to success.",
          "Provides a junior employee with a clear understanding of the company's culture and values."
        ],
        "examples": [
          "Successfully guided a junior employee through their first customer integration.",
          "Provided a junior employee with a clear path to success.",
          "Provided a junior employee with a clear understanding of the company's culture and values."
        ]
      },
      {
        "summary": "Is a company-wide leader in mentorship, setting a new standard for the team and providing strategic guidance to senior leadership.",
        "signals": [
          "Identifies and advocates for new mentorship programs or processes.",
          "Creates a new standard for mentorship that is adopted company-wide.",
          "Is a sought-after resource for other teams on how to mentor their employees."
        ],
        "examples": [
          "Authored a new guide for mentorship that is adopted across the company.",
          "Led a project to implement a new mentorship program.",
          "Provided a detailed analysis to the executive team that informed a new mentorship strategy."
        ]
      },
      {
        "summary": "Is a recognized industry expert in mentorship, influencing the company's long-term talent strategy.",
        "signals": [
          "Leads the design and implementation of a new mentorship program.",
          "Is a sought-after resource for a sales team on how to pitch mentorship programs.",
          "Presents at industry conferences on mentorship best practices."
        ],
        "examples": [
          "Led a project to design and build a new, highly-scalable mentorship program.",
          "Successfully pitched a mentorship program to a top-tier client, securing a new contract.",
          "Spoke at an industry conference on best practices for mentorship."
        ]
      }
    ]
  },
  "CROSS-FUNCTIONAL INFLUENCE": {
    "displayName": "CROSS-FUNCTIONAL INFLUENCE",
    "category": "C",
    "description": "Drives change and alignment across different teams and departments, guiding outcomes without direct authority.",
    "milestones": [
      {
        "summary": "Contributes to cross-functional discussions and provides relevant information.",
        "signals": [
          "Shares relevant insights from a customer call with the product or engineering team.",
          "Asks clarifying questions to understand the goals of other teams.",
          "Successfully hands off a task to another team with all the necessary context."
        ],
        "examples": [
          "Shared a customer's specific use case with the product team.",
          "Asked the engineering team for a clear timeline on a bug fix.",
          "Handoff a task to another team with all the necessary context."
        ]
      },
      {
        "summary": "Influences decisions and drives alignment in cross-functional settings.",
        "signals": [
          "Successfully advocates for a customer's needs in an internal meeting, leading to a change in priority.",
          "Proposes a new solution that requires collaboration between multiple teams.",
          "Can articulate the business impact of a technical issue to a non-technical audience."
        ],
        "examples": [
          "Successfully advocated for a customer's needs in an internal meeting, leading to a change in priority.",
          "Proposed a new solution that required a collaboration between the engineering and product teams.",
          "Articulated the business impact of a technical issue to a non-technical audience."
        ]
      },
      {
        "summary": "Is a trusted partner to other teams, influencing their roadmaps and strategic goals.",
        "signals": [
          "Is a go-to resource for other teams when they need to understand a customer's needs.",
          "Successfully influences the roadmap of another team, leading to a more positive outcome for the customer.",
          "Can mediate and resolve conflicts between different teams."
        ],
        "examples": [
          "Successfully influenced the roadmap of the product team, leading to a new feature that helped a customer.",
          "Mediated a conflict between the engineering and product teams.",
          "Provided a long-term strategy for a customer to migrate from one product to another."
        ]
      },
      {
        "summary": "Drives alignment across the company, influencing a company's strategic roadmap.",
        "signals": [
          "Successfully leads a complex, multi-team project.",
          "Can successfully mediate and resolve conflicts between different teams.",
          "Acts as a strategic partner to different teams, providing guidance on how to work together effectively."
        ],
        "examples": [
          "Led a project that required a collaboration between multiple teams.",
          "Successfully mediated a conflict between the engineering and product teams.",
          "Provided a long-term strategy for a customer to migrate from one product to another."
        ]
      },
      {
        "summary": "Is a company-wide leader in cross-functional influence, establishing a new standard for collaboration.",
        "signals": [
          "Creates and implements a new process for cross-functional collaboration that is adopted company-wide.",
          "Designs and leads training sessions on how to influence other teams.",
          "Is asked to review and approve all high-stakes deliverables for the company."
        ],
        "examples": [
          "Authored a new guide for cross-functional collaboration that is adopted across the company.",
          "Led a training session for the professional services team on how to influence other teams.",
          "Successfully negotiated and closed a high-stakes, multi-million dollar deal."
        ]
      }
    ]
  },
  "PROJECT LEADERSHIP": {
    "displayName": "PROJECT LEADERSHIP",
    "category": "C",
    "description": "Manages and guides a project from inception to completion, ensuring it is delivered on time, within scope, and on budget.",
    "milestones": [
      {
        "summary": "Manages a small, low-risk project from start to finish.",
        "signals": [
          "Creates and maintains a project plan.",
          "Communicates project status to the team and customer.",
          "Identifies and flags risks and issues."
        ],
        "examples": [
          "Created a project plan for a small implementation.",
          "Provided a project update to a customer in a meeting.",
          "Identified a potential risk and flagged it to the team."
        ]
      },
      {
        "summary": "Manages a moderate-risk project, anticipating and mitigating risks and issues.",
        "signals": [
          "Successfully manages a project with multiple dependencies.",
          "Proactively identifies and mitigates risks.",
          "Provides clear, professional project updates to customers."
        ],
        "examples": [
          "Successfully managed a project that required collaboration between multiple teams.",
          "Proactively identified and mitigated a risk that could have delayed the project.",
          "Provided a clear, professional project update to a customer that included progress, risks, and action items."
        ]
      },
      {
        "summary": "Manages a high-stakes, high-risk project, delivering it successfully with minimal guidance.",
        "signals": [
          "Successfully manages a project with a high degree of complexity.",
          "Anticipates and proactively mitigates risks and issues.",
          "Successfully navigates challenging conversations about scope, budget, and timeline."
        ],
        "examples": [
          "Successfully managed a project that required a collaboration between multiple teams.",
          "Anticipated and proactively mitigated a risk that could have delayed the project.",
          "Successfully navigated a challenging conversation about scope, budget, and timeline."
        ]
      },
      {
        "summary": "Is a company-wide leader in project leadership, setting a new standard for the team and providing strategic guidance to senior leadership.",
        "signals": [
          "Identifies and advocates for new project management tools or processes.",
          "Creates a new standard for project management that is adopted company-wide.",
          "Is a sought-after resource for other teams on how to manage their projects."
        ],
        "examples": [
          "Authored a new guide for project management that is adopted across the company.",
          "Led a project to implement a new project management tool.",
          "Provided a detailed analysis to the executive team that informed a new product strategy."
        ]
      },
      {
        "summary": "Is a recognized industry expert in project leadership, influencing the company's long-term product and technical strategy.",
        "signals": [
          "Leads the design and implementation of a new project management tool.",
          "Is a sought-after resource for a sales team on how to pitch project management solutions.",
          "Presents at industry conferences on project management best practices."
        ],
        "examples": [
          "Led a project to design and build a new, highly-scalable project management tool.",
          "Successfully pitched a complex project management solution to a top-tier client, securing a new contract.",
          "Spoke at an industry conference on best practices for project management."
        ]
      }
    ]
  },
  "SOLUTION DESIGN": {
    "displayName": "SOLUTION DESIGN",
    "category": "D",
    "description": "Designs and documents technical solutions that meet customer needs and align with best practices.",
    "milestones": [
      {
        "summary": "Understands and documents a basic solution that meets customer needs.",
        "signals": [
          "Can create a basic flow diagram of a solution.",
          "Can explain a solution to a customer in a clear way.",
          "Understands the basics of API documentation."
        ],
        "examples": [
          "Created a basic flow diagram of a solution for a customer.",
          "Explained a solution to a customer in a clear way.",
          "Understood the basics of API documentation to find a specific endpoint."
        ]
      },
      {
        "summary": "Designs a moderately complex solution that meets customer needs and aligns with best practices.",
        "signals": [
          "Can design and document a complete solution flow.",
          "Can troubleshoot and resolve issues in a new solution.",
          "Provides clear, professional guidance to a customer's developer team."
        ],
        "examples": [
          "Created a flow diagram of a new solution for a customer.",
          "Used logging tools to find the root cause of an issue in a new solution.",
          "Provided a detailed response to a customer's developer team with a solution to a bug."
        ]
      },
      {
        "summary": "Is a go-to expert for complex solution design, solving the most difficult problems and providing strategic guidance.",
        "signals": [
          "Successfully designs and implements a complex, multi-system solution.",
          "Can troubleshoot and resolve issues in a high-stakes production environment.",
          "Acts as a strategic partner to a customer's technical leadership, providing guidance on their long-term solution strategy."
        ],
        "examples": [
          "Designed a complex solution between our platform and a customer's legacy system.",
          "Successfully led an emergency bridge call to fix a production solution issue.",
          "Provided a long-term strategy for a customer to migrate from one solution to another."
        ]
      },
      {
        "summary": "Is a company-wide leader in solution design, setting a new standard for the team and providing strategic guidance to senior leadership.",
        "signals": [
          "Identifies and advocates for new solution design tools or processes.",
          "Creates a new standard for solution design that is adopted company-wide.",
          "Is a sought-after resource for other teams on how to design their solutions."
        ],
        "examples": [
          "Authored a new guide for solution design that is adopted across the company.",
          "Led a project to implement a new solution design tool.",
          "Provided a detailed analysis to the executive team that informed a new product strategy."
        ]
      },
      {
        "summary": "Is a recognized industry expert in solution design, influencing the company's long-term product and technical strategy.",
        "signals": [
          "Leads the design and implementation of a new solution.",
          "Is a sought-after resource for a sales team on how to pitch complex solutions.",
          "Presents at industry conferences on solution design best practices."
        ],
        "examples": [
          "Led a project to design and build a new, highly-scalable solution.",
          "Successfully pitched a complex solution to a top-tier client, securing a new contract.",
          "Spoke at an industry conference on best practices for solution design."
        ]
      }
    ]
  },
  "TECHNICAL STRATEGY": {
    "displayName": "TECHNICAL STRATEGY",
    "category": "D",
    "description": "Develops a comprehensive technical strategy that aligns with a customer's business goals and a company's product roadmap.",
    "milestones": [
      {
        "summary": "Understands and articulates a basic technical strategy that aligns with a customer's business goals.",
        "signals": [
          "Can explain a basic technical strategy to a customer in a clear way.",
          "Can identify a customer's business goals and align a technical strategy to them.",
          "Understands the basics of API documentation."
        ],
        "examples": [
          "Created a basic technical strategy for a customer that aligned with their business goals.",
          "Explained a technical strategy to a customer in a clear way.",
          "Understood the basics of API documentation to find a specific endpoint."
        ]
      },
      {
        "summary": "Designs a moderately complex technical strategy that aligns with a customer's business goals and a company's product roadmap.",
        "signals": [
          "Can design and document a complete technical strategy.",
          "Can troubleshoot and resolve issues in a new technical strategy.",
          "Provides clear, professional guidance to a customer's developer team."
        ],
        "examples": [
          "Created a flow diagram of a new technical strategy for a customer.",
          "Used logging tools to find the root cause of an issue in a new technical strategy.",
          "Provided a detailed response to a customer's developer team with a solution to a bug."
        ]
      },
      {
        "summary": "Is a go-to expert for complex technical strategy, solving the most difficult problems and providing strategic guidance.",
        "signals": [
          "Successfully designs and implements a complex, multi-system technical strategy.",
          "Can troubleshoot and resolve issues in a high-stakes production environment.",
          "Acts as a strategic partner to a customer's technical leadership, providing guidance on their long-term technical strategy."
        ],
        "examples": [
          "Designed a complex technical strategy between our platform and a customer's legacy system.",
          "Successfully led an emergency bridge call to fix a production technical strategy issue.",
          "Provided a long-term strategy for a customer to migrate from one technical strategy to another."
        ]
      },
      {
        "summary": "Is a company-wide leader in technical strategy, setting a new standard for the team and providing strategic guidance to senior leadership.",
        "signals": [
          "Identifies and advocates for new technical strategy tools or processes.",
          "Creates a new standard for technical strategy that is adopted company-wide.",
          "Is a sought-after resource for other teams on how to design their technical strategies."
        ],
        "examples": [
          "Authored a new guide for technical strategy that is adopted across the company.",
          "Led a project to implement a new technical strategy tool.",
          "Provided a detailed analysis to the executive team that informed a new product strategy."
        ]
      },
      {
        "summary": "Is a recognized industry expert in technical strategy, influencing the company's long-term product and technical strategy.",
        "signals": [
          "Leads the design and implementation of a new technical strategy.",
          "Is a sought-after resource for a sales team on how to pitch complex technical strategies.",
          "Presents at industry conferences on technical strategy best practices."
        ],
        "examples": [
          "Led a project to design and build a new, highly-scalable technical strategy.",
          "Successfully pitched a complex technical strategy to a top-tier client, securing a new contract.",
          "Spoke at an industry conference on best practices for technical strategy."
        ]
      }
    ]
  },
  "SCOPING & ESTIMATION": {
    "displayName": "SCOPING & ESTIMATION",
    "category": "D",
    "description": "Accurately defines the scope of a project and provides realistic estimates of time and effort.",
    "milestones": [
      {
        "summary": "Understands and provides a basic scope and estimation for a small, low-risk project.",
        "signals": [
          "Can create a basic scope document.",
          "Provides a realistic estimate for a small project.",
          "Identifies and flags potential scope creep."
        ],
        "examples": [
          "Created a basic scope document for a small implementation.",
          "Provided a realistic estimate for a small project.",
          "Identified and flagged a potential scope creep."
        ]
      },
      {
        "summary": "Provides accurate scope and estimation for a moderately complex project.",
        "signals": [
          "Successfully manages a project with multiple dependencies.",
          "Proactively identifies and mitigates risks.",
          "Provides clear, professional project updates to customers."
        ],
        "examples": [
          "Successfully managed a project that required collaboration between multiple teams.",
          "Proactively identified and mitigated a risk that could have delayed the project.",
          "Provided a clear, professional project update to a customer that included progress, risks, and action items."
        ]
      },
      {
        "summary": "Provides accurate scope and estimation for a high-stakes, high-risk project, delivering it successfully with minimal guidance.",
        "signals": [
          "Successfully manages a project with a high degree of complexity.",
          "Anticipates and proactively mitigates risks and issues.",
          "Successfully navigates challenging conversations about scope, budget, and timeline."
        ],
        "examples": [
          "Successfully managed a project that required a collaboration between multiple teams.",
          "Anticipated and proactively mitigated a risk that could have delayed the project.",
          "Successfully navigated a challenging conversation about scope, budget, and timeline."
        ]
      },
      {
        "summary": "Is a company-wide leader in scoping and estimation, setting a new standard for the team and providing strategic guidance to senior leadership.",
        "signals": [
          "Identifies and advocates for new scoping and estimation tools or processes.",
          "Creates a new standard for scoping and estimation that is adopted company-wide.",
          "Is a sought-after resource for other teams on how to scope and estimate their projects."
        ],
        "examples": [
          "Authored a new guide for scoping and estimation that is adopted across the company.",
          "Led a project to implement a new scoping and estimation tool.",
          "Provided a detailed analysis to the executive team that informed a new product strategy."
        ]
      },
      {
        "summary": "Is a recognized industry expert in scoping and estimation, influencing the company's long-term product and technical strategy.",
        "signals": [
          "Leads the design and implementation of a new scoping and estimation tool.",
          "Is a sought-after resource for a sales team on how to pitch complex scoping and estimation solutions.",
          "Presents at industry conferences on scoping and estimation best practices."
        ],
        "examples": [
          "Led a project to design and build a new, highly-scalable scoping and estimation tool.",
          "Successfully pitched a complex scoping and estimation solution to a top-tier client, securing a new contract.",
          "Spoke at an industry conference on best practices for scoping and estimation."
        ]
      }
    ]
  },
  "BEST PRACTICE ADVOCACY": {
    "displayName": "BEST PRACTICE ADVOCACY",
    "category": "D",
    "description": "Champions and promotes the adoption of professional and technical best practices, ensuring a high standard of quality across all work.",
    "milestones": [
      {
        "summary": "Understands and applies a basic knowledge of best practices in their day-to-day work.",
        "signals": [
          "Follows a defined process for a project.",
          "Uses a standard tool or template for a task.",
          "Understands the importance of a best practice."
        ],
        "examples": [
          "Followed a runbook to troubleshoot a failed API call.",
          "Used a standard project plan template for a new implementation.",
          "Understood the importance of documenting a solution for future use."
        ]
      },
      {
        "summary": "Identifies and advocates for the adoption of best practices in their work and the work of their team.",
        "signals": [
          "Can identify a potential issue and propose a best practice to address it.",
          "Creates and presents a clear, data-driven report to a customer.",
          "Uses data to anticipate and proactively address a problem."
        ],
        "examples": [
          "Identified a potential issue with a new feature and proposed a best practice to address it.",
          "Created a report for a customer that used data to highlight a key business opportunity.",
          "Used data to proactively identify a potential issue with a new feature."
        ]
      },
      {
        "summary": "Is a go-to expert for best practices, setting a new standard for the team and providing strategic guidance to senior leadership.",
        "signals": [
          "Identifies and advocates for new best practices.",
          "Creates a new standard for best practices that is adopted company-wide.",
          "Is a sought-after resource for other teams on how to apply best practices to their work."
        ],
        "examples": [
          "Authored a new guide for best practices that is adopted across the company.",
          "Led a project to implement a new best practice.",
          "Provided a detailed analysis to the executive team that informed a new product strategy."
        ]
      },
      {
        "summary": "Is a company-wide leader in best practice advocacy, defining and leading a culture of professional excellence.",
        "signals": [
          "Creates and implements a new process for best practice advocacy that is adopted company-wide.",
          "Designs and leads training sessions on how to apply best practices to their work.",
          "Is asked to review and approve all high-stakes deliverables for the company."
        ],
        "examples": [
          "Authored a new guide for best practice advocacy that is adopted across the company.",
          "Led a training session for the professional services team on how to apply best practices to their work.",
          "Successfully negotiated and closed a high-stakes, multi-million dollar deal."
        ]
      },
      {
        "summary": "Is a recognized industry expert in best practice advocacy, influencing the company's long-term product and technical strategy.",
        "signals": [
          "Leads the design and implementation of a new best practice.",
          "Is a sought-after resource for a sales team on how to pitch best practices.",
          "Presents at industry conferences on best practices."
        ],
        "examples": [
          "Led a project to design and build a new, highly-scalable best practice.",
          "Successfully pitched a best practice to a top-tier client, securing a new contract.",
          "Spoke at an industry conference on best practices."
        ]
      }
    ]
  }
}


export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'JR CE', minPoints: 0, maxPoints: 16},
  {label: 'CE', minPoints: 17, maxPoints: 35},
  {label: 'SR. CE', minPoints: 36, maxPoints: 57},
  {label: 'Principal CE', minPoints: 36, maxPoints: 57}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
