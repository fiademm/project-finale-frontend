import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { CertificateList } from '../CardsList';
import PageHeading from '../PageHeading';

const Certificates = () => {
    const certificates = [
        {
          "code": "2345",
          "title": "Agile Project Management",
          "issuer": "Agile Academy",
          "date": "2022-06-30"
        },
        {
            "code": "4567",
            "title": "AngularJS Essentials",
            "issuer": "AngularJS Institute",
            "date": "2022-09-15"
        },
        {
            "code": "5432",
            "title": "Artificial Intelligence Fundamentals",
            "issuer": "AI Academy",
            "date": "2022-11-15"
        },
        {
          "code": "6789",
          "title": "AWS Cloud Computing",
          "issuer": "AWS Academy",
          "date": "2022-07-15"
        },
        {
            "code": "9876",
            "title": "Cybersecurity Essentials",
            "issuer": "Security Academy",
            "date": "2022-12-31"
        },
        {
            "code": "7890",
            "title": "Docker Fundamentals",
            "issuer": "Docker Institute",
            "date": "2022-05-20"
        },
        {
          "code": "8901",
          "title": "Java Programming",
          "issuer": "Java Academy",
          "date": "2022-10-30"
        },
        {
            "code": "3456",
              "title": "JavaScript Advanced Concepts",
              "issuer": "JavaScript Academy",
              "date": "2022-04-15"
        },
        {
            "code": "5678",
            "title": "Node.js Essentials",
            "issuer": "Node.js Institute",
            "date": "2022-02-15"
        },
        {
            "code": "9012",
            "title": "Python for Data Science",
            "issuer": "Python Academy",
            "date": "2022-03-30"
        },
        {
            "code": "1234",
            "title": "ReactJS Fundamentals",
            "issuer": "React University",
            "date": "2022-01-01"
        },
        {
          "code": "0123",
          "title": "React Native Development",
          "issuer": "React University",
          "date": "2022-08-30"
        },
      ]

    return(
        <>
            <LoggedInHeader />
            <PageHeading title='Certificates' link='/profiles' />
            <div style={{width:'100%', padding:'1% 20%', backgroundColor:'#f6f6f6', borderRadius:'0.2vw'}}>
                <CertificateList certificates={certificates} />
            </div>
            <LoggedInFooter />
        </>
    );
};

export default Certificates;