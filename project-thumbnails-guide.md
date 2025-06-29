# Project Thumbnails Setup Guide

To make your portfolio even more professional, you can replace the generated thumbnails with actual screenshots from your GitHub repositories.

## Current Thumbnails (Auto-Generated):

1. **Sparkify ETL – Airflow + Docker + Terraform**
   - Current: Data pipeline visualization
   - Suggested: Screenshot of Airflow DAG or architecture diagram

2. **Sparkify Redshift ETL Pipeline** 
   - Current: Database/analytics theme
   - Suggested: Redshift console or data flow diagram

3. **STEDI Data Lake – Full Terraform**
   - Current: Cloud architecture theme
   - Suggested: AWS Glue console or Terraform plan output

4. **STEDI Glue Studio Visual ETL**
   - Current: Data processing theme
   - Suggested: Glue Studio visual pipeline screenshot

5. **Sparkify Cassandra Analytics**
   - Current: Music/audio theme
   - Suggested: Cassandra query results or data model

6. **BankScoop – Python ETL & Visualization**
   - Current: Financial data theme
   - Suggested: Matplotlib charts or data visualization

7. **Adopt-a-Pet – Cloud Migration**
   - Current: Pet adoption theme
   - Suggested: Live website screenshot or AWS architecture

8. **Travel Optimizer App**
   - Current: Travel/map theme
   - Suggested: App interface with map visualization

9. **Al Said Foundation Website** ⭐ NEW
   - Current: Foundation/charity theme
   - Suggested: Live website screenshot from alsaidfoundation.org

## How to Add Custom Thumbnails:

### Option 1: Use Repository Screenshots
1. Go to each GitHub repository
2. Look for screenshots in README.md files
3. Save images to `assets/project-thumbnails/`
4. Update config.js with local paths

### Option 2: Take Live Screenshots
For projects with live demos:
1. Visit the live URL
2. Take a screenshot (1200x750px recommended)
3. Save to `assets/project-thumbnails/`
4. Update the thumbnail path in config.js

### Option 3: Create Custom Graphics
1. Use tools like Canva or Figma
2. Create 400x250px thumbnails
3. Include project name and key technologies
4. Save to `assets/project-thumbnails/`

## Folder Structure:
```
assets/
├── project-thumbnails/           # Create this folder
│   ├── sparkify-etl-airflow.png
│   ├── sparkify-redshift.png
│   ├── stedi-datalake.png
│   ├── stedi-glue-etl.png
│   ├── sparkify-cassandra.png
│   ├── bankscoop.png
│   ├── adopt-a-pet.png
│   ├── travel-optimizer.png
│   └── alsaid-foundation.png
```

## Update Config Example:
```javascript
{
    title: "Al Said Foundation Website",
    // ... other properties
    thumbnail: "assets/project-thumbnails/alsaid-foundation.png"
}
```

## Pro Tips:
- **Consistent sizing**: Keep all thumbnails 400x250px
- **High quality**: Use crisp, clear images
- **Relevant content**: Show the actual project interface/results
- **Branding**: Include project logos if available
- **Optimization**: Compress images for faster loading

The current auto-generated thumbnails look professional, but actual project screenshots will make your portfolio even more impressive and authentic!
