import type { Route } from "./+types/home";
import Navbar from '~/components/Navbar';
import ResumeCard from '~/components/ResumeCard';
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "ResuScan" },
        { name: "description", content: "Smart feedback for your Dream job" },
    ];
}

// 📝 Sample data (with jobTitle, companyName, feedback)
const resumes = [
    {
        id: 1,
        jobTitle: "Frontend Developer",
        companyName: "Google",
        image: "/images/resume_01.png",

        feedback: { overallScore: 85 },
    },
    {
        id: 2,
        jobTitle: "Backend Engineer",
        companyName: "Amazon",
        image: "/images/resume_02.png",

        feedback: { overallScore: 78 },
    },
    {
        id: 3,
        jobTitle: "Full Stack Developer",
        companyName: "Meta",
        image: "/images/resume_03.png",

        feedback: { overallScore: 92 },
    },
    {
        id: 4,
        jobTitle: 'Data Scientist',
        companyName: 'Meta',
        image: '/images/resume4.jpg',
        feedback: { overallScore: 82 },
    },
    {
        id: 5,
        jobTitle: 'Mobile App Dev',
        companyName: 'Apple',
        image: '/images/resume5.jpg',
        feedback: { overallScore: 88 },
    },
    {
        id: 6,
        jobTitle: 'DevOps Engineer',
        companyName: 'Microsoft',
        image: '/images/resume6.jpg',
        feedback: { overallScore: 79 },
    },
];

export default function Home() {
    const { isLoading, auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
            <Navbar />

            <section className="text-center py-10">
                <h1 className="text-2xl font-bold text-white">Track, Analyze, Succeed.
                </h1>
                <h2 className="text-lg text-gray-300 mt-2">Get resume feedback, monitor progress, and stay organized – all in one place.



                </h2>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 px-6 pb-10">
                {resumes.map((resume) => (
                    <ResumeCard key={resume.id} resume={resume} />
                ))}
            </section>
        </main>
    );
}
