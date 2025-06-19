import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Users, Briefcase, Eye } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    salary: '',
    experience: '',
    description: '',
    requirements: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const savedJobs = localStorage.getItem('jobVacancies');
    const savedApplications = localStorage.getItem('jobApplications');

    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }

    if (savedApplications) {
      setApplications(JSON.parse(savedApplications));
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();

    const jobData = {
      ...formData,
      id: editingJob ? editingJob.id : Date.now().toString(),
      requirements: formData.requirements.split('\n').filter(req => req.trim()),
      posted: editingJob ? editingJob.posted : new Date().toISOString().split('T')[0]
    };

    let updatedJobs;
    if (editingJob) {
      updatedJobs = jobs.map(job => job.id === editingJob.id ? jobData : job);
    } else {
      updatedJobs = [...jobs, jobData];
    }

    setJobs(updatedJobs);
    localStorage.setItem('jobVacancies', JSON.stringify(updatedJobs));

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      salary: '',
      experience: '',
      description: '',
      requirements: ''
    });
    setShowJobForm(false);
    setEditingJob(null);
  };

  const handleEditJob = (job) => {
    setFormData({
      ...job,
      requirements: job.requirements.join('\n')
    });
    setEditingJob(job);
    setShowJobForm(true);
  };

  const handleDeleteJob = (jobId) => {
    const updatedJobs = jobs.filter(job => job.id !== jobId);
    setJobs(updatedJobs);
    localStorage.setItem('jobVacancies', JSON.stringify(updatedJobs));
  };

  const getApplicationsForJob = (jobId) => {
    return applications.filter(app => app.jobId === jobId);
  };

  // Function to handle viewing/downloading the resume
  const handleViewResume = (resumeFileName) => {
    if (resumeFileName) {
      // Construct the URL relative to your public folder.
      // For example, if 'my_resume.pdf' is in 'public/resumes/',
      // the URL will be '/resumes/my_resume.pdf'.
      const resumeUrl = `/resumes/${resumeFileName}`;

      // This will attempt to open the URL in a new tab.
      // Browsers typically render PDFs directly in a new tab.
      // For other file types (like .docx), it usually triggers a download.
      window.open(resumeUrl, '_blank');

      console.log(`Attempting to view/download resume: ${resumeUrl}`);
    } else {
      alert('Resume file not found or uploaded.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-900 mb-4">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage job vacancies and review applications
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'jobs'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Briefcase className="inline-block w-5 h-5 mr-2" />
                Job Vacancies ({jobs.length})
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'applications'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Users className="inline-block w-5 h-5 mr-2" />
                Applications ({applications.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Job Vacancies Tab */}
        {activeTab === 'jobs' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary-900">Job Vacancies</h2>
              <button
                onClick={() => setShowJobForm(true)}
                className="btn-primary flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New Job
              </button>
            </div>

            {/* Job Form Modal */}
            {showJobForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-6">
                      {editingJob ? 'Edit Job Vacancy' : 'Add New Job Vacancy'}
                    </h3>
                    
                    <form onSubmit={handleSubmitJob} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Title *
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Department *
                          </label>
                          <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location *
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Type *
                          </label>
                          <select
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          >
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Experience Required
                          </label>
                          <input
                            type="text"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            placeholder="e.g., 3+ years"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Salary Range
                        </label>
                        <input
                          type="text"
                          name="salary"
                          value={formData.salary}
                          onChange={handleInputChange}
                          placeholder="e.g., $60,000 - $80,000"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Description *
                        </label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Requirements (one per line)
                        </label>
                        <textarea
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleInputChange}
                          rows={6}
                          placeholder="Enter each requirement on a new line"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>

                      <div className="flex justify-end space-x-4 pt-4">
                        <button
                          type="button"
                          onClick={resetForm}
                          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn-primary"
                        >
                          {editingJob ? 'Update Job' : 'Add Job'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Jobs List */}
            <div className="space-y-4">
              {jobs.length === 0 ? (
                <div className="text-center py-12">
                  <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No job vacancies posted yet.</p>
                </div>
              ) : (
                jobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary-900">{job.title}</h3>
                        <p className="text-secondary-500 font-semibold">{job.department}</p>
                        <p className="text-gray-600">{job.location} • {job.type}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditJob(job)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Posted: {job.posted}</span>
                      <span>{getApplicationsForJob(job.id).length} applications</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div>
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Job Applications</h2>
            
            <div className="space-y-4">
              {applications.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No applications received yet.</p>
                </div>
              ) : (
                applications.map((application) => {
                  const job = jobs.find(j => j.id === application.jobId);
                  return (
                    <div key={application.id} className="bg-white rounded-lg shadow p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary-900">{application.name}</h3>
                          <p className="text-secondary-500 font-semibold">
                            Applied for: {job ? job.title : 'Unknown Position'}
                          </p>
                          <p className="text-gray-600">{application.email} • {application.phone}</p>
                        </div>
                        <span className="text-sm text-gray-500">
                          Applied: {new Date(application.appliedDate).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Experience:</p>
                          <p className="text-gray-600">{application.experience}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Skills:</p>
                          <p className="text-gray-600">{application.skills}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Cover Letter:</p>
                        <p className="text-gray-600 text-sm">{application.coverLetter}</p>
                      </div>
                      
                      {application.resumeFile && (
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span className="text-sm text-gray-600">Resume: {application.resumeFile}</span>
                          <button
                            onClick={() => handleViewResume(application.resumeFile)}
                            className="flex items-center text-primary-600 hover:text-primary-700"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View Resume
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;