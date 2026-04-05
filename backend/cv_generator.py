from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.lib import colors
from io import BytesIO

def generate_cv():
    """Generate ATS-friendly CV for Adeyemi Temidire Akinbisade"""
    buffer = BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=letter,
        rightMargin=0.5*inch,
        leftMargin=0.5*inch,
        topMargin=0.5*inch,
        bottomMargin=0.5*inch
    )
    
    # Container for the 'Flowable' objects
    elements = []
    
    # Define styles
    styles = getSampleStyleSheet()
    
    # Custom styles for ATS compatibility
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Heading1'],
        fontSize=16,
        textColor=colors.HexColor('#000000'),
        spaceAfter=4,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Normal'],
        fontSize=11,
        textColor=colors.HexColor('#1a1a1a'),
        alignment=TA_CENTER,
        spaceAfter=8
    )
    
    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontSize=12,
        textColor=colors.HexColor('#000000'),
        spaceAfter=6,
        spaceBefore=8,
        fontName='Helvetica-Bold',
        borderWidth=0,
        borderColor=colors.HexColor('#2563eb'),
        borderPadding=0,
        leftIndent=0
    )
    
    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#1a1a1a'),
        spaceAfter=4,
        leading=12
    )
    
    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#000000'),
        fontName='Helvetica-Bold',
        spaceAfter=2
    )
    
    # Header - Name and Title
    elements.append(Paragraph("ADEYEMI TEMIDIRE AKINBISADE", name_style))
    elements.append(Paragraph("Data Analyst | Aspiring Data Scientist | AI Focus", title_style))
    
    # Contact Info
    contact_info = "a.akinbisade@ymail.com | +234 706 131 2276 | +84 353886047 | github.com/SirMarioWin"
    elements.append(Paragraph(contact_info, body_style))
    elements.append(Spacer(1, 0.15*inch))
    
    # Professional Summary
    elements.append(Paragraph("PROFESSIONAL SUMMARY", section_heading_style))
    summary = """Data-driven IT professional with 6+ years of experience in systems support, now specializing in Data Analytics 
    and transitioning into Artificial Intelligence. Proven ability to analyze complex datasets, build dashboards, and optimize 
    systems performance. Skilled in Python, SQL, Excel, and Power BI (DAX), with academic training in machine learning, 
    big data analytics, and AI. Passionate about leveraging data to build intelligent systems and contribute to real-world impact."""
    elements.append(Paragraph(summary, body_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Technical Skills
    elements.append(Paragraph("TECHNICAL SKILLS", section_heading_style))
    skills_data = [
        ["<b>Programming:</b>", "Python, SQL"],
        ["<b>Data Tools:</b>", "Power BI (DAX), Excel (Advanced)"],
        ["<b>Data Analysis:</b>", "Pandas, Data Cleaning, Data Visualization"],
        ["<b>Libraries & Tools:</b>", "NumPy, Scikit-learn, Matplotlib"],
        ["<b>Concepts:</b>", "Machine Learning, Statistics, AI Fundamentals"],
        ["<b>Systems:</b>", "IT Support, Networking, System Administration"]
    ]
    
    for skill_row in skills_data:
        skill_text = f"{skill_row[0]} {skill_row[1]}"
        elements.append(Paragraph(skill_text, body_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Professional Experience
    elements.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading_style))
    elements.append(Paragraph("<b>IT Support Specialist</b> | Pro Max IT Solutions | Feb 2017 – Aug 2023", job_title_style))
    
    achievements = [
        "Analyzed system performance and user issues to identify recurring technical problems, reducing downtime by implementing data-driven solutions",
        "Managed IT infrastructure and supported multiple users, ensuring system reliability and uptime through proactive monitoring",
        "Implemented data backup and recovery processes, reducing risk of data loss and ensuring business continuity",
        "Monitored system performance and provided insights for optimization and improved efficiency",
        "Strengthened cybersecurity measures through antivirus, firewall, and access controls",
        "Maintained IT asset records and improved tracking accuracy"
    ]
    
    for achievement in achievements:
        bullet = f"• {achievement}"
        elements.append(Paragraph(bullet, body_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Education
    elements.append(Paragraph("EDUCATION", section_heading_style))
    elements.append(Paragraph("<b>HND Level 5 in Computing (Data Analytics)</b> | GPA: 3.56", job_title_style))
    elements.append(Paragraph("Saigon Business School, Vietnam | Completion: January 2026", body_style))
    elements.append(Paragraph("<i>Relevant Coursework: Machine Learning, Data Analytics, Big Data Analytics & Visualization, Artificial Intelligence, Database Design</i>", body_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Projects
    elements.append(Paragraph("PROJECTS", section_heading_style))
    
    # Project 1
    elements.append(Paragraph("<b>Customer Churn Prediction</b>", job_title_style))
    elements.append(Paragraph("Developed a machine learning model to predict customer churn using Python. Performed data cleaning, feature engineering, and model evaluation to identify at-risk customers and improve retention strategies.", body_style))
    elements.append(Paragraph("<i>Technologies: Python, Pandas, Scikit-learn</i>", body_style))
    elements.append(Paragraph("<i>GitHub: github.com/SirMarioWin/customer-churn-prediction</i>", body_style))
    elements.append(Spacer(1, 0.05*inch))
    
    # Project 2
    elements.append(Paragraph("<b>Sales Performance Dashboard</b>", job_title_style))
    elements.append(Paragraph("Designed and developed an interactive Power BI dashboard to analyze sales trends and KPIs. Created dynamic visualizations to support data-driven decision-making for business insights.", body_style))
    elements.append(Paragraph("<i>Technologies: Power BI, DAX</i>", body_style))
    elements.append(Paragraph("<i>GitHub: github.com/SirMarioWin/sales-dashboard</i>", body_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Additional Strengths
    elements.append(Paragraph("ADDITIONAL STRENGTHS", section_heading_style))
    strengths = "Analytical problem-solving | Data-driven decision making | Strong adaptability and continuous learning"
    elements.append(Paragraph(strengths, body_style))
    
    # Build PDF
    doc.build(elements)
    
    # Get the value of the BytesIO buffer and return it
    pdf = buffer.getvalue()
    buffer.close()
    return pdf
