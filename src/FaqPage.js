import React from 'react';
import Faq from './Faq';
import Layout from './Layout';
import ScrollToTopButton from './ScrollToTopButton';

function FaqPage() {
    return (
        <Layout>
        <div className="faq-page">
            <h1 className='text-center faq pt-5 mt-5 mb-3'>Foire aux questions</h1>
            <Faq />
            <ScrollToTopButton />
        </div>
        </Layout>
    );
}

export default FaqPage; 