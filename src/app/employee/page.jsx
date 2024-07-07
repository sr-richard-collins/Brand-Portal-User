import PageBreadcrumb from '@/components/layout/PageBreadcrumb'

import Stats from './components/Stats'
import Table from './components/Table'
export default function Home() {
  return (
    <>
      <PageBreadcrumb title="Employee" subName="Admin" />
      {/* <Stats /> */}
      <Table />
    </>
  )
}
