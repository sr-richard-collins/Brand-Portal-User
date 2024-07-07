import PageBreadcrumb from '@/components/layout/PageBreadcrumb';

import Table from './components/Table';
export default function Home() {
  return <>
    <PageBreadcrumb title="Post" subName="Admin" />
    <Table />
  </>;
}