
import { Service, Post, Job } from './types';
import { WebDevIcon, VibeCodeIcon, AIIcon } from './components/Icons';

export const serviceDetails: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Crafting high-performance, visually stunning websites that drive business growth.',
    icon: WebDevIcon,
    heroImage: 'https://picsum.photos/seed/webdev/1200/600',
    overview: 'Our web development service focuses on creating responsive, scalable, and secure websites tailored to your brand. From corporate sites to complex e-commerce platforms, we build digital experiences that engage users and deliver results.',
    process: [
      { step: 'Discovery & Strategy', description: 'We start by understanding your goals, target audience, and technical requirements to create a comprehensive project roadmap.' },
      { step: 'UI/UX Design', description: 'Our designers craft intuitive and beautiful interfaces focused on providing an exceptional user experience.' },
      { step: 'Development', description: 'Our expert developers bring the designs to life using modern technologies and clean, efficient code.' },
      { step: 'Testing & QA', description: 'Rigorous testing across devices and browsers ensures a flawless, bug-free launch.' },
      { step: 'Deployment & Launch', description: 'We handle the entire deployment process for a smooth and seamless transition to a live environment.' },
    ],
    deliverables: ['Fully Responsive Website', 'Content Management System (CMS)', 'Source Code', 'SEO Foundations', 'Deployment'],
    timeframe: '4-8 Weeks',
    benefits: ['Enhanced Brand Credibility', 'Increased Lead Generation', 'Improved User Engagement', 'Scalable Architecture'],
    whyUs: [
        { title: 'Modern Technology Stack', description: 'We use the latest, most reliable technologies to build websites that are fast, secure, and future-proof.' },
        { title: 'User-Centric Design', description: 'Our design philosophy puts the user first, resulting in intuitive and enjoyable digital experiences.' },
        { title: 'Agile Methodology', description: 'We work in sprints, providing regular updates and incorporating your feedback throughout the process.' }
    ]
  },
  {
    id: 'vibe-coded',
    title: 'Vibe-Coded Apps',
    description: 'Building unique, aesthetic-driven applications that resonate with your brand\'s core identity.',
    icon: VibeCodeIcon,
    heroImage: 'https://picsum.photos/seed/vibecode/1200/600',
    overview: 'Vibe-Coded Apps go beyond functionality. We focus on creating an emotional connection with users through bespoke design, micro-interactions, and a cohesive brand experience. These are apps that feel as good as they look.',
    process: [
      { step: 'Vibe Discovery', description: 'We dive deep into your brand\'s ethos, aesthetics, and target audience to define the core "vibe".' },
      { step: 'Conceptual Design', description: 'Creation of mood boards, style scapes, and initial design concepts that capture the desired feeling.' },
      { step: 'Interactive Prototyping', description: 'We build clickable prototypes to test the flow, feel, and micro-interactions of the app.' },
      { step: 'Aesthetic-Driven Development', description: 'Our developers meticulously implement the design, ensuring every pixel and animation is perfect.' },
      { step: 'Experience QA', description: 'We test not just for bugs, but for the overall feeling and emotional impact of the application.' },
    ],
    deliverables: ['Custom Mobile/Web App', 'Brand Style Guide', 'UI Kit', 'Interactive Prototypes', 'Source Code'],
    timeframe: '6-12 Weeks',
    benefits: ['Stronger Brand Loyalty', 'Higher User Engagement Rates', 'Differentiation in Crowded Markets', 'Memorable User Experience'],
    whyUs: [
        { title: 'Aesthetic First', description: 'We believe great design and a strong vibe are non-negotiable for modern applications.' },
        { title: 'Micro-Interaction Masters', description: 'We obsess over the small details that create a delightful and premium user experience.' },
        { title: 'Brand Storytelling', description: 'We build apps that are a true extension of your brand\'s story and values.' }
    ]
  },
  {
    id: 'ai-automations',
    title: 'AI Business Automations',
    description: 'Integrating intelligent AI to automate workflows, support, and business processes.',
    icon: AIIcon,
    heroImage: 'https://picsum.photos/seed/aiauto/1200/600',
    overview: 'Leverage the power of Artificial Intelligence to streamline your operations. We develop and integrate custom AI solutions, including chatbots, internal assistants, and automated support systems, to increase efficiency and reduce costs.',
    process: [
      { step: 'Process Analysis', description: 'We identify key areas in your business that are ripe for automation and will deliver the highest ROI.' },
      { step: 'Solution Design', description: 'We design the AI architecture, select the right models, and plan the integration with your existing systems.' },
      { step: 'Model Training & Development', description: 'We develop and train custom AI models tailored to your specific data and business needs.' },
      { step: 'System Integration', description: 'Seamless integration of the AI solution into your current workflows, CRMs, or support platforms.' },
      { step: 'Monitoring & Optimization', description: 'We continuously monitor the AI\'s performance and optimize it for better accuracy and efficiency over time.' },
    ],
    deliverables: ['Custom AI Chatbot/Assistant', 'Workflow Automation Scripts', 'Integration Documentation', 'Performance Dashboard', 'Support & Maintenance Plan'],
    timeframe: '5-10 Weeks',
    benefits: ['24/7 Customer Support', 'Significant Cost Reduction', 'Increased Operational Efficiency', 'Data-Driven Insights'],
    whyUs: [
        { title: 'Practical AI Solutions', description: 'We focus on building AI tools that solve real-world business problems and deliver measurable results.' },
        { title: 'Seamless Integration', description: 'Our expertise ensures that new AI systems work perfectly with your existing software and processes.' },
        { title: 'Scalable & Secure', description: 'We build robust AI automations that can grow with your business and protect your data.' }
    ]
  }
];

export const portfolioItems = [
    { title: 'Agency Website', category: 'Web Development', image: 'https://picsum.photos/seed/port1/600/400' },
    { title: 'AI Automation Setup', category: 'AI Automations', image: 'https://picsum.photos/seed/port2/600/400' },
    { title: 'SaaS Dashboard', category: 'Vibe-Coded Apps', image: 'https://picsum.photos/seed/port3/600/400' },
    { title: 'Mobile Web App', category: 'Vibe-Coded Apps', image: 'https://picsum.photos/seed/port4/600/400' },
    { title: 'Branding + UI Work', category: 'Web Development', image: 'https://picsum.photos/seed/port5/600/400' },
    { title: 'E-commerce Platform', category: 'Web Development', image: 'https://picsum.photos/seed/port6/600/400' },
];

export const testimonials = [
    { name: 'Sarah L.', role: 'CEO, Innovate Co.', message: 'ProbSolv transformed our online presence. Their attention to detail and modern design sense is unparalleled. Our new website is fast, beautiful, and generating more leads than ever.', stars: 5 },
    { name: 'Michael B.', role: 'Founder, TechStream', message: 'The AI chatbot they built for us has cut down our support tickets by 40%. It\'s incredibly smart and has freed up our team to focus on bigger issues. A total game-changer.', stars: 5 },
    { name: 'Jessica T.', role: 'Creative Director, Aura Studios', message: 'I\'ve never worked with a team that understood our "vibe" so perfectly. The app they delivered is not just functional, it\'s a work of art that our users absolutely love.', stars: 5 },
    { name: 'David R.', role: 'CTO, DataFlow', message: 'Professional, efficient, and highly skilled. The ProbSolv team delivered our project on time and exceeded all our expectations. We will definitely be working with them again.', stars: 5 },
];

export const blogPosts: Post[] = [
    {
        id: 'why-vibe-matters',
        title: 'Beyond the Pixels: Why "Vibe" is the Most Underrated Metric in App Development',
        author: 'Alex Chen',
        date: 'October 26, 2023',
        category: 'Vibe-Coded Apps',
        image: 'https://picsum.photos/seed/blog1/1200/600',
        excerpt: 'In a saturated app market, functionality is just the ticket to entry. The real differentiator? Vibe. We explore how aesthetic-driven design and micro-interactions create memorable experiences that build lasting brand loyalty.',
        content: `
            <p class="mb-6">In today's digital landscape, users have endless choices. An app that simply "works" is no longer enough. To capture attention and retain users, you need to create an experience that resonates on an emotional level. This is where "vibe" comes in.</p>
            <h3 class="text-2xl font-bold mb-4">What Exactly is "Vibe"?</h3>
            <p class="mb-6">Vibe is the intangible feeling your application evokes. It's a combination of your UI design, the smoothness of animations, the satisfaction of a button click, and the overall personality that shines through. It’s not just about looking good; it's about feeling right. A well-defined vibe turns a transactional tool into a delightful experience.</p>
            <h3 class="text-2xl font-bold mb-4">The ROI of Great Aesthetics</h3>
            <ul class="list-disc list-inside mb-6 space-y-2">
                <li><strong>Increased Engagement:</strong> Users spend more time in apps they enjoy using.</li>
                <li><strong>Higher Perceived Value:</strong> A polished, premium feel allows for better pricing power.</li>
                <li><strong>Stronger Brand Recall:</strong> A unique vibe makes your app unforgettable in a sea of competitors.</li>
            </ul>
            <p>At ProbSolv, we call this "Vibe-Coding." It's a philosophy that places the user's emotional journey at the forefront of the development process. We obsess over the details—from haptic feedback to loading screen animations—to ensure your app doesn't just function flawlessly, but also feels incredible to use. In a world of fleeting digital trends, a strong vibe is what creates a classic.</p>
        `
    },
    {
        id: 'ai-is-eating-the-world',
        title: 'Your New Hardest-Working Employee is an AI: A Guide to Business Automation',
        author: 'Samantha Riley',
        date: 'October 22, 2023',
        category: 'AI Automations',
        image: 'https://picsum.photos/seed/blog2/1200/600',
        excerpt: 'Repetitive tasks are draining your team\'s potential. We break down how custom AI assistants and automated workflows can handle the grunt work, freeing up your human talent to focus on innovation and growth.',
        content: `
            <p class="mb-6">Imagine an employee who never sleeps, never makes a mistake, and handles thousands of customer queries simultaneously. This isn't science fiction; it's the reality of AI-powered business automation. Companies that leverage AI are not just becoming more efficient; they're fundamentally redesigning what's possible.</p>
            <h3 class="text-2xl font-bold mb-4">Where to Start with AI Automation?</h3>
            <p class="mb-6">The key is to identify high-volume, low-complexity tasks. Here are some of the most impactful areas we see for AI integration:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
                <li><strong>Customer Support:</strong> AI chatbots can handle 80% of common questions, providing instant 24/7 support and escalating complex issues to human agents.</li>
                <li><strong>Data Entry & Processing:</strong> AI can read documents, extract key information, and input it into your systems with perfect accuracy, saving thousands of hours.</li>
                <li><strong>Internal Workflows:</strong> From scheduling meetings to generating reports, an internal AI assistant can streamline operations and reduce administrative overhead.</li>
            </ul>
            <h3 class="text-2xl font-bold mb-4">The ProbSolv Approach</h3>
            <p>We don't believe in one-size-fits-all AI. Our process begins with a deep analysis of your unique business processes to identify the automation opportunities with the highest ROI. We then design and integrate custom AI solutions that work seamlessly with your existing systems, whether it's a customer-facing chatbot or an internal automation script. The goal isn't to replace your team, but to supercharge them.</p>
        `
    },
    {
        id: 'future-of-web',
        title: 'Is Your Website Ready for 2024? 5 Tech Trends You Can\'t Ignore',
        author: 'David Chen',
        date: 'October 18, 2023',
        category: 'Web Development',
        image: 'https://picsum.photos/seed/blog3/1200/600',
        excerpt: 'The web is evolving faster than ever. From server-side rendering to the rise of edge computing, we cover the essential web development trends that will define the next year and how to leverage them for a faster, more secure online presence.',
        content: `
            <p class="mb-6">A website is no longer a static brochure; it's a dynamic, interactive platform that serves as the core of your digital presence. To stay competitive, you need to be aware of the technological shifts that are shaping the future of the web. Here are five trends we're building our projects around.</p>
            <ol class="list-decimal list-inside mb-6 space-y-4">
                <li><strong>Component-Based Architecture:</strong> Frameworks like React and Vue have made building complex interfaces more manageable and scalable. Reusable components mean faster development and easier maintenance.</li>
                <li><strong>Headless CMS:</strong> Decoupling the content management backend from the frontend presentation layer gives brands ultimate flexibility to deliver content to any device—websites, apps, smartwatches, and beyond.</li>
                <li><strong>Static Site Generation (SSG) & SSR:</strong> Pre-rendering pages as static files delivers lightning-fast performance and enhanced security. For dynamic content, Server-Side Rendering (SSR) offers the best of both worlds.</li>
                <li><strong>AI-Powered Search & Personalization:</strong> Generic content is dead. Modern websites are using AI to provide personalized experiences and intelligent search capabilities that understand user intent.</li>
                <li><strong>WebAssembly (WASM):</strong> This technology allows you to run high-performance code (written in languages like C++ or Rust) directly in the browser, opening up new possibilities for complex web applications like video editors and 3D games.</li>
            </ol>
            <p>At ProbSolv, we're not just following trends; we're implementing them. Our commitment to using a modern, robust tech stack ensures that the websites we build today are not just beautiful and functional, but are also engineered to be fast, secure, and ready for the future.</p>
        `
    },
];

export const jobOpenings: Job[] = [
    {
        id: 'frontend-engineer',
        title: 'Senior Frontend Engineer',
        location: 'Remote',
        type: 'Full-time',
        description: 'We are looking for a passionate Senior Frontend Engineer to build beautiful, high-performance user interfaces. You will work with modern technologies to create aesthetic-driven apps and websites that our clients and their users love.',
        responsibilities: [
            'Develop and maintain user-facing features using React and TypeScript.',
            'Collaborate with UI/UX designers to translate wireframes into high-quality code.',
            'Optimize applications for maximum speed and scalability.',
            'Write clean, maintainable, and well-documented code.',
            'Mentor junior developers and contribute to our team\'s best practices.'
        ],
        qualifications: [
            '5+ years of professional experience in frontend development.',
            'Expertise in React, TypeScript, HTML5, and CSS3.',
            'Strong understanding of UI/UX design principles.',
            'Experience with performance optimization techniques.',
            'Excellent problem-solving and communication skills.'
        ]
    },
    {
        id: 'ai-engineer',
        title: 'AI/ML Engineer',
        location: 'Remote',
        type: 'Full-time',
        description: 'Join our AI team to build intelligent automation solutions that solve real-world business problems. You will design, develop, and deploy machine learning models and AI-powered systems for our diverse range of clients.',
        responsibilities: [
            'Design and implement machine learning models for tasks like NLP, computer vision, and predictive analytics.',
            'Develop and integrate custom AI solutions, including chatbots and internal assistants.',
            'Analyze large datasets to extract actionable insights.',
            'Work with clients to understand their needs and design effective AI strategies.',
            'Stay up-to-date with the latest advancements in AI and machine learning.'
        ],
        qualifications: [
            '3+ years of experience in a similar AI/ML role.',
            'Proficiency in Python and machine learning frameworks (e.g., TensorFlow, PyTorch).',
            'Experience with cloud platforms (GCP, AWS, Azure).',
            'Strong background in algorithms, data structures, and statistical modeling.',
            'Ability to communicate complex technical concepts to non-technical stakeholders.'
        ]
    },
    {
        id: 'ui-ux-designer',
        title: 'UI/UX "Vibe" Designer',
        location: 'Remote',
        type: 'Contract',
        description: 'Are you obsessed with creating digital experiences that feel as good as they look? We\'re seeking a UI/UX Designer who specializes in "vibe." You will be responsible for creating the aesthetic vision for our "Vibe-Coded Apps," focusing on emotional connection and brand identity.',
        responsibilities: [
            'Create wireframes, storyboards, user flows, and site maps.',
            'Design visually stunning and intuitive user interfaces.',
            'Develop UI mockups and prototypes that clearly illustrate how sites function and look.',
            'Conduct user research and evaluate user feedback.',
            'Establish and promote design guidelines, best practices, and standards.'
        ],
        qualifications: [
            'A strong portfolio showcasing your expertise in UI/UX design, especially for mobile and web apps.',
            'Proficiency in design tools like Figma, Sketch, or Adobe XD.',
            'Excellent visual design skills with a sensitivity to user-system interaction.',
            'Ability to solve problems creatively and effectively.',
            'Up-to-date with the latest UI trends, techniques, and technologies.'
        ]
    }
];
