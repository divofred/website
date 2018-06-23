import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import theme from '../components/utils/theme'

import Hero from '../components/sections/hero/hero'
import Cms from '../components/sections/cms/cms'
import Developers from '../components/sections/developers/developers'
import Header from '../components/sections/header/header'
import QuickStart from '../components/sections/quick-start/quick-start'
import Faq from '../components/sections/faq/faq'
import Sidebar from '../components/sections/sidebar/sidebar'
import Footer from '../components/sections/footer/footer'

import '../layouts/reset.css'
import '../layouts/index.css'
import '../layouts/variables.css'

const FaqAndSidebar = styled('section')({
  width: theme.contentWidth,
  display: 'flex',
  padding: '50px 0',
  margin: '0 auto',
  justifyContent: 'space-between',
})

const FaqAndSidebarFaqBox = styled('div')({
  width: '66%',
})

const SidebarBox = styled('div')({
  width: '33%',
})

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Webiny"
          meta={[
            { name: 'description', content: 'Node.js Serverless CMS' },
            {
              name: 'keywords',
              content: 'cms, serverless, nodejs, open source',
            },
          ]}
        />
        <Header />
        <Hero />
        <Cms />
        <Developers />
        <QuickStart />
        <FaqAndSidebar>
          <FaqAndSidebarFaqBox>
            <Faq />
          </FaqAndSidebarFaqBox>
          <SidebarBox>
            <Sidebar />
          </SidebarBox>
        </FaqAndSidebar>
        <Footer />
      </div>
    )
  }
}

export default IndexPage
