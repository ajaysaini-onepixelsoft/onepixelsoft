import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServicePoints from '@/components/our-services/OurServicePoints'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
  return (
    <div>
        <ServiceGetStart singleData={{
            heading:"HRM Software Development",
            desc:"Human Resource Management Systems (HRMS) are important tools for HR function management such as recruitment, employee training and development, employee retention, and supervision within a company. Such systems make the complicated HR work easier by unifying the multiple tasks into operational, manageable units, allowing organizations to streamline and enhance overall efficiency. Enhanced Efficiency: Automate routine HR processes such as attendance tracking, payroll, and leave management, enabling HR teams to concentrate on strategic projects. Enhanced Control: Obtain real-time visibility into employee performance, attendance, and other key metrics, enabling informed decision-making. Cost-Effective: While HRMS solutions involve initial development and implementation expenses, they lower operational expenses by simplifying HR processes and reducing manual errors."
        }}/>
        <AboutSilder/>
        <OurServicePoints serviceData={{
            heading:"HRM Software Development",
            paragraph1:"Human Resources (HR) is undoubtedly one of the most important assets of any organization, small or large. Effective Human Resource Management (HRM) systems are most important for controlling an organization's most precious asset: its people. Whether recruitment, training, or retention, HRM applications play an important part in boosting productivity and streamlining HR functions.The HRM Software Development process is intended to simplify these processes, from recruiting new employees to holding onto current ones, and managing day-to-day activities. HR departments are usually segmented into smaller, manageable sections, each taking care of a particular section of human resource management.",
            heading1:"HRMS Development Process We Adopt At Onepixel Soft",
            poits1:["Time tracking With Onepixel Soft’s HRMS, you can efficiently track the attendance and  of every employee. Our software centralizes all time-tracking data, saving HR teams valuable time by automating the process and reducing human error.","Performance Evaluation Our HRMS solution offers comprehensive performance tracking for each employee. It helps HR professionals monitor individual progress, track goals, and conduct evaluations based on real-time performance data. This allows for more informed decisions regarding promotions, appraisals, and employee development.",
            "Employee Management Onepixel Soft’s HRMS provides a streamlined approach to managing your workforce. Our solution enables HR teams to support employees in their day-to-day work, fostering growth and productivity. It’s designed to create a positive work environment, helping businesses get the best out of their employees.",
            "More control Our HRMS gives you complete control over all HR functions. By storing reports and employee data in one centralized system, the entire process of monitoring and managing becomes more efficient and easier to handle. Whether it’s tracking employee performance, payroll management, or attendance, our HRMS solution makes it all more organized and accessible."]
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>

    </div>
  )
}
