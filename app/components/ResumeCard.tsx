import React from 'react';
import { Link } from 'react-router-dom';
import ScoreCircle from './ScoreCircle';

type Resume = {
    id: number;
    jobTitle: string;
    companyName: string;
    image?: string;
    feedback?: {
        overallScore: number;
    };
};

const ResumeCard = ({ resume }: { resume: Resume }) => {
    return (
        <Link
            to={`/resume/${resume.id}`}
            className="relative w-full max-w-sm h-[390px]  bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 mx-auto"
        >
            {/* Top: Info & Score */}
            <div className="flex justify-between items-start px-4 pt-5 pb-3 z-10 bg-white">
                <div className="mt-2">
                    <h2 className="text-black text-sm font-bold truncate max-w-[180px]">
                        {resume.companyName || 'Company Name'}
                    </h2>
                    <h3 className="text-gray-700 text-xs truncate max-w-[180px] mt-1">
                        {resume.jobTitle || 'Job Title'}
                    </h3>
                </div>
                {resume.feedback?.overallScore !== undefined && (
                    <div className="mt-2">
                        <ScoreCircle score={resume.feedback.overallScore} />
                    </div>
                )}
            </div>

            {/* Bottom: Image */}
            {resume.image ? (
                <div className="px-2 pb-4 mt-2">
                    <img
                        src={resume.image}
                        alt={`${resume.companyName} preview`}
                        className="w-full h-full object-cover object-top rounded-md"
                    />
                </div>

            ) : (
                <div className="w-full h-full bg-gray-200 text-gray-500 flex items-center justify-center">
                    No Image Available
                </div>
            )}
        </Link>
    );
};

export default ResumeCard;
