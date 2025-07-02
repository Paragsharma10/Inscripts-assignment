import React, { useState } from 'react';
import {
    Folder,
    Globe,
    Search,
    Bell,
    EyeOff,
    ArrowUpDown,
    Filter,
    FileUp,
    FileDown,
    Share2,
    ChevronDown,
    Plus
} from 'lucide-react';

const tabs = [
    { label: 'Tool bar', icon: ChevronDown },
    { label: 'Hide fields', icon: EyeOff },
    { label: 'Sort', icon: ArrowUpDown },
    { label: 'Filter', icon: Filter },
    { label: 'Cell view', icon: ChevronDown },
];

const data = [
    {
        job: 'Launch social media campaign for product',
        submitted: '15-11-2024',
        status: 'In-process',
        tooltip: 'Sujendu Kar',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        dueDate: '20-11-2024',
        value: '6,200,000 ₹'
    },
    {
        job: 'Update press kit for company redesign',
        submitted: '28-10-2024',
        status: 'Need to start',
        tooltip: '',
        submitter: 'Irfan Khan',
        url: 'www.irfankhan.me',
        assigned: 'Tejas Pandey',
        priority: 'High',
        dueDate: '30-10-2024',
        value: '3,500,000 ₹'
    },
    {
        job: 'Finalize user testing feedback for app',
        submitted: '05-12-2024',
        status: 'In-process',
        tooltip: '',
        submitter: 'Mark Johnson',
        url: 'www.markjohnson.net',
        assigned: 'Rachel Lee',
        priority: 'Medium',
        dueDate: '10-12-2024',
        value: '4,750,000 ₹'
    },
    {
        job: 'Design new features for the website',
        submitted: '10-01-2025',
        status: 'Complete',
        tooltip: '',
        submitter: 'Emily Green',
        url: 'www.emilygreen.com',
        assigned: 'Tom Wright',
        priority: 'Low',
        dueDate: '15-01-2025',
        value: '5,900,000 ₹'
    },
    {
        job: 'Prepare financial report for Q4',
        submitted: '25-01-2025',
        status: 'Blocked',
        tooltip: '',
        submitter: 'Jessica Brown',
        url: 'www.jessicabrown.io',
        assigned: 'Kevin Smith',
        priority: 'Low',
        dueDate: '30-01-2025',
        value: '2,800,000 ₹'
    },
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
];

const getStatusStyle = (status: string) => {
    switch (status) {
        case 'In-process':
            return 'bg-yellow-100 text-yellow-800';
        case 'Complete':
            return 'bg-green-100 text-green-800';
        case 'Blocked':
            return 'bg-red-100 text-red-800';
        case 'Need to start':
            return 'bg-blue-100 text-blue-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

const getPriorityStyle = (priority: string) => {
    switch (priority) {
        case 'High':
            return 'text-red-600 font-medium';
        case 'Medium':
            return 'text-orange-600 font-medium';
        case 'Low':
            return 'text-blue-600 font-medium';
        default:
            return 'text-gray-600';
    }
};

const Spreadsheet = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="min-h-screen bg-white p-4 text-sm">
            {/* Header bar */}
            <div className="flex justify-between items-center mb-3">
                <div className="text-gray-600 flex items-center">
                    <span className="text-purple-600 font-medium">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-600"
                        >
                            <path
                                d="M18.75 4C20.5449 4 22 5.45507 22 7.25V16.75C22 18.5449 20.5449 20 18.75 20H5.25C3.45507 20 2 18.5449 2 16.75V7.25C2 5.45507 3.45507 4 5.25 4H18.75ZM5.25 5.5C4.2835 5.5 3.5 6.2835 3.5 7.25V16.75C3.5 17.7165 4.2835 18.5 5.25 18.5H14.5V5.5H5.25Z"
                                fill="#618666"
                            />
                        </svg>
                    </span>
                    <span className="ml-2">
                        Workspace &gt; Folder 2 &gt;{" "}
                        <span className="font-semibold text-gray-800">Spreadsheet 3</span>
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                        <input className="pl-8 pr-4 py-1.5 border rounded text-sm" placeholder="Search within sheet" />
                    </div>
                    <div className="relative">
                        <Bell className="w-5 h-5 text-gray-600" />
                        <span className="absolute -top-1 -right-1 text-xs bg-green-500 text-white rounded-full px-1">2</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img
                            src="/john-doe.png" // or your actual profile URL
                            alt="John Doe"
                            className="w-7 h-7 rounded-full object-cover"
                        />
                        <span className="text-sm text-gray-700">John Doe</span>
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center border-b py-2 mb-2">
                <div className="flex space-x-2">
                    {tabs.map((tab, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setActiveTab(idx);
                                console.log(`${tab.label} clicked`);
                            }}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-md border text-gray-700 hover:bg-gray-100 ${activeTab === idx ? 'bg-gray-100' : ''}`}
                        >
                            <tab.icon className="w-4 h-4" /> {tab.label}
                        </button>
                    ))}
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-1 border px-3 py-1.5 rounded hover:bg-gray-100" onClick={() => console.log('Import clicked')}><FileUp className="w-4 h-4" /> Import</button>
                    <button className="flex items-center gap-1 border px-3 py-1.5 rounded hover:bg-gray-100" onClick={() => console.log('Export clicked')}><FileDown className="w-4 h-4" /> Export</button>
                    <button className="flex items-center gap-1 border px-3 py-1.5 rounded hover:bg-gray-100" onClick={() => console.log('Share clicked')}><Share2 className="w-4 h-4" /> Share</button>
                    <button className="bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700" onClick={() => console.log('New Action clicked')}>New Action</button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-auto border rounded-md">
                <table className="min-w-full text-left">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr>
                            <th className="w-8 text-center font-medium">#</th>
                            <th className="px-4 py-2 font-medium">Job Request</th>
                            <th className="px-4 py-2 font-medium">Submitted</th>
                            <th className="px-4 py-2 font-medium">Status</th>
                            <th className="px-4 py-2 font-medium">Submitter</th>
                            <th className="px-4 py-2 font-medium flex items-center gap-1"><Globe size={14} /> URL</th>
                            <th className="px-4 py-2 font-medium bg-green-50">Assigned</th>
                            <th className="px-4 py-2 font-medium bg-purple-50">Priority</th>
                            <th className="px-4 py-2 font-medium bg-purple-50">Due Date</th>
                            <th className="px-4 py-2 font-medium bg-red-50">Est. Value</th>
                            <th className="px-2 text-center"><Plus className="w-4 h-4 text-gray-400" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} className="border-t hover:bg-gray-50">
                                <td className="text-center text-gray-400 border-r border-gray-200">{idx + 1}</td>
                                <td className="px-4 py-2 truncate max-w-[200px] border-r border-gray-200">
                                    {row.job ? row.job : <span className="text-gray-400"> </span>}
                                </td>
                                <td className="px-4 py-2 border-r border-gray-200">
                                    {row.submitted ? row.submitted : <span className="text-gray-400"> </span>}
                                </td>
                                <td className="px-4 py-2 border-r border-gray-200">
                                    {row.status ? (
                                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusStyle(row.status)}`} title={row.tooltip}>
                                            {row.status}
                                        </span>
                                    ) : (
                                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-white text-gray-400"> </span>
                                    )}
                                </td>
                                <td className="px-4 py-2 border-r border-gray-200">
                                    {row.submitter ? row.submitter : <span className="text-gray-400"> </span>}
                                </td>
                                <td className="px-4 py-2 flex items-center gap-1 border-r border-gray-200">
                                    <span className="underline cursor-pointer truncate max-w-[130px] text-gray-600">
                                        {row.url ? row.url : <span className="text-gray-400"> </span>}
                                    </span>
                                </td>
                                <td className={`px-4 py-2 border-r border-gray-200 ${row.assigned ? 'bg-green-50' : 'bg-white text-gray-400'}`}>
                                    {row.assigned || ''}
                                </td>
                                <td className={`px-4 py-2 border-r border-gray-200 ${row.priority ? 'bg-purple-50 ' + getPriorityStyle(row.priority) : 'bg-white text-gray-400'}`}>
                                    {row.priority || ''}
                                </td>
                                <td className={`px-4 py-2 border-r border-gray-200 ${row.dueDate ? 'bg-purple-50' : 'bg-white text-gray-400'}`}>
                                    {row.dueDate || ''}
                                </td>
                                <td className={`px-4 py-2 border-r border-gray-200 ${row.value ? 'bg-red-50' : 'bg-white text-gray-400'}`}>
                                    {row.value || ''}
                                </td>
                                <td className="px-2 border-r border-gray-200"></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Spreadsheet;
