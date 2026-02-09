
import { Course, StatItem, NavLink, AttendanceRecord, TestItem, Notice, ScheduleItem, StudyMaterial } from './types';

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], subject: 'Computer Science', status: 'present', timestamp: '08:05 AM' },
  { id: '2', date: new Date().toISOString().split('T')[0], subject: 'Visual Arts', status: 'present', timestamp: '01:02 PM' },
  { id: '3', date: '2024-05-19', subject: 'Advanced Mathematics', status: 'present', timestamp: '09:10 AM' },
  { id: '4', date: '2024-05-19', subject: 'English Language', status: 'absent' },
  { id: '5', date: '2024-05-18', subject: 'Molecular Biology', status: 'present', timestamp: '02:00 PM' },
  { id: '6', date: '2024-05-17', subject: 'Applied Science', status: 'present', timestamp: '11:05 AM' },
  { id: '7', date: '2024-05-16', subject: 'Computer Science', status: 'present', timestamp: '08:15 AM' },
  { id: '8', date: '2024-05-15', subject: 'Computer Science', status: 'absent' },
  { id: '9', date: '2024-05-14', subject: 'Advanced Mathematics', status: 'present', timestamp: '09:02 AM' },
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Campus', href: '#campus' },
  { name: 'Contact', href: '#contact' },
];

export const MOCK_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: '1',
    title: 'Advanced Calculus Notes',
    subject: 'Mathematics',
    category: 'Handwritten Notes',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-05-20',
    size: '2.4 MB'
  },
  {
    id: '1.2',
    title: 'Linear Algebra Review',
    subject: 'Mathematics',
    category: 'E-Book',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-05-15',
    size: '1.8 MB'
  },
  {
    id: '2',
    title: 'Data Structures & Algorithms',
    subject: 'Computer Science',
    category: 'E-Book',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-05-18',
    size: '15.8 MB'
  },
  {
    id: '2.2',
    title: 'Operating Systems Concepts',
    subject: 'Computer Science',
    category: 'Lecture Slides',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-05-10',
    size: '4.5 MB'
  },
  {
    id: '3',
    title: 'Organic Chemistry Lab Manual',
    subject: 'Science',
    category: 'Manual',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-05-15',
    size: '4.2 MB'
  },
  {
    id: '3.2',
    title: 'Physics for Engineers',
    subject: 'Science',
    category: 'Handwritten Notes',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-05-12',
    size: '3.1 MB'
  },
  {
    id: '4',
    title: 'Modern Art History',
    subject: 'Arts',
    category: 'Presentation',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-05-10',
    size: '8.1 MB'
  },
  {
    id: '4.2',
    title: 'History of Visual Design',
    subject: 'Arts',
    category: 'E-Book',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-05-08',
    size: '12.4 MB'
  },
  {
    id: '5',
    title: 'Macroeconomics 101',
    subject: 'Management',
    category: 'Lecture Slides',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-05-05',
    size: '3.5 MB'
  },
  {
    id: '5.2',
    title: 'Business Communication',
    subject: 'Management',
    category: 'Manual',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-05-02',
    size: '2.2 MB'
  },
  {
    id: '5.3',
    title: 'Principles of Marketing',
    subject: 'Management',
    category: 'E-Book',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-04-30',
    size: '6.7 MB'
  },
  {
    id: '6',
    title: 'Genetic Engineering Basics',
    subject: 'Science',
    category: 'Notes',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-04-28',
    size: '1.9 MB'
  },
  {
    id: '6.2',
    title: 'Thermodynamics for Beginners',
    subject: 'Science',
    category: 'Lecture Slides',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-04-25',
    size: '3.8 MB'
  },
  {
    id: '1.3',
    title: 'Probability & Statistics',
    subject: 'Mathematics',
    category: 'Manual',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-04-22',
    size: '2.9 MB'
  },
  {
    id: '2.3',
    title: 'React.js Best Practices',
    subject: 'Computer Science',
    category: 'E-Book',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-04-20',
    size: '1.2 MB'
  },
  {
    id: '4.3',
    title: 'Color Theory in Digital Media',
    subject: 'Arts',
    category: 'Presentation',
    fileUrl: '#',
    driveUrl: '',
    uploadDate: '2024-04-18',
    size: '9.4 MB'
  }
];

export const STATS: StatItem[] = [
  { label: 'Active Students', value: '15', suffix: 'K+' },
  { label: 'World-Class Faculty', value: '350', suffix: '+' },
  { label: 'Degree Programs', value: '85', suffix: '+' },
  { label: 'Global Ranking', value: '#', suffix: '12' },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Computer Science '23",
    content: "The research opportunities at Nexus changed my career trajectory. I'm now at Google thanks to the faculty mentors here.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "David Chen",
    role: "MBA Candidate",
    content: "The networking events and industry connections provided by the business school are unparalleled in the region.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Design Student",
    content: "The creative freedom coupled with high-end tech labs allowed me to push the boundaries of my digital art.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Advanced Computer Science',
    category: 'Engineering',
    duration: '4 Years',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    description: 'Master the fundamentals of AI, Machine Learning, and Cloud Architecture with high-impact industry projects.',
    rating: 4.9
  },
  {
    id: 'c2',
    title: 'Global Business Strategy',
    category: 'Management',
    duration: '3 Years',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Develop strategic leadership skills and engage in global economic research to lead tomorrow’s enterprises.',
    rating: 4.7
  },
  {
    id: 'c3',
    title: 'Interaction Design',
    category: 'Arts',
    duration: '3 Years',
    image: 'https://images.unsplash.com/photo-1561070791-26c11d6d9e3d?auto=format&fit=crop&w=800&q=80',
    description: 'A synergy of cognitive psychology and digital aesthetics to architect the next generation of user interfaces.',
    rating: 4.8
  },
  {
    id: 'c4',
    title: 'Genomic Engineering',
    category: 'Science',
    duration: '4 Years',
    image: 'https://images.unsplash.com/photo-1532187875605-2fe35851142b?auto=format&fit=crop&w=800&q=80',
    description: 'Investigate the frontiers of molecular biology and genetic therapeutics through rigorous laboratory research.',
    rating: 4.6
  },
  {
    id: 'c5',
    title: 'Cyber Security Operations',
    category: 'Engineering',
    duration: '4 Years',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    description: 'Forge an elite career in digital defense with advanced ethical hacking and network security protocols.',
    rating: 4.9
  },
  {
    id: 'c6',
    title: 'Economics & Policy',
    category: 'Management',
    duration: '3 Years',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    description: 'Analyze complex global markets and formulate transformative economic policies for public and private sectors.',
    rating: 4.5
  }
];

export const MOCK_NOTICES: Notice[] = [
  {
    id: 'n1',
    title: 'Mid-Semester Break Announcement',
    category: 'general',
    date: '2024-05-22',
    sender: 'Administrative Office',
    role: 'admin',
    content: 'Please be advised that the university will remain closed for the mid-semester break from May 25th to May 30th. All classes will resume on May 31st.',
    priority: 'high',
    attachment: 'academic_calendar_v2.pdf'
  },
  {
    id: 'n2',
    title: 'Revised Examination Guidelines',
    category: 'academic',
    date: '2024-05-20',
    sender: 'Prof. Michael Brown',
    role: 'faculty',
    content: 'The guidelines for the upcoming final examinations have been updated to include instructions for the digital submission portion of the design portfolio.',
    priority: 'high',
    attachment: 'exam_guidelines_2024.pdf'
  },
  {
    id: 'n3',
    title: 'Annual Tech Symposium 2024',
    category: 'event',
    date: '2024-05-18',
    sender: 'Student Affairs',
    role: 'admin',
    content: 'Registration for the Annual Tech Symposium is now open. Students interested in presenting their projects should submit their abstracts by June 5th.',
    priority: 'normal',
    attachment: 'symposium_schedule.pdf'
  },
  {
    id: 'n4',
    title: 'Library Extended Hours',
    category: 'general',
    date: '2024-05-15',
    sender: 'Library Management',
    role: 'admin',
    content: 'Starting next week, the central library will be open 24/7 to support students during the final project submission period.',
    priority: 'normal'
  },
  {
    id: 'n5',
    title: 'New Research Methodology Workshop',
    category: 'academic',
    date: '2024-05-12',
    sender: 'Dr. Sarah Wilson',
    role: 'faculty',
    content: 'A mandatory workshop on advanced research methodologies for final year students will be held in Auditorium 2 this Friday at 10:00 AM.',
    priority: 'normal',
    attachment: 'workshop_materials.pdf'
  }
];

export const MOCK_TIMETABLE: Record<number, ScheduleItem[]> = {
  1: [
    { id: '1', time: '08:00 AM', subject: 'English Language', room: 'Room 122', duration: '8:00 AM - 08:45 AM', type: 'lecture', faculty: 'Dr. Sarah Wilson' },
    { id: '2', time: '09:00 AM', subject: 'Advanced Mathematics', room: 'Room 122', duration: '09:00 AM - 09:45 AM', type: 'lecture', faculty: 'Prof. Michael Brown' },
    { id: '3', time: '10:00 AM', subject: 'Computer Science', room: 'Room 315', duration: '10:00 AM - 10:45 AM', type: 'seminar', faculty: 'Eng. Alice Cooper' },
  ],
  2: [
    { id: '4', time: '11:00 AM', subject: 'Applied Science', room: 'Room 315', duration: '11:00 AM - 11:45 AM', type: 'lecture', faculty: 'Dr. Robert Blake' },
    { id: '5', time: '01:00 PM', subject: 'Visual Arts', room: 'Room 208', duration: '12:15 PM - 01:00 PM', type: 'lab', faculty: 'Ms. Clara Lane' },
  ],
  3: [
    { id: '6', time: '09:00 AM', subject: 'History of Art', room: 'Room 208', duration: '09:00 AM - 10:30 AM', type: 'lecture', faculty: 'Dr. Elena Rossi' },
    { id: '7', time: '02:00 PM', subject: 'Molecular Biology', room: 'Lab 101', duration: '02:00 PM - 04:00 PM', type: 'lab', faculty: 'Dr. James Watson' },
  ],
  4: [
    { id: '8', time: '08:00 AM', subject: 'World History', room: 'Room 402', duration: '08:00 AM - 09:30 AM', type: 'lecture', faculty: 'Prof. Arthur King' },
    { id: '9', time: '11:00 AM', subject: 'Literature', room: 'Room 105', duration: '11:00 AM - 12:30 PM', type: 'seminar', faculty: 'Ms. Emily Bronte' },
  ],
  5: [
    { id: '10', time: '10:00 AM', subject: 'Ethics in Tech', room: 'Auditorium', duration: '10:00 AM - 11:30 AM', type: 'lecture', faculty: 'Dr. Alan Turing' },
  ]
};

export const MOCK_UPCOMING_TESTS: TestItem[] = [
  { 
    id: 't1',
    subject: 'Computer Science', 
    description: 'Forces and Motion Quiz - Unit 4. Focus on kinetic energy and momentum.', 
    date: '27 May',
    type: 'Quiz',
    room: 'Lab 302',
    duration: '45 mins',
    importance: 'medium',
    urgent: true
  },
  { 
    id: 't2',
    subject: 'Visual Arts', 
    description: 'Color Theory Assessment - Exam. Comprehensive analysis of Renaissance palettes.', 
    date: '02 Jun',
    type: 'Assessment',
    room: 'Art Studio B',
    duration: '120 mins',
    importance: 'high',
    urgent: false
  },
  { 
    id: 't3',
    subject: 'English Language', 
    description: 'Grammar Essentials Quiz - Final. Cover all modules from 1 to 8.', 
    date: '03 Jun',
    type: 'Final',
    room: 'Hall A',
    duration: '90 mins',
    importance: 'high',
    urgent: false
  },
  {
    id: 't4',
    subject: 'Pure Physics',
    description: 'Quantum Mechanics Intro - Unit 1. Principles of wave-particle duality.',
    date: '10 Jun',
    type: 'Assessment',
    room: 'Lab 204',
    duration: '60 mins',
    importance: 'medium',
    urgent: false
  }
];
