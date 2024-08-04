import React from 'react';

const Resume = () => {
  return (
    <section className="resume">
      <h1>Garrett Britton</h1>
      <p>416 Station 44 Place</p>
      <p>Painesville, OH, 44077</p>
      <p>Email: garrettbritton34@gmail.com</p>
      <p>Phone: 440-296-6134</p>
      <p>
        <a href="https://linkedin.com/in/garrett-britton" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      <p>
        <a href="https://github.com/GarrettBritton" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
        <hr />
      <a href="src/assets/Resume.pdf" download className="resume-link">
        Download My Resume
      </a>

      <hr />

      <h2>Education</h2>
      <ul>
        <li><strong>Case Western Reserve University Bootcamp:</strong> Full-Stack Development, Graduating August 2024</li>
        <li><strong>Lakeland Community College:</strong> Application Programming, Completed coursework until program cancellation</li>
        <li><strong>Auburn Career Center:</strong> EMT Certificate, Graduated 2019, Valedictorian</li>
        <li><strong>NDCL High School:</strong> High School Diploma, Graduated 2018</li>
      </ul>

      <hr />

      <h2>Work Experience</h2>
      <ul>
        <li><strong>Claims Adjuster:</strong> Progressive (2022 - Present)
          <ul>
            <li>Evaluate insurance claims, determine coverage, and assess damages.</li>
            <li>Communicate with claimants, healthcare providers, and contractors to gather information and resolve disputes.</li>
            <li>Utilize analytical skills to ensure fair and accurate settlement of claims.</li>
          </ul>
        </li>
        <li><strong>Central Loss Report Representative:</strong> Progressive (2022 - 2023)
          <ul>
            <li>Processed and reviewed loss reports to assess and manage risk.</li>
            <li>Coordinated with various departments to facilitate smooth claims processing.</li>
            <li>Provided support and guidance to claimants throughout the reporting process.</li>
          </ul>
        </li>
        <li><strong>Call Center Representative:</strong> Cleveland Clinic (2021 - 2022)
          <ul>
            <li>Managed inbound and outbound calls to assist patients with scheduling and inquiries.</li>
            <li>Addressed and resolved patient concerns and provided information about services.</li>
            <li>Maintained accurate records of patient interactions and transactions.</li>
          </ul>
        </li>
        <li><strong>EMT:</strong> Various Locations (2019 - 2021)
          <ul>
            <li>Responded to emergency medical calls and provided life-saving care in high-pressure situations.</li>
            <li>Administered first aid, performed patient assessments, and transported patients to medical facilities.</li>
            <li>Collaborated with healthcare professionals to ensure continuity of care.</li>
          </ul>
        </li>
        <li><strong>Customer Service Representative (Shift Lead):</strong> Domino’s Pizza (2017 - 2019)
          <ul>
            <li>Supervised staff, managed shifts, and ensured exceptional customer service.</li>
            <li>Handled customer inquiries, resolved issues, and processed orders.</li>
            <li>Maintained operational efficiency and managed inventory.</li>
          </ul>
        </li>
      </ul>

      <hr />

      <h2>Skills</h2>
      <ul>
        <li><strong>Programming Languages:</strong> Java, JavaScript, Python</li>
        <li><strong>Web Technologies:</strong> HTML, CSS, React, Node.js</li>
        <li><strong>Software:</strong> Microsoft Office Suite, CRM Systems, Claims Management Software</li>
        <li><strong>Communication:</strong> Strong verbal and written communication skills</li>
        <li><strong>Problem-Solving:</strong> Analytical mindset with a focus on efficient resolution of issues</li>
        <li><strong>Leadership:</strong> Experience in leading teams and managing operations</li>
      </ul>

      <hr />

      <h2>Certifications</h2>
      <ul>
        <li><strong>EMT Certification:</strong> Auburn Career Center, 2019</li>
        <li><strong>Full-Stack Development Bootcamp:</strong> Case Western Reserve University, 2024</li>
      </ul>

      <hr />
    </section>
  );
};

export default Resume;