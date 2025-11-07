import React from 'react';

export type Page = 'Home' | 'Services' | 'ServiceDetail' | 'Pricing' | 'Portfolio' | 'About' | 'Testimonials' | 'Contact' | 'Blog' | 'BlogPost' | 'PrivacyPolicy' | 'TermsOfService' | 'Careers';

export type Theme = 'light' | 'dark';

export interface Service {
    id: string;
    title: string;
    description: string;
    // FIX: Changed JSX.Element to React.ReactElement to resolve namespace 'JSX' error in a .ts file.
    icon: (props: React.ComponentProps<'svg'>) => React.ReactElement;
    heroImage: string;
    overview: string;
    process: { step: string; description: string }[];
    deliverables: string[];
    timeframe: string;
    benefits: string[];
    whyUs: { title: string; description: string }[];
}

export interface Post {
    id: string;
    title: string;
    author: string;
    date: string;
    category: string;
    image: string;
    excerpt: string;
    content: string;
}

export interface Job {
    id: string;
    title: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    qualifications: string[];
}