import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { CertificateList } from '../CardsList';
import CertificatesImg from '../../illustrations/NoCertification.png';
import PageHeading from '../PageHeading';

const NoCertificates = () => {
    return(
        <>
            <LoggedInHeader />
            <PageHeading title='Certificates' link='/profiles' />
            <div style={{width:'100%', padding:'1% 20%', borderRadius:'0.2vw', fontFamily: 'Jost-Medium', fontSize: '1vw'}}>
                <img style={{width: '64%'}} src={CertificatesImg} alt="Page Not Found" />
                <p>You haven't earned any certificates yet. Keep learning and achieving to earn new certifications!</p>
            </div>
            <LoggedInFooter />
        </>
    );
};

export default NoCertificates;