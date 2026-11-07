# ☁️ GGSF College Website – AWS Cloud Hosting

A cloud-hosted college website developed for **Guru Gobind Singh College of Engineering & Research Centre, Nashik**, using HTML, CSS, JavaScript and Amazon Web Services (AWS).

## 🌐 Live Website

**[Visit Live Website](https://d11r6k0j5ry1wq.cloudfront.net)**

## 📌 Project Overview

This project demonstrates how a static website can be deployed using cloud computing services.

The website provides information about the college, departments, faculty, facilities, placements, events and contact details.

The website is hosted using Amazon S3 and delivered through AWS CloudFront.

## 🎯 Objectives

- Understand cloud computing and AWS services.
- Host a static website using Amazon S3.
- Configure AWS CloudFront for content delivery.
- Enable secure HTTPS access.
- Learn practical cloud deployment.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Website functionality |
| Visual Studio Code | Development environment |
| Amazon S3 | Cloud storage |
| AWS CloudFront | Content delivery |
| HTTPS | Secure communication |

## 🏗️ System Architecture

```text
       USER
         |
         v
      INTERNET
         |
         v
   AWS CLOUDFRONT
         |
         v
     AMAZON S3
         |
         v
   WEBSITE FILES
  (HTML, CSS, JS)
```

## 📂 Project Structure

```text
CloudCampus_Project/
│
├── index.html
├── style.css
└── script.js
```

## ⚙️ AWS Implementation

1. Created an Amazon S3 bucket.
2. Uploaded HTML, CSS and JavaScript files.
3. Kept the S3 bucket private.
4. Created an AWS CloudFront distribution.
5. Configured CloudFront access to the private S3 bucket.
6. Enabled HTTP-to-HTTPS redirection.
7. Configured `index.html` as the default root object.
8. Deployed and tested the live website.

## ✨ Website Features

- Home and About sections.
- Engineering department information.
- Faculty and staff section.
- College facilities.
- Training and placements.
- Events and announcements.
- Contact form with front-end validation.
- Responsive website design.

## 🚀 How to Run Locally

1. Clone this repository:

```bash
git clone https://github.com/sahilugale75-maker/GGSF-College-Website-AWS-Cloud.git
```

2. Open the downloaded project folder.
3. Open `index.html` in your browser.
4. The website will run locally.

## 🔮 Future Enhancements

- Connect the contact form to a backend.
- Add a database for student information.
- Add student and faculty login.
- Integrate online admission facilities.
- Add a dynamic announcement system.

## 🎓 Project Information

**Project Type:** Cloud Computing Mini-Project

**College:** Guru Gobind Singh College of Engineering & Research Centre, Nashik

**Department:** Artificial Intelligence and Data Science

**Cloud Platform:** Amazon Web Services (AWS)

## 👨‍💻 Developer

**GitHub:** [sahilugale75-maker](https://github.com/sahilugale75-maker)

---

⭐ If you find this project useful, feel free to explore the repository!
