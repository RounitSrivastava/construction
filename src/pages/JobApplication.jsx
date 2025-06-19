import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Upload, Send } from 'lucide-react'

const JobApplication = () => {
  const { jobId } = useParams()
  const navigate = useNavigate()

  const [job, setJob] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    coverLetter: '',
    resumeFile: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobVacancies')
    if (savedJobs) {
      const jobs = JSON.parse(savedJobs)
      const foundJob = jobs.find(j => j.id === jobId)
      setJob(foundJob)
    }
  }, [jobId])

  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        resumeFile: e.target.files[0]?.name || null
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const application = {
      id: Date.now().toString(),
      jobId,
      ...formData,
      appliedDate: new Date().toISOString()
    }

    const savedApplications = localStorage.getItem('jobApplications')
    const applications = savedApplications ? JSON.parse(savedApplications) : []
    applications.push(application)
    localStorage.setItem('jobApplications', JSON.stringify(applications))

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setTimeout(() => {
        navigate('/careers')
      }, 3000)
    }, 2000)
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Job Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, this job doesn't exist.</p>
          <button
            onClick={() => navigate('/careers')}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Careers
          </button>
        </div>
      </div>
    )
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center max-w-md mx-auto px-4 bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thanks for applying to <strong>{job.title}</strong>. We’ll review your application shortly.
          </p>
          <p className="text-sm text-gray-500">Redirecting to careers page...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/careers')}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Careers
        </button>

        {/* Job Header */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Apply for {job.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div><strong>Department:</strong> {job.department}</div>
            <div><strong>Location:</strong> {job.location}</div>
            <div><strong>Type:</strong> {job.type}</div>
          </div>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Information</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-sm text-gray-700">Full Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-sm text-gray-700">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-sm text-gray-700">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-sm text-gray-700">Experience *</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
              >
                <option value="">Select experience</option>
                <option value="0-1 years">0-1 years</option>
                <option value="2-3 years">2-3 years</option>
                <option value="4-5 years">4-5 years</option>
                <option value="6-10 years">6-10 years</option>
                <option value="10+ years">10+ years</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm text-gray-700">Relevant Skills *</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm text-gray-700">Cover Letter *</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block mb-2 font-medium text-sm text-gray-700">Resume</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition">
              <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleInputChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <label htmlFor="resume" className="cursor-pointer text-blue-600 font-medium hover:underline">
                Click to upload your resume
              </label>
              <p className="text-sm text-gray-500 mt-1">PDF, DOC, or DOCX up to 10MB</p>
              {formData.resumeFile && (
                <p className="text-sm text-green-600 mt-2">✓ {formData.resumeFile}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg flex justify-center items-center"
          >
            {isSubmitting ? 'Submitting...' : (
              <>
                Submit Application
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </form>

        {/* Job Description */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">About This Role</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
          <h4 className="text-lg font-medium mb-2 text-gray-800">Requirements:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {job.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JobApplication
