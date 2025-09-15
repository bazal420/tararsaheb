
import type { LucideIcon } from 'lucide-react';
import { Construction, Paintbrush2, Grip, Fuel, KeyRound, FileCheck, ShieldCheck, FileText, Router, Droplets, Plug, Search, LandPlot, Building, Users, MoreHorizontal, Shovel, Milestone, Wrench, HardHat } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: 'Road Contracting & Maintenance',
    description: 'From new road construction to the repair and maintenance of existing surfaces, our skilled team ensures the construction of strong, smooth, and durable roads that can withstand the region’s climate and traffic conditions. Whether it’s a public roadway or a private driveway, we approach every project with the same care and integrity.',
    icon: Construction,
  },
  {
    title: 'External Pavement',
    description: 'We provide the supply and installation of interlock tiles, curb stones, and paver blocks for parking lots, walkways, and public areas. Each installation is carried out with precision alignment, solid preparation of the base, and fine finishing for both strength and appearance.',
    icon: Grip,
  },
  {
    title: 'Asphalt Work & Road Marking',
    description: 'From full asphalt paving for roads and parking areas to road marking services, we offer smooth, clean, and long-lasting finishes. Using high-quality materials and skilled labor, we deliver work that holds up under pressure.',
    icon: Paintbrush2,
  },
  {
    title: 'Gas Connection Works',
    description: 'We handle the complete civil works required for gas line connections, including trench excavation, duct laying, backfilling, and reinstatement, carried out safely and in full compliance with the regulatory authorities.',
    icon: Fuel,
  },
  {
    title: 'FIC Manhole Connections',
    description: 'Our team carries out FIC (Foul Inlet Connection) manhole connections with care and precision. From excavation to duct installation and connection works, we ensure proper alignment, sealing, and reinstatement, meeting municipal and environmental standards.',
    icon: Droplets,
  },
  {
    title: 'Waterline Network Connections',
    description: 'We manage the excavation, ducting, pipe laying, and connection of waterline networks for residential, commercial, and industrial projects. Every connection is tested and reinstated to its original state, ensuring reliable service with no compromise on quality.',
    icon: Plug,
  },
  {
    title: 'Demolition Services',
    description: 'Our demolition services cover controlled structure dismantling, site clearance, and debris removal, executed with strict safety measures and municipal compliance, minimizing site disruption.',
    icon: Wrench,
  },
  {
    title: 'Excavation Works',
    description: 'We carry out professional excavation services for utility trenches, foundation pits, and infrastructure layouts. Every excavation is handled with safety, accuracy, and site discipline.',
    icon: Shovel,
  },
  {
    title: 'Heavy Equipment Rentals',
    description: 'We offer reliable rental services for heavy vehicles including tipper trucks, loaders, excavators, and rollers — all maintained in excellent condition and operated by licensed, experienced drivers.',
    icon: Milestone,
  },
];


export type ProjectCategory = 'Asphalt' | 'Interlock' | 'LPG Connection' | 'FIC/Sewerage' | 'Access' | 'Ongoing';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  imageIds: string[];
  company?: string;
  date?: string;
  location?: string;
};

export const projects: Project[] = [
  { id: '1', title: 'Earth Work, Excavation, Backfilling & Reinstatement of Interlock', category: 'Interlock', description: 'Unigaz Specialized Piping & Related Fitting Contracting LLC', imageIds: ['project-1', 'project-1-2', 'project-1-3'], date: '17-01-2023', location: '' },
  { id: '2', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Lootah BC Gas', imageIds: ['project-2'], date: '02-05-2023', location: '' },
  { id: '3', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Lootah BC Gas', imageIds: ['project-3'], date: '02-05-2023', location: 'JVC12MHRS005, JVC, Dubai, UAE' },
  { id: '4', title: 'Asphalt & Road-base works at Farmhouse', category: 'Asphalt', description: 'Mr. Rashid Ali Majid Alomrani Alshamsi', imageIds: ['project-4'], date: '05-09-2023', location: 'Ras Al Khaimah, UAE' },
  { id: '5', title: 'Asphalt Reinstatement Work', category: 'Asphalt', description: 'Mezna Mohammed Building Contracting LLC', imageIds: ['project-5'], date: '23-08-2023', location: 'Al Furjan West Pavilion, Dubai, UAE' },
  { id: '6', title: 'School Frontside Carparking', category: 'Asphalt', description: 'Dubai British School Jumeirah Park Foundation', imageIds: ['project-6'], date: '10-07-2023', location: '' },
  { id: '7', title: 'Installation of Interlock & Landscaping', category: 'Interlock', description: 'Limitless LLC', imageIds: ['project-7'], date: '15-12-2023', location: 'Plot No. DJAZ1MED12RES015 Downtown Jebel Ali Limitless Zone 1' },
  { id: '8', title: 'Design & Construction of Road Works', category: 'Asphalt', description: 'Al Turath Al Aseel Contracting LLC', imageIds: ['project-8'], date: '25-04-2024', location: 'Ajman, UAE' },
  { id: '9', title: 'Vehicle Access Circulation', category: 'Access', description: 'Iman Developers', imageIds: ['project-9'], date: '23-04-2024', location: 'Plot # 6313353-The Grove, Dubai, UAE' },
  { id: '10', title: 'Supply & Installation of Interlock & Heel Curb Pavers', category: 'Interlock', description: 'Venco Imtiaz Contracting Company LLC', imageIds: ['project-10'], date: '21-05-2024', location: 'Westwood Grande 1 @ JVC18TCP003A, JVC, Dubai, UAE' },
  { id: '11', title: 'Supply & Installation of Interlock & Heel Curb Pavers', category: 'Interlock', description: 'Yasco Contracting', imageIds: ['project-11'], date: '20-07-2024', location: '' },
  { id: '12', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Tiger International General Contracting L.L.C', imageIds: ['project-12'], date: '20-07-2024', location: 'AFRA013-Tiger, Al Furjan, Dubai, UAE' },
  { id: '13', title: 'Civil Works for 11KV Connection', category: 'Access', description: 'Iman Developers', imageIds: ['project-13'], date: '01-08-2024', location: 'Plot # 6313353-The Grove, Dubai, UAE' },
  { id: '14', title: 'Road/External Works, 609-DMCivil', category: 'Asphalt', description: 'Al Turath Al Aseel Contracting LLC', imageIds: ['project-14'], date: '11-08-2024', location: 'Ajman, UAE' },
  { id: '15', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Dove Contracting LLC', imageIds: ['project-15'], date: '24-08-2024', location: 'Westwood Grande 2 @ JVC18TCP003B, JVC, Dubai, UAE' },
  { id: '16', title: 'Supply & Installation of Interlock & Heel Curb Pavers', category: 'Interlock', description: 'Venco Imtiaz Contracting Company LLC', imageIds: ['project-16'], date: '31-08-2024', location: 'Westwood Grande 1 @ JVC18TCP003A, JVC, Dubai, UAE' },
  { id: '17', title: 'Civil Works for Etisalat Cable Installation', category: 'Access', description: 'Iman Developers', imageIds: ['project-17'], date: '03-10-2024', location: 'Plot # 6313353-The Grove, Dubai, UAE' },
  { id: '18', title: 'Land Leveling & Paving Work (For Easy Access of Boom Lift)', category: 'Asphalt', description: 'Mezna Ghulam Mohammed Building Contracting LLC', imageIds: ['project-18'], date: '11-10-2024', location: 'Motion Gate Dubai Near National Industrial Park, Dubai, UAE' },
  { id: '19', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Lootah BC Gas', imageIds: ['project-19'], date: '31-10-2024', location: 'JVC10YMRP004, JVC, Dubai, UAE' },
  { id: '20', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Lootah BC Gas', imageIds: ['project-20'], date: '01-11-2024', location: '' },
  { id: '21', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Lootah BC Gas', imageIds: ['project-21'], date: '01-11-2024', location: 'Zone 6 Villa Community Development, Festival City, Dubai, UAE' },
  { id: '22', title: 'FIC Tapping Works', category: 'FIC/Sewerage', description: 'Highstar Contracting LLC', imageIds: ['project-22'], date: '25-11-2024', location: 'JVC18TCP003D, JVC, Dubai, UAE' },
  { id: '23', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'MI LEO Luxury Hotel & Residences Dubai', imageIds: ['project-23'], date: '26-11-2024', location: 'Palm Jumeirah, Dubai, UAE' },
  { id: '24', title: 'Supply & Installation of Interlock & Heel Curb Pavers', category: 'Interlock', description: '3D Construction LLC', imageIds: ['project-24'], date: '19-12-2024', location: 'JVC13RMRA007, JVC, Dubai, UAE' },
  { id: '25', title: 'Supply & Installation of Interlock & Heel Curb Pavers', category: 'Interlock', description: 'Highstar Contracting LLC', imageIds: ['project-25'], date: '28-12-2024', location: 'JVC14AMRA003, JVC, Dubai, UAE' },
  { id: '26', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Lootah BC Gas', imageIds: ['project-26'], date: '30-12-2024', location: 'JVC14JFRP001, JVC, Dubai, UAE' },
  { id: '27', title: 'Supply & Installation of Asphalt Works, Central Bank Of UAE', category: 'Asphalt', description: 'Al Tayer Stocks LLC', imageIds: ['project-27'], date: '02-12-2024', location: 'Ajman, UAE' },
  { id: '28', title: 'Supply & Installation of Interlock & Heel Curb Pavers', category: 'Interlock', description: 'Venco Imtiaz Contracting Company LLC', imageIds: ['project-28'], date: '13-02-2025', location: 'Westwood Grande 2 @ JVC18TCP003B, JVC, Dubai, UAE' },
  { id: '29', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Hassan Salmeen Building Contracting LLC', imageIds: ['project-29'], date: '15-01-2025', location: 'JVC14OFRP001, JVC, Dubai, UAE' },
  { id: '30', title: 'FIC Tapping Works', category: 'FIC/Sewerage', description: 'Maestro Construction Co. LLC', imageIds: ['project-30'], date: '12-02-2025', location: 'JVC15RTP001C, Al Barsha South Fourth 681 JVC, Dubai, UAE' },
  { id: '31', title: 'Vehicle Access Circulation', category: 'Access', description: 'Construction & Building Engineering LLC', imageIds: ['project-31'], date: '29-01-2025', location: 'Plot No. 6854458 at Dubai Production City, Domus 5, Dubai, UAE' },
  { id: '32', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Lootah BC Gas', imageIds: ['project-32'], date: '27-03-2025', location: '' },
  { id: '33', title: 'Supply & Installation of Interlock', category: 'Interlock', description: 'Highstar Contracting LLC', imageIds: ['project-33'], date: '07-05-2025', location: 'JVC18TCP003D, JVC, Dubai, UAE' },
  { id: '34', title: 'Civil Works for Gas Connection', category: 'LPG Connection', description: 'Highstar Contracting LLC', imageIds: ['project-34'], date: '08-05-2025', location: 'JVC18TCP003D, JVC, Dubai, UAE' },
  { id: '35', title: 'Supply & Installation of Interlock & Heel Curb Pavers', category: 'Interlock', description: 'Venco Imtiaz Contracting Company LLC', imageIds: ['project-35'], date: '10-05-2025', location: 'Hyde Walk, Al Satwa, Dubai, UAE' },
  { id: '36', title: 'Supply & Installation of Interlock & Heel Curb Pavers', category: 'Interlock', description: 'Venco Imtiaz Contracting Company LLC', imageIds: ['project-36'], date: '15-05-2025', location: 'DIA-R-0256, Dubai Islands, Dubai, UAE' },
  { id: '37', title: 'Supply & Installation of Interlock & Heel Curb Pavers', category: 'Interlock', description: 'Iman Developers', imageIds: ['project-37'], date: '17-06-2025', location: 'Oxford Gardens-6731304, Dubai, UAE' },
  { id: '38', title: 'Supply & Installation of Interlock to External Area of the Building', category: 'Interlock', description: 'Signatures Structure Decoration Design & Fit-Out Co. LLC', imageIds: ['project-38'], date: '03-06-2025', location: 'MI LEO Luxury Hotel & Residences Dubai, Palm Jumeirah, Dubai, UAE' },
  { id: '39', title: 'Supply & Installation of Interlock & Heel Curb Pavers', category: 'Interlock', description: 'ONYX General Contracting LLC', imageIds: ['project-39'], date: '26-06-2025', location: 'JVC13AHRG001A, JVC, Dubai, UAE' },
  { id: '40', title: 'Cutting and removal of existing asphalt, excavation, backfilling and reinstatement of asphalt', category: 'Asphalt', description: 'Lootah BC Gas LLC', imageIds: ['project-40'], date: '26-06-2025', location: 'Al Manarah, Dubai, UAE' },
  { id: 'ongoing-1', title: 'Civil work for LPG Connection', category: 'Ongoing', description: 'Lootah BC Gas', imageIds: ['project-ongoing-1'], date: '15-02-2024', location: 'Al Badia Terraces Festival City, Dubai' },
  { id: 'ongoing-2', title: 'Civil work for Pressure Reducing and Metering Station', category: 'Ongoing', description: 'Lootah BC Gas', imageIds: ['project-ongoing-2'], date: '10-03-2024', location: 'Residential & Commercial Building JVC, Dubai' },
  { id: 'ongoing-3', title: 'Civil works for Asphalt Repairing', category: 'Ongoing', description: 'Ashiyana Contracting LLC', imageIds: ['project-ongoing-3'], date: '25-04-2024', location: 'Dubai Hills, Dubai' },
  { id: 'ongoing-4', title: 'Construction works for LPG Connection', category: 'Ongoing', description: 'Maestro Construction Company', imageIds: ['project-ongoing-4'], date: '12-05-2024', location: 'Townhouses (G+2) Al Barsha South, JVC' },
  { id: 'ongoing-5', title: 'Construction works for LPG Connection', category: 'Ongoing', description: 'Unigaz Specialized Piping & Related Fitting Contracting LLC', imageIds: ['project-ongoing-5'], date: '28-05-2024', location: 'JVC, Dubai' },
  { id: 'ongoing-6', title: 'Residential Building – Proposed Entry and Exit Works', category: 'Ongoing', description: 'Construction Building Engineering', imageIds: ['project-ongoing-6'], date: '05-06-2024', location: 'Production City, Dubai' },
  { id: 'ongoing-7', title: 'Civil works for LPG Connection', category: 'Ongoing', description: 'Lootah BC Gas', imageIds: ['project-ongoing-7'], date: '20-06-2024', location: 'Serenia Living Palm Jumeirah, Dubai' },
  { id: 'ongoing-8', title: 'Construction works for FIC Connection', category: 'Ongoing', description: 'Maestro Construction Company', imageIds: ['project-ongoing-8'], date: '04-07-2024', location: 'Townhouses (G+2) Al Barsha South, JVC' },
  { id: 'ongoing-9', title: 'External Pavement Works', category: 'Ongoing', description: 'High Star Contracting', imageIds: ['project-ongoing-9'], date: '19-07-2024', location: 'Al Barsha South IV' },
  { id: 'ongoing-10', title: 'Civil works for LPG Connection', category: 'Ongoing', description: 'High Star Contracting', imageIds: ['project-ongoing-10'], date: '30-07-2024', location: 'Al Barsha South IV' },
  { id: 'ongoing-11', title: 'Construction of G+2P+8+R Building (Hyde Walk)', category: 'Ongoing', description: 'Venco Imtiaz Contracting Company', imageIds: ['project-ongoing-11'], date: '15-08-2024', location: 'Al Satwa, Dubai' },
  { id: 'ongoing-12', title: 'Proposed Access Circulation – G+2P+12 Building', category: 'Ongoing', description: 'Venco Imtiaz Contracting Company', imageIds: ['project-ongoing-12'], date: '28-08-2024', location: 'Dubai Island' },
  { id: 'ongoing-13', title: 'LPG Connection Rerouting', category: 'Ongoing', description: 'Unigaz Specialized Piping & Related Fitting Contracting LLC', imageIds: ['project-ongoing-13'], date: '10-01-2025', location: 'Hessa Gardens Warsan 4, Dubai' },
  { id: 'ongoing-14', title: 'Civil work for Pedestrian Walkway / Footpath', category: 'Ongoing', description: 'Signature Structures Decoration & Fit-Out Co. LLC', imageIds: ['project-ongoing-14'], date: '22-02-2025', location: 'Palm Jumeirah, Dubai' },
  { id: 'ongoing-15', title: 'Access Circulation, DEWA Substation Entry–Exit and Street Light Relocation', category: 'Ongoing', description: 'Iman Developers LLC', imageIds: ['project-ongoing-15'], date: '05-03-2025', location: 'Arjan, Dubailand' },
  { id: 'ongoing-16', title: 'Civil works for FIC Pipe Connection', category: 'Ongoing', description: 'Iman Developers LLC', imageIds: ['project-ongoing-16'], date: '18-04-2025', location: 'JVC, Dubai' },
  { id: 'ongoing-17', title: 'Civil works for FIC Connection – Residential Building (GR+5P+17+Roof)', category: 'Ongoing', description: 'Reem Capital Contracting', imageIds: ['project-ongoing-17'], date: '02-05-2025', location: 'JVC, Dubai' },
  { id: 'ongoing-18', title: 'Proposed Access Circulation – Residential Building (GR+5P+17+Roof)', category: 'Ongoing', description: 'Reem Capital Contracting', imageIds: ['project-ongoing-18'], date: '15-05-2025', location: 'JVC, Dubai' },
  { id: 'ongoing-19', title: 'Civil works for FIC Connections', category: 'Ongoing', description: 'Fotios Infinite Solution', imageIds: ['project-ongoing-19'], date: '25-06-2025', location: 'JVT, Dubai' },
  { id: 'ongoing-20', 'title': 'Civil works for FIC Connections', category: 'Ongoing', description: 'Fotios Infinite Solution', imageIds: ['project-ongoing-20'], date: '28-06-2025', location: 'JVT, Dubai' },
  { id: 'ongoing-21', 'title': 'Civil works for Access Circulation', category: 'Ongoing', description: 'Jeikor Contracting LLC', imageIds: ['project-ongoing-21'], date: '15-07-2025', location: 'Al Barsha South Fifth' },
  { id: 'ongoing-22', 'title': 'Access Circulation and External Pavement Works', category: 'Ongoing', description: 'Venco Imtiaz Contracting Company', imageIds: ['project-ongoing-22'], date: '25-07-2025', location: 'Beach Walk 2 Nakhlat Jumeirah, Dubai' },
  { id: 'ongoing-23', 'title': 'Civil works for FIC Connection', category: 'Ongoing', description: 'Ashiyana Contracting LLC', imageIds: ['project-ongoing-23'], date: '20-08-2025', location: 'Discovery Garden, Dubai' }
];

export type Approval = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const approvals: Approval[] = [
  { title: 'Informational NOC', description: 'Initial clearance to review existing utilities and services.', icon: FileText },
  { title: 'Trial Trench NOC', description: 'Issued by RTA and DEWA for trial trenches to verify underground utilities.', icon: Search },
  { title: 'ROW Permit for Trial Trenches', description: 'Right of Way approval for excavation during trial works.', icon: LandPlot },
  { title: 'DEWA Verification', description: 'Checks and approvals for existing electricity and water lines.', icon: Plug },
  { title: 'Construction NOC', description: 'Issued by RTA and DEWA for starting full construction activities.', icon: FileCheck },
  { title: 'ROW Permit for Construction Works', description: 'Right of Way approval for permanent construction works.', icon: LandPlot },
  { title: 'Developer NOC', description: 'Approvals from master developers for works within their communities.', icon: Building },
  { title: 'Service Provider NOCs', description: 'Clearances from providers such as Lootah BC Gas, Empower, and others.', icon: Users },
];

export type Authority = {
  name: string;
};

export type TeamMember = {
  name: string;
  role: string;
  statement: string;
  imageId: string;
  duties?: string[];
};

export const teamMembers: TeamMember[] = [
  { 
    name: 'Zia Ullah Tarar', 
    role: 'Founder & CEO • Civil Engineer', 
    statement: 'Building a legacy of excellence, one project at a time.', 
    imageId: 'team-member-1',
    duties: [
      'Sets the company’s strategic vision and direction.',
      'Oversees all major projects and client relationships.',
      'Ensures all operations align with the highest standards of quality and integrity.',
      'Drives business development and market expansion.',
      'Mentors the leadership team and fosters a culture of excellence.'
    ]
  },
  { 
    name: 'Zumran', 
    role: 'General Manager', 
    statement: 'Delivering projects on time and within budget.', 
    imageId: 'team-member-2',
    duties: [
      'Manages day-to-day company operations.',
      'Coordinates between departments to ensure project efficiency.',
      'Monitors project performance against schedules and budgets.',
      'Implements operational policies and procedures.',
      'Acts as a key point of contact for major clients and stakeholders.'
    ]
  },
  { 
    name: 'Faisal Mirza', 
    role: 'Accounts & HR', 
    statement: 'Ensuring smooth operations and resource management.', 
    imageId: 'team-member-3',
    duties: [
      'Manages company financials, including billing, and payroll.',
      'Oversees all human resources functions, including recruitment and employee relations.',
      'Prepares financial reports and budget forecasts.',
      'Ensures compliance with labor laws and company policies.',
      'Administers employee benefits and compensation.'
    ]
  },
  { 
    name: 'Ruban Raja', 
    role: 'Project Engineer / QS', 
    statement: 'Engineering solutions with precision and quality.', 
    imageId: 'team-member-4',
    duties: [
      'Prepares project estimations and cost assessments (Quantity Surveying).',
      'Provides technical guidance and engineering support to site teams.',
      'Manages project documentation, including drawings and specifications.',
      'Monitors project progress and ensures technical standards are met.',
      'Collaborates with clients and consultants on technical matters.'
    ]
  },
  { 
    name: 'Cathy', 
    role: 'Draftsman / NOC Engineer', 
    statement: 'Detail-oriented designs and seamless approvals.', 
    imageId: 'team-member-5',
    duties: [
      'Prepares and manages all NOC (No Objection Certificate) applications.',
      'Liaises with government authorities like RTA, DEWA, and municipalities.',
      'Creates detailed technical drawings and site plans using AutoCAD.',
      'Ensures all designs comply with regulatory standards and project requirements.',
      'Maintains a comprehensive record of all approvals and permits.'
    ]
  },
  { 
    name: 'Bazal Waqas', 
    role: 'Safety Manager / Site Engineer', 
    statement: 'Prioritizing safety and efficiency on site.', 
    imageId: 'team-member-6',
    duties: [
      'Develops and enforces on-site safety protocols and procedures.',
      'Conducts regular safety audits and risk assessments.',
      'Supervises daily site activities to ensure engineering specifications are followed.',
      'Coordinates with the project team to resolve site-related issues.',
      'Ensures all work complies with health, safety, and environmental regulations.'
    ]
  },
  { 
    name: 'Ghulam Dastageer', 
    role: 'HSE Engineer', 
    statement: 'Committed to the highest standards of health and safety.', 
    imageId: 'team-member-7',
    duties: [
      'Implements the Health, Safety, and Environment (HSE) management system.',
      'Conducts safety training and toolbox talks for all site personnel.',
      'Investigates and reports on any accidents or incidents.',
      'Ensures the use of proper Personal Protective Equipment (PPE).',
      'Monitors environmental compliance on all project sites.'
    ]
  },
  { 
    name: 'Muhammad Afzal Tarar', 
    role: 'Foreman / Site Supervisor', 
    statement: 'Supervising our skilled workforce to achieve top results.', 
    imageId: 'team-member-8',
    duties: [
      'Directly supervises the on-site skilled labor and work crews.',
      'Coordinates daily tasks and ensures they are completed on schedule.',
      'Manages the use of materials and equipment on site.',
      'Reports daily progress to the Site Engineer.',
      'Enforces safety rules and ensures a clean and organized work environment.'
    ]
  },
  { 
    name: 'Azhar Sultan', 
    role: 'Equipment Operator', 
    statement: 'Operating heavy machinery with skill and precision.', 
    imageId: 'team-member-9',
    duties: [
      'Operates heavy construction machinery such as excavators, loaders, and rollers.',
      'Performs daily pre-operation checks and routine maintenance on equipment.',
      'Follows site plans and instructions from the Site Supervisor.',
      'Adheres strictly to all safety guidelines during operation.',
      'Ensures the efficient and safe movement of materials on site.'
    ]
  },
];

export type Client = {
  name: string;
  imageId: string;
};

export const clients: Client[] = [
  { name: 'Client 1', imageId: 'client-logo-1' },
  { name: 'Client 2', imageId: 'client-logo-2' },
  { name: 'Client 3', imageId: 'client-logo-3' },
  { name: 'Client 4', imageId: 'client-logo-4' },
  { name: 'Client 5', imageId: 'client-logo-5' },
  { name: 'Client 6', imageId: 'client-logo-6' },
];
