# Documents Setup Guide

To complete your Articles section, you need to add your PDF documents to the correct folder structure.

## Required Folder Structure:

```
portfolio-site/
├── assets/
│   ├── docs/                                    # Create this folder
│   │   ├── BallotOnline's-Cloud-Adoption-Plan-Kareem-Rizk.pdf
│   │   ├── BallotOnline-Cloud-Adoption-Risk-Compliance-and-Data-Governance-Analysis.pdf
│   │   └── Kareem-Rizk-BallotOnline-Cloud-Migration-Report.pdf
│   ├── kareem-photo.jpg
│   ├── gw-logo.png
│   ├── umgc-logo.png
│   ├── cairo-university.png
│   └── Kareem-Rizk-Cloud-DevOps-Data-engineer.pdf
```

## Commands to Create the Structure:

```bash
# Navigate to your portfolio directory
cd /mnt/c/Users/kimo_/Desktop/Coding/portfolio-site

# Create the docs folder inside assets
mkdir -p assets/docs

# Copy your PDF files to the docs folder (adjust source paths as needed)
cp "path/to/your/BallotOnline's-Cloud-Adoption-Plan-Kareem-Rizk.pdf" assets/docs/
cp "path/to/your/BallotOnline-Cloud-Adoption-Risk-Compliance-and-Data-Governance-Analysis.pdf" assets/docs/
cp "path/to/your/Kareem-Rizk-BallotOnline-Cloud-Migration-Report.pdf" assets/docs/
```

## What Each Article Will Show:

### Forbes Articles (External Links):
- ✅ **Freelance Writing Guidelines** → Opens Forbes website
- ✅ **Assassin's Creed Origins** → Opens Forbes website

### Academic Projects (PDF Downloads):
- 📄 **Cloud Adoption Plan** → Opens PDF in new tab
- 📄 **Risk & Compliance Analysis** → Opens PDF in new tab  
- 📄 **AWS vs Azure Comparison** → Opens PDF in new tab

## Thumbnails:
- ✅ **Auto-generated** from Unsplash based on content themes
- ✅ **Writing/freelancing** theme for Forbes articles
- ✅ **Cloud/tech** themes for academic projects

Once you add the PDF files to `assets/docs/`, all the "View PDF" buttons will work correctly!
